//global variables
var a, b, c, context, w, h, k=10, ctx, vX, vY;

function init() {
	canvas= document.getElementById("mycanvas");
	ctx = canvas.getContext("2d");

	w = canvas.width = 600;
	h = canvas.height = 400;



	//ctx.shadowBlur = 20;
	//ctx.shadowColor = "grey";
	//ctx.fillStyle = "#f4f0ed";
	//ctx.fillRect(15, 15, 570, 370);

	console.log('canvas is loaded into context',w);
	graphpaper();
}
function graphpaper() {
  // the x and y axis drawn
  ctx.beginPath();
  ctx.moveTo(w/2,15);
  ctx.lineTo(w/2, h -15);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(15,h/2);
  ctx.lineTo(w -15, h/2);
  ctx.stroke();

// thin line with a 50% opacity using rgba() 
  ctx.lineWidth="1";
  ctx.strokeStyle="grey";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<h/(2*k)-1; i++) {
    ctx.beginPath();
    ctx.moveTo( 15, h/2-i*k);
    ctx.lineTo( w-15, h/2-i*k);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo( 15, h/2+i*k );
    ctx.lineTo( w-15, h/2+i*k );
    ctx.stroke();

}

  for (i=0; i<w/(2*k)-1; i++) {

    ctx.beginPath();
    ctx.moveTo(w/2-i*k, 15 );
    ctx.lineTo(w/2-i*k, h-15 );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w/2+i*k, 15 );
    ctx.lineTo(w/2+i*k, h-15 );
    ctx.stroke();

}
} // close grapher


function zoomin () {
  k=k+3;
  init();
  wtf();
}

function zoomout () {
  k=k-3;
  init();
  wtf();
  

}

