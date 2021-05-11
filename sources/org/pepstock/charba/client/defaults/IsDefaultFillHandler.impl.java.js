goog.module('org.pepstock.charba.client.defaults.IsDefaultFillHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFillHandler.$LambdaAdaptor$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');

/**
 * @interface
 */
class IsDefaultFillHandler {
 /** @abstract @return {IsFill} */
 m_getFill__() {}
 /** @return {IsDefaultFillHandler} */
 static $adapt(/** ?function():IsFill */ fn) {
  IsDefaultFillHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDefaultFillHandler.$clinit = () =>{};
  IsDefaultFillHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultFillHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultFillHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultFillHandler.$LambdaAdaptor$impl');
 }
}
IsDefaultFillHandler.$markImplementor(/**@type {Function}*/ (IsDefaultFillHandler));
$Util.$setClassMetadataForInterface(IsDefaultFillHandler, "org.pepstock.charba.client.defaults.IsDefaultFillHandler");

exports = IsDefaultFillHandler;

//# sourceMappingURL=IsDefaultFillHandler.js.map
