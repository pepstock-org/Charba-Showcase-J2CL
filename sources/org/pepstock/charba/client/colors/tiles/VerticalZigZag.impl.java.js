goog.module('org.pepstock.charba.client.colors.tiles.VerticalZigZag$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ZigZag = goog.require('org.pepstock.charba.client.colors.tiles.ZigZag$impl');

let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class VerticalZigZag extends ZigZag {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!VerticalZigZag} */
 static $create__() {
  VerticalZigZag.$clinit();
  let $instance = new VerticalZigZag();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_VerticalZigZag__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_VerticalZigZag__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ZigZag__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  context.translate(size, 0);
  context.rotate(ShapeDrawer.f_ROTATION_90_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer);
  super.m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(context, backgroundColor, shapeColor, size);
 }
 
 static $clinit() {
  VerticalZigZag.$clinit = () =>{};
  VerticalZigZag.$loadModules();
  ZigZag.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VerticalZigZag;
 }
 
 static $loadModules() {
  ShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
 }
}
$Util.$setClassMetadata(VerticalZigZag, "org.pepstock.charba.client.colors.tiles.VerticalZigZag");

exports = VerticalZigZag;

//# sourceMappingURL=VerticalZigZag.js.map
