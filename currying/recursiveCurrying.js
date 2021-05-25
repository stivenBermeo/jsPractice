//? use lodash, this already exists try to mutate only if necessary(couldn't bother to look for the function in it's github page)

const spacing = function(){
  console.log(Object.values(arguments).join(' '));  
}

const recCurrying = function(fn, _params = []){
  return (newArg, exec = false )=>{ 
    let params = [..._params,newArg];
    if(exec) fn.apply(null, [...params]);
    return recCurrying(fn, params);
  }
}


console.log('\nCase A');
let spacingCurryingA = recCurrying(spacing);
spacingCurryingA('esto')('es')('currying')('puro')('y')('duro :)',true)('y')('lo')('mejor')('es')('que')('es')('dinámico',true);

console.log('\nCase B');
let spacingCurryingB = recCurrying(spacing);
spacingCurryingB = spacingCurryingB('esto')('es')('currying')('puro')('y')('duro :)',true);
spacingCurryingB('y')('lo')('mejor')('es')('que')('es')('dinámico',true);

console.log('\nCase C');
let spacingCurryingC = recCurrying(spacing);
spacingCurryingC('esto')('es')('currying')('puro')('y')('duro :)',true);
spacingCurryingC('esto')('es')('currying')('puro')('y')('duro :)')('y')('lo')('mejor')('es')('que')('es')('dinámico',true);