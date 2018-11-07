var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
destructivelyAppendKitten("Ralph")
function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(){
  [...kittens, (name)]
}
appendKitten("Broom")