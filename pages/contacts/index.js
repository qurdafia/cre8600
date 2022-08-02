import styles from '../../styles/Contacts.module.css';
import Link from 'next/link';

const url = 'https://jsonplaceholder.typicode.com/users/'

export const getStaticProps = async () => {
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {contacts: data}
    }
}

const ContactList = ({ contacts }, props) => {
    // console.log(contacts);
    return(
        <div className={styles.contactsWrapper}>
            <h1>Contact List</h1>
            {contacts.map((contact) => (
                <Link href={'/contacts/' + contact.id} key={contact.id}>
                    <a className={styles.single}>
                        <h3>{contact.name}</h3>
                    </a>
                </Link> 
            ))}
        </div>
    )
}

export default ContactList;