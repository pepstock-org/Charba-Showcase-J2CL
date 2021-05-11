goog.module('org.pepstock.charba.client.colors.tiles.InvertedDoubleDiagonal$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DoubleDiagonal = goog.require('org.pepstock.charba.client.colors.tiles.DoubleDiagonal$impl');

let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class InvertedDoubleDiagonal extends DoubleDiagonal {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InvertedDoubleDiagonal} */
 static $create__() {
  InvertedDoubleDiagonal.$clinit();
  let $instance = new InvertedDoubleDiagonal();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_InvertedDoubleDiagonal__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_InvertedDoubleDiagonal__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_DoubleDiagonal__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  context.translate(size, 0);
  context.rotate(ShapeDrawer.f_ROTATION_90_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer);
  super.m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(context, backgroundColor, shapeColor, size);
 }
 
 static $clinit() {
  InvertedDoubleDiagonal.$clinit = () =>{};
  InvertedDoubleDiagonal.$loadModules();
  DoubleDiagonal.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InvertedDoubleDiagonal;
 }
 
 static $loadModules() {
  ShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
 }
}
$Util.$setClassMetadata(InvertedDoubleDiagonal, "org.pepstock.charba.client.colors.tiles.InvertedDoubleDiagonal");

exports = InvertedDoubleDiagonal;

//# sourceMappingURL=InvertedDoubleDiagonal.js.map
