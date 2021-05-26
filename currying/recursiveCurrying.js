//? use lodash, this already exists try to mutate only if necessary(couldn't bother to look for the function in it's github page)
const {curryLogByIII} = require('./currying');

const spacing = (params) => params.join(' ') ;
const recCurrying = ( fn, _params = [] ) => newArg => (newArg === undefined) ? fn(_params) : recCurrying(fn, [..._params, newArg]);

if(require.main === module){

  const loggingCaseB = curryLogByIII('Case B');
  const loggingCaseC = curryLogByIII('Case C');
  
  let spacingCurryingB, spacingCurryingC;
  
  
spacingCurryingB = recCurrying(spacing);
spacingCurryingB = spacingCurryingB('esto')('es')('currying')('puro')('y')('duro :)');
loggingCaseB( spacingCurryingB() )('P1\n');
loggingCaseB( spacingCurryingB('y')('lo')('mejor')('es')('que')('es')('dinámico')() )('P2\n');

spacingCurryingC = recCurrying(spacing);
loggingCaseC( spacingCurryingC('esto')('es')('currying')('puro')('y')('duro :)')() )('V1\n');
loggingCaseC( spacingCurryingC('esto')('es')('currying')('puro')('y')('duro :)')('y')('lo')('mejor')('es')('que')('es')('dinámico')() )('V2\n');

}

module.exports = { recCurrying }