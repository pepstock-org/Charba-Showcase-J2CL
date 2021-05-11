goog.module('org.pepstock.charba.client.colors.tiles.PointStyleTriangle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleTriangle extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleTriangle} */
 static $create__() {
  PointStyleTriangle.$clinit();
  let $instance = new PointStyleTriangle();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleTriangle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleTriangle__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  context.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
  let newRad = rad + AbstractPointStyleShapeDrawer.f_TWO_THIRDS_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer;
  context.lineTo(x + Math.sin(newRad) * radius, y - Math.cos(newRad) * radius);
  newRad = newRad + AbstractPointStyleShapeDrawer.f_TWO_THIRDS_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer;
  context.lineTo(x + Math.sin(newRad) * radius, y - Math.cos(newRad) * radius);
 }
 
 static $clinit() {
  PointStyleTriangle.$clinit = () =>{};
  PointStyleTriangle.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleTriangle;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleTriangle, "org.pepstock.charba.client.colors.tiles.PointStyleTriangle");

exports = PointStyleTriangle;

//# sourceMappingURL=PointStyleTriangle.js.map
