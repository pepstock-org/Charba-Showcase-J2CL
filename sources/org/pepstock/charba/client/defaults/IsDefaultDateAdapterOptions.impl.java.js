goog.module('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');

/**
 * @interface
 */
class IsDefaultDateAdapterOptions {
 /** @abstract @return {CLocale} */
 m_getLocale__() {}
 /** @abstract @return {TimeZone} */
 m_getZone__() {}
 /** @abstract @return {Calendar} */
 m_getOutputCalendar__() {}
 /** @abstract @return {NumberingSystem} */
 m_getNumberingSystem__() {}
 
 static $clinit() {
  IsDefaultDateAdapterOptions.$clinit = () =>{};
  IsDefaultDateAdapterOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions;
 }
 
 static $loadModules() {}
}
IsDefaultDateAdapterOptions.$markImplementor(/**@type {Function}*/ (IsDefaultDateAdapterOptions));
$Util.$setClassMetadataForInterface(IsDefaultDateAdapterOptions, "org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions");

exports = IsDefaultDateAdapterOptions;

//# sourceMappingURL=IsDefaultDateAdapterOptions.js.map
