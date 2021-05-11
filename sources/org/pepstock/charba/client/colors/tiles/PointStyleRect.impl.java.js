goog.module('org.pepstock.charba.client.colors.tiles.PointStyleRect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PointStyleRectRot = goog.require('org.pepstock.charba.client.colors.tiles.PointStyleRectRot$impl');

let AbstractPointStyleShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

class PointStyleRect extends PointStyleRectRot {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleRect} */
 static $create__() {
  PointStyleRect.$clinit();
  let $instance = new PointStyleRect();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleRect__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleRect__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleRectRot__();
 }
 /** @override */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {
  if (rotation == 0) {
   let changedSize = Math.sqrt(1 / 2) * radius;
   context.rect(x - changedSize, y - changedSize, 2 * changedSize, 2 * changedSize);
   return;
  }
  let changedRad = rad + AbstractPointStyleShapeDrawer.f_QUARTER_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer;
  super.m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(context, size, x, y, radius, rotation, changedRad);
 }
 
 static $clinit() {
  PointStyleRect.$clinit = () =>{};
  PointStyleRect.$loadModules();
  PointStyleRectRot.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleRect;
 }
 
 static $loadModules() {
  AbstractPointStyleShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');
 }
}
$Util.$setClassMetadata(PointStyleRect, "org.pepstock.charba.client.colors.tiles.PointStyleRect");

exports = PointStyleRect;

//# sourceMappingURL=PointStyleRect.js.map
