//!Задачи по деструктуризации:

//?Создайте объект с полями name, age и city. 
//?С помощью деструктуризации получите значения этих полей в переменные personName, personAge и personCity.

// let obj = {
//     name: 'Ulukbek',
//     age: 21,
//     city: 'Bishkek'
// }

// const { name } = obj
// const { age } = obj
// const { city } = obj

// const personName = name
// const personAge = age
// const personCity = city


// console.log(personName, personAge, personCity);

//?У вас есть массив, содержащий объекты. Каждый объект описывает человека и содержит поля name и age.
//?С помощью деструктуризации получите значения этих полей для первого элемента массива в переменные firstName и firstAge.
// let arr = [
//     {
//     name: 'Ulukbek',
//     age: 21
//     },
//     {
//     name: 'Dima',
//     age: 16
//     },
//     {
//     name: 'Kalys',
//     age: 20
//     },
// ]

// const [ a ] = arr
// console.log(a);
//?У вас есть объект, содержащий массив чисел.
//?С помощью деструктуризации получите первый и второй элементы массива в переменные firstNum и secondNum.

// let obj = {
//     arr: [1,2,3,4,5,6,7,8,9]
// }

// const { arr:[a,b] } = obj
// console.log(a,b);

//?Создайте объект person с полями name и age.
//?С помощью деструктуризации создайте новый объект newPerson, содержащий только поле name из объекта person.

// let person = {
//     name: 'Kazuya',
//     age: '51'
// }

// const { name } = person

// const newPerson = {
//     name
// }

// console.log(newPerson);

//?Создайте функцию, которая принимает на вход объект с полями name, age и city,
//?а затем с помощью деструктуризации выводит значения этих полей в консоль.

// const fn = ({name, age, city}) => {
//     console.log(name)
//     console.log(age)
//     console.log(city)

// }

// let person = {
//     name: 'Kazuya',
//     age: '51',
//     city: 'Tokyo'
// }

// fn(person)

//!Задачи со spread оператором:

//?Создайте массив numbers1 с элементами 1, 2, 3 и массив numbers2 с элементами 4, 5, 6. 
//?Используя оператор spread, объедините эти два массива в новый массив allNumbers.

// const numbers1 = [1,2,3]
// const numbers2 = [4,5,6]

// const allNumbers = [numbers1, ...numbers2]

// console.log(allNumbers);

//?Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender.
//?Используя оператор spread, создайте новый объект newPerson, содержащий все поля из person1 и person2.

// const person1 = {
//     name: 'Jin',
//     age: 21,
// }

// const person2 = {
//     city: 'Tokyo',
//     gender: 'Gay'
// }

// const newPerson = {person1, ...person2}

// console.log(newPerson);

//?Создайте функцию, которая принимает на вход массив чисел и возвращает новый массив, 
//?содержащий все элементы исходного массива и число 0 в конце. Используйте оператор spread.

// const fn = (arrNum) => {
//     const newArr = [...arrNum, 0]
//     return newArr
// }

// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(fn(arr));

//?Создайте объект person с полями name и age. Используя оператор spread, создайте новый объект newPerson, 
//?содержащий все поля из person, а также дополнительное поле city.

// const person = {
//     name: 'Heihachi',
//     age: '79'
// }

// const newPerson = {
//     ...person,
//     city: 'Tokyo'
// }

// console.log(newPerson);

//?Создайте функцию, которая принимает на вход объект person с полями name, age и city,
//?а затем с помощью оператора spread выводит значения этих полей в консоль.

// const fn = (objPerson) => {
//     console.log({...objPerson})
// }

// const person = {
//     name: 'Heihachi',
//     age: '79',
//     city: 'Tokyo'
// }

// fn(person)

//!Задачи, комбинирующие деструктуризацию и spread оператор:

//?У вас есть объект person с полями name, age и city.
//?Создайте новый объект newPerson, который содержит все поля из person, кроме поля city. Используйте деструктуризацию и оператор spread.

// const person = {
//     name: 'Heihachi',
//     age: '79',
//     city: 'Tokyo'
// }

// const {city, ...NewPerson} = person

// console.log(NewPerson);

//?Создайте массив numbers с элементами 1, 2, 3, 4, 5. С помощью деструктуризации и оператора spread создайте новый массив, 
//?содержащий первый элемент исходного массива и все остальные элементы, начиная со второго.

// const arrNum = [1,2,3,4,5]
// const [first, ...rest] = arrNum
// const newArr = [first, ...rest]
// console.log(newArr);

//?Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender.
//?Создайте новый объект newPerson, который содержит поле name из person1 и поля city и gender из person2.
//?Используйте деструктуризацию и оператор spread.

// const person1 = {
//     name: 'Kazuya',
//     age: '51',
// }

// let person2 = {
//     gender: 'Devil',
//     city: 'Tokyo'
// }

// const newPerson = {
//     ...person1,
//     ...person2
// }

// console.log(newPerson);

//?Создайте объект person с полями name и age, а также массив hobbies со строками, описывающими хобби. 
//?Создайте новый объект newPerson, который содержит все поля из person, а также дополнительное поле hobbies,
//?содержащее все элементы массива hobbies. Используйте деструктуризацию и оператор spread.

// const person1 = {
//     name: 'Kazuya',
//     age: '51',
// }

// const hobby = ['throwing family members off a cliff', 'being a monster', 'to humiliate others']

// const newPerson = {
//     ...person1,
//     ...hobby
// }
// console.log(newPerson);

//?Создайте функцию, которая принимает на вход объект person с полями name, age и city, 
//?а затем с помощью деструктуризации и оператора spread выводит значения этих полей в консоль, а также строку "Country: USA".

// const fn = (objPerson) => {
//     const newPerson = {
//         ...objPerson,
//         country: 'USA'
//     }
//     console.log(newPerson)
// }

// const person = {
//     name: 'Heihachi',
//     age: '79',
//     city: 'Tokyo'
// }

// fn(person)