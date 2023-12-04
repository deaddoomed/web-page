function isMobile() {
    const plataforms = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return plataforms.test(navigator.userAgent);
  }
 
function consoleLog(){  
    if (isMobile()) {
        console.log("Mobile device detected");
    } else {
        console.log("Desktop device detected");
    }
}