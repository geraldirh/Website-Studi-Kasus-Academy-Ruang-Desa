// app/api/announcements/route.js

import { NextResponse } from 'next/server';
import { announcements, addAnnouncement } from '../../../lib/data';

export async function GET(request) {
  return NextResponse.json(announcements);
}

export async function POST(request) {
  const newAnnouncement = await request.json();
  newAnnouncement.announcement_id = announcements.length + 1;
  newAnnouncement.created_at = new Date().toISOString();
  newAnnouncement.updated_at = new Date().toISOString();
  addAnnouncement(newAnnouncement);
  return NextResponse.json(newAnnouncement, { status: 201 });
}
