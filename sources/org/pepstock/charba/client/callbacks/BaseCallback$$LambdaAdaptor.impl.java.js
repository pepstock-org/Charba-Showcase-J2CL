goog.module('org.pepstock.charba.client.callbacks.BaseCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BaseCallback = goog.require('org.pepstock.charba.client.callbacks.BaseCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {BaseCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):?number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):?number}*/
  this.f_fn__org_pepstock_charba_client_callbacks_BaseCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_BaseCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BaseCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_BaseCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BaseCallback_$JsFunction(/** ?function(DatasetContext):?number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_BaseCallback_$LambdaAdaptor = fn;
 }
 /** @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):?number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_BaseCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
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
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
BaseCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.BaseCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=BaseCallback$$LambdaAdaptor.js.map
