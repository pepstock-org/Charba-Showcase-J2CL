goog.module('org.pepstock.charba.client.colors.tiles.InvertedDiagonal$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Diagonal = goog.require('org.pepstock.charba.client.colors.tiles.Diagonal$impl');

let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class InvertedDiagonal extends Diagonal {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InvertedDiagonal} */
 static $create__() {
  InvertedDiagonal.$clinit();
  let $instance = new InvertedDiagonal();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_InvertedDiagonal__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_InvertedDiagonal__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_Diagonal__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  context.translate(size, 0);
  context.rotate(ShapeDrawer.f_ROTATION_90_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer);
  super.m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(context, backgroundColor, shapeColor, size);
 }
 
 static $clinit() {
  InvertedDiagonal.$clinit = () =>{};
  InvertedDiagonal.$loadModules();
  Diagonal.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InvertedDiagonal;
 }
 
 static $loadModules() {
  ShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
 }
}
$Util.$setClassMetadata(InvertedDiagonal, "org.pepstock.charba.client.colors.tiles.InvertedDiagonal");

exports = InvertedDiagonal;

//# sourceMappingURL=InvertedDiagonal.js.map
