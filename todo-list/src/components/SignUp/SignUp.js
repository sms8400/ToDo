import React, {useState} from 'react'
import Header from "../Header/Header";
import './signUp.css';
import {useNavigate, Link} from 'react-router-dom';


function SignUp() {
const navigate = useNavigate();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


const handleSignUp = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
    setError(true);
    } else {
    setSubmitted(true);
    // setError(false);
    setPassword('')
    setEmail('')
    setName('')
    navigate('/todolist')

    }
    };


const resetForm = () => {
        setName("")
        setEmail("")
        setPassword("")
      }
    

// Showing success message
// const successMessage = () => {
//     return (
//     <div className="success" style={{ display: submitted ? '' : 'none', }}> <h1>User {name} successfully registered!! </h1>
//     </div>
//     );
//     };
    
    // Showing error message if error is true
    const errorMessage = () => {
    return (
    <div
    className="error"
    style={{
    display: error ? '' : 'none',
    }}>
    <h1>Please enter all the fields</h1>
    </div>
    );
    };

  return (
   

<div>




<div>


<Header />

<form className="form">


<div className="messages">
{errorMessage()}
</div>

{/* Labels and inputs for form data */}
<label className="label"></label>
<input onChange={(e)=>setName(e.target.value)}
placeholder="Your Name" className="input"
value={name} type="text" />

<label className="label"></label>
<input  onChange={(e)=>setEmail(e.target.value)}
placeholder="Email Address" className="input"
value={email} type="email" />


<label className="label"></label>
<input onChange={(e)=>setPassword(e.target.value)} 
placeholder="Create Password" className="input"
value={password} type="password" />



<button onClick={handleSignUp} className="btn" type="submit"> Sign Up </button>
{/* <Link to={"./todolist"}> Sign up </Link> */}


<button onClick={() => resetForm()} className="btn" type="reset"> Clear</button>
</form>



</div>


    </div>
  )
}

export default SignUp