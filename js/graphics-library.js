// Graphics Library
// Requires global cnv and ctx variables

// FUNCTION LIST
// background(color)
// stroke(color)
// fill(color)
// line(x1, y1, x2, y2)
// rect(x, y, w, h, mode)
// circle(x, y, r, mode)
// triangle(x1. y1. x2, y2, x3, y3, mode)
// text(message, x, y, mode)
// ellipse(x, y, xRadius, yRadius, rotation, mode)
// image(img, x, y, w, h)
// imageClip(img, xc, yc, wc, hc, x, y, w, h)


//Fill the canvac with the provided color
function background(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}

function stroke(color) {
  ctx.strokeStyle = color;
}

function fill(color) {
  ctx.fillStyle = color;
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode == "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.sstrokeText(message, x, y);
  }
}

function ellipse(x, y, xRadius, yRadius, rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
  ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

