goog.module('org.pepstock.charba.client.items.LegendLabelItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasLegendText = goog.require('org.pepstock.charba.client.items.HasLegendText$impl');
const LegendItem = goog.require('org.pepstock.charba.client.items.LegendItem$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let DatasetCanvasObjectFactory = goog.forwardDeclare('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem.Property$impl');
let LegendLabelItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem.LegendLabelItemFactory$impl');
let LegendTextHandler = goog.forwardDeclare('org.pepstock.charba.client.items.LegendTextHandler$impl');

/**
 * @implements {HasLegendText}
 */
class LegendLabelItem extends LegendItem {
 /** @protected */
 constructor() {
  super();
  /**@type {LegendTextHandler}*/
  this.f_legendTextHandler__org_pepstock_charba_client_items_LegendLabelItem_;
 }
 //Factory method corresponding to constructor 'LegendLabelItem()'.
 /** @return {!LegendLabelItem} */
 static $create__() {
  LegendLabelItem.$clinit();
  let $instance = new LegendLabelItem();
  $instance.$ctor__org_pepstock_charba_client_items_LegendLabelItem__();
  return $instance;
 }
 //Initialization from constructor 'LegendLabelItem()'.
 
 $ctor__org_pepstock_charba_client_items_LegendLabelItem__() {
  this.$ctor__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_commons_NativeObject(null);
 }
 //Factory method corresponding to constructor 'LegendLabelItem(NativeObject)'.
 /** @return {!LegendLabelItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  LegendLabelItem.$clinit();
  let $instance = new LegendLabelItem();
  $instance.$ctor__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'LegendLabelItem(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_legendTextHandler__org_pepstock_charba_client_items_LegendLabelItem_ = LegendTextHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 /** @override @return {LegendTextHandler} */
 m_getLegendTextHandler__() {
  return this.f_legendTextHandler__org_pepstock_charba_client_items_LegendLabelItem_;
 }
 
 m_setDatasetIndex__int(/** number */ datasetIndex) {
  Checker.m_checkIfPositive__int__java_lang_String(datasetIndex, "Dataset index");
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property, datasetIndex);
 }
 
 m_setIndex__int(/** number */ index) {
  Checker.m_checkIfPositive__int__java_lang_String(index, "Index");
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_LegendItem_Property, index);
 }
 
 m_setFontColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setFontColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setFontColor__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property, color);
 }
 
 m_setFillStyle__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setFillStyle__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setFillStyle__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, color);
 }
 
 m_setFillStyle__org_pepstock_charba_client_dom_elements_CanvasPatternItem_$p_org_pepstock_charba_client_items_LegendLabelItem(/** CanvasPattern */ pattern) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, pattern);
 }
 
 m_setFillStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(/** IsChart */ chart, /** Pattern */ pattern) {
  if (!$Equality.$same(pattern, null)) {
   if (!$Equality.$same(pattern.m_getCanvasPattern__(), null)) {
    this.m_setFillStyle__org_pepstock_charba_client_dom_elements_CanvasPatternItem_$p_org_pepstock_charba_client_items_LegendLabelItem(pattern.m_getCanvasPattern__());
   } else {
    this.m_setFillStyle__org_pepstock_charba_client_dom_elements_CanvasPatternItem_$p_org_pepstock_charba_client_items_LegendLabelItem(DatasetCanvasObjectFactory.m_get__().m_createPattern__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(chart, pattern));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
  }
 }
 
 m_setFillStyle__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$p_org_pepstock_charba_client_items_LegendLabelItem(/** CanvasGradient */ gradient) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, gradient);
 }
 
 m_setFillStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient(/** IsChart */ chart, /** Gradient */ gradient) {
  if (!$Equality.$same(gradient, null)) {
   let datasetIndex = Math.max(0, this.m_getDatasetIndex__());
   let index = Math.max(0, this.m_getIndex__());
   this.m_setFillStyle__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$p_org_pepstock_charba_client_items_LegendLabelItem(DatasetCanvasObjectFactory.m_get__().m_createGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(chart, gradient, datasetIndex, index));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
  }
 }
 
 m_setLineCap__org_pepstock_charba_client_enums_CapStyle(/** CapStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property, style);
 }
 
 m_setLineDash__java_util_List(/** List<Integer> */ lineDash) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property, ArrayInteger_$Overlay.m_fromOrNull__java_util_List(lineDash));
 }
 
 m_setLineDashOffset__double(/** number */ lineDashOffset) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property, lineDashOffset);
 }
 
 m_setLineJoin__org_pepstock_charba_client_enums_JoinStyle(/** JoinStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property, style);
 }
 
 m_setLineWidth__int(/** number */ lineWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property, Checker.m_positiveOrZero__int(lineWidth));
 }
 
 m_setStrokeStyle__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setStrokeStyle__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setStrokeStyle__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, color);
 }
 
 m_setStrokeStyle__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** CanvasPattern */ pattern) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, pattern);
 }
 
 m_setStrokeStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(/** IsChart */ chart, /** Pattern */ pattern) {
  if (!$Equality.$same(pattern, null)) {
   if (!$Equality.$same(pattern.m_getCanvasPattern__(), null)) {
    this.m_setStrokeStyle__org_pepstock_charba_client_dom_elements_CanvasPatternItem(pattern.m_getCanvasPattern__());
   } else {
    this.m_setStrokeStyle__org_pepstock_charba_client_dom_elements_CanvasPatternItem(DatasetCanvasObjectFactory.m_get__().m_createPattern__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(chart, pattern));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
  }
 }
 
 m_setStrokeStyle__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** CanvasGradient */ gradient) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, gradient);
 }
 
 m_setStrokeStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient(/** IsChart */ chart, /** Gradient */ gradient) {
  if (!$Equality.$same(gradient, null)) {
   let datasetIndex = Math.max(0, this.m_getDatasetIndex__());
   let index = Math.max(0, this.m_getIndex__());
   this.m_setStrokeStyle__org_pepstock_charba_client_dom_elements_CanvasGradientItem(DatasetCanvasObjectFactory.m_get__().m_createGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(chart, gradient, datasetIndex, index));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
  }
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, style);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ pointStyle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, pointStyle);
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_items_LegendItem_Property, rotation);
 }
 //Default method forwarding stub.
 /** @override @return {SafeHtml} */
 m_getTextAsHtml__() {
  return HasLegendText.m_getTextAsHtml__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isHtmlText__() {
  return HasLegendText.m_isHtmlText__$default__org_pepstock_charba_client_items_HasLegendText(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setHtmlText__boolean(/** boolean */ arg0) {
  HasLegendText.m_setHtmlText__$default__org_pepstock_charba_client_items_HasLegendText__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setText__java_lang_String(/** ?string */ arg0) {
  HasLegendText.m_setText__$default__org_pepstock_charba_client_items_HasLegendText__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml(/** SafeHtml */ arg0) {
  HasLegendText.m_setText__$default__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_dom_safehtml_SafeHtml(this, arg0);
 }
 /** @return {LegendLabelItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_LegendLabelItem() {
  return (LegendLabelItem.$clinit(), LegendLabelItem.$static_FACTORY__org_pepstock_charba_client_items_LegendLabelItem);
 }
 
 static $clinit() {
  LegendLabelItem.$clinit = () =>{};
  LegendLabelItem.$loadModules();
  LegendItem.$clinit();
  HasLegendText.$clinit();
  LegendLabelItem.$static_FACTORY__org_pepstock_charba_client_items_LegendLabelItem = LegendLabelItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendLabelItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DatasetCanvasObjectFactory = goog.module.get('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.LegendItem.Property$impl');
  LegendLabelItemFactory = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem.LegendLabelItemFactory$impl');
  LegendTextHandler = goog.module.get('org.pepstock.charba.client.items.LegendTextHandler$impl');
 }
}
/**@private {LegendLabelItemFactory}*/
LegendLabelItem.$static_FACTORY__org_pepstock_charba_client_items_LegendLabelItem;
HasLegendText.$markImplementor(LegendLabelItem);
$Util.$setClassMetadata(LegendLabelItem, "org.pepstock.charba.client.items.LegendLabelItem");

exports = LegendLabelItem;

//# sourceMappingURL=LegendLabelItem.js.map
