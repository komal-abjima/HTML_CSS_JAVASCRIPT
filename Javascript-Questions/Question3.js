/*There are two arrays one is of users and other is of cities they live in, make a new array which contains the unified data */

const users = [
    {id: 1, name: 'John', age: 24},
    {id: 2, name: 'Karan', age: 26},
    {id: 3, name: 'Shishir', age: 30},
    {id: 4, name: 'Koko', age: 24},


    
];

const cities = [
    {id:11, city:"Jaipur"},
    {id:1, city:"delhi"},
    {id:2, city:"mumbai"},
    {id:4, city:"Jaipur"},
    
]

const data3 = users.map(item1 => ({...item1, ...cities.find(item2 => item1.id === item2.id)}))