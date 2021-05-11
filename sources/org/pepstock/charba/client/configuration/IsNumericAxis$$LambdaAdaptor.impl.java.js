goog.module('org.pepstock.charba.client.configuration.IsNumericAxis.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsNumericAxis = goog.require('org.pepstock.charba.client.configuration.IsNumericAxis$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @implements {IsNumericAxis}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Axis */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Axis}*/
  this.f_fn__org_pepstock_charba_client_configuration_IsNumericAxis_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_configuration_IsNumericAxis_$LambdaAdaptor__org_pepstock_charba_client_configuration_IsNumericAxis_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_configuration_IsNumericAxis_$LambdaAdaptor__org_pepstock_charba_client_configuration_IsNumericAxis_$JsFunction(/** ?function():Axis */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_configuration_IsNumericAxis_$LambdaAdaptor = fn;
 }
 /** @override @return {Axis} */
 m_getAxisElement__() {
  let /** ?function():Axis */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_configuration_IsNumericAxis_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMax__() {
  return IsNumericAxis.m_getMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMin__() {
  return IsNumericAxis.m_getMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSuggestedMax__() {
  return IsNumericAxis.m_getSuggestedMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSuggestedMin__() {
  return IsNumericAxis.m_getSuggestedMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMax__double(/** number */ arg0) {
  IsNumericAxis.m_setMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMin__double(/** number */ arg0) {
  IsNumericAxis.m_setMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSuggestedMax__double(/** number */ arg0) {
  IsNumericAxis.m_setSuggestedMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSuggestedMin__double(/** number */ arg0) {
  IsNumericAxis.m_setSuggestedMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsNumericAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
IsNumericAxis.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.configuration.IsNumericAxis$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsNumericAxis$$LambdaAdaptor.js.map
