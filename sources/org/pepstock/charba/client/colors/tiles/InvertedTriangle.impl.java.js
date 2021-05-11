goog.module('org.pepstock.charba.client.colors.tiles.InvertedTriangle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Triangle = goog.require('org.pepstock.charba.client.colors.tiles.Triangle$impl');

let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class InvertedTriangle extends Triangle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InvertedTriangle} */
 static $create__() {
  InvertedTriangle.$clinit();
  let $instance = new InvertedTriangle();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_InvertedTriangle__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_InvertedTriangle__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_Triangle__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  context.translate(size, size);
  context.rotate(ShapeDrawer.f_ROTATION_180_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer);
  super.m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(context, backgroundColor, shapeColor, size);
 }
 
 static $clinit() {
  InvertedTriangle.$clinit = () =>{};
  InvertedTriangle.$loadModules();
  Triangle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InvertedTriangle;
 }
 
 static $loadModules() {
  ShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
 }
}
$Util.$setClassMetadata(InvertedTriangle, "org.pepstock.charba.client.colors.tiles.InvertedTriangle");

exports = InvertedTriangle;

//# sourceMappingURL=InvertedTriangle.js.map
