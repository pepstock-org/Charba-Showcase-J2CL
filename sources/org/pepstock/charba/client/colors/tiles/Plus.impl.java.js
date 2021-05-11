goog.module('org.pepstock.charba.client.colors.tiles.Plus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Plus extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Plus} */
 static $create__() {
  Plus.$clinit();
  let $instance = new Plus();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Plus__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Plus__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawPlus__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawPlus__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.stroke();
 }
 
 m_drawPlus__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  let quarterSize = size / 4;
  context.moveTo(quarterSize + offsetX, offsetY);
  context.lineTo(quarterSize + offsetX, halfSize + offsetY);
  context.moveTo(offsetX, quarterSize + offsetY);
  context.lineTo(halfSize + offsetX, quarterSize + offsetY);
 }
 
 static $clinit() {
  Plus.$clinit = () =>{};
  Plus.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Plus;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Plus, "org.pepstock.charba.client.colors.tiles.Plus");

exports = Plus;

//# sourceMappingURL=Plus.js.map
