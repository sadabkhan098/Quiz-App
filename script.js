

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

// variable define and store value

let questionIndex = 0;
let score = 0;
let timeer = 15;


// function create and  all element  select
function displayQuiz (){
    const paragraf = document.querySelector('.paragraf')

    // data.js question is here
    const queType = quizQuestions[questionIndex].question;
    paragraf.textContent = quizQuestions[questionIndex].question;
    
    
    const option_a = document.getElementById('text_option_a')
    const option_b = document.getElementById('text_option_b')
    const option_c = document.getElementById('text_option_c')
    const option_d = document.getElementById('text_option_d')
    const timerCount = document.getElementById('timer')
    const btn =  document.querySelector('#next')


    // all answer to append the li
    paragraf.textContent = quizQuestions[ questionIndex].question;
    option_a.textContent = quizQuestions[questionIndex].ans1;
    option_b.textContent = quizQuestions[questionIndex].ans2;
    option_c.textContent = quizQuestions[questionIndex].ans3;
    option_d.textContent = quizQuestions[questionIndex].ans4;
    

    // btn click event || check radio option to checked
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

                // click btn and next question and answer show
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
