goog.module('org.pepstock.charba.client.colors.tiles.Line$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Line extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Line} */
 static $create__() {
  Line.$clinit();
  let $instance = new Line();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Line__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Line__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawLine__org_pepstock_charba_client_dom_elements_Context2dItem__int__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0);
  this.m_drawLine__org_pepstock_charba_client_dom_elements_Context2dItem__int__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize);
  context.stroke();
 }
 
 m_drawLine__org_pepstock_charba_client_dom_elements_Context2dItem__int__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetY) {
  let quarterSize = size / 4;
  context.moveTo(0, quarterSize + offsetY);
  context.lineTo(size, quarterSize + offsetY);
 }
 
 static $clinit() {
  Line.$clinit = () =>{};
  Line.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Line;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Line, "org.pepstock.charba.client.colors.tiles.Line");

exports = Line;

//# sourceMappingURL=Line.js.map
