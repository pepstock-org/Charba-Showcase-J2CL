goog.module('org.pepstock.charba.client.intl.DateTimeFormatWrapper.ResolvedOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDateTimeFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions$impl');

let DateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let DateTimeStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.DateTimeStyle$impl');
let FormatMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.FormatMatcher$impl');
let HourCycle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.HourCycle$impl');
let LocaleMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');
let MixedItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MixedItemStyle$impl');
let NumberItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberItemStyle$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let StringItemStyle = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.StringItemStyle$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');
let TimeZoneName = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZoneName$impl');

/**
 * @implements {IsDefaultDateTimeFormatOptions}
 */
class ResolvedOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DateTimeFormatOptions}*/
  this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_;
 }
 /** @return {!ResolvedOptions} */
 static $create__org_pepstock_charba_client_intl_DateTimeFormatOptions(/** DateTimeFormatOptions */ delegated) {
  ResolvedOptions.$clinit();
  let $instance = new ResolvedOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions__org_pepstock_charba_client_intl_DateTimeFormatOptions(delegated);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions__org_pepstock_charba_client_intl_DateTimeFormatOptions(/** DateTimeFormatOptions */ delegated) {
  this.$ctor__java_lang_Object__();
  this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_ = delegated;
 }
 /** @override @return {LocaleMatcher} */
 m_getLocaleMatcher__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getLocaleMatcher__();
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getNumberingSystem__();
 }
 /** @override @return {DateTimeStyle} */
 m_getDateStyle__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getDateStyle__();
 }
 /** @override @return {DateTimeStyle} */
 m_getTimeStyle__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getTimeStyle__();
 }
 /** @override @return {Calendar} */
 m_getCalendar__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getCalendar__();
 }
 /** @override @return {StringItemStyle} */
 m_getDayPeriod__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getDayPeriod__();
 }
 /** @override @return {TimeZone} */
 m_getTimeZone__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getTimeZone__();
 }
 /** @override @return {boolean} */
 m_isHour12__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_isHour12__();
 }
 /** @override @return {HourCycle} */
 m_getHourCycle__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getHourCycle__();
 }
 /** @override @return {FormatMatcher} */
 m_getFormatMatcher__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getFormatMatcher__();
 }
 /** @override @return {StringItemStyle} */
 m_getWeekDay__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getWeekDay__();
 }
 /** @override @return {StringItemStyle} */
 m_getEra__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getEra__();
 }
 /** @override @return {NumberItemStyle} */
 m_getYear__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getYear__();
 }
 /** @override @return {MixedItemStyle} */
 m_getMonth__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getMonth__();
 }
 /** @override @return {NumberItemStyle} */
 m_getDay__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getDay__();
 }
 /** @override @return {NumberItemStyle} */
 m_getHour__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getHour__();
 }
 /** @override @return {NumberItemStyle} */
 m_getMinute__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getMinute__();
 }
 /** @override @return {NumberItemStyle} */
 m_getSecond__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getSecond__();
 }
 /** @override @return {TimeZoneName} */
 m_getTimeZoneName__() {
  return this.f_delegated__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ResolvedOptions_.m_getTimeZoneName__();
 }
 
 static $clinit() {
  ResolvedOptions.$clinit = () =>{};
  ResolvedOptions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResolvedOptions;
 }
 
 static $loadModules() {}
}
IsDefaultDateTimeFormatOptions.$markImplementor(ResolvedOptions);
$Util.$setClassMetadata(ResolvedOptions, "org.pepstock.charba.client.intl.DateTimeFormatWrapper$ResolvedOptions");

exports = ResolvedOptions;

//# sourceMappingURL=DateTimeFormatWrapper$ResolvedOptions.js.map
