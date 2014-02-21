
/**
 * 4 * ((√(2) - 1) / 3)
 */

var kappa = 0.5522848;

/**
 * Draw ellipse on canvas.
 *
 * @see http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} node
 * @api public
 */

module.exports = function(ctx, node){
  var w = node.width;
  var h = node.height;

  var x = node.x - w/2;
  var y = node.y - h/2;

  ctx.beginPath();

  var ox = (w / 2) * kappa  // control point offset horizontal
    , oy = (h / 2) * kappa  // control point offset vertical
    , xe = x + w            // x-end
    , ye = y + h            // y-end
    , xm = x + w / 2        // x-middle
    , ym = y + h / 2;       // y-middle

  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

  ctx.closePath();

  if (node.fill) {
    ctx.fillStyle = node.fill.style;
    ctx.fill();
  }

  if (node.stroke) {
    ctx.strokeStyle = node.stroke.style;
    ctx.lineWidth = node.stroke.width;
    ctx.stroke();
  }
}