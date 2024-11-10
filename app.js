// Javascript -> tootsoolol hiih
// variable/huwisagch -> ogogdol hadaglna
// if/else -> nuhtsol shalgah / tsentsuu bnu , ih bnuu baga bnuu
// for -> neg uildeliig olon udaa dawtahd ashiglana
// function -> olon kodnii tsugluulga / dahij ashiglah bolomjtoi
// massive/aray -> [], index / olon utga zereg ashiglah
// object -> {}, key:value 
// api -> tusgai beldsen datag holboh
// .innerText -> tag dotorh ugiig oorchloh 
// document html deerh buh code 
// addEventListener -> webstite hiigdeh uildel
// html,css -> tetx zurag gargaj irdeg 
const questionEl = document.querySelector('.question');
const result = document.querySelector('.result');
const choiceEl = document.querySelector('.choice');
const nextBtn = document.querySelector('.next');
// 
let quizData = [
    {
        "question": "Lebron heden nastai we",
        "choice":["38","39","40","41"],
        "answer":"40",
    },
    {
        "question": "kevin durant niit onoo",
        "choice":["28000","29172","30000","27000"],
        "answer":"29172",
    },
    {
        "question": "Chingis haana heden ond torson be",
        "choice":["1163","1150","1000","1162"],
        "answer":"1162",
    },
    {
        "question": "Napoleon Bonaparte heden ond torson be",
        "choice":["1744","1800","1777","1769"],
        "answer":"1769",
    },
    {
        "question": "what is color code of black",
        "choice":["#000","#fff","#e1e1e1","#333"],
        "answer":"#000",
    },
];
let now=0;
let count=0;
console.log(quizData[0].question);
function display(){
    questionEl.innerText = quizData[now].question;  
    quizData[now].choice.forEach(data=>{
        console.log(data);
        let btn = document.createElement('button');
        btn.innerText = data;
        console.log(btn)
        choiceEl.append(btn);
        btn.addEventListener('click',()=>checkAnswer(data));
    });
}
function checkAnswer(data){
    console.log(data);
    if(data==quizData[now].answer){
        result.innerText="correct";
        count++;
    }else{
        result.innerText="wrong ! answer is "+ quizData[now].answer;
    }
}
nextBtn.addEventListener('click',()=>{
    questionEl.innerText="";
    result.innerText="";
    choiceEl.innerHTML="";
    now++;
    if(now==quizData.length){
        result.innerText="Done! Your score is "+ count +"/"+quizData.length;
        nextBtn.style.display="none";
    }else{
        display();
    }    
});
display();
