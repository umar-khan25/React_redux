import React, { useEffect, useState } from 'react'
import Shop from './shop'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {data} from './data'
function Login(props) {
    const [state, setState] = useState({
        email:"",
        password:""
    })
    // const [userExist, setUserExist] = useState([])
// const handleChange=()=>{
//     setInput({isLoggedIn:true,email:email})
// }

const handleEmail=(e)=>{
    setState({email:e.target.value})
    console.log(state,"name")
}
const handlePassword=(e)=>{
    setState({password:e.target.value})
    console.log(state,"password")
}
// const handleChange = (evt) => {
//     const value = evt.target.value;
//     setUserExist({
//         ...userExist,
//         [evt.target.name]: value
//       });
//       console.log(userExist,"stateee")

// }
    const handleSubmit=()=>{
        // setUserExist([...userExist, state ])
        // console.log(userExist,"clicked")

        if(state==data){
            return console.log("exist")
        }
        else{
            console.log("not exist")
        }
    }
    let history = useHistory();

    return (
        <div>
            <div className="login" style={{
                height: "100%",
                backgroundImage: `url("https://i.imgur.com/81RTZEw.png")`
            }}>
                
                <div className="login-form">
                    <Form >
                    <h1>Sign In</h1>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={state.email} name="email" type="email" onChange={handleEmail} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={state.password} name="password" onChange={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <button onClick={() => history.push("/shop")}>Log in</button>
                        <Link to="/register"><li>Register Here</li></Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Login;


