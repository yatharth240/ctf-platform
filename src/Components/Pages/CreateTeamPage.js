import {Button,Form,Alert} from 'react-bootstrap';
import axios from 'axios';
import {useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";


let teamData = [];
let teamName = "";
let password = "";
let repassword = ""


async function postRequest(name,pass)
{
  let data = JSON.stringify({
    name:name ,
   loginPass:pass
})
try{
    const Response = await axios.post('http://127.0.0.1:8000/teamapi/',data,{
      headers:{
        Authorization:  'Basic YWRtaW46YWRtaW4=' ,// if you use token
        'Content-Type': 'application/json',
        
    
    },
    })
    teamData = Response.data
    console.log(teamData)

}catch(e)
{
    console.log(e);
}
 }





const CreateTeam = ()=>{
  const history = useHistory();
  const [data,setData] = useState(false)
  const [checkcomplete,setComplete] = useState(false);
  const [checkPass,setPass] = useState(false);
  const [exist, setExist] = useState(false);
  

    useEffect ( ()=>{
     async function request ()
     {
      try{
        const Response = await axios.get('http://127.0.0.1:8000/teamapi/',{
          headers:{
            Authorization:  'Basic YWRtaW46YWRtaW4=', // if you use token
           
        }
        })
        teamData = Response.data

        setData((prev) => setData(!prev));

    }catch(e)
    {
        console.log(e);
    }
     }
     request()

    },[])


    return (
        <>
         {checkcomplete?<Alert variant="danger">
        Please fill in complete details
  </Alert>:null}
  {checkPass?<Alert variant="danger">
        Passwords do not  match
  </Alert>:null}
  {exist?<Alert variant="danger">
        Team Name already Exists
  </Alert>:null}
        <div className="container bg-dark text-light my-4 py-3">

            <h1>Register your Team Here</h1>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Team Name</Form.Label>
    <Form.Control type="text" placeholder="Team Name" onChange={(e)=>{
      teamName = e.target.value
    }}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{
      password = e.target.value
    }}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Retype Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{
      repassword = e.target.value
    }}/>
  </Form.Group>
 <Button variant="warning btn-lg" onClick={(e)=>{
   setComplete(false)
   setPass(false)
   setExist(false)

  let validation = true;
  if(teamName === "" || password === "" || repassword === ""){
    validation = false;
    setComplete(true);
  
  }


  else if(password !== repassword){
    validation = false;
    setPass(true);
 
  }
 

  else 
  {
    teamData.forEach((elem)=>{
      if(elem.name === teamName)
      {
        validation = false;
        setExist(true);
  
      }
  
    })
  }

  if(validation)
  { 

  postRequest(teamName,password)
  

    history.push({
      pathname:'/createTeamSuccess',
      state:{teamName: teamName,pass:password} });
  }

  }}>
    Create Team
  </Button>
</Form>
        </div>
        </>
    )
}

export default CreateTeam;