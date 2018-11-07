var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(){
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
var kitty = ["Broom"]
function appendKitten(){
  kittens.concat(kitty)
  return kittens
}