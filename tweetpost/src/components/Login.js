import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { loginUser } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const loginInfo = {email,password}
    
        dispatch(loginUser(loginInfo))

        setEmail(" ")
        setPassword(" ")
    }

    return (
        <Form className="login" style={{ textAlign: 'center' }}
               onSubmit={handleSubmit}>
            <h1 style={{ fontWeight: "bold" }}>Login</h1>
            <FormGroup>
                <Label>Email</Label>
                <Input  type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>Password</Label>
                <Input  type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block" type='submit'>Login</Button>
        </Form>
    )
}

export default Login
