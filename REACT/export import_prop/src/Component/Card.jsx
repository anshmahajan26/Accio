function Card({title,description}){
    return(
    <>
    <h1>this are my porjects</h1>
    <div style={{
        width:"200px",
        border: "1px solid gray",
        padding:"10px",
        borderRadius:"8px"
    }}>

        <ul>
            <li>{title}</li>
            <p>{description}</p>
        </ul>
    </div>

    </>
    )
}
export default Card;