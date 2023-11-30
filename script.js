let body = document.querySelector("body")

let section1 = document.createElement("section")
section1.classList.add("section1")

section1.style.padding= "50px"
let container = document.createElement("div")
let home = document.createElement("div")
home.classList.add("home")
container.classList.add("container")
home.style.display = "flex"

home.style.justifyContent = "center"

let yes = document.createElement("div")
yes.classList.add("yes")
yes.style.marginTop = "100px"
yes.style.width = "48%"
let no = document.createElement("div")
no.classList.add("no")
no.style.width = "48%"

let here = document.createElement("p")
here.classList.add("here")
here.innerText = "DESIGN · DEVELOPMENT · MARKETING"
let text = document.createElement("p")
text.classList.add("text")
text.innerText = "I can help your business to"
let head = document.createElement("h1")
head.classList.add("head")
head.innerText = "Get online and grow fast"



let buttons = document.createElement("div")
buttons.classList.add("buttons")
let button1 = document.createElement("button")
button1.classList.add("button1")
button1.innerText = "Resume"
let button2 = document.createElement("button")
button2.classList.add("button2")
button2.innerText = "Projects"

let img = document.createElement("img");
img.src = "https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png";
no.append(img);
img.style.width = "500px"
img.style.height = "500px"
img.style.objectFit = "contain"
img.style.zIndex = "1"


let background = document.createElement("div")
background.classList.add("background")
no.append(background)




background.style.borderRadius = "90px"


body.append(section1)
section1.append(container)
container.append(home)
home.append(yes, no)
yes.append(here, text, head, buttons)

buttons.append(button1, button2)


let section2 = document.createElement("section")
section2.classList.add("section2")
section2.style.backgroundColor="rgb(249, 247, 249)"
section2.style.padding = "50px"
let container1 = document.createElement("div")
let about = document.createElement("div")
about.classList.add("about")
about.style.width="60%"
about.style.margin="auto"
about.style.textAlign="center"
container1.classList.add("container")
let bash = document.createElement("h3")
bash.classList.add("bash")

bash.innerText = "About Me"
let here2 = document.createElement("p")
here2.classList.add("here2")
here2.innerText = "My name is Start Bootstrap and I help brands grow."
let text2 = document.createElement("p")
text2.classList.add("text2")
text2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"
let icons = document.createElement("div")
icons.classList.add("icons")
icons.innerHTML = '<i class="bi bi-twitter"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>';

body.append(section2)
section2.append(container1)
container1.append(about)
about.append(bash,here2,text2,icons)


let footer= document.createElement("div")
footer.classList.add("footer")
let container3 = document.createElement("div")
container3.style.display="flex"
container3.style.justifyContent="space-between"
container3.style.paddingBlock="20px"
container3.classList.add("container")
let text3= document.createElement("p")
text3.classList.add("text3")
text3.innerText="Copyright © Your Website 2023"
let link = document.createElement("p")
link.classList.add("link")
link.style.display="flex"
link.style.gap="20px"
link.innerHTML=' <a href="#">Privicy</a> <a href="#">Terms</a> <a href="#">Contact</a>'
body.append(footer)
footer.append(container3)
container3.append(text3,link)

let menu=document.querySelector(".bi")
menu.addEventListener("click", () => {
    menuList.classList.toggle("s-menu");
});