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

const _Currying = new Currying(spacing);

const x = _Currying.curry('this')('is');
_Currying.curry('text');
_Currying.exec();

_Currying.curry('it also is')('-kinda-')('-fun tho\'-' );
_Currying.curry('crappy code for practice');
_Currying.exec();

