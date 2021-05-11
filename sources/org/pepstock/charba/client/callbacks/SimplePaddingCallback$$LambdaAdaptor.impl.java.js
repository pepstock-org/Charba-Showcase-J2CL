goog.module('org.pepstock.charba.client.callbacks.SimplePaddingCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SimplePaddingCallback = goog.require('org.pepstock.charba.client.callbacks.SimplePaddingCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {SimplePaddingCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ScaleContext):Integer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ScaleContext):Integer}*/
  this.f_fn__org_pepstock_charba_client_callbacks_SimplePaddingCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_SimplePaddingCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_SimplePaddingCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_SimplePaddingCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_SimplePaddingCallback_$JsFunction(/** ?function(ScaleContext):Integer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_SimplePaddingCallback_$LambdaAdaptor = fn;
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ arg0) {
  let /** ?function(ScaleContext):Integer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_SimplePaddingCallback_$LambdaAdaptor, $function(arg0));
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
SimplePaddingCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.SimplePaddingCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=SimplePaddingCallback$$LambdaAdaptor.js.map
