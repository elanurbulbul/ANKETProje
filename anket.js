const correctAnswers=['Y','Y','Y','Y','Y'];
const form=document.querySelector('.question-form');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    
    userAnswer.forEach((answer,index)=>{
       if(answer===correctAnswers[index]){
          score+=20; 
       } 
    })
    console.log(score);
})