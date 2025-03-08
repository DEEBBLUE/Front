var spinLine = ""
var state = false

const spin = () => {
    if(state){
      create()
      remove(document.querySelector(".CasePrizeContainer"))
    }else{
      setTimeout(() => {
        console.log("hello")
        spinLine = document.querySelectorAll(".CasePrizeContainer")    
        spinLine[3].style.backgroundColor = "yellow"
      }, 100);
   }
  }

  const create = () => {
    const prize = document.createElement("div")
    prize.classList.add("CasePrize")

    const container = document.createElement("div")
    container.classList.add("CasePrizeContainer")

    container.append(prize)
    document.querySelector(".CaseSpinLine").append(container)   
  }

  const remove = (obj) => {
    console.log("Remove")
    obj.querySelector(".CasePrize").classList.add("animation-remove")
    obj.classList.add("animation-remove-container") 
    setTimeout(() => {
      obj.remove() 
      spin()
    }, 100)
  }
  
  const onClick = () => {
    state = !state
    spin()
  } 

export default onClick
