const quizText = [
    {question: "Q1 - something something",
        answers: {
            'a': 'answer A',
            'b': 'ans B',
            'c': 'ans C',
            'd': 'D'
        },
        correctAnswer: 'a'
    },
    {question: "Q2 - two",
        answers: {
            'a': 'something',
            'b': 'smth',
            'c': 'hi',
            'd': 'D'
        },
        correctAnswer: 'b'
    },
    {question: "Q3 - three",
        answers: {
            'a': 'something',
            'b': 'smth',
            'c': 'hi',
            'd': 'D'
        },
        correctAnswer: 'c'
    },
    {question: "Q4 - four",
        answers: {
            'a': 'something',
            'b': 'smth',
            'c': 'hi',
            'd': 'D'
        },
        correctAnswer: 'd'
    },
    {question: "Q5 - five",
        answers: {
            'a': 'something',
            'b': 'smth',
            'c': 'hi',
            'd': 'D'
        },
        correctAnswer: 'd'
    },
    {question: "Q6 - 666",
        answers: {
            'a': 'something',
            'b': 'smth',
            'c': 'hi',
            'd': 'D'
        },
        correctAnswer: 'd'
    },
];

let i = 0;
let score = 0;
const quizContainer = document.getElementById("q-text");
const resultsContainer = document.getElementById("results");

function showQuestions (quizText, quizContainer) {
    var output = [];
    var answers = [];

    for (var i=0; i<quizText.length; i++) {
        console.log(i);
        answers = [];
        for (letter in quizText[i].answers) {
            answers.push(
                '<label> input type = "radio" name = "question'+(i+1)+'"value="' + letter + '">'
                    + letter + ': '
                    + quizText[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
            '<div class ="question">' + quizText[i].question + '</div>'
            + '<div class = "answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
}

function submit() {

}



/*
function beginQuiz() {
    //ctrl buttons are disabled/enabled as needed..
    document.getElementById("prev").disabled = true;
    document.getElementById("next").disabled = false;
    document.getElementById("submit").disabled =true;

//declare ctr/index + show ctrl buttons + hide start button
    document.getElementById("ctrl").style.display= "block";
    document.getElementById("startquiz").style.display= "none";

    //display the question
    questionText.innerHTML = (Q+1) + ". " + questions[Q].question;
    
    //display the options FOR HOWEVER MANY THERE ARE...
    for (i=0; i<questions[Q].answers.length; i++) {
        console.log(Q, i);
        (function (index) {
            options[index].innerHTML = questions[Q].answers[index].option;
            options[index].style.display= "block";
            
            options[index].onclick = () => {
                Cy[Q] = questions[Q].answers[index].cy;
                Au[Q] = questions[Q].answers[index].au;
                Chr[Q] = questions[Q].answers[index].chr;
                Mas[Q] = questions[Q].answers[index].mas;
                Kei[Q] = questions[Q].answers[index].kei;
            
                console.log(Q, questions.length);
                next();
            }
        }) (i);
    };
} 
*/