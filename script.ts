
const canvasElement : any = document.getElementById("drawingCanvas");
const canvas = canvasElement?.getContext("2d");
let fillColour : Colour = {r : 0, g : 0, b : 0, a : 255};
let strokeColour : Colour = {r : 0, g : 0, b : 0, a : 255};

//#region drawing
function line(x1: Number, y1: Number, x2: Number, y2 : Number,) : void {
  canvas.moveTo(x1, y1);
  canvas.lineTo(x2, y2);
  canvas.stroke();
}

function circle(x : Number, y : Number, r: Number) : void {
  canvas.beginPath();
  canvas.arc(x, y, r, 0, 2 * Math.PI);
  canvas.stroke();
}

function font(fontName : string) : void {
  canvas.font = fontName;
}

function text(t : String, x : Number, y : Number) : void {
  canvas.fillText(t, x, y);
}

function fill(red : Number, green : Number, blue : Number, alpha : Number) : void {
  fillColour = {r : red, g : green, b : blue, a : alpha};
}

function stroke(red : Number, green : Number, blue : Number, alpha : Number) : void {
  strokeColour = {r : red, g : green, b : blue, a : alpha};
}

interface Colour {
  r : Number;
  g : Number;
  b : Number;
  a : Number;
}

//endregion

line(50, 50, 150, 150);
circle(200, 200, 200);
font("15px Arial");
text("Hello typescript", 200, 200);
