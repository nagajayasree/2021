"use strict";
function setAlarm(params) {
    if (params.employed == true && params.vacation == false) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
setAlarm({ employed: true, vacation: true });
setAlarm({ employed: false, vacation: true });
setAlarm({ employed: false, vacation: false });
setAlarm({ employed: true, vacation: false });
