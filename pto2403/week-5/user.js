// Object Literal
const user = {
    // properties - describe the object
    firstname: "justin",
    password: "",
    loggedIn: false,

    // methods = behaviour of the object   
    login() {
        user.firstname = prompt("Please enter your username: ");
        user.password = prompt("Please enter your password: ");

        alert("checking password");
        loggedIn = true;
        alert("Welcome to the system " + user.firstname);
    }
}

export default user;