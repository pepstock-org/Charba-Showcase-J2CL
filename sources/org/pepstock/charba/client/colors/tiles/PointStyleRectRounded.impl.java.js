goog.module('org.pepstock.charba.client.colors.tiles.PointStyleRectRounded$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPointStyleShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleRectRounded extends AbstractPointStyleShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleRectRounded} */
 static $create__() {
  PointStyleRectRounded.$clinit();
  let $instance = new PointStyleRectRounded();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleRectRounded__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleRectRounded__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  let cornerRadius = radius * 0.516;
  let changedSize = radius - cornerRadius;
  let xOffset = Math.cos(rad + AbstractPointStyleShapeDrawer.f_QUARTER_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer) * changedSize;
  let yOffset = Math.sin(rad + AbstractPointStyleShapeDrawer.f_QUARTER_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer) * changedSize;
  context.arc(x - xOffset, y - yOffset, cornerRadius, rad - AbstractPointStyleShapeDrawer.f_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer, rad - AbstractPointStyleShapeDrawer.f_HALF_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer);
  context.arc(x + yOffset, y - xOffset, cornerRadius, rad - AbstractPointStyleShapeDrawer.f_HALF_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer, rad);
  context.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + AbstractPointStyleShapeDrawer.f_HALF_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer);
  context.arc(x - yOffset, y + xOffset, cornerRadius, rad + AbstractPointStyleShapeDrawer.f_HALF_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer, rad + AbstractPointStyleShapeDrawer.f_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer);
 }
 
 static $clinit() {
  PointStyleRectRounded.$clinit = () =>{};
  PointStyleRectRounded.$loadModules();
  AbstractPointStyleShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleRectRounded;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PointStyleRectRounded, "org.pepstock.charba.client.colors.tiles.PointStyleRectRounded");

exports = PointStyleRectRounded;

//# sourceMappingURL=PointStyleRectRounded.js.map
