
function secondsSinceEnter()
{
  return (Date.now() - localStorage.getItem("QuizStartTime")) / 1000;
}

function showTimer() {
    let sec = secondsSinceEnter();
    
    document.getElementById("timer").innerText = "It took you " + sec + " seconds to finish the quiz";
};

function startTimer() {
    localStorage.setItem("QuizStartTime", Date.now());
}


function submitContactForm(){
    document.getElementById("error").style.display = "none";

    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let studentId = document.getElementById("studentId").value;
    let email = document.getElementById("email").value;
    let note = document.getElementById("note").value;

    if(surname.length < 10){
      document.getElementById("error").style.display = "block";
      return;
    }

    if(!email.contains("@")){
      return;
    }

    let student = {surname, name, studentId, email, note}

    let studentJson = JSON.stringify(student)

    localStorage.setItem("student", studentJson);
}