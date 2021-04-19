import React,{useState,useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap'
import {useHistory} from 'react-router-dom'

//import UserApi from '../api/UserApi'
import { registerUser } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//import UserList from './UserList'




const Register = () => {
const history = useHistory()
//initialize a new state, and method to set it toa new state
    const [firstName,setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [email,setEmail]= useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

//Functions handles when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();//prevents the webpage from reloading when submitting
        const newUser = { firstName, lastName, email, password }
       
        dispatch(registerUser(newUser))
        changeUrl()
       
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }
    const changeUrl = () => {
        history.push("/users")
    }
    return (
        
        <Form className='register' onSubmit={handleSubmit}>
            <h1 style={{textAlign:"center"}}>
                <span
                    className='text-center'
                    data-testid="header"
                    
                >Add New User</span>
            </h1>
            <FormGroup>
                <Label>First Name</Label>
                <Input 
                    type="text" 
                    placeholder="First Name..."
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                ></Input>
            </FormGroup>

            <FormGroup>
                <Label>Last Name</Label>
                <Input 
                    type="text" 
                    placeholder="Last Name..."
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                ></Input>
            </FormGroup>

            <FormGroup>
                <Label>Email</Label>
                <Input 
                    type="email" 
                    placeholder="Email..."
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>
            </FormGroup>

            <FormGroup>
                <Label>Password</Label>
                <Input 
                    type="password"
                    placeholder="Password..." 
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></Input>
            </FormGroup>

            <Button 
                 type='submit' className='btn-primary btn-lg btn-block '  >Submit
            </Button>

            <span>
                Already have an account, please login
                <Link className="nav-link" to="/login">login</Link>
            </span>
                
        </Form>
        
    )
}

export default Register