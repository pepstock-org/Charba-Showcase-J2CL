goog.module('org.pepstock.charba.client.defaults.globals.DefaultDateTimeFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDateTimeFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions$impl');
const DefaultBaseFormatOptions = goog.require('org.pepstock.charba.client.defaults.globals.DefaultBaseFormatOptions$impl');

let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let DateTimeStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.DateTimeStyle$impl');
let FormatMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.FormatMatcher$impl');
let HourCycle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.HourCycle$impl');
let MixedItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MixedItemStyle$impl');
let NumberItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberItemStyle$impl');
let StringItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.StringItemStyle$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');
let TimeZoneName = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZoneName$impl');

/**
 * @implements {IsDefaultDateTimeFormatOptions}
 */
class DefaultDateTimeFormatOptions extends DefaultBaseFormatOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultDateTimeFormatOptions} */
 static $create__() {
  DefaultDateTimeFormatOptions.$clinit();
  let $instance = new DefaultDateTimeFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions__();
 }
 /** @override @return {DateTimeStyle} */
 m_getDateStyle__() {
  return null;
 }
 /** @override @return {DateTimeStyle} */
 m_getTimeStyle__() {
  return null;
 }
 /** @override @return {Calendar} */
 m_getCalendar__() {
  return null;
 }
 /** @override @return {StringItemStyle} */
 m_getDayPeriod__() {
  return null;
 }
 /** @override @return {TimeZone} */
 m_getTimeZone__() {
  return null;
 }
 /** @override @return {boolean} */
 m_isHour12__() {
  return false;
 }
 /** @override @return {HourCycle} */
 m_getHourCycle__() {
  return null;
 }
 /** @override @return {FormatMatcher} */
 m_getFormatMatcher__() {
  return null;
 }
 /** @override @return {StringItemStyle} */
 m_getWeekDay__() {
  return null;
 }
 /** @override @return {StringItemStyle} */
 m_getEra__() {
  return null;
 }
 /** @override @return {NumberItemStyle} */
 m_getYear__() {
  return NumberItemStyle.f_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle;
 }
 /** @override @return {MixedItemStyle} */
 m_getMonth__() {
  return MixedItemStyle.f_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle;
 }
 /** @override @return {NumberItemStyle} */
 m_getDay__() {
  return NumberItemStyle.f_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle;
 }
 /** @override @return {NumberItemStyle} */
 m_getHour__() {
  return null;
 }
 /** @override @return {NumberItemStyle} */
 m_getMinute__() {
  return null;
 }
 /** @override @return {NumberItemStyle} */
 m_getSecond__() {
  return null;
 }
 /** @override @return {TimeZoneName} */
 m_getTimeZoneName__() {
  return null;
 }
 /** @return {IsDefaultDateTimeFormatOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions() {
  return (DefaultDateTimeFormatOptions.$clinit(), DefaultDateTimeFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions);
 }
 
 static $clinit() {
  DefaultDateTimeFormatOptions.$clinit = () =>{};
  DefaultDateTimeFormatOptions.$loadModules();
  DefaultBaseFormatOptions.$clinit();
  DefaultDateTimeFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions = DefaultDateTimeFormatOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultDateTimeFormatOptions;
 }
 
 static $loadModules() {
  MixedItemStyle = goog.module.get('org.pepstock.charba.client.intl.enums.MixedItemStyle$impl');
  NumberItemStyle = goog.module.get('org.pepstock.charba.client.intl.enums.NumberItemStyle$impl');
 }
}
/**@private {IsDefaultDateTimeFormatOptions}*/
DefaultDateTimeFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions;
IsDefaultDateTimeFormatOptions.$markImplementor(DefaultDateTimeFormatOptions);
$Util.$setClassMetadata(DefaultDateTimeFormatOptions, "org.pepstock.charba.client.defaults.globals.DefaultDateTimeFormatOptions");

exports = DefaultDateTimeFormatOptions;

//# sourceMappingURL=DefaultDateTimeFormatOptions.js.map
