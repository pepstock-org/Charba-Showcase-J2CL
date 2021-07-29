goog.module('org.pepstock.charba.client.items.LegendItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let BorderRadiusItem = goog.forwardDeclare('org.pepstock.charba.client.items.BorderRadiusItem$impl');
let JsItemsHelper = goog.forwardDeclare('org.pepstock.charba.client.items.JsItemsHelper$impl');
let LegendItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem.LegendItemFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class LegendItem extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {BorderRadiusItem}*/
  this.f_borderRadius__org_pepstock_charba_client_items_LegendItem_;
 }
 //Factory method corresponding to constructor 'LegendItem()'.
 /** @return {!LegendItem} */
 static $create__() {
  LegendItem.$clinit();
  let $instance = new LegendItem();
  $instance.$ctor__org_pepstock_charba_client_items_LegendItem__();
  return $instance;
 }
 //Initialization from constructor 'LegendItem()'.
 
 $ctor__org_pepstock_charba_client_items_LegendItem__() {
  this.$ctor__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (null));
 }
 //Factory method corresponding to constructor 'LegendItem(NativeObject)'.
 /** @return {!LegendItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  LegendItem.$clinit();
  let $instance = new LegendItem();
  $instance.$ctor__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'LegendItem(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  let radius = Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   radius = this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property);
  }
  this.f_borderRadius__org_pepstock_charba_client_items_LegendItem_ = BorderRadiusItem.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(this, Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property, this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property));
  if (Undefined.m_isNot__int(radius)) {
   this.f_borderRadius__org_pepstock_charba_client_items_LegendItem_.m_set__int(radius);
  }
 }
 /** @return {boolean} */
 m_isHidden__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return Undefined.m_isNot__int(this.m_getDatasetIndex__()) ? !chart.m_isDatasetVisible__int(this.m_getDatasetIndex__()) : !chart.m_isDataVisible__int(this.m_getIndex__());
  }
  return false;
 }
 /** @return {BorderRadiusItem} */
 m_getBorderRadius__() {
  return this.f_borderRadius__org_pepstock_charba_client_items_LegendItem_;
 }
 //Factory method corresponding to constructor 'LegendItem(ChartEnvelop)'.
 /** @return {!LegendItem} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<LegendItem> */ envelop) {
  LegendItem.$clinit();
  let $instance = new LegendItem();
  $instance.$ctor__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'LegendItem(ChartEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<LegendItem> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_NativeObject(/**@type {LegendItem}*/ ($Casts.$to(/**@type {ChartEnvelop<LegendItem>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), LegendItem)).m_getNativeObject__());
 }
 /** @return {number} */
 m_getDatasetIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_LegendItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getText__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT__org_pepstock_charba_client_items_LegendItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isFillStyleAsColor__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {boolean} */
 m_isFillStyleAsGradient__() {
  return JsItemsHelper.m_get__().m_isCanvasGradient__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_nativeObject___$pp_org_pepstock_charba_client_items(), Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {boolean} */
 m_isFillStyleAsPattern__() {
  return JsItemsHelper.m_get__().m_isCanvasPattern__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_nativeObject___$pp_org_pepstock_charba_client_items(), Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {IsColor} */
 m_getFontColor__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return ColorBuilder.m_parse__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property, Defaults.m_get__().m_getGlobal__().m_getColorAsString__()));
  }
  return null;
 }
 /** @return {IsColor} */
 m_getFillStyle__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, Defaults.m_get__().m_getGlobal__().m_getBackgroundColorAsString__()));
 }
 /** @return {Gradient} */
 m_getFillStyleAsGradient__() {
  return GradientBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.m_getFillStyleAsCanvasGradient__());
 }
 /** @return {CanvasGradient} */
 m_getFillStyleAsCanvasGradient__() {
  if (this.m_isFillStyleAsGradient__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, /**@type {CanvasGradient}*/ (null));
  }
  return null;
 }
 /** @return {Pattern} */
 m_getFillStyleAsPattern__() {
  return PatternBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasPatternItem(this.m_getFillStyleAsCanvasPattern__());
 }
 /** @return {CanvasPattern} */
 m_getFillStyleAsCanvasPattern__() {
  if (this.m_isFillStyleAsPattern__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, /**@type {CanvasPattern}*/ (null));
  }
  return null;
 }
 /** @return {boolean} */
 m_isStrokeStyleAsColor__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {boolean} */
 m_isStrokeStyleAsGradient__() {
  return JsItemsHelper.m_get__().m_isCanvasGradient__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_nativeObject___$pp_org_pepstock_charba_client_items(), Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {boolean} */
 m_isStrokeStyleAsPattern__() {
  return JsItemsHelper.m_get__().m_isCanvasPattern__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_nativeObject___$pp_org_pepstock_charba_client_items(), Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {IsColor} */
 m_getStrokeStyle__() {
  if (this.m_isStrokeStyleAsColor__()) {
   return ColorBuilder.m_parse__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__()));
  }
  return null;
 }
 /** @return {CanvasGradient} */
 m_getStrokeStyleAsCanvasGradient__() {
  if (this.m_isStrokeStyleAsGradient__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, /**@type {CanvasGradient}*/ (null));
  }
  return null;
 }
 /** @return {Gradient} */
 m_getStrokeStyleAsGradient__() {
  return GradientBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.m_getStrokeStyleAsCanvasGradient__());
 }
 /** @return {CanvasPattern} */
 m_getStrokeStyleAsCanvasPattern__() {
  if (this.m_isStrokeStyleAsPattern__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, /**@type {CanvasPattern}*/ (null));
  }
  return null;
 }
 /** @return {Pattern} */
 m_getStrokeStyleAsPattern__() {
  return PatternBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasPatternItem(this.m_getStrokeStyleAsCanvasPattern__());
 }
 /** @return {CapStyle} */
 m_getLineCap__() {
  return /**@type {CapStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property, CapStyle.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderCapStyle__()), CapStyle));
 }
 /** @return {List<Integer>} */
 m_getLineDash__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property), ArrayInteger_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 /** @return {number} */
 m_getLineDashOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderDashOffset__());
 }
 /** @return {JoinStyle} */
 m_getLineJoin__() {
  return /**@type {JoinStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property, JoinStyle.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderJoinStyle__()), JoinStyle));
 }
 /** @return {number} */
 m_getLineWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderWidth__());
 }
 /** @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_items_LegendItem_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getRotation__());
 }
 /** @return {PointStyleType} */
 m_getPointStyleType__() {
  return PointStyleType.m_getType__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_Key(this, Property.f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return /**@type {PointStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, PointStyle.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getPointStyle__()), PointStyle));
  }
  return Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getPointStyle__();
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_IMAGE__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_CANVAS__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_items() {
  return super.m_getNativeObject__();
 }
 /** @return {LegendItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_LegendItem() {
  return (LegendItem.$clinit(), LegendItem.$static_FACTORY__org_pepstock_charba_client_items_LegendItem);
 }
 
 static $clinit() {
  LegendItem.$clinit = () =>{};
  LegendItem.$loadModules();
  AbstractNode.$clinit();
  LegendItem.$static_FACTORY__org_pepstock_charba_client_items_LegendItem = LegendItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendItem;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  BorderRadiusItem = goog.module.get('org.pepstock.charba.client.items.BorderRadiusItem$impl');
  JsItemsHelper = goog.module.get('org.pepstock.charba.client.items.JsItemsHelper$impl');
  LegendItemFactory = goog.module.get('org.pepstock.charba.client.items.LegendItem.LegendItemFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.LegendItem.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {LegendItemFactory}*/
LegendItem.$static_FACTORY__org_pepstock_charba_client_items_LegendItem;
$Util.$setClassMetadata(LegendItem, "org.pepstock.charba.client.items.LegendItem");

exports = LegendItem;

//# sourceMappingURL=LegendItem.js.map
