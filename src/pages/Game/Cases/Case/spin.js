var spinLine = ""
const maxTimeout = 1000
const minTimeout = 100
var timeout = maxTimeout 
var state = false
var isActive = false

const onClick = () => {
  state = !state
  if(!isActive){
    isActive = true
    spin()
  }
} 

const spin = () => {

  document.documentElement.style.setProperty("--case-animation-duration",timeout + "ms")

  if(!state && (timeout + 100) >= maxTimeout){
    setTimeout(() => {
      var spinLine = document.querySelectorAll(".CasePrizeContainer") 
      spinLine[3].style.backgroundColor = "yellow"
      isActive = false
    }, timeout);
  }else{
    animation()
  }
}

const animation = () =>{
    create()
    var elem = document.querySelectorAll(".CasePrizeContainer")
    clear(elem[elem.length - 2])
    remove(document.querySelector(".CasePrizeContainer"))
}

const clear = (obj) => {
  if (obj.classList.contains("animation-create-container")){
    console.log("Clear")
    obj.classList.remove("animation-create-container")
    obj.querySelector(".CasePrize").classList.remove("animation-create")
  }
}


const create = () => {
  const prize = document.createElement("div")
  prize.classList.add("CasePrize")
  prize.classList.add("animation-create")

  const container = document.createElement("div")
  container.classList.add("CasePrizeContainer")
  container.classList.add("animation-create-container")

  container.append(prize)
  document.querySelector(".CaseSpinLine").append(container)   
}

const remove = (obj) => {
  console.log("Remove")
  obj.querySelector(".CasePrize").classList.add("animation-remove")
  obj.classList.add("animation-remove-container") 
  setTimeout(() => {
    obj.remove() 
    if(state){
      if ((timeout - 100) >= minTimeout){ 
        console.log(timeout)
        timeout = timeout - 100 
      }
    }else{
      if((timeout + 100) <= maxTimeout){
        console.log(timeout)
        timeout = timeout + 100 
      }
    }
    spin()
  }, timeout)
}
export default onClick
