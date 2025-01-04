let fruits = ["banan", "non", "mashina", "asal", "olma", "gul"]
let result=[]
for(let fruit of fruits) {
    if(fruit.includes("n")){
        result.push(fruit)

    }
}
console.log(`[${result}] n buva est`)
let res = []
for(let fr of fruits){
    if(!fr.includes("n")){
        res.push(fr)
    }
}
console.log(`[${res}] n bukva yoq`)