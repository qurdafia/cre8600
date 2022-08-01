import { useRouter } from "next/router"

export default function Contacts(data) {

    const router = useRouter();
    const { id } = router.query;
    const contact = data.data;
    
    return <h1>Hello, {contact.name}!</h1>

    
}

export async function getServerSideProps({params}) {
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
    const req = await fetch(url);
    const data = await req.json();

    return {
        props: {data},
    }
}