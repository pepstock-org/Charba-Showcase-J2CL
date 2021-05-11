goog.module('org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBaseFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseFormatOptions$impl');

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
 * @interface
 * @extends {IsDefaultBaseFormatOptions}
 */
class IsDefaultDateTimeFormatOptions {
 /** @abstract @return {DateTimeStyle} */
 m_getDateStyle__() {}
 /** @abstract @return {DateTimeStyle} */
 m_getTimeStyle__() {}
 /** @abstract @return {Calendar} */
 m_getCalendar__() {}
 /** @abstract @return {StringItemStyle} */
 m_getDayPeriod__() {}
 /** @abstract @return {TimeZone} */
 m_getTimeZone__() {}
 /** @abstract @return {boolean} */
 m_isHour12__() {}
 /** @abstract @return {HourCycle} */
 m_getHourCycle__() {}
 /** @abstract @return {FormatMatcher} */
 m_getFormatMatcher__() {}
 /** @abstract @return {StringItemStyle} */
 m_getWeekDay__() {}
 /** @abstract @return {StringItemStyle} */
 m_getEra__() {}
 /** @abstract @return {NumberItemStyle} */
 m_getYear__() {}
 /** @abstract @return {MixedItemStyle} */
 m_getMonth__() {}
 /** @abstract @return {NumberItemStyle} */
 m_getDay__() {}
 /** @abstract @return {NumberItemStyle} */
 m_getHour__() {}
 /** @abstract @return {NumberItemStyle} */
 m_getMinute__() {}
 /** @abstract @return {NumberItemStyle} */
 m_getSecond__() {}
 /** @abstract @return {TimeZoneName} */
 m_getTimeZoneName__() {}
 
 static $clinit() {
  IsDefaultDateTimeFormatOptions.$clinit = () =>{};
  IsDefaultDateTimeFormatOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBaseFormatOptions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions;
 }
 
 static $loadModules() {}
}
IsDefaultDateTimeFormatOptions.$markImplementor(/**@type {Function}*/ (IsDefaultDateTimeFormatOptions));
$Util.$setClassMetadataForInterface(IsDefaultDateTimeFormatOptions, "org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions");

exports = IsDefaultDateTimeFormatOptions;

//# sourceMappingURL=IsDefaultDateTimeFormatOptions.js.map
