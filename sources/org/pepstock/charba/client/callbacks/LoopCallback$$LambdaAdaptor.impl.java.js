goog.module('org.pepstock.charba.client.callbacks.LoopCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoopCallback = goog.require('org.pepstock.charba.client.callbacks.LoopCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LoopCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):?boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):?boolean}*/
  this.f_fn__org_pepstock_charba_client_callbacks_LoopCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_LoopCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LoopCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_LoopCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LoopCallback_$JsFunction(/** ?function(DatasetContext):?boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_LoopCallback_$LambdaAdaptor = fn;
 }
 /** @return {?boolean} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):?boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_LoopCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {?boolean} */
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
LoopCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.LoopCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LoopCallback$$LambdaAdaptor.js.map
