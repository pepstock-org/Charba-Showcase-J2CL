goog.module('org.pepstock.charba.client.colors.tiles.Disc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Dot = goog.require('org.pepstock.charba.client.colors.tiles.Dot$impl');

class Disc extends Dot {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Disc} */
 static $create__() {
  Disc.$clinit();
  let $instance = new Disc();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Disc__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Disc__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_Dot__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  let diameter = size / 5;
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  this.m_drawDot__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0, diameter);
  this.m_drawDot__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize, diameter);
  context.fill();
 }
 
 static $clinit() {
  Disc.$clinit = () =>{};
  Disc.$loadModules();
  Dot.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Disc;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Disc, "org.pepstock.charba.client.colors.tiles.Disc");

exports = Disc;

//# sourceMappingURL=Disc.js.map
