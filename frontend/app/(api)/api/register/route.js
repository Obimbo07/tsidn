import { NextResponse } from 'next/server';
import { addSubscriber } from '@/lib/dbUtils';

export async function POST(req) {
  try {
    const { username, phone_number, email, password, subscription } = await req.json();

    if (!username || !email) {
      return NextResponse.json({ error: 'Name and email is required'}, { status: 400});
    }

    const result = await addSubscriber(username, phone_number, email, password, subscription);

    return NextResponse.json({ message: 'Subscriber registration successfull', result }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: 'Error registering subscriber' }, { status: 500 });
  }
}
