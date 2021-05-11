goog.module('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDateTimeFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions$impl');
const BaseFormatOptions = goog.require('org.pepstock.charba.client.intl.BaseFormatOptions$impl');

let DefaultDateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultDateTimeFormatOptions$impl');
let DateTimeFormatOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatOptions.DateTimeFormatOptionsFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatOptions.Property$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let DateTimeStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.DateTimeStyle$impl');
let FormatMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.FormatMatcher$impl');
let HourCycle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.HourCycle$impl');
let MixedItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MixedItemStyle$impl');
let NumberItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberItemStyle$impl');
let StringItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.StringItemStyle$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');
let TimeZoneName = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZoneName$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseFormatOptions<IsDefaultDateTimeFormatOptions>}
 * @implements {IsDefaultDateTimeFormatOptions}
 */
class DateTimeFormatOptions extends BaseFormatOptions {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DateTimeFormatOptions()'.
 /** @return {!DateTimeFormatOptions} */
 static $create__() {
  DateTimeFormatOptions.$clinit();
  let $instance = new DateTimeFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__();
  return $instance;
 }
 //Initialization from constructor 'DateTimeFormatOptions()'.
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__() {
  this.$ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__org_pepstock_charba_client_commons_NativeObject(null);
 }
 //Factory method corresponding to constructor 'DateTimeFormatOptions(NativeObject)'.
 /** @return {!DateTimeFormatOptions} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DateTimeFormatOptions.$clinit();
  let $instance = new DateTimeFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DateTimeFormatOptions(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions(nativeObject, DefaultDateTimeFormatOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions);
 }
 //Factory method corresponding to constructor 'DateTimeFormatOptions(NativeObject, IsDefaultDateTimeFormatOptions)'.
 /** @return {!DateTimeFormatOptions} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions(/** ? */ nativeObject, /** IsDefaultDateTimeFormatOptions */ defaultValues) {
  DateTimeFormatOptions.$clinit();
  let $instance = new DateTimeFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'DateTimeFormatOptions(NativeObject, IsDefaultDateTimeFormatOptions)'.
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions(/** ? */ nativeObject, /** IsDefaultDateTimeFormatOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_intl_BaseFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(nativeObject, defaultValues);
 }
 
 m_setDateStyle__org_pepstock_charba_client_intl_enums_DateTimeStyle(/** DateTimeStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {DateTimeStyle} */
 m_getDateStyle__() {
  return /**@type {DateTimeStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, DateTimeStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getDateStyle__()), DateTimeStyle));
 }
 
 m_setTimeStyle__org_pepstock_charba_client_intl_enums_DateTimeStyle(/** DateTimeStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {DateTimeStyle} */
 m_getTimeStyle__() {
  return /**@type {DateTimeStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, DateTimeStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getTimeStyle__()), DateTimeStyle));
 }
 
 m_setCalendar__org_pepstock_charba_client_intl_enums_Calendar(/** Calendar */ calendar) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, calendar);
 }
 /** @override @return {Calendar} */
 m_getCalendar__() {
  return /**@type {Calendar}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Calendar.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getCalendar__()), Calendar));
 }
 
 m_setDayPeriod__org_pepstock_charba_client_intl_enums_StringItemStyle(/** StringItemStyle */ dayPeriod) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, dayPeriod);
 }
 /** @override @return {StringItemStyle} */
 m_getDayPeriod__() {
  return /**@type {StringItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, StringItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getDayPeriod__()), StringItemStyle));
 }
 
 m_setTimeZone__org_pepstock_charba_client_intl_enums_TimeZone(/** TimeZone */ zone) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, zone);
 }
 /** @override @return {TimeZone} */
 m_getTimeZone__() {
  return /**@type {TimeZone}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, TimeZone.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getTimeZone__()), TimeZone));
 }
 
 m_setHour12__boolean(/** boolean */ hour12) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, hour12);
 }
 /** @override @return {boolean} */
 m_isHour12__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_isHour12__());
 }
 
 m_setHourCycle__org_pepstock_charba_client_intl_enums_HourCycle(/** HourCycle */ hourCycle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, hourCycle);
 }
 /** @override @return {HourCycle} */
 m_getHourCycle__() {
  return /**@type {HourCycle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, HourCycle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getHourCycle__()), HourCycle));
 }
 
 m_setFormatMatcher__org_pepstock_charba_client_intl_enums_FormatMatcher(/** FormatMatcher */ format) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, format);
 }
 /** @override @return {FormatMatcher} */
 m_getFormatMatcher__() {
  return /**@type {FormatMatcher}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, FormatMatcher.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getFormatMatcher__()), FormatMatcher));
 }
 
 m_setWeekDay__org_pepstock_charba_client_intl_enums_StringItemStyle(/** StringItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {StringItemStyle} */
 m_getWeekDay__() {
  return /**@type {StringItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, StringItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getWeekDay__()), StringItemStyle));
 }
 
 m_setEra__org_pepstock_charba_client_intl_enums_StringItemStyle(/** StringItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {StringItemStyle} */
 m_getEra__() {
  return /**@type {StringItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, StringItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getEra__()), StringItemStyle));
 }
 
 m_setYear__org_pepstock_charba_client_intl_enums_NumberItemStyle(/** NumberItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {NumberItemStyle} */
 m_getYear__() {
  return /**@type {NumberItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, NumberItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getYear__()), NumberItemStyle));
 }
 
 m_setMonth__org_pepstock_charba_client_intl_enums_MixedItemStyle(/** MixedItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {MixedItemStyle} */
 m_getMonth__() {
  return /**@type {MixedItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, MixedItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getMonth__()), MixedItemStyle));
 }
 
 m_setDay__org_pepstock_charba_client_intl_enums_NumberItemStyle(/** NumberItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {NumberItemStyle} */
 m_getDay__() {
  return /**@type {NumberItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, NumberItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getDay__()), NumberItemStyle));
 }
 
 m_setHour__org_pepstock_charba_client_intl_enums_NumberItemStyle(/** NumberItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {NumberItemStyle} */
 m_getHour__() {
  return /**@type {NumberItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, NumberItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getHour__()), NumberItemStyle));
 }
 
 m_setMinute__org_pepstock_charba_client_intl_enums_NumberItemStyle(/** NumberItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {NumberItemStyle} */
 m_getMinute__() {
  return /**@type {NumberItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, NumberItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getMinute__()), NumberItemStyle));
 }
 
 m_setSecond__org_pepstock_charba_client_intl_enums_NumberItemStyle(/** NumberItemStyle */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, style);
 }
 /** @override @return {NumberItemStyle} */
 m_getSecond__() {
  return /**@type {NumberItemStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, NumberItemStyle.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getSecond__()), NumberItemStyle));
 }
 
 m_setTimeZoneName__org_pepstock_charba_client_intl_enums_TimeZoneName(/** TimeZoneName */ timeZoneName) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, timeZoneName);
 }
 /** @override @return {TimeZoneName} */
 m_getTimeZoneName__() {
  return /**@type {TimeZoneName}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, TimeZoneName.m_values__(), /**@type {IsDefaultDateTimeFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateTimeFormatOptions)).m_getTimeZoneName__()), TimeZoneName));
 }
 /** @return {DateTimeFormatOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_intl_DateTimeFormatOptions() {
  return (DateTimeFormatOptions.$clinit(), DateTimeFormatOptions.$static_FACTORY__org_pepstock_charba_client_intl_DateTimeFormatOptions);
 }
 
 static $clinit() {
  DateTimeFormatOptions.$clinit = () =>{};
  DateTimeFormatOptions.$loadModules();
  BaseFormatOptions.$clinit();
  DateTimeFormatOptions.$static_FACTORY__org_pepstock_charba_client_intl_DateTimeFormatOptions = DateTimeFormatOptionsFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatOptions;
 }
 
 static $loadModules() {
  DefaultDateTimeFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultDateTimeFormatOptions$impl');
  DateTimeFormatOptionsFactory = goog.module.get('org.pepstock.charba.client.intl.DateTimeFormatOptions.DateTimeFormatOptionsFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.intl.DateTimeFormatOptions.Property$impl');
  Calendar = goog.module.get('org.pepstock.charba.client.intl.enums.Calendar$impl');
  DateTimeStyle = goog.module.get('org.pepstock.charba.client.intl.enums.DateTimeStyle$impl');
  FormatMatcher = goog.module.get('org.pepstock.charba.client.intl.enums.FormatMatcher$impl');
  HourCycle = goog.module.get('org.pepstock.charba.client.intl.enums.HourCycle$impl');
  MixedItemStyle = goog.module.get('org.pepstock.charba.client.intl.enums.MixedItemStyle$impl');
  NumberItemStyle = goog.module.get('org.pepstock.charba.client.intl.enums.NumberItemStyle$impl');
  StringItemStyle = goog.module.get('org.pepstock.charba.client.intl.enums.StringItemStyle$impl');
  TimeZone = goog.module.get('org.pepstock.charba.client.intl.enums.TimeZone$impl');
  TimeZoneName = goog.module.get('org.pepstock.charba.client.intl.enums.TimeZoneName$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {DateTimeFormatOptionsFactory}*/
DateTimeFormatOptions.$static_FACTORY__org_pepstock_charba_client_intl_DateTimeFormatOptions;
IsDefaultDateTimeFormatOptions.$markImplementor(DateTimeFormatOptions);
$Util.$setClassMetadata(DateTimeFormatOptions, "org.pepstock.charba.client.intl.DateTimeFormatOptions");

exports = DateTimeFormatOptions;

//# sourceMappingURL=DateTimeFormatOptions.js.map
