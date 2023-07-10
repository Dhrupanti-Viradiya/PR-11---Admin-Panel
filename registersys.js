let data = [{

    userid : 1,
    name : "Radhi",
    email : "radhi@gmail.com",
    password : "radhi@123",
    role : "admin"
}];

const save = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;

    if(name != ""){
        if(email != ""){
            if(password != "" && cpassword != "" && password ==cpassword){
                let obj = {
                    userid : Math.floor(Math.random() * 100000),
                    name : name,
                    email : email,
                    password : password,
                    role : 'user'
                }
                if(localStorage.getItem('register') === null || localStorage.getItem('register') === undefined){
                    data.push(obj);
                    localStorage.setItem('register',JSON.stringify(data));
                }else{
                    let val = JSON.parse(localStorage.getItem('register'));
                    val.push(obj);
                    localStorage.setItem('register',JSON.stringify(val));
                }
                 alert("user created successfully");
                 document.getElementById('name').value = "";
                 document.getElementById('email').value = "";
                 document.getElementById('password').value = "";
                 document.getElementById('cpassword').value = "";
                 window.location.href = "login.html";
            }else{
                document.getElementById('password').style.borderColor = "red";
                document.getElementById('cpassword').style.borderColor = "red";
            }
        }else{
            document.getElementById('email').style.borderColor = "red";
        }
    }else{
        document.getElementById('name').style.borderColor = "red";
    }
}
