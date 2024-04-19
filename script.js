// step 1:Define quiz data

const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0,
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        correct: 1,
    },
    {
        question: "What is the javascript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById"
        ],
        correct: 1,
    },
    {
        question: "In React.js,which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 3,
    },
];

// step 2:Javascript initialization---
const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        "#question", ".option_1", ".option_2", ".option_3", ".option_4"
    );
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;



// Step 3:Load quiz funnction---
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options);

    questionElm.innerText = `${currentQuiz+1}:${question}`;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    )

    // options.forEach(
    //     (curOption, index) =>  {
    //        document.getElementById(`option_${index + 1}`).innerText = curOption;
    //     }
    // );
}
loadQuiz();


// step 4: get selected answer function on button click
const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if (curOption.checked) {
    //         ans_index = index;
    //     }
    // });
    // return ans_index;
    const answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked)
};

// deselectedAnswer()
const  deselectedAnswers = () => {
   return answerElm.forEach((curElem) => curElem.checked = false );
} 

submitBtn.addEventListener("click", () => {
    // here we got the index id of user selected
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex ===quizData[currentQuiz].correct){
        score += 1;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    }
    else{
        quiz.innerHTML=`
         <div class="result">
           <h2> &#127942; your score : ${score}/${quizData.length} correct answer.</h2>
           <p>Congratulation on completing the quiz! &#128075; </p>
           <button class="reload-button" onClick="location.reload()">Play Again &#9851;</button>
         </div>
        `
    }
});


// -1 showing in console indicate that find index is not properly checked/find the index of array.It is default value of findIndex when no index is find.