import React, { useState } from 'react';
import  { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios'
import './App.css';



const App=()=>{

  const [query, setQuery]= useState("")
  const [details, setDetails]=useState("")

  const API_KEY="C54CEBAB678A40329A98E85892F8CFAD"
  const url=`https://api.veriphone.io/v2/verify?phone=${query}&key=${API_KEY}`


  const getDetails=async()=>{
    const response= await axios.get(url)
    console.log(response.data)
    setDetails(response.data)
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    
    getDetails()
  }
  const onChange=(e)=>{
    setQuery(e.target.value)
  }
  return (
   <>
   <h1 className="ml-4" style={{color:'blue'}}>Phone Identifier</h1>
    <Form onSubmit={onSubmit} className="m-4">
      <Form.Control type="text"
      value={query}
      placeholder="+254727984615"
      onChange={onChange}/>
      <Button type="submit" className="mt-2">
        Submit
      </Button>
 
    </Form>
    
 
     {details !=="" && <Card>
      <Card.Body className="m-4" style={{backgroundColor:'rgba(123,234,157,0.4)'}}>
      <Card.Title>Phone Type: <span style={{fontSize:'0.9em'}}>{details.phone_type}</span></Card.Title>
      <Card.Title>Country : <span style={{fontSize:'0.8em'}}>{details.country}</span></Card.Title>
      <Card.Title>Country Prefix:<span style={{fontSize:'0.8em'}}>{details.country_prefix}</span> </Card.Title>
      <Card.Title>Country Code:<span style={{fontSize:'0.8em'}}>{details.country_code}</span> </Card.Title>
      <Card.Title>International Appearance: <span style={{fontSize:'0.8em'}}>{details.international_number}</span></Card.Title>
      <Card.Title>Service Provider:<span style={{fontSize:'0.8em'}}>{details.carrier}</span> </Card.Title>
    </Card.Body>
  </Card>
}
 
   
  </>
  );
}

export default App;
