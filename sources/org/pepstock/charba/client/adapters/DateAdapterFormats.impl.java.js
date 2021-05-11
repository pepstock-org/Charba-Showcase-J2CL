goog.module('org.pepstock.charba.client.adapters.DateAdapterFormats$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterFormats.Property$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');

class DateAdapterFormats extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DateAdapterFormats()'.
 /** @return {!DateAdapterFormats} */
 static $create__() {
  DateAdapterFormats.$clinit();
  let $instance = new DateAdapterFormats();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapterFormats__();
  return $instance;
 }
 //Initialization from constructor 'DateAdapterFormats()'.
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapterFormats__() {
  this.$ctor__org_pepstock_charba_client_adapters_DateAdapterFormats__org_pepstock_charba_client_commons_NativeObject(null);
 }
 //Factory method corresponding to constructor 'DateAdapterFormats(NativeObject)'.
 /** @return {!DateAdapterFormats} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DateAdapterFormats.$clinit();
  let $instance = new DateAdapterFormats();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapterFormats__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DateAdapterFormats(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapterFormats__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?string} */
 m_getDateTime__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_DATETIME__org_pepstock_charba_client_adapters_DateAdapterFormats_Property, Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants);
 }
 /** @return {?string} */
 m_getMillisecond__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getSecond__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_SECOND__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getMinute__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_MINUTE__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getHour__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_HOUR__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getDay__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getWeek__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_WEEK__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getMonth__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_MONTH__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getQuarter__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_QUARTER__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getYear__() {
  return this.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_YEAR__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {?string} */
 m_getFormat__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ unit) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(unit) && this.m_has__org_pepstock_charba_client_commons_Key(unit)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(unit, Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 
 static $clinit() {
  DateAdapterFormats.$clinit = () =>{};
  DateAdapterFormats.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateAdapterFormats;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterFormats.Property$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
 }
}
$Util.$setClassMetadata(DateAdapterFormats, "org.pepstock.charba.client.adapters.DateAdapterFormats");

exports = DateAdapterFormats;

//# sourceMappingURL=DateAdapterFormats.js.map
