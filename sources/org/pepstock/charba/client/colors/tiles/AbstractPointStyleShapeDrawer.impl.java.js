goog.module('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let HtmlLegendItem = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendItem$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 */
class AbstractPointStyleShapeDrawer extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer__() {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let rotation = AbstractPointStyleShapeDrawer.f_DEFAULT_ROTATION__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer_;
  let radius = size / 2;
  let rad = rotation * AbstractPointStyleShapeDrawer.f_RAD_PER_DEG__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer;
  let x = size / 2;
  let y = size / 2;
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__int(context, shapeColor, size);
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, backgroundColor);
  context.beginPath();
  this.m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(context, size, x, y, radius, rotation, rad);
  context.closePath();
  context.fill();
  context.stroke();
 }
 /** @return {?string} */
 m_drawTile__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_$pp_org_pepstock_charba_client_colors_tiles(/** HTMLCanvasElement */ outerCanvas, /** HtmlLegendItem */ htmlLegendItem) {
  let radius = htmlLegendItem.m_getRadius__();
  let size = htmlLegendItem.m_getSize__();
  let rotation = htmlLegendItem.m_getLegendItem__().m_getRotation__();
  if (Undefined.m_is__double(rotation) || Checker.m_isNegative__double(rotation)) {
   rotation = AbstractPointStyleShapeDrawer.f_DEFAULT_ROTATION__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer_;
  }
  let rad = rotation * AbstractPointStyleShapeDrawer.f_RAD_PER_DEG__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer;
  let x = size / 2;
  let y = size / 2;
  let canvas = this.m_initCanvas__org_pepstock_charba_client_dom_elements_Canvas__int(outerCanvas, size);
  let context = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas);
  $Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_colors_IsColor(context, HtmlColor.f_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor);
  context.fillRect(0, 0, size, size);
  this.m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__int__org_pepstock_charba_client_items_LegendItem_$p_org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer(context, size, htmlLegendItem.m_getLegendItem__());
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_items_LegendItem_$p_org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer(context, htmlLegendItem.m_getLegendItem__());
  context.beginPath();
  this.m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(context, size, x, y, radius, rotation, rad);
  context.closePath();
  context.fill();
  context.stroke();
  return Canvas_$Overlay.m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas);
 }
 /** @abstract */
 m_drawPointStyle__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ x, /** number */ y, /** number */ radius, /** number */ rotation, /** number */ rad) {}
 
 m_applyStrokeProperties__org_pepstock_charba_client_dom_elements_Context2dItem__int__org_pepstock_charba_client_items_LegendItem_$p_org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer(/** CanvasRenderingContext2D */ context, /** number */ size, /** LegendItem */ legendItem) {
  if (legendItem.m_isFillStyleAsColor__()) {
   $Overlay.m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_colors_IsColor(context, legendItem.m_getFillStyle__());
  } else if (legendItem.m_isFillStyleAsPattern__()) {
   $Overlay.m_setStrokePattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasPatternItem(context, legendItem.m_getFillStyleAsCanvasPattern__());
  } else if (legendItem.m_isFillStyleAsGradient__()) {
   $Overlay.m_setStrokeGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasGradientItem(context, legendItem.m_getFillStyleAsCanvasGradient__());
  }
  let lineWidth = Math.min(legendItem.m_getLineWidth__(), $Primitives.$coerceDivision(size / 4));
  context.lineWidth = lineWidth;
  $Overlay.m_setLineJoin__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_JoinStyle(context, legendItem.m_getLineJoin__());
  $Overlay.m_setLineCap__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_CapStyle(context, legendItem.m_getLineCap__());
  $Overlay.m_setLineDash__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_util_List(context, legendItem.m_getLineDash__());
  context.lineDashOffset = legendItem.m_getLineDashOffset__();
 }
 
 m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_items_LegendItem_$p_org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer(/** CanvasRenderingContext2D */ context, /** LegendItem */ legendItem) {
  if (legendItem.m_isFillStyleAsColor__()) {
   $Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_colors_IsColor(context, legendItem.m_getFillStyle__());
  } else if (legendItem.m_isFillStyleAsPattern__()) {
   $Overlay.m_setFillPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasPatternItem(context, legendItem.m_getFillStyleAsCanvasPattern__());
  } else if (legendItem.m_isFillStyleAsGradient__()) {
   $Overlay.m_setFillGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasGradientItem(context, legendItem.m_getFillStyleAsCanvasGradient__());
  }
 }
 
 static $clinit() {
  AbstractPointStyleShapeDrawer.$clinit = () =>{};
  AbstractPointStyleShapeDrawer.$loadModules();
  ShapeDrawer.$clinit();
  AbstractPointStyleShapeDrawer.f_DEFAULT_ROTATION__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer_ = Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getRotation__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractPointStyleShapeDrawer;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {number}*/
AbstractPointStyleShapeDrawer.f_DEFAULT_ROTATION__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer_ = 0;
/**@const {number}*/
AbstractPointStyleShapeDrawer.f_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer = 3.141592653589793;
/**@const {number}*/
AbstractPointStyleShapeDrawer.f_RAD_PER_DEG__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer = 0.017453292519943295;
/**@const {number}*/
AbstractPointStyleShapeDrawer.f_DOUBLE_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer = 6.283185307179586;
/**@const {number}*/
AbstractPointStyleShapeDrawer.f_HALF_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer = 1.5707963267948966;
/**@const {number}*/
AbstractPointStyleShapeDrawer.f_QUARTER_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer = 0.7853981633974483;
/**@const {number}*/
AbstractPointStyleShapeDrawer.f_TWO_THIRDS_PI__org_pepstock_charba_client_colors_tiles_AbstractPointStyleShapeDrawer = 2.0943951023931953;
$Util.$setClassMetadata(AbstractPointStyleShapeDrawer, "org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer");

exports = AbstractPointStyleShapeDrawer;

//# sourceMappingURL=AbstractPointStyleShapeDrawer.js.map
