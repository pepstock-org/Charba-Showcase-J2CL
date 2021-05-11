goog.module('org.pepstock.charba.client.colors.tiles.EmptyStar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');

class EmptyStar extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!EmptyStar} */
 static $create__() {
  EmptyStar.$clinit();
  let $instance = new EmptyStar();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_EmptyStar__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_EmptyStar__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  let quarterSize = size / 4;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  context.lineWidth = 1;
  context.translate(size, size);
  context.rotate(ShapeDrawer.f_ROTATION_180_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer);
  this.m_drawStar__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, halfSize, halfSize, EmptyStar.f_SPIKES__org_pepstock_charba_client_colors_tiles_EmptyStar, halfSize - 2, quarterSize - 1);
  context.stroke();
 }
 
 m_drawStar__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ offsetX, /** number */ offsetY, /** number */ spikes, /** number */ innerRadius, /** number */ outerRadius) {
  let rot = j_l_Math.f_PI__java_lang_Math / 2 * 3;
  let /** number */ x;
  let /** number */ y;
  let step = j_l_Math.f_PI__java_lang_Math / spikes;
  for (let i = 0; i < spikes; i = i + 1 | 0) {
   x = offsetX + Math.cos(rot) * outerRadius;
   y = offsetY + Math.sin(rot) * outerRadius;
   context.lineTo(x, y);
   rot += step;
   x = offsetX + Math.cos(rot) * innerRadius;
   y = offsetY + Math.sin(rot) * innerRadius;
   context.lineTo(x, y);
   rot += step;
  }
  context.lineTo(offsetX, offsetY - outerRadius);
 }
 
 static $clinit() {
  EmptyStar.$clinit = () =>{};
  EmptyStar.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyStar;
 }
 
 static $loadModules() {
  j_l_Math = goog.module.get('java.lang.Math$impl');
 }
}
/**@const {number}*/
EmptyStar.f_SPIKES__org_pepstock_charba_client_colors_tiles_EmptyStar = 5;
$Util.$setClassMetadata(EmptyStar, "org.pepstock.charba.client.colors.tiles.EmptyStar");

exports = EmptyStar;

//# sourceMappingURL=EmptyStar.js.map
