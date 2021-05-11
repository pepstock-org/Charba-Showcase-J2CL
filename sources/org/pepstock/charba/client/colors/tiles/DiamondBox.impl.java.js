goog.module('org.pepstock.charba.client.colors.tiles.DiamondBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class DiamondBox extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DiamondBox} */
 static $create__() {
  DiamondBox.$clinit();
  let $instance = new DiamondBox();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_DiamondBox__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_DiamondBox__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawDiamond__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawDiamond__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.stroke();
 }
 
 m_drawDiamond__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2 - 1;
  let quarterSize = size / 4;
  context.moveTo(quarterSize + offsetX, offsetY + 1);
  context.lineTo(halfSize + offsetX, quarterSize + offsetY);
  context.lineTo(quarterSize + offsetX, halfSize + offsetY);
  context.lineTo(offsetX + 1, quarterSize + offsetY);
  context.lineTo(quarterSize + offsetX, offsetY + 1);
 }
 
 static $clinit() {
  DiamondBox.$clinit = () =>{};
  DiamondBox.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DiamondBox;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DiamondBox, "org.pepstock.charba.client.colors.tiles.DiamondBox");

exports = DiamondBox;

//# sourceMappingURL=DiamondBox.js.map
