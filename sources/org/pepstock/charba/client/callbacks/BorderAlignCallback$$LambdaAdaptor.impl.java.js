goog.module('org.pepstock.charba.client.callbacks.BorderAlignCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BorderAlignCallback = goog.require('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {BorderAlignCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):BorderAlign */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):BorderAlign}*/
  this.f_fn__org_pepstock_charba_client_callbacks_BorderAlignCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_BorderAlignCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderAlignCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_BorderAlignCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderAlignCallback_$JsFunction(/** ?function(DatasetContext):BorderAlign */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_BorderAlignCallback_$LambdaAdaptor = fn;
 }
 /** @return {BorderAlign} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):BorderAlign */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_BorderAlignCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {BorderAlign} */
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
BorderAlignCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.BorderAlignCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=BorderAlignCallback$$LambdaAdaptor.js.map
