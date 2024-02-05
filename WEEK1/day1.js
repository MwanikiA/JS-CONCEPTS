/**
 * @var
 * you can redeclare
 * var name= 'Abby'
 * var name = ' Yvonne'
 * you can reassign
 * var name = 'Abby'
 * name = 'njeri'
 * 
 * only globally scoped
 */

/**
 * @let
 * you cant redeclare
 * you can reassign
 * let name = 'Abby'
 * name = 'Yvonne'
 * both global and locaally scoped
 * locally scoped if within curly baracets...same with const
 */

/**
 * @const
 * you cant redeclare or reassign
 * const name = 'Abby'
 */

//Data types//
/** Primitive data types
 * @strings - Characters or numbers wrapped in a quote  eg. 'Abby' "Abby" '123'
 * @numbers - decimals, while numbers, negative numbers eg '0.4'
 * @booleans - true or false statements
 * @undefined - no value assigned
 * @null - nothing
 */

/** Non primitive data types
 * @lists - arrays eg ('abby', 'shiku', 'ray')
 * @objects - dictionaries (key values/ pairs)
 * 
 */

/** Math opertors
 * @addition - plus
 * @subtraction - minus
 * @division - forward slash
 * @multiplication - asterix
 * @modulus  - % picks the remainder in a division cases like 11/5...one is the modulus
 * 
 */

/**
 * how to convert string to numbers and the reverse
 */
//Revenue
//Expenses
//Cost of goods sold
//Profits
/** 
const costofsock = 50
const costofbag = 50
const costofbatch = (costofsock * 3)
const sellingprice = 1000
const revenue = (sellingprice * 30) * 70/100


const boughtsocks = costofsock * 90
const boughtbags = costofbag * 30
const profit = revenue - ( boughtsocks + boughtbags )

const numberofsock = 100
const remainingsocks = 10

//console.log(profit) 
*/
/**
 * @naming rules
 * pascal case --- ThisIsPascalCase
 * Camel case ------thisIsCamelCase........used for js
 * snake case ------thi_is_snake_case
 * 
 */





//parseInt
//parseFloat
//Number

let length = parseFloat(prompt("Length of the rectangle?"))
let width = parseFloat(prompt("Width of the rectangle"))
let perimeter = (length * 2) + (width * 2)
let area = length * width
parseInt("length")
parseInt("width")
console.log('area')
console.log(area)
console.log('perimeter')
console.log(perimeter)


