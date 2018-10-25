// 继承方案的设计要求
const parent = {
  some: 'data'
}
const child = {
  ...parent,
  uniq: 'data'
}
console.log('child', child)
// 被复用的对象， call继承
function Animal(name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}
function Cat(name, age) {
  Animal.call(this, name)
  this.age = age || 1
  this.meow = function() {
    return `${this.getName()}eowww~~~~~, I'm ${this.age} year(s) old`
  }
}
const cat = new Cat('lily', 2)
console.log(cat.meow())

// 原型继承
function Animal(name) {
  this.name = name
}
Animal.prototype.getName = function() {
  return this.name
}
function Cat(name, age) {
  console.log('this', this)
  Animal.call(this, name)
  this.age = age || 1
}
Cat.prototype = Object.create(Animal.prototype, { constructor: Cat })
Cat.prototype.meow = function() {
  return `${this.getName()}eowww~~~~~, I'm ${this.age} year(s) old`
}
const cats = new Cat('lily', 2)
console.log(cats.meow())


// ES6 class， extends

class Animal {
  constructor(name) {
    this.name = name
  }
  getName(){
    return this.name
  }
}
class Cat extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age || 1
  }
  meow() {
    return `${this.getName()}eowww~~~~~, I'm ${this.age} year(s) old`
  }
}
var c = new Cat('lily', 2)
console.log('c', c.meow())
