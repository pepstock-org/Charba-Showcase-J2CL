goog.module('org.pepstock.charba.client.callbacks.NumberFormatCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NumberFormatCallback = goog.require('org.pepstock.charba.client.callbacks.NumberFormatCallback$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let NumberFormatItem = goog.forwardDeclare('org.pepstock.charba.client.items.NumberFormatItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NumberFormatCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ScaleContext):NumberFormatItem */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ScaleContext):NumberFormatItem}*/
  this.f_fn__org_pepstock_charba_client_callbacks_NumberFormatCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_NumberFormatCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_NumberFormatCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_NumberFormatCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_NumberFormatCallback_$JsFunction(/** ?function(ScaleContext):NumberFormatItem */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_NumberFormatCallback_$LambdaAdaptor = fn;
 }
 /** @return {NumberFormatItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ arg0) {
  let /** ?function(ScaleContext):NumberFormatItem */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_NumberFormatCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {NumberFormatItem} */
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
NumberFormatCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.NumberFormatCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=NumberFormatCallback$$LambdaAdaptor.js.map
