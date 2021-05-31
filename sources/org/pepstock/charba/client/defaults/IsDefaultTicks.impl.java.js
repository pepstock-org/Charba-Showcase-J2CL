goog.module('org.pepstock.charba.client.defaults.IsDefaultTicks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');

let IsDefaultMajor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultMajor$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let CrossAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.CrossAlign$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');

/**
 * @interface
 * @extends {IsDefaultFontContainer}
 */
class IsDefaultTicks {
 /** @abstract @return {IsDefaultMajor} */
 m_getMajor__() {}
 /** @abstract @return {IsDefaultNumberFormatOptions} */
 m_getNumberFormat__() {}
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {boolean} */
 m_isAutoSkip__() {}
 /** @abstract @return {number} */
 m_getAutoSkipPadding__() {}
 /** @abstract @return {boolean} */
 m_isIncludeBounds__() {}
 /** @abstract @return {number} */
 m_getLabelOffset__() {}
 /** @abstract @return {number} */
 m_getCount__() {}
 /** @abstract @return {number} */
 m_getMaxRotation__() {}
 /** @abstract @return {number} */
 m_getMinRotation__() {}
 /** @abstract @return {boolean} */
 m_isMirror__() {}
 /** @abstract @return {number} */
 m_getPadding__() {}
 /** @abstract @return {number} */
 m_getMaxTicksLimit__() {}
 /** @abstract @return {number} */
 m_getStepSize__() {}
 /** @abstract @return {?string} */
 m_getBackdropColorAsString__() {}
 /** @abstract @return {IsDefaultPadding} */
 m_getBackdropPadding__() {}
 /** @abstract @return {boolean} */
 m_isShowLabelBackdrop__() {}
 /** @abstract @return {TickSource} */
 m_getSource__() {}
 /** @abstract @return {number} */
 m_getPrecision__() {}
 /** @abstract @return {number} */
 m_getZ__() {}
 /** @abstract @return {number} */
 m_getSampleSize__() {}
 /** @abstract @return {ElementAlign} */
 m_getAlign__() {}
 /** @abstract @return {CrossAlign} */
 m_getCrossAlign__() {}
 /** @abstract @return {?string} */
 m_getTextStrokeColorAsString__() {}
 /** @abstract @return {number} */
 m_getTextStrokeWidth__() {}
 
 static $clinit() {
  IsDefaultTicks.$clinit = () =>{};
  IsDefaultTicks.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTicks = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTicks;
 }
 
 static $loadModules() {}
}
IsDefaultTicks.$markImplementor(/**@type {Function}*/ (IsDefaultTicks));
$Util.$setClassMetadataForInterface(IsDefaultTicks, "org.pepstock.charba.client.defaults.IsDefaultTicks");

exports = IsDefaultTicks;

//# sourceMappingURL=IsDefaultTicks.js.map
