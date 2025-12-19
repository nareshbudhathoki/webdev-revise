const body = document.querySelector("body");

body.addEventListener("click", (e)=>{
    console.log(e.clientX, e.clientY);

    const circle = document.createElement("div");
    circle.classList.add("circle");
    const color = ["red", "blue", "orange", "pink", "purple", "violet", "yellow"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*7)];

    circle.style.top = `${e.clientY-25}px`;
    circle.style.left = `${e.clientX-25}px`;
    circle.textContent = "Boss";

    body.append(circle);

    setTimeout(()=>{
        circle.remove();
    },500);
})