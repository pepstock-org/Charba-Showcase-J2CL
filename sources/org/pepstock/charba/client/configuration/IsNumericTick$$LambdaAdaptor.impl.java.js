goog.module('org.pepstock.charba.client.configuration.IsNumericTick.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsNumericTick = goog.require('org.pepstock.charba.client.configuration.IsNumericTick$impl');

let IsNumberFormat = goog.forwardDeclare('org.pepstock.charba.client.options.IsNumberFormat$impl');

/**
 * @implements {IsNumericTick}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():IsNumberFormat */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():IsNumberFormat}*/
  this.f_fn__org_pepstock_charba_client_configuration_IsNumericTick_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_configuration_IsNumericTick_$LambdaAdaptor__org_pepstock_charba_client_configuration_IsNumericTick_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_configuration_IsNumericTick_$LambdaAdaptor__org_pepstock_charba_client_configuration_IsNumericTick_$JsFunction(/** ?function():IsNumberFormat */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_configuration_IsNumericTick_$LambdaAdaptor = fn;
 }
 /** @override @return {IsNumberFormat} */
 m_getNumberFormat__() {
  let /** ?function():IsNumberFormat */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_configuration_IsNumericTick_$LambdaAdaptor, $function());
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
IsNumericTick.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.configuration.IsNumericTick$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsNumericTick$$LambdaAdaptor.js.map
