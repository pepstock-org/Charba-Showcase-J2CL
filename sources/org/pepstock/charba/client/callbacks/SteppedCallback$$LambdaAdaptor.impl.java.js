goog.module('org.pepstock.charba.client.callbacks.SteppedCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SteppedCallback = goog.require('org.pepstock.charba.client.callbacks.SteppedCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let Stepped = goog.forwardDeclare('org.pepstock.charba.client.enums.Stepped$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {SteppedCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):Stepped */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):Stepped}*/
  this.f_fn__org_pepstock_charba_client_callbacks_SteppedCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_SteppedCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_SteppedCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_SteppedCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_SteppedCallback_$JsFunction(/** ?function(DatasetContext):Stepped */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_SteppedCallback_$LambdaAdaptor = fn;
 }
 /** @return {Stepped} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):Stepped */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_SteppedCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {Stepped} */
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
SteppedCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.SteppedCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=SteppedCallback$$LambdaAdaptor.js.map
