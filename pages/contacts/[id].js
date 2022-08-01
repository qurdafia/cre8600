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
        <div>
            <h1>Details</h1>
            <h2>Hello, {contact.username}!</h2>
            <p>
                Name: {contact.username}<br />
                Email: {contact.email}<br />
                Mobile: {contact.phone}
            </p>
        </div>
    )

}

export default Details;