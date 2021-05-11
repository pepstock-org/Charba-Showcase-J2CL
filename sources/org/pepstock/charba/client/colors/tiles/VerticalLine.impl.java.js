goog.module('org.pepstock.charba.client.colors.tiles.VerticalLine$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Line = goog.require('org.pepstock.charba.client.colors.tiles.Line$impl');

let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class VerticalLine extends Line {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!VerticalLine} */
 static $create__() {
  VerticalLine.$clinit();
  let $instance = new VerticalLine();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_VerticalLine__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_VerticalLine__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_Line__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  context.translate(size, 0);
  context.rotate(ShapeDrawer.f_ROTATION_90_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer);
  super.m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(context, backgroundColor, shapeColor, size);
 }
 
 static $clinit() {
  VerticalLine.$clinit = () =>{};
  VerticalLine.$loadModules();
  Line.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VerticalLine;
 }
 
 static $loadModules() {
  ShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
 }
}
$Util.$setClassMetadata(VerticalLine, "org.pepstock.charba.client.colors.tiles.VerticalLine");

exports = VerticalLine;

//# sourceMappingURL=VerticalLine.js.map
