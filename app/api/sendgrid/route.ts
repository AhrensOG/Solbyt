import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

type SendgridRequestBody = {
  to: string | string[];
  subject: string;
  message?: string;
  html?: string;
  cc?: string | string[];
  bcc?: string | string[];
};

export async function POST(request: NextRequest) {
  try {
    const body: SendgridRequestBody = await request.json();
    const { to, subject, message, html, cc, bcc } = body;

    if (!to || !subject) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios: 'to' y 'subject'" },
        { status: 400 }
      );
    }

    const from = process.env.SENDGRID_FROM_EMAIL;
    if (!from) {
      return NextResponse.json(
        { error: "Falta la variable de entorno SENDGRID_FROM_EMAIL" },
        { status: 500 }
      );
    }

    const msg: MailDataRequired = {
      to,
      from: {
        email: from,
        name: "Solbyt Solutions",
      },
      subject,
      content: [
        {
          type: html ? "text/html" : "text/plain",
          value: html ?? message ?? "",
        },
      ],
      ...(cc && { cc }),
      ...(bcc && { bcc }),
    };

    await sendgrid.send(msg);

    return NextResponse.json({
      success: true,
      message: "Email enviado correctamente.",
    });
  } catch (error: unknown) {
    const err = error as { response?: { body?: unknown }; message: string };
    console.error("Error al enviar email con SendGrid:", err.response?.body || err.message);

    return NextResponse.json(
      {
        success: false,
        error: err.response?.body || "Error desconocido",
      },
      { status: 500 }
    );
  }
}
