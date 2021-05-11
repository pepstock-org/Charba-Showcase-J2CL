goog.module('org.pepstock.charba.client.colors.tiles.Star$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EmptyStar = goog.require('org.pepstock.charba.client.colors.tiles.EmptyStar$impl');

class Star extends EmptyStar {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Star} */
 static $create__() {
  Star.$clinit();
  let $instance = new Star();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Star__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Star__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_EmptyStar__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  super.m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(context, backgroundColor, shapeColor, size);
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  context.fill();
 }
 
 static $clinit() {
  Star.$clinit = () =>{};
  Star.$loadModules();
  EmptyStar.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Star;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Star, "org.pepstock.charba.client.colors.tiles.Star");

exports = Star;

//# sourceMappingURL=Star.js.map
