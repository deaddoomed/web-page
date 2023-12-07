function isMobile() {
    const plataforms = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return plataforms.test(navigator.userAgent);
  }
 
function downloadMethod(){  
    if (isMobile()) {
        document.getElementById("downloadQR").style.display = "none";
    } else {
        document.getElementById("downloadLink").style.display = "none";
    }
}