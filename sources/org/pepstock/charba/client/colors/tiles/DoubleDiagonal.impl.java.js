goog.module('org.pepstock.charba.client.colors.tiles.DoubleDiagonal$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Diagonal = goog.require('org.pepstock.charba.client.colors.tiles.Diagonal$impl');

class DoubleDiagonal extends Diagonal {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DoubleDiagonal} */
 static $create__() {
  DoubleDiagonal.$clinit();
  let $instance = new DoubleDiagonal();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_DoubleDiagonal__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_DoubleDiagonal__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_Diagonal__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  this.m_drawWholeDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__int_$pp_org_pepstock_charba_client_colors_tiles(context, size);
  context.stroke();
 }
 
 m_drawWholeDiagonal__org_pepstock_charba_client_dom_elements_Context2dItem__int_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size) {
  context.moveTo(0, 0);
  context.lineTo(size, size);
  context.moveTo(size - 1, -1);
  context.lineTo(size + 1, 1);
  context.moveTo(-1, size - 1);
  context.lineTo(1, size + 1);
 }
 
 static $clinit() {
  DoubleDiagonal.$clinit = () =>{};
  DoubleDiagonal.$loadModules();
  Diagonal.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleDiagonal;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DoubleDiagonal, "org.pepstock.charba.client.colors.tiles.DoubleDiagonal");

exports = DoubleDiagonal;

//# sourceMappingURL=DoubleDiagonal.js.map
