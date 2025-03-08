function Transform(balance) {
  let res = ""
  if(balance.length > 6){
    const acc = Number(balance) / 1000000
    res = String(acc)  + "M"
  }
  if(balance.length > 2){
    const acc = Number(balance) / 1000
    res = String(acc)  + "K"
  }
  return res;
}

export default Transform
