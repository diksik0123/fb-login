function login(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    while (true){
            // paul account
            if(username == "paul" && password == "1234"){
                window.location.href = "https://web.facebook.com/facebook/?_rdc=1&_rdr";
                return false;
            } //jake account
            else if(username == "jake" && password == "1234"){
                window.location.href = "https://web.facebook.com/facebook/?_rdc=1&_rdr";
                return false;
            } //aaron account
            else if(username == "aaron" && password == "1234"){
                window.location.href = "https://web.facebook.com/facebook/?_rdc=1&_rdr";
                return false;
            }
            else{ //alert message about number of attempt
                alert("Invalid email or password");
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
                break;
            }
        }
    }