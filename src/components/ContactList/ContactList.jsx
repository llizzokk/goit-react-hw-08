import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact name={name} number={number} key={id} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
