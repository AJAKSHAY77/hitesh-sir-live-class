// const div = document.createElement("div")
// const body = document.getElementsByTagName("body")
// div.innerHTML = "jai ho"
// div.setAttribute("id","kk")
// const button = document.createElement("button")
// button.innerHTML = "click me"
// div.appendChild(button)

document.addEventListener("click",(e)=>{
    console.log(e);
       const  elment = document.createElement("div")
       console.log(elment);
       elment.style.height = "100px"
       elment.style.width = "100px"
       elment.style.backgroundColor = "orange"
       elment.style.borderRadius ="50%"
       document.body.appendChild(elment)
})
console.log(div);


// document.body.appendChild(div)



