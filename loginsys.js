let chekUser = JSON.parse(localStorage.getItem('checkUserLogin'));
if(chekUser){
    window.location.href = "index.html";
}
const login = () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;

    let allUser = JSON.parse(localStorage.getItem('register'));

    let login = allUser.filter((v)=>{
        return v.email == email;
    });

    if(login.length != 0){
        if(login[0].password == password){
            if(login[0].role == role){
                localStorage.setItem('checkUserLogin',JSON.stringify(login[0]));
                window.location.href = "index.html";
            }else{
                document.getElementById('role').style.borderColor = "red";
            }
        }else{
            document.getElementById('password').style.borderColor = "red";
        }
    }else{
        document.getElementById('email').style.borderColor = "red";
    }

}

// forgot password

const forgot = () =>{

    let useremail = document.getElementById('useremail').value;
    let allUser = JSON.parse(localStorage.getItem('register'));
    let ans = allUser.filter((v)=>{
        return v.email == useremail;
    })
    if(ans.length == 1){
        let OTP = Math.floor(Math.random() * 1000);
        let obj = {
            userOTP : OTP,
            email : ans[0].email
        }
        localStorage.setItem('userOTP',JSON.stringify(obj));
        alert("Your OTP : "+OTP);
        window.location.href = "otp.html";
    }
    else{
        document.getElementById('useremail').style.borderColor = "red";
    }
}

// verify otp 

const otp = () =>{

    let otp = document.getElementById('otp').value;
    let checkOTP = JSON.parse(localStorage.getItem('userOTP'));

    if(checkOTP.userOTP == otp){
        window.location.href="newpassword.html";
    }else{
        document.getElementById('otp').style.borderColor = "red";
    }
}

//new password 

const newpassword = () => {

    let newpass = document.getElementById('newpassword').value;
    let cpass = document.getElementById('cpassword').value;

    if (newpass != "" && cpass != "" && newpass == cpass){

        let allUser = JSON.parse(localStorage.getItem('register'));
        let userOTP = JSON.parse(localStorage.getItem('userOTP'));

        let ans = allUser.filter((v)=>{
           if(v.email == userOTP.email){
           return v.password = newpass;
           }
           
        })
        localStorage.setItem('register',JSON.stringify(ans));
        alert("Password Successfully Changed");
        
    }else{
        
        document.getElementById('newpassword').style.borderColor = "red";
        document.getElementById('cpassword').style.borderColor = "red";
        return false;
    }
    localStorage.removeItem('userOTP');
    window.location.href = "login.html";
}