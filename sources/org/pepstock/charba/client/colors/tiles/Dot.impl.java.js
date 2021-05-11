goog.module('org.pepstock.charba.client.colors.tiles.Dot$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

let Math = goog.forwardDeclare('java.lang.Math$impl');

class Dot extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Dot} */
 static $create__() {
  Dot.$clinit();
  let $instance = new Dot();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Dot__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Dot__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  let diameter = size / 10;
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  this.m_drawDot__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0, diameter);
  this.m_drawDot__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize, diameter);
  context.fill();
 }
 
 m_drawDot__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY, /** number */ diameter) {
  let quarterSize = size / 4;
  let x = quarterSize + offsetX;
  let y = quarterSize + offsetY;
  context.moveTo(x + quarterSize, y);
  context.arc(x, y, diameter, 0, 2 * Math.f_PI__java_lang_Math);
 }
 
 static $clinit() {
  Dot.$clinit = () =>{};
  Dot.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Dot;
 }
 
 static $loadModules() {
  Math = goog.module.get('java.lang.Math$impl');
 }
}
$Util.$setClassMetadata(Dot, "org.pepstock.charba.client.colors.tiles.Dot");

exports = Dot;

//# sourceMappingURL=Dot.js.map
