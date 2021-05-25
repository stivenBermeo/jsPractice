document.querySelector('.k9GMp :nth-child(3) a').click() // Opens followings modal

window.setTimeout(()=>{
  var toBeUnfollowed = document.querySelectorAll('.jSC57._6xe7A button._8A5w5');
  var deleteFollowings = (list)=>{
    return function(index, fn){
      list[index].click();
      window.setTimeout(()=>{
        var unfollowBtn = document.querySelector('.aOOlW.-Cab_') // finds the confirmation btn
        console.log('unfollowBtn',unfollowBtn); //?output
        if(!unfollowBtn){ 
          console.log('Btn not found',unfollowBtn,'.aOOlW.-Cab_' ); //?output
          return;
        }
        unfollowBtn.click(); // clicks the confirmation btn
        console.log("User unfollowed \n");//?output
        window.setTimeout(()=>{
          if(index < list.length -1 ){
            fn(index +1, fn);
          }else{
            var modal = document.querySelector('.isgrP')
            modal.scrollTo(0,modal.scrollHeight);
            window.setTimeout(()=>{
              var toBeUnfollowed = document.querySelectorAll('.jSC57._6xe7A button._8A5w5');
              var executeFn = deleteFollowings(toBeUnfollowed);
              executeFn(0, executeFn );
            },1000)
          }
        },10000)
      },10000)  
    }
  }
  var executeFn = deleteFollowings(toBeUnfollowed);
  executeFn(0, executeFn );
},1000);
