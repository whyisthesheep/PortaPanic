let link = prompt("Link: (full link) ")
const sheet = document.createElement("link");
sheet.setAttribute("rel", "stylesheet");
sheet.setAttribute("type", "text/css");
sheet.setAttribute("href", "https://raw.githubusercontent.com/whyisthesheep/PortaPanic/main/panic.css");
document.body.appendChild(sheet);
const button = document.createElement("a");
button.setAttribute("class", "float my-float");
button.setAttribute("href", link);
document.body.appendChild(button);
