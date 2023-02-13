var canvasElement = document.getElementById("drawingCanvas");
var canvas = canvasElement === null || canvasElement === void 0 ? void 0 : canvasElement.getContext("2d");
var fillColour = { r: 0, g: 0, b: 0, a: 255 };
var strokeColour = { r: 0, g: 0, b: 0, a: 255 };
//#region drawing
function line(x1, y1, x2, y2) {
    canvas.moveTo(x1, y1);
    canvas.lineTo(x2, y2);
    canvas.stroke();
}
function circle(x, y, r) {
    canvas.beginPath();
    canvas.arc(x, y, r, 0, 2 * Math.PI);
    canvas.stroke();
}
function font(fontName) {
    canvas.font = fontName;
}
function text(t, x, y) {
    canvas.fillText(t, x, y);
}
function fill(red, green, blue, alpha) {
    fillColour = { r: red, g: green, b: blue, a: alpha };
}
function stroke(red, green, blue, alpha) {
    strokeColour = { r: red, g: green, b: blue, a: alpha };
}
//endregion
line(50, 50, 150, 150);
circle(200, 200, 200);
font("15px Arial");
text("Hello typescript", 200, 200);
