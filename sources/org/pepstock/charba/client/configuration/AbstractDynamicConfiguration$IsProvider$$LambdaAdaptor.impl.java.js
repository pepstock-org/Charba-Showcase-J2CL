goog.module('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsProvider = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');

/**
 * @template T
 * @implements {IsProvider<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():T}*/
  this.f_fn__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider_$LambdaAdaptor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider_$LambdaAdaptor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider_$JsFunction(/** ?function():T */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider_$LambdaAdaptor = fn;
 }
 /** @override @return {T} */
 m_getElement__() {
  let /** ?function():T */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider_$LambdaAdaptor, $function());
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
IsProvider.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$IsProvider$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AbstractDynamicConfiguration$IsProvider$$LambdaAdaptor.js.map
