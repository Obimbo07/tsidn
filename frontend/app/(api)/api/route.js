import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET(req) {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM content_table', (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching data from the database' }, { status: 500 });
  }
}
