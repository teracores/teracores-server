import { sendClientMail } from "../lib/mail/Form/ToClientMail.js";
import { sendServerMail } from "../lib/mail/Form/ToServerMail.js";
import { Form } from "../schema/formSchema.js";

export const createForm = async (req, res, next) => {
  try {
    const result = await Form.create(req.body);

    await sendClientMail({ email: result.email, name: result.name });
    await sendServerMail({
      email: result.email,
      name: result.name,
      message: result.message,
    });

    res.status(201).json({
      success: true,
      data: result,
      message: "Form submitted and email sent successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
