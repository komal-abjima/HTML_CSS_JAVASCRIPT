/*given an array of objects with a numerical property, implement a function to sort the objects based on that property. 
Additionally add a ranking to each object based on its position in the sorted array.*/

const prices = [
    {id: 1, marks: 30},
    {id: 2, marks: 10},
    {id: 3, marks: 40},
    {id: 4, marks: 20},
    {id: 5, marks: 10},


];

//by using sort
const data = [...prices].sort((a,b) => a.marks - b.marks).map((item, index) => ({...item, rank: index + 1}));


// for(let i = 0; i< prices.length-1; i++){
//     for(let j = i + 1; j< prices.length; j++){
//         if( prices[i].marks <  prices[j].marks){
//             const temp = prices[i];
//             prices[i] = prices[j];
//             prices[j] = temp;
//         }
//     }
// }

// for(let i = 0; i<prices.length; i++){
//     prices[i].rank = i + 1;
// }

// console.log(prices);