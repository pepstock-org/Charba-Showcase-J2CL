goog.module('org.pepstock.charba.client.options.AbstractScale$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasLabels = goog.require('org.pepstock.charba.client.data.HasLabels$impl');
const IsDefaultScale = goog.require('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let LabelsHandler = goog.forwardDeclare('org.pepstock.charba.client.data.LabelsHandler$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let Bounds = goog.forwardDeclare('org.pepstock.charba.client.enums.Bounds$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale.Property$impl');
let Adapters = goog.forwardDeclare('org.pepstock.charba.client.options.Adapters$impl');
let AngleLines = goog.forwardDeclare('org.pepstock.charba.client.options.AngleLines$impl');
let Grid = goog.forwardDeclare('org.pepstock.charba.client.options.Grid$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let OptionsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.options.OptionsEnvelop$impl');
let PointLabels = goog.forwardDeclare('org.pepstock.charba.client.options.PointLabels$impl');
let ScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleTitle$impl');
let Ticks = goog.forwardDeclare('org.pepstock.charba.client.options.Ticks$impl');
let Time = goog.forwardDeclare('org.pepstock.charba.client.options.Time$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @extends {AbstractModel<Options, IsDefaultScale>}
 * @implements {IsDefaultScale}
 * @implements {HasLabels}
 */
class AbstractScale extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Grid}*/
  this.f_grid__org_pepstock_charba_client_options_AbstractScale_;
  /**@type {Ticks}*/
  this.f_ticks__org_pepstock_charba_client_options_AbstractScale_;
  /**@type {ScaleTitle}*/
  this.f_title__org_pepstock_charba_client_options_AbstractScale_;
  /**@type {AngleLines}*/
  this.f_angleLines__org_pepstock_charba_client_options_AbstractScale_;
  /**@type {PointLabels}*/
  this.f_pointLabels__org_pepstock_charba_client_options_AbstractScale_;
  /**@type {Time}*/
  this.f_time__org_pepstock_charba_client_options_AbstractScale_;
  /**@type {Adapters}*/
  this.f_adapters__org_pepstock_charba_client_options_AbstractScale_;
  /**@type {LabelsHandler}*/
  this.f_labelsHandler__org_pepstock_charba_client_options_AbstractScale_;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultScale */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(null, null, defaultValues, nativeObject);
  this.f_angleLines__org_pepstock_charba_client_options_AbstractScale_ = AngleLines.$create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAngleLines__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getAngleLines__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property));
  this.f_grid__org_pepstock_charba_client_options_AbstractScale_ = Grid.$create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultGrid__org_pepstock_charba_client_commons_NativeObject(this, Property.f_GRID__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getGrid__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_GRID__org_pepstock_charba_client_options_AbstractScale_Property));
  this.f_pointLabels__org_pepstock_charba_client_options_AbstractScale_ = PointLabels.$create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPointLabels__org_pepstock_charba_client_commons_NativeObject(this, Property.f_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getPointLabels__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property));
  this.f_title__org_pepstock_charba_client_options_AbstractScale_ = ScaleTitle.$create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScaleTitle__org_pepstock_charba_client_commons_NativeObject(this, Property.f_TITLE__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getTitle__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TITLE__org_pepstock_charba_client_options_AbstractScale_Property));
  this.f_ticks__org_pepstock_charba_client_options_AbstractScale_ = Ticks.$create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTicks__org_pepstock_charba_client_commons_NativeObject(this, Property.f_TICKS__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getTicks__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TICKS__org_pepstock_charba_client_options_AbstractScale_Property));
  this.f_time__org_pepstock_charba_client_options_AbstractScale_ = Time.$create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTime__org_pepstock_charba_client_commons_NativeObject(this, Property.f_TIME__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getTime__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TIME__org_pepstock_charba_client_options_AbstractScale_Property));
  this.f_adapters__org_pepstock_charba_client_options_AbstractScale_ = Adapters.$create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAdapters__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getAdapters__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property));
  this.f_labelsHandler__org_pepstock_charba_client_options_AbstractScale_ = LabelsHandler.$create__org_pepstock_charba_client_options_OptionsEnvelop(/**@type {!OptionsEnvelop<?>}*/ (OptionsEnvelop.$create__java_lang_Object(this.m_getNativeObject__())));
 }
 /** @override @return {LabelsHandler} */
 m_getLabelsHandler__() {
  return this.f_labelsHandler__org_pepstock_charba_client_options_AbstractScale_;
 }
 /** @override @return {ScaleTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_options_AbstractScale_;
 }
 /** @override @return {Ticks} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_options_AbstractScale_;
 }
 /** @override @return {Grid} */
 m_getGrid__() {
  return this.f_grid__org_pepstock_charba_client_options_AbstractScale_;
 }
 /** @override @return {AngleLines} */
 m_getAngleLines__() {
  return this.f_angleLines__org_pepstock_charba_client_options_AbstractScale_;
 }
 /** @override @return {PointLabels} */
 m_getPointLabels__() {
  return this.f_pointLabels__org_pepstock_charba_client_options_AbstractScale_;
 }
 /** @override @return {Time} */
 m_getTime__() {
  return this.f_time__org_pepstock_charba_client_options_AbstractScale_;
 }
 /** @override @return {Adapters} */
 m_getAdapters__() {
  return this.f_adapters__org_pepstock_charba_client_options_AbstractScale_;
 }
 
 m_setBeginAtZero__boolean(/** boolean */ beginAtZero) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property, beginAtZero);
 }
 /** @override @return {boolean} */
 m_isBeginAtZero__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_isBeginAtZero__());
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property, backgroundColor);
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 
 m_setGrace__int(/** number */ grace) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, Checker.m_positiveOrZero__int(grace));
 }
 /** @override @return {number} */
 m_getGrace__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getGrace__());
  }
  return /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getGrace__();
 }
 
 m_setGraceAsPercentage__java_lang_String(/** ?string */ grace) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, grace);
 }
 /** @override @return {?string} */
 m_getGraceAsPercentage__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getGraceAsPercentage__());
  }
  return /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getGraceAsPercentage__();
 }
 
 m_setMin__double(/** number */ min) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, min);
 }
 /** @override @return {number} */
 m_getMin__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getMin__());
 }
 
 m_setMin__java_util_Date(/** Date */ min) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, min);
 }
 /** @return {Date} */
 m_getMinAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {Date}*/ (null));
 }
 
 m_setMax__double(/** number */ max) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, max);
 }
 /** @override @return {number} */
 m_getMax__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getMax__());
 }
 
 m_setMax__java_util_Date(/** Date */ max) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, max);
 }
 /** @return {Date} */
 m_getMaxAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {Date}*/ (null));
 }
 
 m_setMin__java_lang_String(/** ?string */ min) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, min);
 }
 /** @return {?string} */
 m_getMinAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, j_l_String.m_valueOf__double(/**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getMin__()));
 }
 
 m_setMax__java_lang_String(/** ?string */ max) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, max);
 }
 /** @return {?string} */
 m_getMaxAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, j_l_String.m_valueOf__double(/**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getMax__()));
 }
 
 m_setMinIndex__int(/** number */ min) {
  this.m_setIndex__org_pepstock_charba_client_options_AbstractScale_Property__org_pepstock_charba_client_options_AbstractScale_Property__int_$p_org_pepstock_charba_client_options_AbstractScale(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, Property.f_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property, min);
 }
 /** @return {number} */
 m_getMinIndex__() {
  return this.m_getIndex__org_pepstock_charba_client_options_AbstractScale_Property__org_pepstock_charba_client_options_AbstractScale_Property_$p_org_pepstock_charba_client_options_AbstractScale(Property.f_MIN__org_pepstock_charba_client_options_AbstractScale_Property, Property.f_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 
 m_setMaxIndex__int(/** number */ max) {
  this.m_setIndex__org_pepstock_charba_client_options_AbstractScale_Property__org_pepstock_charba_client_options_AbstractScale_Property__int_$p_org_pepstock_charba_client_options_AbstractScale(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, Property.f_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property, max);
 }
 /** @return {number} */
 m_getMaxIndex__() {
  return this.m_getIndex__org_pepstock_charba_client_options_AbstractScale_Property__org_pepstock_charba_client_options_AbstractScale_Property_$p_org_pepstock_charba_client_options_AbstractScale(Property.f_MAX__org_pepstock_charba_client_options_AbstractScale_Property, Property.f_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 
 m_setIndex__org_pepstock_charba_client_options_AbstractScale_Property__org_pepstock_charba_client_options_AbstractScale_Property__int_$p_org_pepstock_charba_client_options_AbstractScale(/** Property */ property, /** Property */ charbaProperty, /** number */ index) {
  if (Checker.m_isPositive__int(index)) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(property, index);
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(charbaProperty, index);
  }
 }
 /** @return {number} */
 m_getIndex__org_pepstock_charba_client_options_AbstractScale_Property__org_pepstock_charba_client_options_AbstractScale_Property_$p_org_pepstock_charba_client_options_AbstractScale(/** Property */ property, /** Property */ charbaProperty) {
  let charbaIndex = this.m_getValue__org_pepstock_charba_client_commons_Key__int(charbaProperty, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
  let index = this.m_getValue__org_pepstock_charba_client_commons_Key__int(property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
  if (charbaIndex == index) {
   return charbaIndex;
  }
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 
 m_setSuggestedMax__double(/** number */ suggestedMax) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property, suggestedMax);
 }
 /** @override @return {number} */
 m_getSuggestedMax__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getSuggestedMax__());
 }
 
 m_setSuggestedMin__double(/** number */ suggestedMin) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property, suggestedMin);
 }
 /** @override @return {number} */
 m_getSuggestedMin__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getSuggestedMin__());
 }
 
 m_setAlignToPixels__boolean(/** boolean */ alignToPixels) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property, alignToPixels);
 }
 /** @override @return {boolean} */
 m_isAlignToPixels__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_isAlignToPixels__());
 }
 
 m_setReverse__boolean(/** boolean */ reverse) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property, reverse);
 }
 /** @override @return {boolean} */
 m_isReverse__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_isReverse__());
 }
 
 m_setStacked__boolean(/** boolean */ stacked) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_STACKED__org_pepstock_charba_client_options_AbstractScale_Property, stacked);
 }
 /** @override @return {boolean} */
 m_isStacked__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_STACKED__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_isStacked__());
 }
 
 m_setSingleStacked__boolean(/** boolean */ stacked) {
  if (stacked) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_STACKED__org_pepstock_charba_client_options_AbstractScale_Property, AbstractScale.f_SINGLE_STACKED__org_pepstock_charba_client_options_AbstractScale_);
  } else {
   this.m_setStacked__boolean(false);
  }
 }
 /** @override @return {boolean} */
 m_isSingleStacked__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_STACKED__org_pepstock_charba_client_options_AbstractScale_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 
 m_setWeight__double(/** number */ weight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, weight);
 }
 /** @override @return {number} */
 m_getWeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getWeight__());
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property, display);
 }
 
 m_setDisplay__org_pepstock_charba_client_enums_Display(/** Display */ display) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Display.f_AUTO__org_pepstock_charba_client_enums_Display, display)) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property, display);
  } else {
   this.m_setDisplay__boolean($Objects.m_equals__java_lang_Object__java_lang_Object(Display.f_TRUE__org_pepstock_charba_client_enums_Display, display));
  }
 }
 /** @override @return {Display} */
 m_getDisplay__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   let value = this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property, true);
   return value ? Display.f_TRUE__org_pepstock_charba_client_enums_Display : Display.f_FALSE__org_pepstock_charba_client_enums_Display;
  }
  return /**@type {Display}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property, Display.m_values__(), /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getDisplay__()), Display));
 }
 
 m_setOffset__boolean(/** boolean */ offset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property, offset);
 }
 /** @override @return {boolean} */
 m_isOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_isOffset__());
 }
 
 m_setPosition__org_pepstock_charba_client_enums_AxisPosition(/** AxisPosition */ position) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_options_AbstractScale_Property, position);
 }
 /** @override @return {AxisPosition} */
 m_getPosition__() {
  if (!this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POSITION__org_pepstock_charba_client_options_AbstractScale_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return /**@type {AxisPosition}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_options_AbstractScale_Property, AxisPosition.m_values__(), /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getPosition__()), AxisPosition));
  }
  return /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getPosition__();
 }
 
 m_setBounds__org_pepstock_charba_client_enums_Bounds(/** Bounds */ bounds) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property, bounds);
 }
 /** @override @return {Bounds} */
 m_getBounds__() {
  return /**@type {Bounds}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property, Bounds.m_values__(), /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getBounds__()), Bounds));
 }
 
 m_setStack__java_lang_String(/** ?string */ stack) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_STACK__org_pepstock_charba_client_options_AbstractScale_Property, stack);
 }
 /** @override @return {?string} */
 m_getStack__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_STACK__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getStack__());
 }
 
 m_setStackWeight__double(/** number */ stackWeight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, stackWeight);
 }
 /** @override @return {number} */
 m_getStackWeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getStackWeight__());
 }
 /** @override */
 m_setLabels__arrayOf_java_lang_String(/** Array<?string> */ labels) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__arrayOf_java_lang_String(this, labels);
  this.m_checkAndAddToParent__();
 }
 /** @override */
 m_setLabels__org_pepstock_charba_client_data_Labels(/** Labels */ labels) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__org_pepstock_charba_client_data_Labels(this, labels);
  this.m_checkAndAddToParent__();
 }
 
 m_setAnimate__boolean(/** boolean */ animate) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property, animate);
 }
 /** @override @return {boolean} */
 m_isAnimate__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_isAnimate__());
 }
 
 m_setStartAngle__double(/** number */ startAngle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property, startAngle);
 }
 /** @override @return {number} */
 m_getStartAngle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property, /**@type {IsDefaultScale}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScale)).m_getStartAngle__());
 }
 //Default method forwarding stub.
 /** @override @return {Labels} */
 m_getLabels__() {
  return HasLabels.m_getLabels__$default__org_pepstock_charba_client_data_HasLabels(this);
 }
 //Default method forwarding stub.
 /** @override @return {Labels} */
 m_getLabels__boolean(/** boolean */ arg0) {
  return HasLabels.m_getLabels__$default__org_pepstock_charba_client_data_HasLabels__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setLabels__java_util_List(/** List<?string> */ arg0) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__java_util_List(this, arg0);
 }
 
 static $clinit() {
  AbstractScale.$clinit = () =>{};
  AbstractScale.$loadModules();
  AbstractModel.$clinit();
  HasLabels.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractScale;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  LabelsHandler = goog.module.get('org.pepstock.charba.client.data.LabelsHandler$impl');
  AxisPosition = goog.module.get('org.pepstock.charba.client.enums.AxisPosition$impl');
  Bounds = goog.module.get('org.pepstock.charba.client.enums.Bounds$impl');
  Display = goog.module.get('org.pepstock.charba.client.enums.Display$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractScale.Property$impl');
  Adapters = goog.module.get('org.pepstock.charba.client.options.Adapters$impl');
  AngleLines = goog.module.get('org.pepstock.charba.client.options.AngleLines$impl');
  Grid = goog.module.get('org.pepstock.charba.client.options.Grid$impl');
  OptionsEnvelop = goog.module.get('org.pepstock.charba.client.options.OptionsEnvelop$impl');
  PointLabels = goog.module.get('org.pepstock.charba.client.options.PointLabels$impl');
  ScaleTitle = goog.module.get('org.pepstock.charba.client.options.ScaleTitle$impl');
  Ticks = goog.module.get('org.pepstock.charba.client.options.Ticks$impl');
  Time = goog.module.get('org.pepstock.charba.client.options.Time$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
AbstractScale.f_SINGLE_STACKED__org_pepstock_charba_client_options_AbstractScale_ = "single";
IsDefaultScale.$markImplementor(AbstractScale);
HasLabels.$markImplementor(AbstractScale);
$Util.$setClassMetadata(AbstractScale, "org.pepstock.charba.client.options.AbstractScale");

exports = AbstractScale;

//# sourceMappingURL=AbstractScale.js.map
