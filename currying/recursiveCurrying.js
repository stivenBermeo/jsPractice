//? use lodash, this already exists try to mutate only if necessary(couldn't bother to look for the function in it's github page)


const spacing = function(){
  console.log(Object.values(arguments).join(' '));
}

class Currying {

  params = [];
  fn = null;
  constructor(fn){
    this.fn = fn;
  }

  curry(val){
    this.params.push(val);
    return (newArg)=>{
      return this.curry(newArg)
    };
  }

  exec(){
    this.fn.apply(null, this.params);
  }

}

const spaceCurrying = new Currying(spacing);

const x = spaceCurrying.curry('this')('is');
spaceCurrying.curry('text');
spaceCurrying.exec();

spaceCurrying.curry('it also is')('-kinda-')('-fun tho\'-' );
spaceCurrying.curry('crappy code for practice');
spaceCurrying.exec();

