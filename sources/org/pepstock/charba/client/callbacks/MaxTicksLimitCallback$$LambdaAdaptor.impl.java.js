goog.module('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MaxTicksLimitCallback = goog.require('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {MaxTicksLimitCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ScaleContext):Integer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ScaleContext):Integer}*/
  this.f_fn__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$JsFunction(/** ?function(ScaleContext):Integer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$LambdaAdaptor = fn;
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ arg0) {
  let /** ?function(ScaleContext):Integer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ScaleContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/**@type {ScaleContext}*/ ($Casts.$to(arg0, ScaleContext)));
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
 
 static $loadModules() {
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
MaxTicksLimitCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.MaxTicksLimitCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=MaxTicksLimitCallback$$LambdaAdaptor.js.map
