function QF() {
  // getting values to do quadratic formula
  
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  x1 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
  x2 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
  $("#solution1").text("X intercept at " +x1);
  $("#solution2").text("X intercept at " +x2);
  
  //context.beginPath();
  //context.arc(w/2+x1*k,h/2,5,0,6.28);
  //context.fill();
  //context.beginPath();
  //context.arc(w/2+x2*k,h/2,5,0,6.28);
  //context.fill();
  results();
  console.log(a,b,c);
  graphQuad();
}  // close QF



function results() {

  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  vX = vX.toFixed(2);
  vY = plugX(vX);
  vY = vY.toFixed(2);
  $("#vertex").text("Vertex is at (" + vX+","+vY+")");
  $("#symline").text(" Sym line x =" + vX );
  $("#y-int").text("Y intercept is at (0,"+ c+")");
  //ctx.beginPath();
  //y intercept
  //ctx.arc(w/2,h/2-c*k,5,0,6.28);
  //ctx.fill();
  //Xcp = 2*vX;
  $("#cp").text("Corr. Pt. is at ( 0 ,"+ 2 * vX +"," + c +")");
  //ctx.beginPath();
  //vertex
  //ctx.arc(w/2+vX*k,h/2-vY*k,5,0,6.28);
  //ctx.fill();

  //ctx.beginPath();
  // c point

  ctx.beginPath();
  ctx.arc(scaledX(0),scaledY(plugX(0)),5,0,6.28);
  ctx.fill();

  ctx.lineWidth= 2;
  ctx.strokeStyle= "rgba(0,50,200,.3)";
  ctx.setLineDash([10,5]);
  ctx.beginPath();
  ctx.moveTo(scaledX(vX),0);
  ctx.lineTo(scaledX(vX),h);
  ctx.stroke();
  ctx.setLineDash([0]);


}  // close results()

function plugX(x){
  y = a*Math.pow(x,2)+b*x+c*1;
  return y;
}

function graphQuad () {
  
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    nx =  (w/2-(i+1))/k
    


    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.moveTo(scaledX(x), scaledY(plugX(x)));
    ctx.lineTo(scaledX(nx), scaledY(plugX(nx)));
    ctx.stroke();
  }
}

function scaledX(x) {
  newx = w/2+x*k;
  return newx;
}

function scaledY(y) {
  newy = h/2-y*k;
  return newy;
}