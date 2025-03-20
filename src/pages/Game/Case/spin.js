var spinLine = ""
const maxTimeout = 1100
const minTimeout = 100
var timeout = maxTimeout 
var activeTimeout = 2000
var state = false

const onClick = () => {
  state = !state
  spin()
}

const spin = () => {
  document.documentElement.style.setProperty("--case-animation-duration",timeout + "ms")

  if(!state && (timeout + Math.round(timeout / 5)) >= maxTimeout){
    setTimeout(() => {
      var spinLine = document.querySelectorAll(".CasePrizeContainer") 
      spinLine[3].style.backgroundColor = "yellow"
      activeTimeout = 2000
    }, timeout);
  }else{
    animation()
  }
}

const animation = () =>{
    create()
    var elem = document.querySelectorAll(".CasePrizeContainer")
    clear(elem[elem.length - 2])
    remove(document.querySelector(".CasePrizeContainer"),state)
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

const clear = (obj) => {
  if (obj.classList.contains("animation-create-container")){
    console.log("Clear")
    obj.classList.remove("animation-create-container")
    obj.querySelector(".CasePrize").classList.remove("animation-create")
  }
}


const remove = (obj) => {
  console.log("Remove")
  obj.querySelector(".CasePrize").classList.add("animation-remove")
  obj.classList.add("animation-remove-container") 
  setTimeout(() => {
    obj.remove() 
    if(state){
      if (((timeout - Math.round(timeout/2.5)) >= minTimeout)){ 
        console.log(timeout)
        timeout = timeout - Math.round(timeout/2.5)
      }else{
        state = false 
        setTimeout(() => {
          activeTimeout = 0
          timeout = Math.round(timeout / 100) * 100
        }, activeTimeout);
      }
    }
    
    if ((activeTimeout === 0) && ((timeout + Math.round(timeout / 5)) <= maxTimeout)){
      timeout = timeout + Math.round(timeout / 5)
    }
    
    spin()
  }, timeout)
}
export default onClick 
