import {Card,Button,Modal,Form} from 'react-bootstrap';
import {useState} from 'react'
import axios from 'axios';

let flag =""

const ChallengeCard = (props) =>{

  async function updateScore(){
    let data = JSON.stringify({
      loginId : localStorage.getItem('login'),
      total_score : localStorage.getItem('total_score'),
      questions_solved : localStorage.getItem('questions_solved'),


    })
    const Response = await axios.put('http://127.0.0.1:8000/teamapi/',data,{
      headers:{
        Authorization:  'Basic YWRtaW46YWRtaW4=' ,// if you use token
        'Content-Type': 'application/json',
        
    
    },
    })

  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

    return (

      
      <>
      
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name} (Difficulty :{props.difficulty}) </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.description}
           <Form className="my-5">
        <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Submit your Flag</Form.Label>
      <Form.Control type="text" placeholder="ABCCTF{This_is_a_sample_flag}" onChange={(event)=>{
        flag = event.target.value
      }}/>
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
     
    
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={()=> {
        
           if(flag === props.flag)
           {
             props.alert(true);
            let score = localStorage.getItem('total_score');
            let questions = localStorage.getItem('questions_solved');

            if(score === null && questions === null)
            {
               localStorage.setItem('total_score',props.score);
               localStorage.setItem('questions_solved',1);
            }
            else{
              localStorage.setItem('total_score',parseInt(score) + props.score);
              localStorage.setItem('questions_solved',parseInt(questions) + 1)

            }
            updateScore()
           }
           else
           props.alert(false);
           handleClose();
            
          }}>
            Submit your Flag
          </Button>
        </Modal.Footer>
      </Modal>


        <Card style={{ width: '20rem' }} className="text-dark bg-warning mx-3 my-3">
        <Card.Body>
          <Card.Title className="font-weight-bold">{props.name}</Card.Title>
          <Card.Subtitle className="font-weight-bold my-3">Difficulty :{props.difficulty}</Card.Subtitle>
          <Card.Text className="font-weight-bolder">
        {props.description}
          </Card.Text>
          <Button className="primary btn-lg" onClick={()=>{setShow(true)}}>Solve</Button>
        </Card.Body>
      </Card>
      
        </>
    )
}

export default ChallengeCard;