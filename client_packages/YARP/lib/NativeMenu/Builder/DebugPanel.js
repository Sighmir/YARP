'use strict';
/**
 * Implements a debug panel.
 */
class DebugPanel {
  /**
   * Creates an instance of DebugPanel.
   * @param {Number} x
   * @param {Number} y
   * @param {Number} width
   * @param {Number} height
   * @param {String} text
   * @param {*} [data={}]
   * @memberof DebugPanel
   */
  constructor(x, y, width, height, text, data = {}) {
    this.data = data;
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // Fonts
    this.fontScale = [0.35, 0.35];
    this.fontScaleOffsetFix = 0.018;
    this.fontType = 4;
    this.fontOutline = false;
    // Skin
    this.skin = new NativeMenu.Skin();
  }

  /**
   * Draw the panel.
   * @memberof DebugPanel
   */
  draw() {
    mp.game.graphics.drawText(this.text, [this.x, this.y - this.fontScaleOffsetFix], {
      font: this.fontType,
      centre: true,
      color: [this.skin.textColor.red, this.skin.textColor.green, this.skin.textColor.blue, this.skin.textColor.alpha],
      scale: [this.fontScale[0], this.fontScale[1]],
      outline: this.skin.textOutline,
    });
  }
}

exports = DebugPanel;
