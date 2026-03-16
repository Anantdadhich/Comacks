import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { calculateDiagnosis, DiagnosisInput } from '@/lib/diagnosisEngine';

export async function POST(request: Request) {
  try {
    // Expect body to contain input data AND optionally user lead data
    const body = await request.json();
    const input: DiagnosisInput = body.input;
    const userData = body.user; // { name, email, phone, clinic_name, city }

    if (!input || !input.country) {
      return NextResponse.json({ error: 'Invalid inputs' }, { status: 400 });
    }

    const results = calculateDiagnosis(input);

    let savedUser = null;

    if (userData && userData.name && userData.clinic_name) {
      // Create user lead
      savedUser = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          clinic_name: userData.clinic_name,
          city: userData.city || '',
          country: input.country,
        }
      });
    }

    // Attempt to save diagnosis input & results
    const savedInput = await prisma.diagnosisInput.create({
      data: {
        user_id: savedUser?.id || null,
        country: input.country,
        monthly_inquiries: input.monthlyInquiries,
        monthly_consultations: input.monthlyConsultations,
        treatments_started: input.treatmentsStarted,
        treatments_completed: input.treatmentsCompleted,
        average_case_value: input.averageCaseValue || results.caseValue,
        patients_last_year: input.patientsLastYear,
        patients_returned: input.patientsReturned,
        result: {
          create: {
            consult_rate: results.rates.consultRate,
            treatment_rate: results.rates.treatmentRate,
            completion_rate: results.rates.completionRate,
            recall_rate: results.rates.recallRate,
            score: results.score,
            lead_leak: results.leaks.leadLeak,
            conversion_leak: results.leaks.conversionLeak,
            completion_leak: results.leaks.completionLeak,
            recall_leak: results.leaks.recallLeak,
            lost_patients: results.lostPatients,
            monthly_loss: results.revenue.monthlyLoss,
            annual_loss: results.revenue.annualLoss,
            current_revenue: results.revenue.currentRevenue,
            potential_revenue_min: results.revenue.potentialRevenueMin,
            potential_revenue_max: results.revenue.potentialRevenueMax,
            recovery_min: results.revenue.recoveryMin,
            recovery_max: results.revenue.recoveryMax,
          }
        }
      },
      include: {
        result: true
      }
    });

    return NextResponse.json({
      success: true,
      data: results,
      savedId: savedInput.result?.id,
      userId: savedUser?.id
    });
  } catch (error) {
    console.error('Save error:', error);
    return NextResponse.json({ error: 'Failed to save diagnosis' }, { status: 500 });
  }
}
