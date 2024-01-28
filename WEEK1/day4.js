let person = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Chicago' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'Dave', age: 40, city: 'Chicago' }
    
]
function group_by(age) {
    if(age=25){
       console.log(person[0])
    }
    
}
console.log(group_by(25))