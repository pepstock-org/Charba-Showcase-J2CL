goog.module('org.pepstock.charba.client.options.Ticks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTicks = goog.require('org.pepstock.charba.client.defaults.IsDefaultTicks$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');

let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let CrossAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.CrossAlign$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let Major = goog.forwardDeclare('org.pepstock.charba.client.options.Major$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Ticks.Property$impl');
let TicksNumberFormat = goog.forwardDeclare('org.pepstock.charba.client.options.TicksNumberFormat$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<AbstractScale, IsDefaultTicks>}
 * @implements {IsDefaultTicks}
 * @implements {HasFont}
 */
class Ticks extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Major}*/
  this.f_major__org_pepstock_charba_client_options_Ticks_;
  /**@type {FontContainer}*/
  this.f_fontContainer__org_pepstock_charba_client_options_Ticks_;
  /**@type {TicksNumberFormat}*/
  this.f_numberFormat__org_pepstock_charba_client_options_Ticks_;
  /**@type {Padding}*/
  this.f_backdropPadding__org_pepstock_charba_client_options_Ticks_;
 }
 /** @return {!Ticks} */
 static $create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTicks__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultTicks */ defaultValues, /** ? */ nativeObject) {
  Ticks.$clinit();
  let $instance = new Ticks();
  $instance.$ctor__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTicks__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTicks__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultTicks */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  this.f_major__org_pepstock_charba_client_options_Ticks_ = Major.$create__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultMajor__org_pepstock_charba_client_commons_NativeObject(this, Property.f_MAJOR__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getMajor__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_MAJOR__org_pepstock_charba_client_options_Ticks_Property));
  this.f_numberFormat__org_pepstock_charba_client_options_Ticks_ = TicksNumberFormat.$create__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(this, Property.f_FORMAT__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getNumberFormat__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FORMAT__org_pepstock_charba_client_options_Ticks_Property));
  this.f_fontContainer__org_pepstock_charba_client_options_Ticks_ = FontContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)), this.m_getNativeObject__());
  this.f_backdropPadding__org_pepstock_charba_client_options_Ticks_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getBackdropPadding__());
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  return this.f_fontContainer__org_pepstock_charba_client_options_Ticks_;
 }
 /** @override @return {Major} */
 m_getMajor__() {
  return this.f_major__org_pepstock_charba_client_options_Ticks_;
 }
 /** @override @return {TicksNumberFormat} */
 m_getNumberFormat__() {
  return this.f_numberFormat__org_pepstock_charba_client_options_Ticks_;
 }
 /** @override @return {Padding} */
 m_getBackdropPadding__() {
  return this.f_backdropPadding__org_pepstock_charba_client_options_Ticks_;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_Ticks_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_isDisplay__());
 }
 
 m_setAutoSkip__boolean(/** boolean */ autoSkip) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property, autoSkip);
 }
 /** @override @return {boolean} */
 m_isAutoSkip__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_isAutoSkip__());
 }
 
 m_setAutoSkipPadding__int(/** number */ autoSkipPadding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrZero__int(autoSkipPadding));
 }
 /** @override @return {number} */
 m_getAutoSkipPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getAutoSkipPadding__());
 }
 
 m_setIncludeBounds__boolean(/** boolean */ includeBounds) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property, includeBounds);
 }
 /** @override @return {boolean} */
 m_isIncludeBounds__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_isIncludeBounds__());
 }
 
 m_setLabelOffset__int(/** number */ labelOffset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property, labelOffset);
 }
 /** @override @return {number} */
 m_getLabelOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getLabelOffset__());
 }
 
 m_setCount__int(/** number */ count) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_COUNT__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrZero__int(count));
 }
 /** @override @return {number} */
 m_getCount__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_COUNT__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getCount__());
 }
 
 m_setMaxRotation__int(/** number */ maxRotation) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property, maxRotation);
 }
 /** @override @return {number} */
 m_getMaxRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getMaxRotation__());
 }
 
 m_setMinRotation__int(/** number */ minRotation) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property, minRotation);
 }
 /** @override @return {number} */
 m_getMinRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getMinRotation__());
 }
 
 m_setMirror__boolean(/** boolean */ mirror) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_MIRROR__org_pepstock_charba_client_options_Ticks_Property, mirror);
 }
 /** @override @return {boolean} */
 m_isMirror__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_MIRROR__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_isMirror__());
 }
 
 m_setPadding__int(/** number */ padding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getPadding__());
 }
 
 m_setMaxTicksLimit__int(/** number */ maxTicksLimit) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrZero__int(maxTicksLimit));
 }
 /** @override @return {number} */
 m_getMaxTicksLimit__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getMaxTicksLimit__());
 }
 
 m_setStepSize__double(/** number */ stepSize) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrDefault__double__double(stepSize, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getStepSize__()));
 }
 /** @override @return {number} */
 m_getStepSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getStepSize__());
 }
 
 m_setBackdropColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backdropColor) {
  this.m_setBackdropColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backdropColor));
 }
 
 m_setBackdropColor__java_lang_String(/** ?string */ backdropColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property, backdropColor);
 }
 /** @override @return {?string} */
 m_getBackdropColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getBackdropColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackdropColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackdropColorAsString__());
 }
 
 m_setShowLabelBackdrop__boolean(/** boolean */ showLabelBackdrop) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property, showLabelBackdrop);
 }
 /** @override @return {boolean} */
 m_isShowLabelBackdrop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_isShowLabelBackdrop__());
 }
 
 m_setSource__org_pepstock_charba_client_enums_TickSource(/** TickSource */ source) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SOURCE__org_pepstock_charba_client_options_Ticks_Property, source);
 }
 /** @override @return {TickSource} */
 m_getSource__() {
  return /**@type {TickSource}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SOURCE__org_pepstock_charba_client_options_Ticks_Property, TickSource.m_values__(), /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getSource__()), TickSource));
 }
 
 m_setPrecision__int(/** number */ precision) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_PRECISION__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrZero__int(precision));
 }
 /** @override @return {number} */
 m_getPrecision__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PRECISION__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getPrecision__());
 }
 
 m_setZ__int(/** number */ z) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_Z__org_pepstock_charba_client_options_Ticks_Property, z);
 }
 /** @override @return {number} */
 m_getZ__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_Z__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getZ__());
 }
 
 m_setSampleSize__int(/** number */ sampleSize) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrZero__int(sampleSize));
 }
 /** @override @return {number} */
 m_getSampleSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getSampleSize__());
 }
 
 m_setAlign__org_pepstock_charba_client_enums_ElementAlign(/** ElementAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_options_Ticks_Property, align);
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return /**@type {ElementAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_options_Ticks_Property, ElementAlign.m_values__(), /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getAlign__()), ElementAlign));
 }
 
 m_setCrossAlign__org_pepstock_charba_client_enums_CrossAlign(/** CrossAlign */ crossAlign) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property, crossAlign);
 }
 /** @override @return {CrossAlign} */
 m_getCrossAlign__() {
  return /**@type {CrossAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property, CrossAlign.m_values__(), /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getCrossAlign__()), CrossAlign));
 }
 
 m_setTextStrokeColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setTextStrokeColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setTextStrokeColor__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property, color);
 }
 /** @override @return {?string} */
 m_getTextStrokeColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getTextStrokeColorAsString__());
 }
 /** @return {IsColor} */
 m_getTextStrokeColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getTextStrokeColorAsString__());
 }
 
 m_setTextStrokeWidth__int(/** number */ textStrokeWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property, Checker.m_positiveOrZero__int(textStrokeWidth));
 }
 /** @override @return {number} */
 m_getTextStrokeWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property, /**@type {IsDefaultTicks}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTicks)).m_getTextStrokeWidth__());
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return HasFont.m_getColorAsString__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {Font} */
 m_getFont__() {
  return HasFont.m_getFont__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getColor__() {
  return HasFont.m_getColor__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasFont.m_setColor__$default__org_pepstock_charba_client_options_HasFont__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setColor__java_lang_String(/** ?string */ arg0) {
  HasFont.m_setColor__$default__org_pepstock_charba_client_options_HasFont__java_lang_String(this, arg0);
 }
 
 static $clinit() {
  Ticks.$clinit = () =>{};
  Ticks.$loadModules();
  AbstractModel.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Ticks;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  CrossAlign = goog.module.get('org.pepstock.charba.client.enums.CrossAlign$impl');
  ElementAlign = goog.module.get('org.pepstock.charba.client.enums.ElementAlign$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  FontContainer = goog.module.get('org.pepstock.charba.client.options.FontContainer$impl');
  Major = goog.module.get('org.pepstock.charba.client.options.Major$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Ticks.Property$impl');
  TicksNumberFormat = goog.module.get('org.pepstock.charba.client.options.TicksNumberFormat$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultTicks.$markImplementor(Ticks);
HasFont.$markImplementor(Ticks);
$Util.$setClassMetadata(Ticks, "org.pepstock.charba.client.options.Ticks");

exports = Ticks;

//# sourceMappingURL=Ticks.js.map
