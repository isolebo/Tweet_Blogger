import React,{useState,useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import PostApi from '../api/PostApi'


const AddPost = () => {

    const [title,setTitle]= useState('')
    const [body, setBody] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();//prevents the webpage from reloading when submitting
        const newPost = { title, body}
        console.log(newPost)
        
        PostApi.newPost({ newPost })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            
            //sets the input back to any empty string
             setTitle('')
             setBody('')
             
    }


    return (
        <div> 
            <h1 style={{textAlign:"center"}}>Add A Post</h1>
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

export default AddPost
