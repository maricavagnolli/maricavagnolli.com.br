import React from "react";
import {
  Instagram,
  PhoneAndroidOutlined,
  LaptopChromebookOutlined,
  EmailOutlined,
} from "@material-ui/icons";
import ContactItem from "./ContactItem";

interface Props {}

const contactLinks = [
  {
    Icon: Instagram,
    title: "nutri.maricavagnolli",
    link: "http://instagram.com/_u/nutri.maricavagnolli",
  },
  {
    Icon: PhoneAndroidOutlined,
    title: "+55 (11) 95297-1341",
    link: "tel:5511952971341",
  },
  {
    Icon: EmailOutlined,
    title: "nutri@maricavagnolli.com.br",
    link: "mailto:nutri@maricavagnolli.com.br",
  },
];

function Contacts(props: Props) {
  const {} = props;

  return (
    <div>
      {contactLinks.map((props) => (
        <div style={{ marginBottom: "8px" }} key={props.title}>
          <ContactItem {...props} />
        </div>
      ))}
    </div>
  );
}

export default Contacts;
