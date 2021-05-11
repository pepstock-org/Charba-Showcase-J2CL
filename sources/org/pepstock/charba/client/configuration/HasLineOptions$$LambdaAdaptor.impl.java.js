goog.module('org.pepstock.charba.client.configuration.HasLineOptions.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasLineOptions = goog.require('org.pepstock.charba.client.configuration.HasLineOptions$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');

/**
 * @implements {HasLineOptions}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():ConfigurationOptions */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ConfigurationOptions}*/
  this.f_fn__org_pepstock_charba_client_configuration_HasLineOptions_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_configuration_HasLineOptions_$LambdaAdaptor__org_pepstock_charba_client_configuration_HasLineOptions_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_configuration_HasLineOptions_$LambdaAdaptor__org_pepstock_charba_client_configuration_HasLineOptions_$JsFunction(/** ?function():ConfigurationOptions */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_configuration_HasLineOptions_$LambdaAdaptor = fn;
 }
 /** @override @return {ConfigurationOptions} */
 m_getOptions__() {
  let /** ?function():ConfigurationOptions */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_configuration_HasLineOptions_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowLine__() {
  return HasLineOptions.m_isShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return HasLineOptions.m_isSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowLine__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasLineOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasLineOptions.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.configuration.HasLineOptions$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasLineOptions$$LambdaAdaptor.js.map
