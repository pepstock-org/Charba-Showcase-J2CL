goog.module('org.pepstock.charba.client.colors.tiles.Square$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

class Square extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Square} */
 static $create__() {
  Square.$clinit();
  let $instance = new Square();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Square__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Square__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  this.m_drawSquare__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.m_drawSquare__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.fill();
 }
 
 m_drawSquare__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY) {
  let halfSize = size / 2;
  let margin = size / 20;
  let topBottomMargin = margin * 2;
  context.fillRect(offsetX + margin, offsetY + margin, halfSize - topBottomMargin, halfSize - topBottomMargin);
 }
 
 static $clinit() {
  Square.$clinit = () =>{};
  Square.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Square;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Square, "org.pepstock.charba.client.colors.tiles.Square");

exports = Square;

//# sourceMappingURL=Square.js.map
