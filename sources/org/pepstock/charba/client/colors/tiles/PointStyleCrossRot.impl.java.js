goog.module('org.pepstock.charba.client.colors.tiles.PointStyleCrossRot$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PointStyleCross = goog.require('org.pepstock.charba.client.colors.tiles.PointStyleCross$impl');

let AbstractPointStyleShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleCrossRot extends PointStyleCross {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleCrossRot} */
 static $create__() {
  PointStyleCrossRot.$clinit();
  let $instance = new PointStyleCrossRot();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleCrossRot__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleCrossRot__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleCross__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  let changedRad = rad + AbstractPointStyleShapeDrawer.f_QUARTER_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer;
  super.m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(context, size, x, y, radius, rotation, changedRad);
 }
 
 static $clinit() {
  PointStyleCrossRot.$clinit = () =>{};
  PointStyleCrossRot.$loadModules();
  PointStyleCross.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleCrossRot;
 }
 
 static $loadModules() {
  AbstractPointStyleShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');
 }
}
$Util.$setClassMetadata(PointStyleCrossRot, "org.pepstock.charba.client.colors.tiles.PointStyleCrossRot");

exports = PointStyleCrossRot;

//# sourceMappingURL=PointStyleCrossRot.js.map
