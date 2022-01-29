//1
let arr1={  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }
let {name,hostname,client,...rest} = arr1

// console.log(rest)

//3
let [a,b,...rest1] = [500,600,100,200]
console.log(rest1)