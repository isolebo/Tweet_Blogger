import React,{useState,useEffect} from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap'
import {  useDispatch } from 'react-redux'
import {addTweet} from '../redux/actions/tweetActions'


const AddNewTweet = () => {
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const tweetData = { email, body }
        dispatch(addTweet(tweetData))
        
        setEmail('')
        setBody('')
    }

    //  const handleChange = (e) => {
    //     setEmail(e.target.value)
    //      setBody(e.target.value)
    //  }
    
    return (
        <div>
            <h1 className="addTweet" style={{textAlign:'center'}}>Add a New Tweet</h1>
            <Form className="add" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email"
                    placeholder="Email"
                    name="email"
                        id="email"
                        value={email}
                      onChange={(e) => setEmail(e.target.value)}



                    ></Input>
                </FormGroup>

                <FormGroup>
                    <div class="mb-3">
                        <Label>Body:</Label>
                        <textarea class="form-control"
                            id="body"
                            rows="5"  
                            name="body"
                            value={body}
                    onChange={(e) => setBody(e.target.value)}


                        ></textarea>
                    </div>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block"
                    type="Submit"

                >Submit Tweet</Button>
            
            </Form>
            
        </div>
    )
}

export default AddNewTweet
