goog.module('org.pepstock.charba.client.colors.tiles.Triangle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Triangle extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Triangle} */
 static $create__() {
  Triangle.$clinit();
  let $instance = new Triangle();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Triangle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Triangle__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  this.m_drawTriangle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawTriangle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.fill();
 }
 
 m_drawTriangle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  let quarterSize = size / 4;
  context.moveTo(quarterSize + offsetX, offsetY);
  context.lineTo(halfSize + offsetX, halfSize + offsetY);
  context.lineTo(offsetX, halfSize + offsetY);
 }
 
 static $clinit() {
  Triangle.$clinit = () =>{};
  Triangle.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Triangle;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Triangle, "org.pepstock.charba.client.colors.tiles.Triangle");

exports = Triangle;

//# sourceMappingURL=Triangle.js.map
