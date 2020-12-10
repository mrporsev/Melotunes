import { auth } from '../services/firebase'

export function signup (email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin (email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}


function Homepage (){
var email = ""
var password = ""
    return <div>
               <input className = "input" placeholder = "Email" onChange={event=> email = event.target.value}></input>
               <input className = "input" placeholder = "Password" onChange={event=> password = event.target.value}></input>
               <button className = "deep-purple lighten-1 waves-effect waves-purple btn-small" onClick = {()=>  {signup(email, password)}}> Login</button>
    </div>
}

export default Homepage