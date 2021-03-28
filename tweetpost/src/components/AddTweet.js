import React,{useState,useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import TweetApi from '../api/TweetApi'


const AddTweet = () => {

    const handleSubmit = (e) => {
        e.preventDefault();//prevents the webpage from reloading when submitting
        const newTweet = { title, body}
        console.log(newTweet)
        
        
    }

    return (
        <div> 
            <h1 style={{textAlign:"center"}}>Add A Tweet</h1>
          <form>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           placeholder="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                    
            </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Body</label>
                    <textarea className="form-control"
                              id="body"
                              rows="3"
                              value={body}
                              onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <button type="button" class="btn btn-primary">Submit</button>

            </form>
        </div>       
    )
}

export default AddTweet
