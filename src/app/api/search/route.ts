import countries from '@/fakedata/countries.json';
import { NextResponse } from 'next/server';

export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  const results = countries.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log(results);

  return NextResponse.json(results);
}
