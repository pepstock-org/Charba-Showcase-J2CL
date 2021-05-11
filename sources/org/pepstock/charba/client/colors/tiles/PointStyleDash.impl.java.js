goog.module('org.pepstock.charba.client.colors.tiles.PointStyleDash$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleDash extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleDash} */
 static $create__() {
  PointStyleDash.$clinit();
  let $instance = new PointStyleDash();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleDash__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleDash__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  context.moveTo(x, y);
  context.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
 }
 
 static $clinit() {
  PointStyleDash.$clinit = () =>{};
  PointStyleDash.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleDash;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleDash, "org.pepstock.charba.client.colors.tiles.PointStyleDash");

exports = PointStyleDash;

//# sourceMappingURL=PointStyleDash.js.map
