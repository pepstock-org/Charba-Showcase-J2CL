goog.module('org.pepstock.charba.client.callbacks.StepSizeCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const StepSizeCallback = goog.require('org.pepstock.charba.client.callbacks.StepSizeCallback$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {StepSizeCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ScaleContext):?number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ScaleContext):?number}*/
  this.f_fn__org_pepstock_charba_client_callbacks_StepSizeCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_StepSizeCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_StepSizeCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_StepSizeCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_StepSizeCallback_$JsFunction(/** ?function(ScaleContext):?number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_StepSizeCallback_$LambdaAdaptor = fn;
 }
 /** @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ arg0) {
  let /** ?function(ScaleContext):?number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_StepSizeCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {?number} */
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
StepSizeCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.StepSizeCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=StepSizeCallback$$LambdaAdaptor.js.map
