goog.module('org.pepstock.charba.client.colors.tiles.PointStyleStar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleStar extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleStar} */
 static $create__() {
  PointStyleStar.$clinit();
  let $instance = new PointStyleStar();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleStar__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleStar__() {
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
  let newRad = rad + AbstractPointStyleShapeDrawer.f_QUARTER_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer;
  xOffset = Math.cos(newRad) * radius;
  yOffset = Math.sin(newRad) * radius;
  context.moveTo(x - xOffset, y - yOffset);
  context.lineTo(x + xOffset, y + yOffset);
  context.moveTo(x + yOffset, y - xOffset);
  context.lineTo(x - yOffset, y + xOffset);
 }
 
 static $clinit() {
  PointStyleStar.$clinit = () =>{};
  PointStyleStar.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleStar;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleStar, "org.pepstock.charba.client.colors.tiles.PointStyleStar");

exports = PointStyleStar;

//# sourceMappingURL=PointStyleStar.js.map
