import { email } from "../../../config/config.js";
import { sendEmail } from "../../../utils/sendMail.js";

export const sendServerMail = async (clientData) => {
  const mailInfo = {
    to: email,
    from: `"${clientData.name}" <${clientData.email}>`,
    subject: "New Form Submission Received",
    text: `Hello Teracores,\n\nA new form submission has been received with the following details:\n\nName: ${
      clientData.name
    }\nEmail: ${clientData.email}\nMessage: ${
      clientData.message || "No message provided"
    }\n\nPlease review the submission at your earliest convenience.`,
    html: `
      <p>Hello Teracores,</p>
      <p>A new form submission has been received with the following details:</p>
      <ul>
        <li><strong>Name:</strong> ${clientData.name}</li>
        <li><strong>Email:</strong> ${clientData.email}</li>
        <li><strong>Message:</strong> ${
          clientData.message || "No message provided"
        }</li>
      </ul>
      <p>Please review the submission at your earliest convenience.</p>
    `,
  };

  try {
    await sendEmail(mailInfo);
    console.log("Notification email sent successfully to admin:", email);
  } catch (error) {
    console.error("Failed to send notification email:", error.message);
    throw new Error("Error sending notification email to admin");
  }
};
