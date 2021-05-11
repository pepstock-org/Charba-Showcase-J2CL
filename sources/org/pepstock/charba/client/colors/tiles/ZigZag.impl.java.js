goog.module('org.pepstock.charba.client.colors.tiles.ZigZag$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class ZigZag extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ZigZag} */
 static $create__() {
  ZigZag.$clinit();
  let $instance = new ZigZag();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_ZigZag__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_ZigZag__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawZigZag__org_pepstock_charba_client_dom_elements_Context2dItem__int__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0);
  this.m_drawZigZag__org_pepstock_charba_client_dom_elements_Context2dItem__int__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize);
  context.stroke();
 }
 
 m_drawZigZag__org_pepstock_charba_client_dom_elements_Context2dItem__int__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetY) {
  let halfSize = size / 2;
  let quarterSize = size / 4;
  let tenthSize = size / 10;
  context.moveTo(0, tenthSize + offsetY);
  context.lineTo(quarterSize, halfSize - tenthSize + offsetY);
  context.lineTo(halfSize, tenthSize + offsetY);
  context.lineTo(size - quarterSize, halfSize - tenthSize + offsetY);
  context.lineTo(size, tenthSize + offsetY);
 }
 
 static $clinit() {
  ZigZag.$clinit = () =>{};
  ZigZag.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZigZag;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(ZigZag, "org.pepstock.charba.client.colors.tiles.ZigZag");

exports = ZigZag;

//# sourceMappingURL=ZigZag.js.map
