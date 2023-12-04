function isMobile() {
    const plataforms = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return plataforms.test(navigator.userAgent);
  }
 
function downloadMethod(){  
    if (isMobile()) {
        deletedLink = document.getElementById("downloadLink");
    } else {
        deletedLink = document.getElementById("downloadQR");
    }
    deletedLink.remove();
}