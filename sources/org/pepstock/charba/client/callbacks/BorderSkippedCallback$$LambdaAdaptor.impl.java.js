goog.module('org.pepstock.charba.client.callbacks.BorderSkippedCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BorderSkippedCallback = goog.require('org.pepstock.charba.client.callbacks.BorderSkippedCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {BorderSkippedCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):BorderSkipped */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):BorderSkipped}*/
  this.f_fn__org_pepstock_charba_client_callbacks_BorderSkippedCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_BorderSkippedCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderSkippedCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_BorderSkippedCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderSkippedCallback_$JsFunction(/** ?function(DatasetContext):BorderSkipped */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_BorderSkippedCallback_$LambdaAdaptor = fn;
 }
 /** @return {BorderSkipped} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):BorderSkipped */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_BorderSkippedCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {BorderSkipped} */
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
BorderSkippedCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.BorderSkippedCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=BorderSkippedCallback$$LambdaAdaptor.js.map
