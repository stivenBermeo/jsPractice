//? Log structure : [TIME] [SEGMENT] [STATUS/EXTRA]

const log = (time, segment, status)=>{ console.log(`[${time}] - "${segment}" : ${status}`); }
const curryIII= (fn)=>{
  return function(time){
    return function(segment){
      return function(status){
        fn(time,segment,status)
      }
    }
  }
}
const curryLog = curryIII(log);

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
