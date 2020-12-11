import {signup, signin} from '../helpers/auth'

function Homepage (){
var email = ""
var password = ""
    return <center><div className = "loginformbox">
                <h2>Welcome</h2>
                <input className = "input" placeholder = "Email" onChange={event=> email = event.target.value}></input>
                <input className = "input" type="password" placeholder = "Password" onChange={event=> password = event.target.value}></input>
                <button className = "deep-purple lighten-1 waves-effect waves-purple btn-small" onClick = {()=>  {signin(email, password)}}> Login</button>
                <p> or </p>
                <button className = "deep-yellow lighten-1 waves-effect waves-yellow btn-small" onClick = {()=>  {signup(email, password)}}> Register</button>
            </div></center>
}

export default Homepage