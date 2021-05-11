goog.module('org.pepstock.charba.client.colors.tiles.Diamond$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Diamond extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Diamond} */
 static $create__() {
  Diamond.$clinit();
  let $instance = new Diamond();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Diamond__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Diamond__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  this.m_drawDiamond__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawDiamond__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.fill();
 }
 
 m_drawDiamond__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  let quarterSize = size / 4;
  context.moveTo(quarterSize + offsetX, offsetY);
  context.lineTo(halfSize + offsetX, quarterSize + offsetY);
  context.lineTo(quarterSize + offsetX, halfSize + offsetY);
  context.lineTo(offsetX, quarterSize + offsetY);
 }
 
 static $clinit() {
  Diamond.$clinit = () =>{};
  Diamond.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Diamond;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Diamond, "org.pepstock.charba.client.colors.tiles.Diamond");

exports = Diamond;

//# sourceMappingURL=Diamond.js.map
