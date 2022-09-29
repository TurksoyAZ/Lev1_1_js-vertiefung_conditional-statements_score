const output = document.getElementById("output");
const inputT = document.getElementById("inputText");

function sendInfo() {
  if (inputT.value <= 18) {
    console.log(false),
      (output.innerHTML = "Du bist minderjährig!!!"),
      (output.style.color = "red");
  } else if (inputT.value >= 18) {
    console.log(true);
    (output.innerHTML = "Sie sind volljährig"),
      (output.style.color = "green");
  }
  if (inputT.value == "") {
    console.log("Kein Alter");
    (output.innerHTML = "Geben Sie bitte Ihr Alter ein."),
      (output.style.color = "#a1a");
  }
}

// function sendInfo(){

//     if(inputT.value <= 18 ) {console.log(false), output.innerHTML= "Du bist minderjährig!!!", output.style.color= "red"}
//     if(inputT.value == "")  {output.innerHTML="Geben Sie Ihr Alter ein",output.style.color= "green"}
//     if(inputT.value >= 18 ) {console.log(true), output.innerHTML="Sie sind volljährig", output.style.color= "blue" }

// }
