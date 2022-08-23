/*let count = 5

count = count + 1

console.log(count)

letbonuspoints = 50
console.log(bonuspoints)

letbonuspoints = bonuspoints + 50
console.log(bonuspoints)

letbonuspoints = bonuspoints - 75
console.log(bonuspoints)

letbonuspoints = bonuspoints + 45
console.log(bonuspoints)*/

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}