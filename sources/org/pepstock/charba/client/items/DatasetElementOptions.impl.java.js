goog.module('org.pepstock.charba.client.items.DatasetElementOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ArcBorderRadius = goog.forwardDeclare('org.pepstock.charba.client.data.ArcBorderRadius$impl');
let BarBorderRadius = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderRadius$impl');
let BarBorderWidth = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderWidth$impl');
let AbsoluteDatasetIndexFill = goog.forwardDeclare('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElementOptions.Property$impl');
let JsItemsHelper = goog.forwardDeclare('org.pepstock.charba.client.items.JsItemsHelper$impl');
let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let TooltipLabelPointStyle = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class DatasetElementOptions extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetElementOptions} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DatasetElementOptions.$clinit();
  let $instance = new DatasetElementOptions();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetElementOptions__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DatasetElementOptions__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {boolean} */
 m_isBackgroundColorAsColor__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {boolean} */
 m_isBackgroundColorAsGradient__() {
  return JsItemsHelper.m_get__().m_isCanvasGradient__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_getNativeObject__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {boolean} */
 m_isBackgroundColorAsPattern__() {
  return JsItemsHelper.m_get__().m_isCanvasPattern__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_getNativeObject__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 /** @return {Gradient} */
 m_getBackgroundColorAsGradient__() {
  return GradientBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.m_getBackgroundColorAsCanvasGradient__());
 }
 /** @return {CanvasGradient} */
 m_getBackgroundColorAsCanvasGradient__() {
  if (this.m_isBackgroundColorAsGradient__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, /**@type {CanvasGradient}*/ (null));
  }
  return null;
 }
 /** @return {Pattern} */
 m_getBackgroundColorAsPattern__() {
  return PatternBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasPatternItem(this.m_getBackgroundColorAsCanvasPattern__());
 }
 /** @return {CanvasPattern} */
 m_getBackgroundColorAsCanvasPattern__() {
  if (this.m_isBackgroundColorAsPattern__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, /**@type {CanvasPattern}*/ (null));
  }
  return null;
 }
 /** @return {boolean} */
 m_isBorderWidthAsObject__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {number} */
 m_getBorderWidth__() {
  if (this.m_isBorderWidthAsObject__()) {
   return BarBorderWidth.f_FACTORY__org_pepstock_charba_client_data_BarBorderWidth.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property)).m_average__();
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getBorderWidth__());
 }
 /** @return {BarBorderWidth} */
 m_getBorderWidthAsObject__() {
  if (this.m_isBorderWidthAsObject__()) {
   return BarBorderWidth.f_FACTORY__org_pepstock_charba_client_data_BarBorderWidth.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property));
  }
  return BarBorderWidth.$create__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getBorderWidth__()));
 }
 /** @return {boolean} */
 m_isBorderColorAsColor__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {boolean} */
 m_isBorderColorAsGradient__() {
  return JsItemsHelper.m_get__().m_isCanvasGradient__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_getNativeObject__(), Property.f_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 /** @return {Gradient} */
 m_getBorderColorAsGradient__() {
  return GradientBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.m_getBackgroundColorAsCanvasGradient__());
 }
 /** @return {CanvasGradient} */
 m_getBorderColorAsCanvasGradient__() {
  if (this.m_isBorderColorAsGradient__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, /**@type {CanvasGradient}*/ (null));
  }
  return null;
 }
 /** @return {number} */
 m_getBarPercentage__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_getBarPercentage__());
 }
 /** @return {number} */
 m_getCategoryPercentage__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_getCategoryPercentage__());
 }
 /** @return {BorderAlign} */
 m_getBorderAlign__() {
  return /**@type {BorderAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property, BorderAlign.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getBorderAlign__()), BorderAlign));
 }
 /** @return {number} */
 m_getWeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getWeight__());
 }
 /** @return {number} */
 m_getAngle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getAngle__());
 }
 /** @return {number} */
 m_getOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getOffset__());
 }
 /** @return {BorderSkipped} */
 m_getBorderSkipped__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped;
  }
  return /**@type {BorderSkipped}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property, BorderSkipped.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderSkipped__()), BorderSkipped));
 }
 /** @return {boolean} */
 m_isBorderRadiusAsObject__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {number} */
 m_getBorderRadius__() {
  if (this.m_isBorderRadiusAsObject__()) {
   return BarBorderRadius.f_FACTORY__org_pepstock_charba_client_data_BarBorderRadius.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property)).m_average__();
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 /** @return {BarBorderRadius} */
 m_getBarBorderRadius__() {
  if (this.m_isBorderRadiusAsObject__()) {
   return BarBorderRadius.f_FACTORY__org_pepstock_charba_client_data_BarBorderRadius.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property));
  }
  return BarBorderRadius.$create__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__()));
 }
 /** @return {ArcBorderRadius} */
 m_getArcBorderRadius__() {
  if (this.m_isBorderRadiusAsObject__()) {
   return ArcBorderRadius.f_FACTORY__org_pepstock_charba_client_data_ArcBorderRadius.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property));
  }
  return ArcBorderRadius.$create__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getBorderRadius__()));
 }
 /** @return {number} */
 m_getTension__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getTension__());
 }
 /** @return {CapStyle} */
 m_getBorderCapStyle__() {
  return /**@type {CapStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, CapStyle.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderCapStyle__()), CapStyle));
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property), ArrayInteger_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 /** @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderDashOffset__());
 }
 /** @return {JoinStyle} */
 m_getBorderJoinStyle__() {
  return /**@type {JoinStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, JoinStyle.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderJoinStyle__()), JoinStyle));
 }
 /** @return {boolean} */
 m_isCapBezierPoints__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_isCapBezierPoints__());
 }
 /** @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {
  return /**@type {CubicInterpolationMode}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property, CubicInterpolationMode.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getCubicInterpolationMode__()), CubicInterpolationMode));
 }
 /** @return {boolean} */
 m_isStepped__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_isStepped__());
 }
 /** @return {IsFill} */
 m_getFill__() {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(Property.f_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType, type)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property, false) ? Fill.f_ORIGIN__org_pepstock_charba_client_enums_Fill : Fill.f_FALSE__org_pepstock_charba_client_enums_Fill;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {IsFill}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property, Fill.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getFill__()), IsFill));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, type)) {
   return Fill.m_getFill__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property, AbsoluteDatasetIndexFill.f_DEFAULT_VALUE_AS_INT__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill));
  }
  return Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getFill__();
 }
 /** @return {number} */
 m_getRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getRadius__());
 }
 /** @return {number} */
 m_getHitRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getHitRadius__());
 }
 /** @return {number} */
 m_getHoverRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getHoverRadius__());
 }
 /** @return {number} */
 m_getHoverBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getHoverBorderWidth__());
 }
 /** @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getRotation__());
 }
 /** @return {boolean} */
 m_isPointStyleAsImage__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return /**@type {PointStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, PointStyle.m_values__(), Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getPointStyle__()), PointStyle));
  }
  return Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getPointStyle__();
 }
 /** @return {TooltipLabelPointStyle} */
 m_createTooltipLabelPointStyle__() {
  let result = TooltipLabelPointStyle.$create__();
  if (this.m_isPointStyleAsImage__()) {
   result.m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(this.m_getPointStyleAsImage__());
  } else {
   result.m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(this.m_getPointStyle__());
  }
  result.m_setRotation__double(this.m_getRotation__());
  return result;
 }
 /** @return {TooltipLabelColor} */
 m_createTooltipLabelColor__() {
  let result = TooltipLabelColor.$create__();
  this.m_loadBackgroundColor__org_pepstock_charba_client_items_TooltipLabelColor_$p_org_pepstock_charba_client_items_DatasetElementOptions(result);
  this.m_loadBorderColor__org_pepstock_charba_client_items_TooltipLabelColor_$p_org_pepstock_charba_client_items_DatasetElementOptions(result);
  return result;
 }
 
 m_loadBackgroundColor__org_pepstock_charba_client_items_TooltipLabelColor_$p_org_pepstock_charba_client_items_DatasetElementOptions(/** TooltipLabelColor */ labelColor) {
  if (this.m_isBackgroundColorAsPattern__()) {
   labelColor.m_setBackgroundColor__org_pepstock_charba_client_dom_elements_CanvasPatternItem_$pp_org_pepstock_charba_client_items(this.m_getBackgroundColorAsCanvasPattern__());
  } else if (this.m_isBackgroundColorAsGradient__()) {
   labelColor.m_setBackgroundColor__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$pp_org_pepstock_charba_client_items(this.m_getBackgroundColorAsCanvasGradient__());
  } else {
   labelColor.m_setBackgroundColor__java_lang_String_$pp_org_pepstock_charba_client_items(this.m_getBackgroundColorAsString__());
  }
 }
 
 m_loadBorderColor__org_pepstock_charba_client_items_TooltipLabelColor_$p_org_pepstock_charba_client_items_DatasetElementOptions(/** TooltipLabelColor */ labelColor) {
  if (this.m_isBorderColorAsGradient__()) {
   labelColor.m_setBorderColor__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$pp_org_pepstock_charba_client_items(this.m_getBorderColorAsCanvasGradient__());
  } else {
   labelColor.m_setBorderColor__java_lang_String_$pp_org_pepstock_charba_client_items(this.m_getBorderColorAsString__());
  }
 }
 
 static $clinit() {
  DatasetElementOptions.$clinit = () =>{};
  DatasetElementOptions.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetElementOptions;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ArcBorderRadius = goog.module.get('org.pepstock.charba.client.data.ArcBorderRadius$impl');
  BarBorderRadius = goog.module.get('org.pepstock.charba.client.data.BarBorderRadius$impl');
  BarBorderWidth = goog.module.get('org.pepstock.charba.client.data.BarBorderWidth$impl');
  AbsoluteDatasetIndexFill = goog.module.get('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
  BorderAlign = goog.module.get('org.pepstock.charba.client.enums.BorderAlign$impl');
  BorderSkipped = goog.module.get('org.pepstock.charba.client.enums.BorderSkipped$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  CubicInterpolationMode = goog.module.get('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  IsFill = goog.module.get('org.pepstock.charba.client.enums.IsFill$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.DatasetElementOptions.Property$impl');
  JsItemsHelper = goog.module.get('org.pepstock.charba.client.items.JsItemsHelper$impl');
  TooltipLabelColor = goog.module.get('org.pepstock.charba.client.items.TooltipLabelColor$impl');
  TooltipLabelPointStyle = goog.module.get('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(DatasetElementOptions, "org.pepstock.charba.client.items.DatasetElementOptions");

exports = DatasetElementOptions;

//# sourceMappingURL=DatasetElementOptions.js.map
