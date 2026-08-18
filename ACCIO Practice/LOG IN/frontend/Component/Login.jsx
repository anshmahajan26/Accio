
function Login(){
    return(
        <>
        <form method="post" onSubmit={}>
            <label htmlFor="">email</label>
            <input type="text" value={email} name="email" onChange={}></input>
            <label>Passoword</label>
            <input type="password" value={pass} name="password" onChange={}></input>
            <button type="submit">submit</button>
        </form>
        </>
    )
}