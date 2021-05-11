goog.module('org.pepstock.charba.client.colors.tiles.Box$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Box extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Box} */
 static $create__() {
  Box.$clinit();
  let $instance = new Box();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Box__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Box__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawBox__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawBox__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.stroke();
 }
 
 m_drawBox__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  let margin = size / 20;
  let wholeMargin = margin * 4;
  context.strokeRect(offsetX + margin, offsetY + margin, halfSize - wholeMargin, halfSize - wholeMargin);
 }
 
 static $clinit() {
  Box.$clinit = () =>{};
  Box.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Box;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Box, "org.pepstock.charba.client.colors.tiles.Box");

exports = Box;

//# sourceMappingURL=Box.js.map
