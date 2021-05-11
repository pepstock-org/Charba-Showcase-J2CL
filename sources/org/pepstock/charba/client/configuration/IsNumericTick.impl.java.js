goog.module('org.pepstock.charba.client.configuration.IsNumericTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.configuration.IsNumericTick.$LambdaAdaptor$impl');
let IsNumberFormat = goog.forwardDeclare('org.pepstock.charba.client.options.IsNumberFormat$impl');

/**
 * @interface
 */
class IsNumericTick {
 /** @abstract @return {IsNumberFormat} */
 m_getNumberFormat__() {}
 /** @return {IsNumericTick} */
 static $adapt(/** ?function():IsNumberFormat */ fn) {
  IsNumericTick.$clinit();
  return new $LambdaAdaptor(fn);
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
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.configuration.IsNumericTick.$LambdaAdaptor$impl');
 }
}
IsNumericTick.$markImplementor(/**@type {Function}*/ (IsNumericTick));
$Util.$setClassMetadataForInterface(IsNumericTick, "org.pepstock.charba.client.configuration.IsNumericTick");

exports = IsNumericTick;

//# sourceMappingURL=IsNumericTick.js.map
