goog.module('org.pepstock.charba.client.colors.tiles.Solid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Solid extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Solid} */
 static $create__() {
  Solid.$clinit();
  let $instance = new Solid();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Solid__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Solid__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {}
 
 static $clinit() {
  Solid.$clinit = () =>{};
  Solid.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Solid;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Solid, "org.pepstock.charba.client.colors.tiles.Solid");

exports = Solid;

//# sourceMappingURL=Solid.js.map
