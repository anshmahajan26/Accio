import Child from "./Child"

function Parent(props) {
    return (
        <>
            <Child name={props.name} />
        </>
    )
}

export default Parent
