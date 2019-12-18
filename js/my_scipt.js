jQuery(document).ready(function($) {
			$('.my-slider').unslider({
				autoplay:true,
				arrows:false
			});
		});


function setEqualHeight(columns) { 
		var tallestcolumn = 0; 
		columns.each( function() { 
			currentHeight = $(this).height(); 
			if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
			columns.height(tallestcolumn); 
		} 
		
		$(document).ready(function() { setEqualHeight($(".main-content")); });




var handler = function () {
	this.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/vEtpaV0_XgA?rel=0&amp;vq=hd720&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>'
	};
	 
document.querySelector('.video-main-text').addEventListener('click', function (e) {
 	this.removeEventListener('click', handler, false); handler.apply(this, arguments); 
	} , false);
	