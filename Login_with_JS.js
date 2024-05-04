function validate()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;

    if(username=="aniket" && password=="jarvis")
    {
        alert(window.open("http://127.0.0.1:5500/flower%20shop%20homepage.html"));
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}