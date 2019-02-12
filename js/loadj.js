var mqls = [ // list of window.matchmedia() queries
    window.matchMedia("(max-width: 512px)"),
    window.matchMedia("(max-width: 1024px)"),
    window.matchMedia("(max-width: 1920px)")   
  ]
  
  function mediaqueryresponse(mql){
    var data;
    if (mqls[0].matches) {
      data = {
        poster: "assets/img/pages/home/adjustable-height-desk-p.jpg",
        source:    "https://www.evodesk.com/assets/img/video/evodesk-life.mp4"
      }
    }else if(mqls[1].matches){
      data = {
        poster: "assets/img/pages/home/adjustable-height-desk-p.jpg",
        source:    "https://www.evodesk.com/assets/img/video/evodesk-phone.mp4"
      }
    }else if(mqls[2].matches){
      data = {
        poster: "assets/img/pages/home/adjustable-height-desk-p.jpg",
        source:    "https://www.evodesk.com/assets/img/video/evodesk-pad.mp4"
      }
    }else{
      data = {
        poster: "assets/img/pages/home/adjustable-height-desk-p.jpg",
        source:    "https://www.evodesk.com/assets/img/video/evodesk-desktop.mp4"
      }
    
    }

    let video = document.getElementById("vidbg");
    video.setAttribute("poster", data.poster);
      document.getElementById("src-vidbg").setAttribute("src", data.source);
    video.load();
    video.play();
    // width: 860px media match?
  // width: 600px media match?
    // height: 500px media match?
  }
  
  for (var i=0; i<mqls.length; i++){
   mediaqueryresponse(mqls[i]) // call action function explicitly at run time
   mqls[i].addListener(mediaqueryresponse) // call action function whenever each media query is triggered
  }