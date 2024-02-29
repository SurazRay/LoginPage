//aCCESS THE SIGN UP BUTTON  ON THE BLUE SIDE
const signBtn = document.querySelector("#signup");
//aCCESS THE SIGN UP BUTTON  ON THE white SIDE
const logInBtn = document.querySelector("#login");

// Adding the event listener to the sign button on the blue side
signBtn.addEventListener("click", () => {

    //Adding toggle function that removes and adds a class one by one when button is clicked each time 

    document.querySelector("main").classList.toggle("main-class");

    //Sign up button on blue side text change via funhction

    changeText(signBtn);

    // H1 tag or White side heading text change via function

    changeText(document.querySelector(".right h1"));

    //log in button on white side text change

    changeText(logInBtn);
});

// Function that changes the innertext of the parameter's node

function changeText(e) {
    if (e.innerHTML === "Log in") {
        e.innerHTML = "Sign up";
    } else {
        e.innerHTML = "Log in";

    }
}

//Adding links of my social sites to emoji options in white side below log in heading

const google = document.querySelector(".fa-google-plus-g");
const github = document.querySelector(".fa-github");
const facebook = document.querySelector(".fa-facebook");
const linkedIn = document.querySelector(".fa-linkedin");

google.addEventListener("click", () => {
    location.href = "mailto:suurajray@gmail.com";
});
github.addEventListener("click", () => {
    location.href = "https://github.com/SurazRay";
});
facebook.addEventListener("click", () => {
    location.href = "https://facebook.com/SuurajRay";
});
linkedIn.addEventListener("click", () => {
    location.href = "https://linkedin.com/in/surazray";
});

// Sign up or log in button and inputs from array and whole main body rotation 

logInBtn.addEventListener("click", () => {

    logInBtn.classList.toggle("login-class");
    signBtn.classList.toggle("login-class");

    document.querySelector("main").classList.toggle("main-rotate");

    document.querySelectorAll("input").forEach((e) => {
        e.classList.toggle("input-rotate");
    });
});