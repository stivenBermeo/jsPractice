//? Log structure : [TIME] [SEGMENT] [STATUS/EXTRA]

const log = (time, segment, status)=>{ console.log(`[${time}] - "${segment}" : ${status}`); };
const IIIPiecesLog = (a,b,c) => { console.log([a,b,c].join(', '))}
const curryIII= (fn)=> time => segment => status => { fn(time,segment,status) };
const curryLog = curryIII(log);

if(require.main === module){

  //? Code start, use case : updating personal data on app
  const loggingBeginning = curryLog('10:30');
  
  //? Credentials
  const credentialsLogging = loggingBeginning('credentials');
    //? username
    credentialsLogging('USERNAME EXISTS')
    //? password
    credentialsLogging('PASSWORD IS CORRECT')
    
    //? Updating data
    const updatesLogging = loggingBeginning('Updating data');
    //? name
    updatesLogging('NAME UPDATED SUCCESSFULLY')
    //? password
    updatesLogging('PASSWORD TOO SHORT, RETURNING VALIDATION')

}
    
module.exports.curryLogByIII = curryIII(IIIPiecesLog);
