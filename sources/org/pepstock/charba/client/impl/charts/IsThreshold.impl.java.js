goog.module('org.pepstock.charba.client.impl.charts.IsThreshold$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 */
class IsThreshold {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_impl_charts_IsThreshold(/** IsThreshold */ threshold) {
  IsThreshold.$clinit();
  return !$Equality.$same(threshold, null) && !$Equality.$same(threshold.m_getName__(), null) && IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(threshold.m_getColor__());
 }
 
 static m_checkIfValid__org_pepstock_charba_client_impl_charts_IsThreshold(/** IsThreshold */ threshold) {
  IsThreshold.$clinit();
  if (!IsThreshold.m_isValid__org_pepstock_charba_client_impl_charts_IsThreshold(threshold)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Threshold is null or not consistent"));
  }
 }
 /** @abstract @return {?string} */
 m_getName__() {}
 /** @abstract @return {number} */
 m_getValue__() {}
 /** @abstract @return {IsColor} */
 m_getColor__() {}
 
 static $clinit() {
  IsThreshold.$clinit = () =>{};
  IsThreshold.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_impl_charts_IsThreshold = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_charts_IsThreshold;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
IsThreshold.$markImplementor(/**@type {Function}*/ (IsThreshold));
$Util.$setClassMetadataForInterface(IsThreshold, "org.pepstock.charba.client.impl.charts.IsThreshold");

exports = IsThreshold;

//# sourceMappingURL=IsThreshold.js.map
