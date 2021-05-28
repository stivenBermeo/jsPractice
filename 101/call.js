


if(false){
  //? Vanilla
  function Product (name, price){
    this.name = name;
    this.price = price;
  }

  function Food (name, price){
    Product.call(this, name, price);
    this.category = 'food';
  }

  function OtherFn (customer){
    this.customer = customer;
  }

  console.log(new Food('cheese','0.74').name);

}

if(true){
  //? Vanilla
  function Product (name, price){
    this.name = name;
    this.price = price;
    this.code = `${name}@${price}`;
  }

  function Food (name, price){
    process.nextTick(()=>{
      Product.call(_otherFn, name, price);
    })
    this.category = 'food';
  }

  function OtherFn (customer){
    this.customer = customer;
  }

  _food = new Food('cheese','0.74');
  _otherFn = new OtherFn('Mike');
  _product = new Product('book','9.99');

  setTimeout(() => {
    console.log({Food, _food})
    console.log({OtherFn, _otherFn})
    console.log({Product, _product})
  }, 1000);

}


