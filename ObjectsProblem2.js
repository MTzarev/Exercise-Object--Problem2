function objectsProblem2(array) {
let townsObj = {};
 for (let info of array){
    let [townName, population] = info.split(` <-> `)
    population = Number(population); 
    if (townName!=undefined){
        townsObj[townName]+=population
    }
    townsObj[townName]=population
}
for(let town in townsObj){
    console.log(`${town} : ${townsObj[town]}`)
}


}
objectsProblem2(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);