goog.module('org.pepstock.charba.client.adapters.DateAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let DateAdapterFormats = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterFormats$impl');
let DateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
let JsDateAdapterHelper = goog.forwardDeclare('org.pepstock.charba.client.adapters.JsDateAdapterHelper$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.adapters.NativeDateAdapter.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsoWeekDay = goog.forwardDeclare('org.pepstock.charba.client.enums.IsoWeekDay$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class DateAdapter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaChartAdaptersDate}*/
  this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_;
  /**@type {DateAdapterOptions}*/
  this.f_options__org_pepstock_charba_client_adapters_DateAdapter_;
  /**@type {?string}*/
  this.f_id__org_pepstock_charba_client_adapters_DateAdapter_;
  /**@type {DateAdapterFormats}*/
  this.f_formats__org_pepstock_charba_client_adapters_DateAdapter_;
 }
 //Factory method corresponding to constructor 'DateAdapter()'.
 /** @return {!DateAdapter} */
 static $create__() {
  DateAdapter.$clinit();
  let $instance = new DateAdapter();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapter__();
  return $instance;
 }
 //Initialization from constructor 'DateAdapter()'.
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapter__() {
  this.$ctor__org_pepstock_charba_client_adapters_DateAdapter__org_pepstock_charba_client_adapters_DateAdapterOptions(null);
 }
 //Factory method corresponding to constructor 'DateAdapter(DateAdapterOptions)'.
 /** @return {!DateAdapter} */
 static $create__org_pepstock_charba_client_adapters_DateAdapterOptions(/** DateAdapterOptions */ options) {
  DateAdapter.$clinit();
  let $instance = new DateAdapter();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapter__org_pepstock_charba_client_adapters_DateAdapterOptions(options);
  return $instance;
 }
 //Initialization from constructor 'DateAdapter(DateAdapterOptions)'.
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapter__org_pepstock_charba_client_adapters_DateAdapterOptions(/** DateAdapterOptions */ options) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_adapters_DateAdapter();
  this.f_options__org_pepstock_charba_client_adapters_DateAdapter_ = !$Equality.$same(options, null) ? options : DateAdapterOptions.$create__();
  if (!this.f_options__org_pepstock_charba_client_adapters_DateAdapter_.m_hasLocale___$pp_org_pepstock_charba_client_adapters()) {
   this.f_options__org_pepstock_charba_client_adapters_DateAdapter_.m_setLocale__org_pepstock_charba_client_intl_CLocale(Defaults.m_get__().m_getGlobal__().m_getLocale__());
  }
  this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_ = JsDateAdapterHelper.m_get__().m_create__org_pepstock_charba_client_adapters_DateAdapterOptions_$pp_org_pepstock_charba_client_adapters(this.f_options__org_pepstock_charba_client_adapters_DateAdapter_);
  this.f_id__org_pepstock_charba_client_adapters_DateAdapter_ = $Overlay.m_getId__$devirt__org_pepstock_charba_client_adapters_NativeDateAdapter(this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_);
  let nativeObject = this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.formats();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(nativeObject, "Default formats");
  this.f_formats__org_pepstock_charba_client_adapters_DateAdapter_ = DateAdapterFormats.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?string} */
 m_getId__() {
  return this.f_id__org_pepstock_charba_client_adapters_DateAdapter_;
 }
 /** @return {DateAdapterFormats} */
 m_getFormats__() {
  return this.f_formats__org_pepstock_charba_client_adapters_DateAdapter_;
 }
 /** @return {DateAdapterOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_adapters_DateAdapter_;
 }
 /** @return {Date} */
 m_parse__java_lang_String__java_lang_String(/** ?string */ time, /** ?string */ format) {
  if (!$Equality.$same(time, null) && !$Equality.$same(format, null)) {
   let value = this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.parse(time, format);
   return Date.$create__long($Primitives.$narrowDoubleToLong(value));
  }
  return null;
 }
 /** @return {?string} */
 m_format__long__java_lang_String(/** !$Long */ time, /** ?string */ format) {
  if ($LongUtils.$greaterEquals(time, $Long.fromInt(0)) && !$Equality.$same(format, null)) {
   return this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.format($Primitives.$widenLongToDouble(time), format);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 m_format__long__org_pepstock_charba_client_enums_TimeUnit(/** !$Long */ time, /** TimeUnit */ unit) {
  if ($LongUtils.$greaterEquals(time, $Long.fromInt(0)) && Key.m_isValid__org_pepstock_charba_client_commons_Key(unit)) {
   return this.m_format__long__java_lang_String(time, this.m_getFormats__().m_getFormat__org_pepstock_charba_client_enums_TimeUnit(unit));
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 m_format__java_util_Date__java_lang_String(/** Date */ time, /** ?string */ format) {
  if (!$Equality.$same(time, null)) {
   return this.m_format__long__java_lang_String(time.m_getTime__(), format);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(/** Date */ time, /** TimeUnit */ unit) {
  if (!$Equality.$same(time, null)) {
   return this.m_format__long__org_pepstock_charba_client_enums_TimeUnit(time.m_getTime__(), unit);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {Date} */
 m_add__long__long__org_pepstock_charba_client_enums_TimeUnit(/** !$Long */ time, /** !$Long */ amount, /** TimeUnit */ unit) {
  if ($LongUtils.$greaterEquals(time, $Long.fromInt(0)) && Key.m_isValid__org_pepstock_charba_client_commons_Key(unit)) {
   let value = this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.add($Primitives.$widenLongToDouble(time), $Primitives.$widenLongToDouble(amount), unit.m_value__());
   return Date.$create__long($Primitives.$narrowDoubleToLong(value));
  }
  return null;
 }
 /** @return {Date} */
 m_add__java_util_Date__long__org_pepstock_charba_client_enums_TimeUnit(/** Date */ time, /** !$Long */ amount, /** TimeUnit */ unit) {
  if (!$Equality.$same(time, null)) {
   return this.m_add__long__long__org_pepstock_charba_client_enums_TimeUnit(time.m_getTime__(), amount, unit);
  }
  return null;
 }
 /** @return {number} */
 m_diff__long__long__org_pepstock_charba_client_enums_TimeUnit(/** !$Long */ maxTime, /** !$Long */ minTime, /** TimeUnit */ unit) {
  if ($LongUtils.$greaterEquals(maxTime, $Long.fromInt(0)) && $LongUtils.$greaterEquals(minTime, $Long.fromInt(0)) && $LongUtils.$greaterEquals(maxTime, minTime) && Key.m_isValid__org_pepstock_charba_client_commons_Key(unit)) {
   return this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.diff($Primitives.$widenLongToDouble(maxTime), $Primitives.$widenLongToDouble(minTime), unit.m_value__());
  }
  return Double.f_NaN__java_lang_Double;
 }
 /** @return {number} */
 m_diff__java_util_Date__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(/** Date */ maxTime, /** Date */ minTime, /** TimeUnit */ unit) {
  if (!$Equality.$same(maxTime, null) && !$Equality.$same(minTime, null)) {
   return this.m_diff__long__long__org_pepstock_charba_client_enums_TimeUnit(maxTime.m_getTime__(), minTime.m_getTime__(), unit);
  }
  return Double.f_NaN__java_lang_Double;
 }
 /** @return {Date} */
 m_startOf__long__org_pepstock_charba_client_enums_TimeUnit(/** !$Long */ time, /** TimeUnit */ unit) {
  if ($LongUtils.$greaterEquals(time, $Long.fromInt(0)) && Key.m_isValid__org_pepstock_charba_client_commons_Key(unit)) {
   let value = this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.startOf($Primitives.$widenLongToDouble(time), unit.m_value__(), Integer.f_MAX_VALUE__java_lang_Integer);
   return Date.$create__long($Primitives.$narrowDoubleToLong(value));
  }
  return null;
 }
 /** @return {Date} */
 m_startOf__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(/** Date */ time, /** TimeUnit */ unit) {
  if (!$Equality.$same(time, null)) {
   return this.m_startOf__long__org_pepstock_charba_client_enums_TimeUnit(time.m_getTime__(), unit);
  }
  return null;
 }
 /** @return {Date} */
 m_startOf__long__org_pepstock_charba_client_enums_IsoWeekDay(/** !$Long */ time, /** IsoWeekDay */ weekday) {
  if ($LongUtils.$greaterEquals(time, $Long.fromInt(0)) && !$Equality.$same(weekday, null)) {
   let value = this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.startOf($Primitives.$widenLongToDouble(time), DateAdapter.f_ISO_WEEK_UNIT__org_pepstock_charba_client_adapters_DateAdapter_, weekday.m_value__());
   return Date.$create__long($Primitives.$narrowDoubleToLong(value));
  }
  return null;
 }
 /** @return {Date} */
 m_startOf__java_util_Date__org_pepstock_charba_client_enums_IsoWeekDay(/** Date */ time, /** IsoWeekDay */ weekday) {
  if (!$Equality.$same(time, null)) {
   return this.m_startOf__long__org_pepstock_charba_client_enums_IsoWeekDay(time.m_getTime__(), weekday);
  }
  return null;
 }
 /** @return {Date} */
 m_endOf__long__org_pepstock_charba_client_enums_TimeUnit(/** !$Long */ time, /** TimeUnit */ unit) {
  if ($LongUtils.$greaterEquals(time, $Long.fromInt(0)) && Key.m_isValid__org_pepstock_charba_client_commons_Key(unit)) {
   let value = this.f_nativeAdapter__org_pepstock_charba_client_adapters_DateAdapter_.endOf($Primitives.$widenLongToDouble(time), unit.m_value__());
   return Date.$create__long($Primitives.$narrowDoubleToLong(value));
  }
  return null;
 }
 /** @return {Date} */
 m_endOf__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(/** Date */ time, /** TimeUnit */ unit) {
  if (!$Equality.$same(time, null)) {
   return this.m_endOf__long__org_pepstock_charba_client_enums_TimeUnit(time.m_getTime__(), unit);
  }
  return null;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_adapters_DateAdapter() {
  this.f_formats__org_pepstock_charba_client_adapters_DateAdapter_ = null;
 }
 
 static $clinit() {
  DateAdapter.$clinit = () =>{};
  DateAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateAdapter;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DateAdapterFormats = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterFormats$impl');
  DateAdapterOptions = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
  JsDateAdapterHelper = goog.module.get('org.pepstock.charba.client.adapters.JsDateAdapterHelper$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.adapters.NativeDateAdapter.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {?string}*/
DateAdapter.f_ID_PROPERTY__org_pepstock_charba_client_adapters_DateAdapter = "_id";
/**@const {?string}*/
DateAdapter.f_ISO_WEEK_UNIT__org_pepstock_charba_client_adapters_DateAdapter_ = "isoWeek";
$Util.$setClassMetadata(DateAdapter, "org.pepstock.charba.client.adapters.DateAdapter");

exports = DateAdapter;

//# sourceMappingURL=DateAdapter.js.map
