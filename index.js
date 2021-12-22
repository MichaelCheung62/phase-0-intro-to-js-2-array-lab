// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


const destructivelyAppendCat = (cat) => {
    return cats.push(cat)
}

const destructivelyPrependCat = (cat) => {
    return cats.unshift(cat)
}

const destructivelyRemoveLastCat =(cat) => {
    return cats.pop()
}

const destructivelyRemoveFirstCat =(cat) => {
    return cats.shift()
}

const appendCat = (cat) => {
let newCats = [...cats,cat]
    return newCats

}

const prependCat = (cat) => {
let newCats = [cat,...cats]
return newCats
}

const removeLastCat = (cat) => {
    let newCats = cats.slice(0,-1)
    return newCats

}

const removeFirstCat = (cat) => {
let newCats = cats.slice(1)
return newCats
}