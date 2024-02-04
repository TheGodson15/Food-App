import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login(async ) {
  const [credentials, setcredentails] = useState({   email: "", password: ""  });
  let navigate = useNavigate()
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

  const restaurantID = await fetch("http://localhost:5000/api/restaurantusersId", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({  email: credentials.email  })

  })

  const id =  await restaurantID.json()
  console.log('id', id[0]._id)

 
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/rverifyuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password, })

    })

    console.log(credentials)
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert("Enter Valid Credentails")
    }
    if (json.success) {

      
      localStorage.setItem('restaurantID',id[0]._id)
      localStorage.setItem("rauthToken", json.authToken)
      navigate(`/restaurantFoodItem/${id[0]._id}`)
      console.log("rtoken",localStorage.getItem("rauthToken"))
    }
  
};
  const onChange = (event) => {
    setcredentails({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
    <div className='container'>
    <h4>Restaurant Signin</h4>
      <form onSubmit={handleSubmit}>
         
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} /> 
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
        </div>
        
        
        <button type="submit" className="btn btn-success">Submit</button>
        <Link className="m-3 btn btn-danger" to="/restaurantSignup">
                Create a New Account
              </Link> 
      </form>
    </div>

  </>
  )
}
