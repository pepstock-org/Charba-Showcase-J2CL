goog.module('org.pepstock.charba.client.options.Time$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTime = goog.require('org.pepstock.charba.client.defaults.IsDefaultTime$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsoWeekDay = goog.forwardDeclare('org.pepstock.charba.client.enums.IsoWeekDay$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let DisplayFormats = goog.forwardDeclare('org.pepstock.charba.client.options.DisplayFormats$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Time.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<AbstractScale, IsDefaultTime>}
 * @implements {IsDefaultTime}
 */
class Time extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {DisplayFormats}*/
  this.f_displayFormats__org_pepstock_charba_client_options_Time_;
 }
 /** @return {!Time} */
 static $create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTime__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultTime */ defaultValues, /** ? */ nativeObject) {
  Time.$clinit();
  let $instance = new Time();
  $instance.$ctor__org_pepstock_charba_client_options_Time__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTime__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Time__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTime__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultTime */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  this.f_displayFormats__org_pepstock_charba_client_options_Time_ = DisplayFormats.$create__org_pepstock_charba_client_options_Time__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(this, Property.f_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property, this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property));
 }
 /** @return {DisplayFormats} */
 m_getDisplayFormats__() {
  return this.f_displayFormats__org_pepstock_charba_client_options_Time_;
 }
 
 m_setIsoWeekday__org_pepstock_charba_client_enums_IsoWeekDay(/** IsoWeekDay */ isoWeekday) {
  if (!$Equality.$same(isoWeekday, null)) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property, isoWeekday.m_value__());
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property);
  }
 }
 /** @override @return {IsoWeekDay} */
 m_getIsoWeekday__() {
  let isoWeekday = this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property, IsoWeekDay.f_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay.m_value__());
  return IsoWeekDay.m_getIsoWeekDayByValue__int(isoWeekday);
 }
 
 m_setRound__boolean(/** boolean */ round) {
  if (!round) {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_ROUND__org_pepstock_charba_client_options_Time_Property);
  }
 }
 
 m_setRound__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ round) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ROUND__org_pepstock_charba_client_options_Time_Property, round);
 }
 /** @override @return {TimeUnit} */
 m_getRound__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_ROUND__org_pepstock_charba_client_options_Time_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getRound__();
  }
  return /**@type {TimeUnit}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ROUND__org_pepstock_charba_client_options_Time_Property, TimeUnit.m_values__(), /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getRound__()), TimeUnit));
 }
 
 m_setTooltipFormat__java_lang_String(/** ?string */ tooltipFormat) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property, tooltipFormat);
 }
 /** @override @return {?string} */
 m_getTooltipFormat__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property, /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getTooltipFormat__());
 }
 
 m_setUnit__boolean(/** boolean */ unit) {
  if (!unit) {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_UNIT__org_pepstock_charba_client_options_Time_Property);
  }
 }
 
 m_setUnit__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ unit) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_UNIT__org_pepstock_charba_client_options_Time_Property, unit);
 }
 /** @override @return {TimeUnit} */
 m_getUnit__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_UNIT__org_pepstock_charba_client_options_Time_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getUnit__();
  }
  return /**@type {TimeUnit}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_UNIT__org_pepstock_charba_client_options_Time_Property, TimeUnit.m_values__(), /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getUnit__()), TimeUnit));
 }
 
 m_setStepSize__double(/** number */ stepSize) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_STEP_SIZE__org_pepstock_charba_client_options_Time_Property, Checker.m_positiveOrDefault__double__double(stepSize, /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getStepSize__()));
 }
 /** @override @return {number} */
 m_getStepSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_STEP_SIZE__org_pepstock_charba_client_options_Time_Property, /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getStepSize__());
 }
 
 m_setMinUnit__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ unit) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MIN_UNIT__org_pepstock_charba_client_options_Time_Property, unit);
 }
 /** @override @return {TimeUnit} */
 m_getMinUnit__() {
  return /**@type {TimeUnit}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MIN_UNIT__org_pepstock_charba_client_options_Time_Property, TimeUnit.m_values__(), /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getMinUnit__()), TimeUnit));
 }
 
 m_setParser__java_lang_String(/** ?string */ parser) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_PARSER__org_pepstock_charba_client_options_Time_Property, parser);
 }
 /** @override @return {?string} */
 m_getParser__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_PARSER__org_pepstock_charba_client_options_Time_Property, /**@type {IsDefaultTime}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTime)).m_getParser__());
 }
 
 static $clinit() {
  Time.$clinit = () =>{};
  Time.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Time;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  IsoWeekDay = goog.module.get('org.pepstock.charba.client.enums.IsoWeekDay$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  DisplayFormats = goog.module.get('org.pepstock.charba.client.options.DisplayFormats$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Time.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultTime.$markImplementor(Time);
$Util.$setClassMetadata(Time, "org.pepstock.charba.client.options.Time");

exports = Time;

//# sourceMappingURL=Time.js.map
