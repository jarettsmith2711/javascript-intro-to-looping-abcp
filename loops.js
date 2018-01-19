for (let i=0; i<=25; i++){
  console.log(`I am ` +i+` strange loops.`)
}

function whileLoop(n){
  var i=0;
  while (i<=n){
    num=n-i
    console.log(num)
    i++
  } return "done"
}

function doWhileLoop(){
   array=["ma","pa","na","ca","ska"]
  function maybeTrue(){
    return Math.random()>=0.5
  }
  while (array.length>0 && maybeTrue()){
    array=array.pop()
    array
  return array
  }
  
}