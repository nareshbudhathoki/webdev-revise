const form = document.querySelector("#quizForm");

const answer = {
    q1:"C",
    q2: "B",
    q3:"C",
    q4:"C",
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for(let [name, value] of data.entries()){
        if(answer[name] == value){
            finalScore++;
        }
    }

    document.getElementById("out").textContent = `Your Score is ${finalScore} out of 4`;
    form.reset();
})