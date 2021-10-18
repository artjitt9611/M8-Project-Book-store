import FacebookLogin from 'react-facebook-login'
import axios from 'axios'
function App() {

  const signUserIn = async response => {
    console.log(response)
    const  {name,email,accessToken,userID} = response 
    const user  = {name,email,accessToken,userId:userID}
		
    const X = await axios({
      method:'post',
      url:'http://localhost:5000/auth/signin/facebook',
      data:{user}
    })
    console.log("data = "+X.data)
	}
  return (
    <FacebookLogin
    appId="411525907158319"
    fields="name,email"
    scope="public_profile, email"
    callback={signUserIn}
   />
  );
}

export default App;
