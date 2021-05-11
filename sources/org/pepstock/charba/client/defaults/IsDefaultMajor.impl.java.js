goog.module('org.pepstock.charba.client.defaults.IsDefaultMajor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultMajor.$LambdaAdaptor$impl');

/**
 * @interface
 */
class IsDefaultMajor {
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @return {IsDefaultMajor} */
 static $adapt(/** ?function():boolean */ fn) {
  IsDefaultMajor.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDefaultMajor.$clinit = () =>{};
  IsDefaultMajor.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultMajor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultMajor;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultMajor.$LambdaAdaptor$impl');
 }
}
IsDefaultMajor.$markImplementor(/**@type {Function}*/ (IsDefaultMajor));
$Util.$setClassMetadataForInterface(IsDefaultMajor, "org.pepstock.charba.client.defaults.IsDefaultMajor");

exports = IsDefaultMajor;

//# sourceMappingURL=IsDefaultMajor.js.map
