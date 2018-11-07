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
function appendKitten(){
  [...kittens, "Broom"]
  return kittens
}