import React, {useState} from 'react'
import Header from "../Header/Header";
import './signUp.css';
import {useNavigate, Link} from 'react-router-dom';
import  {auth}  from "../../Config/firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";


function SignUp() {
const navigate = useNavigate();

const [form, setForm] = useState(false);

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


// const handleSignUp = (e) => {
//     e.preventDefault();
//     if (name === '' || email === '' || password === '') {
//     setError(true);
//     } else {
//     setSubmitted(true);
//     // setError(false);
//     setPassword('')
//     setEmail('')
//     setName('')
//     navigate('/todolist')

//     }
//     };





const handleSignUp = (e) => {
  e.preventDefault();
  // console.log('signup')

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/todolist");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  // createUserWithEmailAndPassword(auth, name, email, password)
  //   .then((res) => {
  //     // add username as display name
  //     const user = res;
  //     // updateProfile(auth.currentUser, { displayName: name });
  //     // console.log(res.user.displayName);

  //     // Navigate the user to HomePage after signup
  //     navigate("/todolist");
  //   }).catch((err) => alert(err.code));
};



const handleLogin = (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      navigate("/todolist");
    })
    .catch((err) => alert(err.message));
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


<Header />

{/* <form className="form"> */}


<div className="messages">
{errorMessage()}
</div>



{form ? 
(
        <form className="form" onSubmit={handleLogin}>
          <h1>Login with your email</h1>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              value={email}
            />
            <input
              type="password"
              placeholder="Your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              value={password}
            />
          </div>
          <button className="btn" type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <span className="form-link" onClick={() => setForm(false)}>
              Signup
            </span>
          </p>
        </form>


) : (


  <form className="form" onSubmit={handleSignUp}>

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

<p> Have an account?{" "} </p>
<p className="form-link" onClick={() => setForm(true)}>
SignIn</p>

</form>


)}
</div>


    // </div>
  )
  

}

export default SignUp