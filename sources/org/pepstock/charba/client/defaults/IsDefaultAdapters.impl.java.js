goog.module('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAdapters.$LambdaAdaptor$impl');
let IsDefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');

/**
 * @interface
 */
class IsDefaultAdapters {
 /** @abstract @return {IsDefaultDateAdapterOptions} */
 m_getDate__() {}
 /** @return {IsDefaultAdapters} */
 static $adapt(/** ?function():IsDefaultDateAdapterOptions */ fn) {
  IsDefaultAdapters.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDefaultAdapters.$clinit = () =>{};
  IsDefaultAdapters.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAdapters = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAdapters;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultAdapters.$LambdaAdaptor$impl');
 }
}
IsDefaultAdapters.$markImplementor(/**@type {Function}*/ (IsDefaultAdapters));
$Util.$setClassMetadataForInterface(IsDefaultAdapters, "org.pepstock.charba.client.defaults.IsDefaultAdapters");

exports = IsDefaultAdapters;

//# sourceMappingURL=IsDefaultAdapters.js.map
