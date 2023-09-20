import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Tailwind } from "@react-email/tailwind";
import { EmailPropsType } from "@/utils/EmailPropsType";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";
import { Hr } from "@react-email/hr";

export default function WelcomeEmail({
  firstName,
  lastName,
  address,
  email,
  message,
  items,
}: EmailPropsType) {
  return (
    <Tailwind>
      <Html>
        <Section>
          <Row>
            <Column>Nome:</Column>
            <Column>{firstName} {lastName}</Column>
          </Row>
          <Hr></Hr>
          <Row>
            <Column>Email:</Column>
            <Column>{email}</Column>
          </Row>
          <Hr></Hr>
          <Row>
            <Column>Indirizzo:</Column>
            <Column>{address}</Column>
          </Row>
          <Hr></Hr>
          <Row>
            <Column>Messaggio:</Column>
            <Column>{message}</Column>
          </Row>
          <Hr></Hr>
          <Row>
            <Column>
              Ordine:
              {items.map((o)=>(
                <>
                  <Row>{o.name}: {o.quantity} pezzo/i - taglia: {o.size}</Row>
                  <Hr></Hr>
                </>
              ))}
            </Column>
          </Row>
        </Section>
      </Html>
    </Tailwind>
  );
}
