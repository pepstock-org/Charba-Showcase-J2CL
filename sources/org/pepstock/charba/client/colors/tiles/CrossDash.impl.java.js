goog.module('org.pepstock.charba.client.colors.tiles.CrossDash$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

let Cross = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Cross$impl');
let Dash = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Dash$impl');

class CrossDash extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
  /**@type {Cross}*/
  this.f_cross__org_pepstock_charba_client_colors_tiles_CrossDash_;
  /**@type {Dash}*/
  this.f_dash__org_pepstock_charba_client_colors_tiles_CrossDash_;
 }
 /** @return {!CrossDash} */
 static $create__() {
  CrossDash.$clinit();
  let $instance = new CrossDash();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_CrossDash__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_CrossDash__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
  this.$init___$p_org_pepstock_charba_client_colors_tiles_CrossDash();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.f_cross__org_pepstock_charba_client_colors_tiles_CrossDash_.m_drawCross__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, 0, 0);
  this.f_dash__org_pepstock_charba_client_colors_tiles_CrossDash_.m_drawDash__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double_$pp_org_pepstock_charba_client_colors_tiles(context, size, halfSize, halfSize);
  context.stroke();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_tiles_CrossDash() {
  this.f_cross__org_pepstock_charba_client_colors_tiles_CrossDash_ = Cross.$create__();
  this.f_dash__org_pepstock_charba_client_colors_tiles_CrossDash_ = Dash.$create__();
 }
 
 static $clinit() {
  CrossDash.$clinit = () =>{};
  CrossDash.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CrossDash;
 }
 
 static $loadModules() {
  Cross = goog.module.get('org.pepstock.charba.client.colors.tiles.Cross$impl');
  Dash = goog.module.get('org.pepstock.charba.client.colors.tiles.Dash$impl');
 }
}
$Util.$setClassMetadata(CrossDash, "org.pepstock.charba.client.colors.tiles.CrossDash");

exports = CrossDash;

//# sourceMappingURL=CrossDash.js.map
