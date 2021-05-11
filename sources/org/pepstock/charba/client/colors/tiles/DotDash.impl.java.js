goog.module('org.pepstock.charba.client.colors.tiles.DotDash$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

let Dash = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Dash$impl');
let Dot = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Dot$impl');

class DotDash extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
  /**@type {Dot}*/
  this.f_dot__org_pepstock_charba_client_colors_tiles_DotDash_;
  /**@type {Dash}*/
  this.f_dash__org_pepstock_charba_client_colors_tiles_DotDash_;
 }
 /** @return {!DotDash} */
 static $create__() {
  DotDash.$clinit();
  let $instance = new DotDash();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_DotDash__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_DotDash__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
  this.$init___$p_org_pepstock_charba_client_colors_tiles_DotDash();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  let diameter = size / 10;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.f_dash__org_pepstock_charba_client_colors_tiles_DotDash_.m_drawDash__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.stroke();
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  this.f_dot__org_pepstock_charba_client_colors_tiles_DotDash_.m_drawDot__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0, diameter);
  context.fill();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_tiles_DotDash() {
  this.f_dot__org_pepstock_charba_client_colors_tiles_DotDash_ = Dot.$create__();
  this.f_dash__org_pepstock_charba_client_colors_tiles_DotDash_ = Dash.$create__();
 }
 
 static $clinit() {
  DotDash.$clinit = () =>{};
  DotDash.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DotDash;
 }
 
 static $loadModules() {
  Dash = goog.module.get('org.pepstock.charba.client.colors.tiles.Dash$impl');
  Dot = goog.module.get('org.pepstock.charba.client.colors.tiles.Dot$impl');
 }
}
$Util.$setClassMetadata(DotDash, "org.pepstock.charba.client.colors.tiles.DotDash");

exports = DotDash;

//# sourceMappingURL=DotDash.js.map
