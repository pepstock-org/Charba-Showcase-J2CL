goog.module('org.pepstock.charba.client.colors.tiles.Cross$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Cross extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Cross} */
 static $create__() {
  Cross.$clinit();
  let $instance = new Cross();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Cross__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Cross__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawCross__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawCross__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.stroke();
 }
 
 m_drawCross__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  let margin = 2;
  context.moveTo(offsetX + margin, offsetY + margin);
  context.lineTo(halfSize - margin + offsetX, halfSize - margin + offsetY);
  context.moveTo(offsetX + margin, halfSize - margin + offsetY);
  context.lineTo(halfSize - margin + offsetX, offsetY + margin);
 }
 
 static $clinit() {
  Cross.$clinit = () =>{};
  Cross.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Cross;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Cross, "org.pepstock.charba.client.colors.tiles.Cross");

exports = Cross;

//# sourceMappingURL=Cross.js.map
