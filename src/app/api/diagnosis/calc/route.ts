import { NextResponse } from 'next/server';
import { calculateDiagnosis, DiagnosisInput } from '@/lib/diagnosisEngine';

export async function POST(request: Request) {
  try {
    const body: DiagnosisInput = await request.json();
    
    // Basic validation
    if (!body.country || body.monthlyInquiries < 0 || body.monthlyConsultations < 0) {
      return NextResponse.json({ error: 'Invalid inputs' }, { status: 400 });
    }

    const results = calculateDiagnosis(body);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Calculation error:', error);
    return NextResponse.json({ error: 'Failed to calculate diagnosis' }, { status: 500 });
  }
}
