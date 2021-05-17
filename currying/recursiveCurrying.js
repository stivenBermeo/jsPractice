//? use lodash, this already exists try to mutate only if necessary(couldn't bother to look for the function in it's github page)

const spacing = function(){
  console.log(Object.values(arguments).join(' '));
}

const recCurrying = function(fn, params = []){
  return (newArg)=>{ 
    params = [...params,newArg]   
    fn.apply(null,params);
    return recCurrying(fn,params);
  }
}

const spacingCurrying = recCurrying(spacing);
const potentialCurryingMeme =  spacingCurrying('this')('is') ;
spacingCurrying('some');
spacingCurrying('lame')('text');
potentialCurryingMeme('Sparta !');