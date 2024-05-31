import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "../../../lib/email";
import OrderTemplate from "../../../emails/OrderTemplate";
import { EmailPropsType } from "@/utils/EmailPropsType";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log(req.body);

  const data = req.body as EmailPropsType;

  console.log(data.firstName);

  await sendEmail({
    // to: "bolankenduyvon@gmail.com",
    to: "alessandro.bordo41@gmail.com",
    subject: "Nuovo Ordine Kendush",
    html: render(OrderTemplate(data)),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
