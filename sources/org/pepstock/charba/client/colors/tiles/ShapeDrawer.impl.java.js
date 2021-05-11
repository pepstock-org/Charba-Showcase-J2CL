goog.module('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let Repetition = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Repetition$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');

/**
 * @abstract
 */
class ShapeDrawer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLCanvasElement}*/
  this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_tiles_ShapeDrawer();
 }
 /** @return {CanvasPattern} */
 m_createTile__org_pepstock_charba_client_dom_elements_Canvas__java_lang_String__java_lang_String__int_$pp_org_pepstock_charba_client_colors_tiles(/** HTMLCanvasElement */ outerCanvas, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let innerCanvas = this.m_initCanvas__org_pepstock_charba_client_dom_elements_Canvas__int(outerCanvas, size);
  let context = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(innerCanvas);
  Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, backgroundColor);
  context.fillRect(0, 0, innerCanvas.width, innerCanvas.height);
  context.beginPath();
  this.m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int($Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(innerCanvas), backgroundColor, shapeColor, size);
  context.closePath();
  return Context2dItem_$Overlay.m_createPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_dom_enums_Repetition($Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(outerCanvas), innerCanvas, Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition);
 }
 /** @return {HTMLCanvasElement} */
 m_initCanvas__org_pepstock_charba_client_dom_elements_Canvas__int(/** HTMLCanvasElement */ outerCanvas, /** number */ size) {
  outerCanvas.width = size;
  outerCanvas.height = size;
  if ($Equality.$same(this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_, null)) {
   this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_ = DOMBuilder.m_get__().m_createCanvasElement__();
  }
  this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_.width = size;
  this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_.height = size;
  let context = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_);
  context.clearRect(0, 0, this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_.width, this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_.height);
  return this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_;
 }
 /** @abstract */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {}
 
 m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ shapeColor, /** number */ size) {
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int__org_pepstock_charba_client_enums_CapStyle__org_pepstock_charba_client_enums_JoinStyle(context, shapeColor, size, TilesFactory.m_getDefaults__().m_getLineCap__(), TilesFactory.m_getDefaults__().m_getLineJoin__());
 }
 
 m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int__org_pepstock_charba_client_enums_CapStyle__org_pepstock_charba_client_enums_JoinStyle(/** CanvasRenderingContext2D */ context, /** ?string */ shapeColor, /** number */ size, /** CapStyle */ lineCap, /** JoinStyle */ lineJoin) {
  Context2dItem_$Overlay.m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  context.lineWidth = size / 10;
  Context2dItem_$Overlay.m_setLineJoin__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_JoinStyle(context, lineJoin);
  Context2dItem_$Overlay.m_setLineCap__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_CapStyle(context, lineCap);
 }
 
 m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(/** CanvasRenderingContext2D */ context, /** ?string */ shapeColor) {
  Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_tiles_ShapeDrawer() {
  this.f_canvas__org_pepstock_charba_client_colors_tiles_ShapeDrawer_ = null;
 }
 
 static $clinit() {
  ShapeDrawer.$clinit = () =>{};
  ShapeDrawer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ShapeDrawer;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  Repetition = goog.module.get('org.pepstock.charba.client.dom.enums.Repetition$impl');
 }
}
/**@const {number}*/
ShapeDrawer.f_ROTATION_90_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer = 1.5707963267948966;
/**@const {number}*/
ShapeDrawer.f_ROTATION_180_DEGREES__org_pepstock_charba_client_colors_tiles_ShapeDrawer = 3.141592653589793;
$Util.$setClassMetadata(ShapeDrawer, "org.pepstock.charba.client.colors.tiles.ShapeDrawer");

exports = ShapeDrawer;

//# sourceMappingURL=ShapeDrawer.js.map
