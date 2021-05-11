goog.module('org.pepstock.charba.client.colors.tiles.Diagonal$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Diagonal extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Diagonal} */
 static $create__() {
  Diagonal.$clinit();
  let $instance = new Diagonal();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Diagonal__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Diagonal__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.stroke();
 }
 
 m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  let margin = 1;
  context.moveTo(halfSize - margin - offsetX, margin * -1 + offsetY);
  context.lineTo(size + 1 - offsetX, halfSize + 1 + offsetY);
 }
 
 static $clinit() {
  Diagonal.$clinit = () =>{};
  Diagonal.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Diagonal;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Diagonal, "org.pepstock.charba.client.colors.tiles.Diagonal");

exports = Diagonal;

//# sourceMappingURL=Diagonal.js.map
