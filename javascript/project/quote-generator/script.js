const quotes = [
    "Stay hungry, stay foolish. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The secret of getting ahead is getting started. - Mark Twain",
    "If you’re going through hell, keep going. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Opportunities don’t happen. You create them. - Chris Grosser",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Don’t count the days, make the days count. - Muhammad Ali",
    "What we think, we become. - Buddha",
    "Act as if what you do makes a difference. It does. - William James",
    "Do not wait to strike till the iron is hot; make it hot by striking. - William Butler Yeats",
    "Everything you can imagine is real. - Pablo Picasso",
    "Turn your wounds into wisdom. - Oprah Winfrey",
    "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
    "The mind is everything. What you think you become. - Buddha",
    "It is never too late to be what you might have been. - George Eliot"
  ];

const button  = document.getElementById("btn");
const heading = document.getElementById("heading");

button.addEventListener("click", generateQuote);

function generateQuote(){
    let index = Math.floor(Math.random()*21);
    console.log(quotes[index]);
    heading.textContent = quotes[index];
}