/*make an array of objects representing items, filter the items based on a specific condition 
(e.g..items with a certain property value) and transform the filtered data into a new format.*/

const products = [

    {id: 1, Name: 'Laptop', price: 999, inStock: true},
    {id: 2, Name: 'LED', price: 29999, inStock: true},
    {id: 3, Name: 'Computer', price: 25000, inStock: false},
    {id: 4, Name: 'Tablet', price: 15000, inStock: true},
    {id: 5, Name: 'Camera', price: 1500, inStock: false},
    

];

//by using filter and map
const ans = products.filter(item => item.inStock).map(item => ({Name: item.Name, prie: item.price}));


// const inStock = [];
// for(let i =0; i<products.length; i++){
//     if(products[i].inStock){
//         inStock.push(products[i]);
//     }
// }

// const final = [];
// for(let i=0; i<inStock.length; i++){
//     final.push({
//         Name: inStock[i].Name,
//         price: inStock[i].price
//     });
// }

// console.log(final);