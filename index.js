function showForm(type)
{
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');

    if(type=='register'){
        document.getElementById('registerForm').classList.remove('d-none');

    }else if(type=='login')
    {
        document.getElementById('loginForm').classList.remove('d-none');
    }

}

function register()
{
    const fullname =document.getElementById('regFullName').value;
    const email =document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if(!fullname){
        alert("Please enter your full name.");
        return;
    }
    if(!email){
        alert("Please enter your email.");
        return;
    }
    if(!password){
        alert("Please enter your password.");
        return;
    }
    const user={fullname,email,password};
    localStorage.setItem(email,JSON.stringify(user));

    alert("Registration successfull!! You can login now.")

    document.getElementById('regFullName').value='';
    document.getElementById('regEmail').value='';
    document.getElementById('regPassword').value='';

    showForm('login');

}

function login(){
    const email=document.getElementById('logEmail').value;
    const password = document.getElementById('logPassword').value;

    if(!email){
        alert("Email field is required.");
        return;
    }
    if(!password)
    {
        alert("Password field is required.");
        return;
    }

    const user=localStorage.getItem(email);

    if(!user){
        alert("User not exist!");
        showForm('register');
        
    }

    const parseUser =JSON.parse(user);

    if(password!=parseUser.password){
        alert("Incorrect Password");
        document.getElementById('logPassword').value='';
        return;
    }
    alert("Login Successfull!! Wellcome " + parseUser.fullname);
    document.getElementById('logEmail').value='';
    document.getElementById('logPassword').value='';
}
