goog.module('org.pepstock.charba.client.defaults.IsDefaultTime$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsoWeekDay = goog.forwardDeclare('org.pepstock.charba.client.enums.IsoWeekDay$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');

/**
 * @interface
 */
class IsDefaultTime {
 /** @abstract @return {IsoWeekDay} */
 m_getIsoWeekday__() {}
 /** @abstract @return {TimeUnit} */
 m_getRound__() {}
 /** @abstract @return {?string} */
 m_getTooltipFormat__() {}
 /** @abstract @return {TimeUnit} */
 m_getUnit__() {}
 /** @abstract @return {number} */
 m_getStepSize__() {}
 /** @abstract @return {TimeUnit} */
 m_getMinUnit__() {}
 /** @abstract @return {?string} */
 m_getParser__() {}
 
 static $clinit() {
  IsDefaultTime.$clinit = () =>{};
  IsDefaultTime.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTime = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTime;
 }
 
 static $loadModules() {}
}
IsDefaultTime.$markImplementor(/**@type {Function}*/ (IsDefaultTime));
$Util.$setClassMetadataForInterface(IsDefaultTime, "org.pepstock.charba.client.defaults.IsDefaultTime");

exports = IsDefaultTime;

//# sourceMappingURL=IsDefaultTime.js.map
