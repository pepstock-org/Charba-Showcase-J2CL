goog.module('org.pepstock.charba.client.colors.tiles.Weave$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Weave extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Weave} */
 static $create__() {
  Weave.$clinit();
  let $instance = new Weave();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Weave__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Weave__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawWeave__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  context.stroke();
 }
 
 m_drawWeave__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  context.moveTo(offsetX + 1, offsetY + 1);
  context.lineTo(halfSize - 1, halfSize - 1);
  context.moveTo(halfSize + 1, size - 1);
  context.lineTo(size - 1, halfSize + 1);
 }
 
 static $clinit() {
  Weave.$clinit = () =>{};
  Weave.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Weave;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Weave, "org.pepstock.charba.client.colors.tiles.Weave");

exports = Weave;

//# sourceMappingURL=Weave.js.map
