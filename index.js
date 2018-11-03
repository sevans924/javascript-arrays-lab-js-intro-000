var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
}// Add your functions and code here

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  kittens.pop()
  return kittens
}