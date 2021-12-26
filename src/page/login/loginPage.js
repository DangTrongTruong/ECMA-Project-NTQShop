import axios from "axios";
import {authenticate,isAuthenticated } from "../../untils/until"
const loginPage = {
    render(){
        return (
            /*html*/`
            <!--
	Author: W3layouts
	Author URL: http://w3layouts.com
	License: Creative Commons Attribution 3.0 Unported
	License URL: http://creativecommons.org/licenses/by/3.0/
-->



<div  id='loginPage'>

	<h1>LOGIN FORM</h1>

	<div class="container w3layoutscontaineragileits" id="loginShow">
	    <h2 id="title">Login here</h2>
		<form id="formRegister" action="#" method="post">
			<input type="email" id="email" Name="Username" placeholder="EMAIL" required="">
			<input type="password" id="password" Name="Password" placeholder="PASSWORD" required="">
			<ul class="agileinfotickwthree">
				<li>
					<input type="checkbox" id="brand1" value="">
					<label for="brand1"><span></span>Remember me</label>
					<a href="#">Forgot password?</a>
				</li>
			</ul>
			<div class="aitssendbuttonw3ls loginPage">
				<input type="submit" value="LOGIN">
				<p style="letter-spacing: 0px;"> To register new account <span>→</span> <a class="w3_play_icon1" href="/#/sign"> Click Here</a></p>
				<div class="clear"></div>
			</div>
		</form>
	</div>
	
</div>
<!-- //Body -->


            `
        )
    },afterRender(){
		const formRegister = document.querySelector('#formRegister')
		formRegister.addEventListener('submit',function(e) {
			e.preventDefault();
			const user = {
				email:document.querySelector('#email').value,
				password:document.querySelector('#password').value,
			};
			axios.post('http://localhost:3000/signin',user)
			.then( response => {
				authenticate(response.data)
			}
		)
			.then( () => {
				document.querySelector('#title').innerText = "Đăng nhập thành công"
				console.log(1)
				if(isAuthenticated().user.id === 1){
					window.location.hash = '/admin/category'
				}
				else{
					window.location.hash = '/'
				}
			})
			.catch( () => {
				document.querySelector('#title').innerText = "Đăng nhập không thành công"
			})
			
		})
	}
	}

export default loginPage;