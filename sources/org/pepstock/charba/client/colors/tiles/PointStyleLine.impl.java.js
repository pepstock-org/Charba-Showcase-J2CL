goog.module('org.pepstock.charba.client.colors.tiles.PointStyleLine$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleLine extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleLine} */
 static $create__() {
  PointStyleLine.$clinit();
  let $instance = new PointStyleLine();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleLine__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleLine__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  let xOffset = Math.cos(rad) * radius;
  let yOffset = Math.sin(rad) * radius;
  context.moveTo(x - xOffset, y - yOffset);
  context.lineTo(x + xOffset, y + yOffset);
 }
 
 static $clinit() {
  PointStyleLine.$clinit = () =>{};
  PointStyleLine.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleLine;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleLine, "org.pepstock.charba.client.colors.tiles.PointStyleLine");

exports = PointStyleLine;

//# sourceMappingURL=PointStyleLine.js.map