# Quiz App Project Documentation
---
## Project Overview 

---


The Quiz App is a web-based application that allows users to answer multiple-choice questions. The app dynamically updates the questions and displays the user's score at the end. This project is built using HTML, CSS, and JavaScript.
---
## Requirements
. A modern web browser (e.g., Google Chrome, Mozilla Firefox)
<br>
. A text editor (e.g., Visual Studio Code, Sublime Text)

---

[Git-Repo](https://github.com/sadabkhan098/Quiz-App)

 ## HTML Source Code Here
//  First div Box is Start Guidline notes 
```
<!-- First div Box is Start Guidline notes -->
    <div class="boxContain">
        <p>
            <span style="font-size: larger; color: black;">1.</span> You are going to get these 10 questions:
            <br>
            <span style="font-size: larger; color: black;">2.</span>15 seconds to be given for each question:
            <br>
            <span style="font-size: larger; color: black;">3.</span> Your score is visible after completing all the questions.
            <br>
            <span style="font-size: larger; color: black;">4.</span> You can try more to increase your score
        </p>
        <button class="startBtn">Start Quiz</button>
    </div>
```

//  Second Box is all item i here 
```
<-- Second Box is all item i here --> 

    <div class="container" >
        <div class="quizApp"> 
            <h1>Quiz App</h1>
        </div>
        <div class="paragrafDiv">
            <p class="paragraf">question</p>
        </div>

        <div class="listItem">
            <ul>
                <li>
                    <input type="radio" id="option_a"  name="cheched">
                    <label for="option_a" id="text_option_a">A</label>
                </li>
                <br>
                <li>
                    <input type="radio" id="option_b" name="cheched">
                    <label for="option_b" id="text_option_b">B</label>
                </li>
                <br>
                <li>
                    <input type="radio" id="option_c" name="cheched">
                    <label for="option_c" id="text_option_c">C</label>
                </li>
                <br>
                <li>
                    <input type="radio" id="option_d" name="cheched">
                    <label for="option_d" id="text_option_d">D</label>
                </li>
            </ul>
        </div>
        <div class="twoItem">
            <span id="timeLeft">timeLeft: </span> <span id="timer">o</span>
            <button id="next">Next</button>
        </div>
    </div>
```

## CSS Source Code Here

```
*{
    margin: 0;
    padding: 0;
}
:root{
    --primary_color : #4CC9FE;
    --secondry-color: #16C47F;
    --btn-color:#EFB036;
}
body{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10rem;
}
.boxContain{
    height: 250px;
    width: 400px;
    background-color: rgb(205, 225, 174);
    font-size: 20px;
    font-weight: 600;
    border-radius: 20px;
    color: var(--secondry-color);
    
}
.boxContain p{
    margin: 10px 0 0 10px;
    line-height: 35px;
  
}
.boxContain button{
    margin: 1rem 0 0 10rem;
    font-size: x-large;
    font-weight: 700;
    padding: 4px;
    border-radius: 15px;
    color: #EFB036;
    background-color: #0d0c0c;
}



.container{
    height: 500px;
    width: 500px;
    background-color: rgb(205, 225, 174);
    display: none;
    
}
.container h1{
    text-align: center;
    margin-top: 1rem;
    font-weight: 900;
    font-family: 'Courier New', Courier, monospace;
}
 .paragrafDiv p{
    text-align: center;
    font-size: 20px;
    color: #135D66;
    margin-top: 1rem;
    margin-left: 10px;
    
}
.listItem{
    margin: 2.5rem 0 0 0.5rem;
    
}
li{
    border: 1px solid rebeccapurple;
    padding: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    list-style: none;
    border-radius: 15px;
}
input[type=radio] {
    border: 0px;
    width: 30px;
    height: 1.5em;
}
.twoItem{
    display: flex;align-items: center;
    justify-content: space-evenly;
    margin: 2rem;
    padding: 10px;
}
button{
    margin: 1rem 0 0 10rem;
    font-size: x-large;
    font-weight: 700;
    padding: 4px;
    border-radius: 15px;
    color: #EFB036;
    background-color: #0d0c0c;
}
span{
    font-size: xx-large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

```

## JAVASCRIPT Source Code Here

```
// First  Guidlince Box here 
const startBtn =document.querySelector('.startBtn')
const container = document.querySelector('.container')
startBtn.addEventListener('click', function () {
    if( container.style.display === 'none'){
        container.style.display = 'block'
    }else{
        container.style.display = 'none'
    }
   
})


```
// variable define and store value

```
let questionIndex = 0;
let score = 0;
let timeer = 15;
```

// function create and  all element  select

```
function displayQuiz (){
    const paragraf = document.querySelector('.paragraf')


```

// data.js question is here

```
    const queType = quizQuestions[questionIndex].question;
    paragraf.textContent = quizQuestions[questionIndex].question;
    
    
    const option_a = document.getElementById('text_option_a')
    const option_b = document.getElementById('text_option_b')
    const option_c = document.getElementById('text_option_c')
    const option_d = document.getElementById('text_option_d')
    const timerCount = document.getElementById('timer')
    const btn =  document.querySelector('#next')

```

 // all answer to append the li

 ```
 paragraf.textContent = quizQuestions[ questionIndex].question;
    option_a.textContent = quizQuestions[questionIndex].ans1;
    option_b.textContent = quizQuestions[questionIndex].ans2;
    option_c.textContent = quizQuestions[questionIndex].ans3;
    option_d.textContent = quizQuestions[questionIndex].ans4;
    
 ```

  // btn click event || check radio option to checked

  ```
btn.addEventListener('click', ()=>{
        const checkedAns = document.querySelector('input[type="radio"]:checked')
        if(checkedAns === null){
            alert('Please select the answer Box')

        } else {
            if (checkedAns.textContent === quizQuestions[questionIndex].correctAnswer) {
                score++;
            }
            questionIndex++;


            // timer change 
            const timer = setInterval(() => {
                if (timeer > 0) {
                    timeer--;
                    timerCount.textContent = timeer
                }
               
            
                if (timeer <= 0) {
                    timeer++;
                    clearInterval(timer);
                   
                }
            }, 1000)
        

  ```

   // click btn and next question and answer show

   ```
 if ( questionIndex < quizQuestions.length) {
                paragraf.textContent = quizQuestions[ questionIndex].question;
                option_a.textContent = quizQuestions[ questionIndex].ans1
                option_b.textContent = quizQuestions[ questionIndex].ans2
                option_c.textContent = quizQuestions[ questionIndex].ans3
                option_d.textContent = quizQuestions[ questionIndex].ans4
                checkedAns.checked = false;
                

                // srore print alert to show
            }else{
                alert("Your score is " + score  +  " out of " +  quizQuestions.length)
            }
            questionIndex++;
        }

 })
        
}

//  function call
displayQuiz()


   ```

   // Quiz Question and Answer

   ```
const quizQuestions = [
    {
        question: "What is the output of the following code: console.log(typeof NaN)?",
        ans1: "number", 
        ans2: "NaN",
        ans3: "undefined",
        ans4: "object",
        correctAnswer: "number"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        ans1: "Undefined",
        ans2:     "Number",
        ans3:     "Boolean",
        ans4:   "Float",
        correctAnswer: "Float"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in JavaScript?",
        ans1: "JSON.stringify()", 
        ans2:    "JSON.parse()",
        ans3:    "JSON.convert()",
        ans4:   "JSON.objectify()",
        correctAnswer: "JSON.stringify()"
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        ans1: "while()",
        ans2:   "loop()",
        ans3:      "forEach()",
        ans4:     "None of the above",
        correctAnswer: "forEach()"
    },
    {
        question: "How can you convert the string '123' to an integer in JavaScript?",
        ans1: "Number('123')", 
        ans2:    "parseInt('123')",
        ans3:      "Both A and B",
        ans4:     "None of the above",
        correctAnswer: "Both A and B"
    },
    {

        "question": "Which event occurs when the user clicks on an HTML element?",
        ans1: "onchange",
        ans2: "onclick",
        ans3:  "onmouseover",
        ans4:  "onmouseclick",
        correctAnswer: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        ans1:  "variable carName",
        ans2: "var carName",
        ans3: "v carName",
        ans4:  "carName variable",
        correctAnswer: "var carName"
    },
   
];

   ```

   ## Features
   . Multiple-choice questions: Users can answer multiple-choice questions.
   <br>
   . Dynamic question display: Questions change dynamically as the user progresses through the quiz.
   <br>
   .Score calculation: The user's score is calculated and displayed at the end.

---






