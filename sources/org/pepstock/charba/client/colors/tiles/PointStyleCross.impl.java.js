goog.module('org.pepstock.charba.client.colors.tiles.PointStyleCross$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleCross extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleCross} */
 static $create__() {
  PointStyleCross.$clinit();
  let $instance = new PointStyleCross();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleCross__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleCross__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  let xOffset = Math.cos(rad) * radius;
  let yOffset = Math.sin(rad) * radius;
  context.moveTo(x - xOffset, y - yOffset);
  context.lineTo(x + xOffset, y + yOffset);
  context.moveTo(x + yOffset, y - xOffset);
  context.lineTo(x - yOffset, y + xOffset);
 }
 
 static $clinit() {
  PointStyleCross.$clinit = () =>{};
  PointStyleCross.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleCross;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleCross, "org.pepstock.charba.client.colors.tiles.PointStyleCross");

exports = PointStyleCross;

//# sourceMappingURL=PointStyleCross.js.map
