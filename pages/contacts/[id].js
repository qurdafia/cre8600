import Link from "next/link";
import styles from "../../styles/Contacts.module.css";

const url = 'https://jsonplaceholder.typicode.com/users/'

export const getStaticPaths = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const paths = data.map(contact => {
        return {
            params: { id: contact.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(url+id)
    const data = await res.json();

    return {
        props: { contact: data }
    }
}

const Details = ({contact}) => {
    console.log(contact);
    
    return(
        <div className={styles.detailsWrapper}>
            <h1>Contact Details</h1>
            <h2>Hello, {contact.username}!</h2>
            <p>
                Name: {contact.name}<br />
                Email: {contact.email}<br />
                Mobile: {contact.phone}
            </p>
            <Link href={'/contacts/'}>
                <a className={styles.button}>
                    <h3>Back to Contacts</h3>
                </a>
            </Link>
        </div>
    )

}

export default Details;