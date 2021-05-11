goog.module('org.pepstock.charba.client.colors.tiles.PointStyleCircle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleCircle extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleCircle} */
 static $create__() {
  PointStyleCircle.$clinit();
  let $instance = new PointStyleCircle();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleCircle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleCircle__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  context.arc(x, y, radius, 0, AbstractPointStyleShapeDrawer.f_DOUBLE_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer);
 }
 
 static $clinit() {
  PointStyleCircle.$clinit = () =>{};
  PointStyleCircle.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleCircle;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleCircle, "org.pepstock.charba.client.colors.tiles.PointStyleCircle");

exports = PointStyleCircle;

//# sourceMappingURL=PointStyleCircle.js.map
