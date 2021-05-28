

if(false){
  //? Basic bind usage
  
  const mod = {
    x : 1,
    getX : function(){
      return this.x;
    }
  }
  
  const unbounded = mod.getX;
  const bounded = unbounded.apply({x : 2});
  
  console.log('raw',mod.getX());
  console.log('Unbounded',unbounded());
  console.log('Bounded',bounded);
  
}

//? Bind usage with classes

  if(false){

    //? Regular
    class Raw{
      x = 99;
      getX(){ return this.x; }
    }
    
    const _Raw = new Raw();
    const unbounded = _Raw.getX;
    const bounded = unbounded;

    console.log('* raw',_Raw.getX()); // expected output 99
    console.log('* Unbounded',unbounded.apply(_Raw)); // expected output 99
    console.log('* Bounded',bounded.apply({x : 2})); // expected output 2
    
    //! Will work
  }
  
  if(false){

    //? Static fn
    class Raw{
      x = 99;
      static getX(){ return this.x; }
    }
    
    const _Raw = new Raw();
    const unbounded = Raw.getX; //? Cannot be used due instance has no access to static fn
    const bounded = Raw.getX.bind({x : 2});
    console.log('Unbounded',unbounded.apply(_Raw));
    console.log('Bounded',bounded.apply(null));
    
    //! Unlike bind, apply can set a class as a static function context
  }



//? Bind Creates a new (or refers to an specific) environment (an exotic function?) in which the binded function would be executed just like a closure