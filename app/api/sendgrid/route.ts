import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message } = await request.json();

    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios: 'to', 'subject' o 'message'" },
        { status: 400 }
      );
    }

    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject,
      text: message
    };

    await sendgrid.send(msg);

    return NextResponse.json({
      success: true,
      message: 'Email enviado correctamente.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
}
