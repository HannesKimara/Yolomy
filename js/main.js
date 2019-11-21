$(document).ready(function(){
  $(".mouse_click").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
          $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400, function(){

        window.location.hash = hash;
      });
    }
  });
});

function toggleprm(){
	if (document.getElementById('yl-checkbox1').checked === true){
		document.getElementById('yl-men-pr').style.display = "block";
	} else if (document.getElementById('yl-checkbox1').checked === false){
		document.getElementById('yl-men-pr').style.display = "none";
	};
	
}

function toggleprw(){
	if (document.getElementById('yl-checkbox2').checked === true){
		document.getElementById('yl-wom-pr').style.display = "block";
	} else if (document.getElementById('yl-checkbox2').checked === false){
		document.getElementById('yl-wom-pr').style.display = "none";
	}
}

function togglepr() {
	document.getElementById('yl-checkbox1').checked = true;
	document.getElementById('yl-checkbox2').checked = true;
	toggleprm();toggleprw();
}
















