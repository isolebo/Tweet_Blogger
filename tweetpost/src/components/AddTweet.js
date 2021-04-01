import React,{useState,useEffect} from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import {addTweet} from '../redux/actions/tweetActions'


const AddTweet = () => {
    const [email, setEmail] = useState({})
    const [body, setBody] = useState({})
    const dispatch = useDispatch
    const newTweet = (email,body)

    const handleSubmit = (e) => {
        e.preventDefault();
      dispatch(addTweet(newTweet))
    }

     const handleChange = (e) => {
        setEmail(e.target.value)
         setBody(e.target.value)
     }
    
    useEffect(() => {
        
    }, [])

    
    return (
        <div>
            <h1 className="addTweet" style={{textAlign:'center'}}>Add a New Tweet</h1>
            <Form className="add">
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email"
                    placeholder="Email"
                    name="email"
                        id="email"
                        onChange={(e) => handleChange(e)}


                    />
                </FormGroup>

                <FormGroup>
                    <div class="mb-3">
                        <Label>Body:</Label>
                        <textarea class="form-control"
                            id="body"
                            rows="5"  
                            name="body"
                            onChange={(e) => handleChange(e)}


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

export default AddTweet
