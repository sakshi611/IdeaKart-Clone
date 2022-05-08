import  {navBar,getData,saveFunc} from "../components/navbar.js"
document.getElementById('navbar').innerHTML = navBar()

import {bottom} from "../components/footer.js"
document.getElementById('footer').innerHTML=bottom();


let login = async()=>{
    e.preventDefault();
    let user_data={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }

    user_data=JSON.stringify(user_data);

    let res= await fetch("https://masai-api-mocker.herokuapp.com/auth/login",
        {
            method:"POST",
            body:user_data,
            headers:{
                "Content-Type":"application/json"
            },
        });
        let data=await res.json();
        console.log(data);
};
document.getElementById("submit").addEventListener("click",login);