

if(false){
  //? Basic bind usage
  
  const mod = {
    x : 1,
    getX : function(){
      return this.x;
    }
  }
  
  const unbounded = mod.getX;
  
  const bounded = unbounded.bind({x : 2});
  
  console.log('raw',mod.getX());
  console.log('Unbounded',unbounded());
  console.log('Bounded',bounded());
  
}

//? Bind usage with classes

  if(false){

    //? Regular
    class Raw{
      x = 99;
      getX(){ return this.x; }
    }
    
    const _Raw = new Raw();
    // const unbounded = _Raw.getX;
    const bounded = _Raw.getX.bind({x : 2});
    console.log('raw',_Raw.getX());
    // console.log('Unbounded',unbounded);
    console.log('Bounded',bounded());
    
    //! Using "unbounded" will throw an undefined error
  }
  
  if(true){

    //? Static fn
    class Raw{
      x = 99;
      static getX(){ return this.x; }
    }
    
    const _Raw = new Raw();//? Cannot be used due instance has no access to static fn
    
    const unbounded = Raw.getX;  //? won't work, it still defines the context as a class, so static function won't have context
    unbounded.bind(_Raw);
    // console.log('Unbounded',unbounded()); //? TypeEror undefined

    const bounded = Raw.getX.bind({x : 2});
    console.log('Bounded',bounded());
    
    //! Still works because `bind` bounds a context
  }
  


//? Bind Creates a new (or refers to an specific) environment (an exotic function?) in which the binded function would be executed just like a closure