import { email } from "../../../config/config.js";
import { sendEmail } from "../../../utils/sendMail.js";

export const sendClientMail = async (clientData) => {
  const mailInfo = {
    from: `"Teracores.com" <${email}>`,
    to: clientData.email,
    subject: "Thank You for Getting in Touch with Teracores!",
    text: `Hi ${clientData.name},\n\nThank you for reaching out to Teracores! We’re thrilled to have received your details. Our team will review your submission and get back to you shortly.\n\nBest regards,\nThe Teracores Team`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #ffffff; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #262626; border-radius: 8px;">
        <header style="text-align: center; margin-bottom: 20px;">
          <img src="https://www.teracores.com/logowhite.png" alt="Teracores Logo" style="max-width: 150px; margin-bottom: 10px;">
          <p style="color: #797979; margin: 0;">Innovating Solutions for Your Business</p>
        </header>
        <main>
          <h2 style="color: #ffffff;">Hi ${clientData.name},</h2>
          <p style="color: #797979;">Thank you for reaching out to <strong>Teracores</strong>! We’re thrilled to have received your details. Our team will review your submission and get back to you shortly.</p>
          <p style="color: #797979;">If you have any urgent questions, feel free to contact us at <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a>.</p>
        </main>
        <footer style="margin-top: 20px; text-align: center; color: #777;">
          <hr style="border: none; border-top: 1px solid #444; margin: 20px 0;">
          <p style="font-size: 14px; color: #797979;">&copy; ${new Date().getFullYear()} Teracores. All rights reserved.</p>
          <p style="font-size: 14px; color: #797979;">
            Follow us on 
            <a href="https://facebook.com/teracores" style="color: #007BFF; text-decoration: none;">Facebook</a> | 
            <a href="https://linkedIn.com/teracores" style="color: #007BFF; text-decoration: none;">LinkedIn</a>
          </p>
        </footer>
      </div>
    `,
  };

  try {
    await sendEmail(mailInfo);
    console.log("Email sent successfully to client:", clientData.email);
  } catch (error) {
    console.error("Failed to send email:", error.message);
    throw new Error("Error sending email to client");
  }
};
