import { Product, categories } from "./ProductType";
import { EmailPropsType } from './EmailPropsType'


export default async function sendEmail(emailBody: EmailPropsType, onSuccess: () => any, onError?: () => any): Promise<Product | null> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/send-email`,
      {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify(emailBody)
      }
    );
    if (response.ok) {
      return onSuccess();
    }
    return null;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
