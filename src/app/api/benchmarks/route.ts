import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { COUNTRY_CONFIGS } from '@/lib/diagnosisEngine';

export async function GET() {
  try {
    // In the future this could load from the DB
    // const dbBenchmarks = await prisma.benchmark.findMany();
    // For now we will return the constants from our engine.
    
    return NextResponse.json(COUNTRY_CONFIGS);
  } catch (error) {
    console.error('Fetch benchmarks error:', error);
    return NextResponse.json({ error: 'Failed to find benchmarks' }, { status: 500 });
  }
}
