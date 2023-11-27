var questionEl = document.querySelector("#question-message")
var questions = [
    {
        message: "question 1",
        choices: ["answer 1", "answer 2"],
        correctChoice: "answer 1",
    },
    {
        message: "question 2",
        choices: ["answer 1", "answer 2"],
        correctChoice: "answer 2",

    }
]

function displayNextQuestion (){
    console.log(questionEl)
    questionEl.textContent = questions[1].message

} 
displayNextQuestion ()