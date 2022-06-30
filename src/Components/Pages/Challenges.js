import ChallengeCard from '../ChallengeCard';
import axios from 'axios';
import {useEffect,useState} from 'react';
import {Alert} from 'react-bootstrap';

let CTFdata = []




const Challenges = ()=>{

    const [data,setData] = useState(false)
    const [success,showSuccess] = useState(false);
    const [failure,showFailure] = useState(false);
    let id = localStorage.getItem('login')

    function showAlert(check)
    {
        if(check)
        showSuccess(true);
        else
        showFailure(true);
    }
  
    useEffect( ()=> {

        async function request()
        {
            try{
                const Response = await axios.get('http://127.0.0.1:8000/questionapi/',{
                  headers:{
                    Authorization:  'Basic YWRtaW46YWRtaW4=' // if you use token
                }
                })
                CTFdata = Response.data
    
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
        
     {
         success? <Alert variant="success" onClose={()=>{showSuccess(false)}} dismissible>
   Congratulations !! Your Flag is Correct
                </Alert>:null
       
     }
     {
        failure? <Alert variant="danger" onClose={()=>{showFailure(false)}}dismissible>
   Sorry!! Your Flag is Incorrect
  </Alert>:null
     }
   

     {id !== null?<div className="container bg-dark text-light my-3 py-5">
            <h1 className="my-3">Team Score : {localStorage.getItem('total_score') === null?0:localStorage.getItem('total_score')}</h1>
           <h1 className="my-3">Start Solving your Challenges and win exciting prizes!!!</h1>
       
        <div className="row mx-3">
        
        {
            CTFdata.map((elem)=>{
               return (<ChallengeCard name={elem.name} difficulty={elem.difficulty_level} category={elem.category} description={elem.description} flag={elem.flag} score={elem.points} alert={showAlert}/>)
            }) 
        }
        </div>
       </div>:(<div className="container bg-dark text-light my-3 py-5">
           <h1 className="my-3">Pls Login to Continue!!!!</h1>
           </div>)}
       
        </>
    )

}


export default Challenges;