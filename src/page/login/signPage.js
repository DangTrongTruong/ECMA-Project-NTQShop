
import axios from "axios";

const signPage = {
    render(){
        return (
           /*html*/ `
		   <div  id='loginPage'>

		   <h1>SIGNIN FORM</h1>
	   
		   <div class="container w3layoutscontaineragileits" id="loginShow">
		   <h3>Register Form</h3>
		   <form action="" method="" id="formRegister">
				   <div class="form-sub-w3ls">
					   <input placeholder="User Name" id="userName"  type="text" required="">
					   <div class="icon-agile">
						   <i class="fa fa-user" aria-hidden="true"></i>
					   </div>
				   </div>
				   <div class="form-sub-w3ls">
					   <input placeholder="Email" id="email" class="mail" type="email" required="">
					   <div class="icon-agile">
						   <i class="fa fa-envelope-o" aria-hidden="true"></i>
					   </div>
				   </div>
				   <div class="form-sub-w3ls">
					   <input placeholder="Password" id="password"  type="password" required="">
					   <div class="icon-agile">
						   <i class="fa fa-unlock-alt" aria-hidden="true"></i>
					   </div>
				   </div>
				   
			   <div class="login-check">
					<label class="checkbox"><input type="checkbox" name="checkbox" checked="">I Accept Terms & Conditions</label>
			   </div>
			   <div class="submit-w3l">
				   <input type="submit" value="Register">
			   </div>
		   </form>
	   
		   </div>
		   
	   </div>

		   
           
				
			
            `
        )
    },afterRender(){
		const formRegister = document.querySelector('#formRegister');
		formRegister.addEventListener('submit',function(e){
			e.preventDefault();
			const user={
				email:document.querySelector('#email').value,
				password:document.querySelector('#password').value,

			}
			const result = axios.post('http://localhost:3000/register',user);
			result
			.then( res =>{
				if(res.data.status === 201){
					window.location.hash ='/login'
				}
			})
			.catch( error => {
				console.error( error );
			})

			
		})
	}
}

export default signPage;

