import React from 'react'
import {Form,FormGroup,Button, Label,Input} from 'reactstrap'

const AddTweet = () => {
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
                    />
                </FormGroup>

                <FormGroup>
                    <div class="mb-3">
                        <Label>Body:</Label>
                        <textarea class="form-control"
                            id="body"
                            rows="5"  
                        ></textarea>
                    </div>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" type="Submit">Submit Tweet</Button>

            
            </Form>
            
        </div>
    )
}

export default AddTweet
