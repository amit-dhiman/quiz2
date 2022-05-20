const quizDB=[
    {
        question: "Q1: What is the full form of HTML?",
        a:"Hello To My Landscape",
        b:"Cascading Style Sheets",
        c:"HyperText Makeup Language",
        d:"HyperText Makeup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"Cascading Style Sheets",
        d:"HyperText Makeup Language",
        ans: "ans3"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a:"Hello To My Land",
        b:"JavaScript",
        c:"HyperText Makeup Language",
        d:"HyperText Makeup Language",
        ans: "ans2"
    }
]

let question = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let submit = document.querySelector('#submit');

let answers = document.querySelectorAll('.answer');
let showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

let loadQuestion = ()=>{
    let questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

let getCheckAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
      if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

let deselectAll = ()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{  
        showScore.innerHTML=`
        <h3> You scored ${score}/#${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> playAgain</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});

