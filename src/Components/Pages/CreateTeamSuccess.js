

let name="",pass=""
const CreateTeamSuccess = (props)=>{

    name = props.location.state.teamName
    pass = props.location.state.pass
    console.log(props.location.state.teamName)
    return (
        <>
        <div className="container bg-dark text-light my-5">
            <h1 className="my-5"> This Team Was Successfully Registered</h1>
            <h4>Pls Note down Team Details for Future reference:</h4>
            <ul className="h4 font-weight-light my-5">
                <li>Team Name : {name}</li>
                <li>Team Password : {pass}</li>
            </ul>
            <h1>Thanks for being with us</h1>
        </div>
        <div className="container bg-dark text-light my-5">
            <h1>Why you are valueable for us?</h1>
            <ul className="h4 font-weight-light my-5">
                <li>We wont exist without you</li>
                <li>Speakers ranging from cyber security experts to enthusiasts gain confidence from you</li>
            </ul>
        </div>
        </>
    )
}

export  default CreateTeamSuccess;