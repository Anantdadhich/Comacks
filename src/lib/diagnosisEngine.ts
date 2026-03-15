// src/lib/diagnosisEngine.ts

export interface DiagnosisInput {
  country: string;
  monthlyInquiries: number;
  monthlyConsultations: number;
  treatmentsStarted: number;
  treatmentsCompleted: number;
  averageCaseValue?: number; // Optional, will use country default if not provided
  patientsLastYear: number;
  patientsReturned: number;
}

export interface CountryConfig {
  country: string;
  currency: string;
  caseValueDefault: number;
  inquiriesAvg: number;
}

export const COUNTRY_CONFIGS: Record<string, CountryConfig> = {
  india: { country: "India", currency: "₹", caseValueDefault: 8000, inquiriesAvg: 40 },
  usa: { country: "USA", currency: "$", caseValueDefault: 400, inquiriesAvg: 100 },
  uk: { country: "UK", currency: "£", caseValueDefault: 350, inquiriesAvg: 80 },
  australia: { country: "Australia", currency: "AUD", caseValueDefault: 700, inquiriesAvg: 80 },
  uae: { country: "UAE", currency: "AED", caseValueDefault: 1200, inquiriesAvg: 60 },
  singapore: { country: "Singapore", currency: "SGD", caseValueDefault: 1500, inquiriesAvg: 60 },
  germany: { country: "Germany", currency: "€", caseValueDefault: 400, inquiriesAvg: 60 },
  brazil: { country: "Brazil", currency: "R$", caseValueDefault: 200, inquiriesAvg: 40 },
  "south africa": { country: "South Africa", currency: "$", caseValueDefault: 150, inquiriesAvg: 30 },
};

export const GLOBAL_TARGETS = {
  consultTarget: 0.50,
  treatmentTarget: 0.70,
  completionTarget: 0.95,
  recallTarget: 0.40,
};

export function calculateDiagnosis(input: DiagnosisInput) {
  const countryKey = input.country.toLowerCase();
  const config = COUNTRY_CONFIGS[countryKey] || COUNTRY_CONFIGS["india"]; // Default to India if missing

  const caseValue = input.averageCaseValue || config.caseValueDefault;

  // Actual Rates
  const consultRate = input.monthlyInquiries > 0 ? input.monthlyConsultations / input.monthlyInquiries : 0;
  const treatmentRate = input.monthlyConsultations > 0 ? input.treatmentsStarted / input.monthlyConsultations : 0;
  const completionRate = input.treatmentsStarted > 0 ? input.treatmentsCompleted / input.treatmentsStarted : 0;
  const recallRate = input.patientsLastYear > 0 ? input.patientsReturned / input.patientsLastYear : 0;

  // Expected Pipeline
  const expectedConsult = input.monthlyInquiries * GLOBAL_TARGETS.consultTarget;
  const expectedTreatment = input.monthlyConsultations * GLOBAL_TARGETS.treatmentTarget;
  const expectedCompletion = input.treatmentsStarted * GLOBAL_TARGETS.completionTarget;
  const expectedRecall = input.patientsLastYear * GLOBAL_TARGETS.recallTarget;

  // Math.round leaks to keep it realistic as "patients"
  const leadLeak = Math.max(0, Math.round(expectedConsult - input.monthlyConsultations));
  const conversionLeak = Math.max(0, Math.round(expectedTreatment - input.treatmentsStarted));
  const completionLeak = Math.max(0, Math.round(expectedCompletion - input.treatmentsCompleted));
  const recallLeak = Math.max(0, Math.round(expectedRecall - input.patientsReturned));

  const lostPatients = leadLeak + conversionLeak + completionLeak + recallLeak;

  // Revenue 
  const currentRevenue = input.treatmentsCompleted * caseValue;
  const monthlyLoss = lostPatients * caseValue;
  const annualLoss = monthlyLoss * 12;

  // Potential Revenue (Expected path based on inquiries)
  const potentialCompleted = input.monthlyInquiries * 
    GLOBAL_TARGETS.consultTarget * 
    GLOBAL_TARGETS.treatmentTarget * 
    GLOBAL_TARGETS.completionTarget;
    
  const potentialRevenue = potentialCompleted * caseValue;
  const recovery = potentialRevenue - currentRevenue;

  // Score (0-100)
  let rawScore = (
    (consultRate / GLOBAL_TARGETS.consultTarget) +
    (treatmentRate / GLOBAL_TARGETS.treatmentTarget) +
    (completionRate / GLOBAL_TARGETS.completionTarget) +
    (recallRate / GLOBAL_TARGETS.recallTarget)
  ) / 4 * 100;
  
  const score = Math.max(0, Math.min(100, Math.round(rawScore)));

  // System Recommendations
  const systems = [];
  if (consultRate < GLOBAL_TARGETS.consultTarget) systems.push("Inquiry System");
  if (treatmentRate < GLOBAL_TARGETS.treatmentTarget) systems.push("Conversion System");
  if (completionRate < GLOBAL_TARGETS.completionTarget) systems.push("Completion System");
  if (recallRate < GLOBAL_TARGETS.recallTarget) systems.push("Recall System");
  systems.push("Analytics System"); // Always show analytics system

  return {
    config,
    caseValue,
    rates: { consultRate, treatmentRate, completionRate, recallRate },
    leaks: { leadLeak, conversionLeak, completionLeak, recallLeak },
    lostPatients,
    revenue: { currentRevenue, monthlyLoss, annualLoss, potentialRevenue, recovery },
    score,
    systems
  };
}
