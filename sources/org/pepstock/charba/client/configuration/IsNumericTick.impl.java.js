goog.module('org.pepstock.charba.client.configuration.IsNumericTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormatCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.NumberFormatCallback$impl');
let NumericTickOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.NumericTickOptionsHandler$impl');
let IsNumberFormat = goog.forwardDeclare('org.pepstock.charba.client.options.IsNumberFormat$impl');

/**
 * @interface
 */
class IsNumericTick {
 /** @abstract @return {NumericTickOptionsHandler} */
 m_getTickOptionsHandler__() {}
 /** @abstract @return {IsNumberFormat} */
 m_getNumberFormat__() {}
 /** @abstract @return {NumberFormatCallback} */
 m_getNumberFormatCallback__() {}
 /** @abstract */
 m_setNumberFormat__org_pepstock_charba_client_callbacks_NumberFormatCallback(/** NumberFormatCallback */ numberFormatCallback) {}
 /** @abstract */
 m_setNumberFormat__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ numberFormatCallback) {}
 /** @return {NumberFormatCallback} */
 static m_getNumberFormatCallback__$default__org_pepstock_charba_client_configuration_IsNumericTick(/** !IsNumericTick */ $thisArg) {
  IsNumericTick.$clinit();
  if (!$Equality.$same($thisArg.m_getTickOptionsHandler__(), null)) {
   return $thisArg.m_getTickOptionsHandler__().m_getNumberFormatCallback___$pp_org_pepstock_charba_client_configuration();
  }
  return null;
 }
 
 static m_setNumberFormat__$default__org_pepstock_charba_client_configuration_IsNumericTick__org_pepstock_charba_client_callbacks_NumberFormatCallback(/** !IsNumericTick */ $thisArg, /** NumberFormatCallback */ numberFormatCallback) {
  IsNumericTick.$clinit();
  if (!$Equality.$same($thisArg.m_getTickOptionsHandler__(), null)) {
   $thisArg.m_getTickOptionsHandler__().m_setNumberFormat__org_pepstock_charba_client_callbacks_NumberFormatCallback_$pp_org_pepstock_charba_client_configuration(numberFormatCallback);
  }
 }
 
 static m_setNumberFormat__$default__org_pepstock_charba_client_configuration_IsNumericTick__org_pepstock_charba_client_callbacks_NativeCallback(/** !IsNumericTick */ $thisArg, /** Function */ numberFormatCallback) {
  IsNumericTick.$clinit();
  if (!$Equality.$same($thisArg.m_getTickOptionsHandler__(), null)) {
   $thisArg.m_getTickOptionsHandler__().m_setNumberFormat__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(numberFormatCallback);
  }
 }
 
 static $clinit() {
  IsNumericTick.$clinit = () =>{};
  IsNumericTick.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_IsNumericTick = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_IsNumericTick;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
IsNumericTick.$markImplementor(/**@type {Function}*/ (IsNumericTick));
$Util.$setClassMetadataForInterface(IsNumericTick, "org.pepstock.charba.client.configuration.IsNumericTick");

exports = IsNumericTick;

//# sourceMappingURL=IsNumericTick.js.map
