goog.module('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class IsProvider {
 /** @abstract @return {T} */
 m_getElement__() {}
 /** @template T @return {IsProvider<T>} */
 static $adapt(/** ?function():T */ fn) {
  IsProvider.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  IsProvider.$clinit = () =>{};
  IsProvider.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider.$LambdaAdaptor$impl');
 }
}
IsProvider.$markImplementor(/**@type {Function}*/ (IsProvider));
$Util.$setClassMetadataForInterface(IsProvider, "org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$IsProvider");

exports = IsProvider;

//# sourceMappingURL=AbstractDynamicConfiguration$IsProvider.js.map
