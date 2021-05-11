goog.module('org.pepstock.charba.client.colors.tiles.SlashedLine$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class SlashedLine extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SlashedLine} */
 static $create__() {
  SlashedLine.$clinit();
  let $instance = new SlashedLine();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_SlashedLine__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_SlashedLine__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let quarterSize = size / 4;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, quarterSize * -2, 0, quarterSize * 6);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, quarterSize * 3, quarterSize * -4, quarterSize * -1, size);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size + quarterSize, 0, quarterSize, size * 2);
  context.stroke();
 }
 
 m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ startX, /** number */ startY, /** number */ endX, /** number */ endY) {
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
 }
 
 static $clinit() {
  SlashedLine.$clinit = () =>{};
  SlashedLine.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SlashedLine;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(SlashedLine, "org.pepstock.charba.client.colors.tiles.SlashedLine");

exports = SlashedLine;

//# sourceMappingURL=SlashedLine.js.map
