function Links(props){
    console.log(props)
    // const {github, linkedin} = props
    return(
    <>
        <h3>Links</h3>

        {/* <h3>{name}</h3> */}
        <a href={props.github}>Github</a>
        <a href ={props.linkedin}>Linkedin</a>
    </>
    )
}
export default Links