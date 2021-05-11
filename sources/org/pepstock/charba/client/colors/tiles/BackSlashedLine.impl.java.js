goog.module('org.pepstock.charba.client.colors.tiles.BackSlashedLine$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class BackSlashedLine extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BackSlashedLine} */
 static $create__() {
  BackSlashedLine.$clinit();
  let $instance = new BackSlashedLine();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_BackSlashedLine__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_BackSlashedLine__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let quarterSize = size / 4;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, 0, quarterSize * -2, size, quarterSize * 6);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, quarterSize, quarterSize * -4, size + quarterSize, size);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, quarterSize * -1, 0, quarterSize * 3, size * 2);
  context.stroke();
 }
 
 m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ startX, /** number */ startY, /** number */ endX, /** number */ endY) {
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
 }
 
 static $clinit() {
  BackSlashedLine.$clinit = () =>{};
  BackSlashedLine.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BackSlashedLine;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(BackSlashedLine, "org.pepstock.charba.client.colors.tiles.BackSlashedLine");

exports = BackSlashedLine;

//# sourceMappingURL=BackSlashedLine.js.map
