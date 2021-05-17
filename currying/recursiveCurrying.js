//? use lodash, this already exists try to mutate only if necessary(couldn't bother to look for the function in it's github page)


const spacing = function(){
  const args  = [...Object.values(arguments)];
  const limit = args.splice(-1);

  if(args.length >= limit){
    console.log(args.join(' '));
  }
  
}

const recCurrying = function(fn, _params = [], num){
  return (newArg, _alterNumAtAnyPoint = false)=>{ 
    let params = [..._params,newArg]   
    fn.apply(null, [...params, _alterNumAtAnyPoint? _alterNumAtAnyPoint :  num]);
    return recCurrying(fn,params,num);
  }
}

let spacingCurryingVI = recCurrying(spacing,[],6);
const potentialCurryingMeme = spacingCurryingVI = spacingCurryingVI('this')('is') ;
spacingCurryingVI = spacingCurryingVI('some');
spacingCurryingVI = spacingCurryingVI('lame')('text');
spacingCurryingVI = spacingCurryingVI('/dot for testing purposes/ .');
potentialCurryingMeme('Sparta !',3);