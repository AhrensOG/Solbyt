export const contact_confirmation_template_en = (name: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Message Received – Solbyt</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
  </head>
  <body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#f8fafc;line-height:1.6;">
    <div style="max-width:600px;margin:0 auto;padding:20px">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0, 0, 0, 0.08);">
        <!-- Header with white background and centered logo -->
        <tr>
          <td
            style="
              background-color: #ffffff;
              padding: 40px 30px 20px;
              text-align: center;
              border-bottom: 1px solid #e5e7eb;
            "
          >

            <!-- HEADLINE with gradient text -->
            <h1
              style="
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                background: linear-gradient(to right, #9333ea, #ec4899, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                color: transparent;
              "
            >
              Message successfully received!
            </h1>

            <p style="margin: 10px 0 0 0; color: #4b5563; font-size: 16px">
              We’ll be in touch with you very soon.
            </p>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding:40px 30px;color:#374151">
            <div style="background:linear-gradient(135deg,#fdf2f8 0%,#f0f9ff 100%);border-radius:8px;padding:20px;margin-bottom:25px;border-left:4px solid #9333ea;">
              <p style="margin:0;font-size:18px;color:#1f2937">
                Hello <strong style="color:#9333ea">${name}</strong> 👋
              </p>
            </div>

            <p style="font-size:16px;margin-bottom:20px;color:#4b5563">
              We’ve received your message and we want to thank you for trusting <strong>Solbyt</strong> with your digital needs.
            </p>

            <div style="background:#f9fafb;border-radius:8px;padding:20px;margin:25px 0;border:1px solid #e5e7eb;">
              <h3 style="margin:0 0 15px 0;color:#1f2937;font-size:18px;display:flex;align-items:center;">
                <span style="background:#9333ea;color:white;border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;margin-right:10px;">✓</span>
                What happens next?
              </h3>
              <ul style="margin:0;padding-left:20px;color:#4b5563">
                <li style="margin-bottom:8px">Our team will carefully review your message</li>
                <li style="margin-bottom:8px">We’ll contact you within <strong>24 hours</strong></li>
                <li style="margin-bottom:8px">A free consultation will be scheduled to better understand your needs</li>
              </ul>
            </div>

            <p style="font-size:16px;margin-bottom:20px;color:#4b5563">
              If your request is <strong>urgent</strong>, feel free to contact us directly:
            </p>

            <!-- Action Buttons -->
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:30px 0;">
              <tr>
                <td style="text-align:center">
                  <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto">
                    <tr>
                      <td style="padding:0 10px">
                        <a href="https://calendly.com/solbyt-tech/30min" style="display:inline-block;padding:14px 24px;background:linear-gradient(135deg,#3b82f6,#9333ea);color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;box-shadow:0 2px 8px rgba(59,130,246,0.3);">📅 Schedule a Call</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Value Section -->
            <tr>
              <td style="background: linear-gradient(135deg, #9333ea, #ec4899); border-radius: 12px; padding: 25px; margin: 30px 0; text-align: center;">
                <h3 style="margin: 0 0 15px 0; color: #ffffff; font-size: 20px">Why choose Solbyt?</h3>

                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 0 auto; text-align: center;">
                  <tr>
                    <td align="center" style="padding: 10px;">
                      <div style="color: rgba(255,255,255,0.95); text-align: center; min-width: 120px;">
                        <div style="font-size: 24px; margin-bottom: 5px;">⚡</div>
                        <div style="font-size: 14px; font-weight: 600;">Fast development</div>
                      </div>
                    </td>
                    <td align="center" style="padding: 10px;">
                      <div style="color: rgba(255,255,255,0.95); text-align: center; min-width: 120px;">
                        <div style="font-size: 24px; margin-bottom: 5px;">💎</div>
                        <div style="font-size: 14px; font-weight: 600;">Premium quality</div>
                      </div>
                    </td>
                    <td align="center" style="padding: 10px;">
                      <div style="color: rgba(255,255,255,0.95); text-align: center; min-width: 120px;">
                        <div style="font-size: 24px; margin-bottom: 5px;">💰</div>
                        <div style="font-size: 14px; font-weight: 600;">Best price</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <p style="font-size: 16px; color: #ffffff; margin-top: 30px;">
                  Thank you for trusting us to take your project to the next level 🚀
                </p>
              </td>
            </tr>

        <!-- Footer -->
        <tr>
          <td style="background:linear-gradient(135deg,#f8fafc,#e2e8f0);text-align:center;padding:30px;border-top:1px solid #e5e7eb;">
            <div style="margin-bottom:20px">
              <a href="https://www.solbyt.tech" style="color:#9333ea;text-decoration:none;font-weight:600;margin:0 15px;">🌐 Website</a>
              <a href="mailto:info@solbyt.tech" style="color:#9333ea;text-decoration:none;font-weight:600;margin:0 15px;">📧 Email</a>
            </div>
            <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.5;">
              © 2025 <strong>Solbyt</strong> – Innovative Digital Solutions<br />
              All rights reserved<br />
              <a href="mailto:info@solbyt.tech" style="color:#9333ea;text-decoration:none">info@solbyt.tech</a>
            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`
export const contact_notification_template_en = (
  name: string,
  email: string,
  subject: string,
  message: string
) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Message – Solbyt</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:#f9fafb;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.05);padding:30px;">
        <tr>
          <td style="text-align:center;padding-bottom:20px;border-bottom:1px solid #e5e7eb;">
            <h2 style="margin:0;font-size:24px;color:#111827">📥 New contact message</h2>
            <p style="margin:8px 0 0;font-size:14px;color:#6b7280">You have received a new message from your website</p>
          </td>
        </tr>

        <tr>
          <td style="padding-top:20px;font-size:16px;color:#374151;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#3b82f6;text-decoration:none;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background:#f3f4f6;padding:15px;border-radius:8px;border-left:4px solid #9333ea;color:#1f2937;white-space:pre-line;">
              ${message}
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding-top:30px;text-align:center;font-size:12px;color:#9ca3af">
            <p style="margin:0;">Solbyt Internal Notification</p>
            <p style="margin:0;"><a href="https://www.solbyt.tech" style="color:#9333ea;text-decoration:none;">www.solbyt.tech</a></p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`
