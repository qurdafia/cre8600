import { render } from "react-dom";

export default function ContactList(data) {

    const contacts = data.data;

    return(
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map((contact, i) => (
                    <li key={i}>{contact.name}</li>
                ))}
            </ul>
        </div>
    )
    
}


export async function getServerSideProps() {
    const url = `https://jsonplaceholder.typicode.com/users/`
    const req = await fetch(url);
    const data = await req.json();

    return {
        props: {data},
    }
}