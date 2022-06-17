
const project = document.querySelector(".project")
const projects = document.querySelector("#projects")

for (let i = 0; i < 20; i++) {
  projects.appendChild(project.cloneNode("true"))
}


const info1  = document.querySelector(".info1")
const infoContainer = document.querySelector("#info-container1")

for (let i = 0; i < 3; i++) {
  infoContainer.appendChild(info1.cloneNode("true"))
}

