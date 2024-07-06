
//Question 1
const a = { name: "Person 1", age: 5 }
const b = { age: 5, name: "Person 1" }
const aAsString = Object.entries(a).sort((a, b) => a[0].localeCompare(b[0])).toString()
const bAsString = Object.entries(b).sort((a, b) => a[0].localeCompare(b[0])).toString()
console.log(aAsString === bAsString ? "Properties are equal" : "Properties are Not equal")

//Questio 2
fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((res) => {
    res.forEach(a => console.log(a.flag))
})

//Question 3
fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((res) => {
    res.forEach(a => console.log({ name: a.name.common, region: a.region, subregion: a.subregion, population: a.population }))
})