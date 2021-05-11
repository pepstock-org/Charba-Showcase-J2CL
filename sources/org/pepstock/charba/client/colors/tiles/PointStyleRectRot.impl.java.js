goog.module('org.pepstock.charba.client.colors.tiles.PointStyleRectRot$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleRectRot extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleRectRot} */
 static $create__() {
  PointStyleRectRot.$clinit();
  let $instance = new PointStyleRectRot();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleRectRot__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleRectRot__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  let xOffset = Math.cos(rad) * radius;
  let yOffset = Math.sin(rad) * radius;
  context.moveTo(x - xOffset, y - yOffset);
  context.lineTo(x + yOffset, y - xOffset);
  context.lineTo(x + xOffset, y + yOffset);
  context.lineTo(x - yOffset, y + xOffset);
 }
 
 static $clinit() {
  PointStyleRectRot.$clinit = () =>{};
  PointStyleRectRot.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleRectRot;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleRectRot, "org.pepstock.charba.client.colors.tiles.PointStyleRectRot");

exports = PointStyleRectRot;

//# sourceMappingURL=PointStyleRectRot.js.map
