import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("hit");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phoneNumber, company, message, industry } = req.body;

  console.log({ firstName, lastName, email, phoneNumber, company, message, industry });

  if (!firstName || !lastName || !email || !phoneNumber || !company || !message || !industry) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fullName = `${firstName} ${lastName}`;
    const siteName = process.env.SITE_NAME || "Your Website";

    const htmlContent = `
      <div style="background-color: #f5f5f5; padding: 40px 0; font-family: 'Segoe UI', Arial, sans-serif;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <div style="background-color: #2E7D32; padding: 24px 32px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600;">
              New Inquiry from ${siteName} Contact Form
            </h1>
          </div>

          <!-- Body -->
          <div style="padding: 32px;">
            <p style="font-size: 16px; color: #000000; margin-top: 0; margin-bottom: 20px;">
              You’ve received a new inquiry through your ${siteName} website. Here are the details:
            </p>

            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 8px 0; color: #000000; font-weight: 600; width: 150px;">Full Name:</td>
                <td style="padding: 8px 0; color: #333333;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000000; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2E7D32; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000000; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0; color: #333333;">${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000000; font-weight: 600;">Company:</td>
                <td style="padding: 8px 0; color: #333333;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #000000; font-weight: 600;">Industry:</td>
                <td style="padding: 8px 0; color: #333333;">${industry}</td>
              </tr>
            </table>

            <div style="margin-top: 28px;">
              <h3 style="font-size: 17px; color: #2E7D32; margin-bottom: 10px; border-bottom: 2px solid #2E7D32; display: inline-block; padding-bottom: 4px;">Message</h3>
              <p style="font-size: 15px; color: #333333; line-height: 1.6; white-space: pre-line; margin-top: 8px;">
                ${message}
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #fafafa; text-align: center; padding: 20px;">
            <p style="margin: 0; font-size: 13px; color: #777;">
              This message was automatically generated from your website’s contact form.<br />
              <span style="color: #2E7D32; font-weight: 500;">${siteName}</span> © ${new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Inquiry from ${siteName}`,
      text: `
New Inquiry from ${siteName} Contact Form

Full Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber}
Company: ${company}
Industry: ${industry}

Message:
${message}
      `,
      html: htmlContent,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email", error: error.message });
  }
}
