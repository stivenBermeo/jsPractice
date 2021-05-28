



class Product {
  
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

}

class Food extends Product{ //? Inheritance replaces `Call` in ES6

  category = 'food';
  constructor(name, price){
    super(name,price);
  }

}


const food = new Food('Cheese','0.78');
console.log({food})