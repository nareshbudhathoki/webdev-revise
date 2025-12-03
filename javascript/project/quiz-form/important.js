const form = document.querySelector("form");
const data = new FormData(form);

console.log([...data.entries()]);
console.log([...data.keys()]);
console.log([...data.values()]);

console.log(data.get("username"));
console.log(data.getAll("hobbies"));

data.set("username", "newUser");
data.append("username", "anotherUser");

console.log(data.has("email"));

data.delete("age");
