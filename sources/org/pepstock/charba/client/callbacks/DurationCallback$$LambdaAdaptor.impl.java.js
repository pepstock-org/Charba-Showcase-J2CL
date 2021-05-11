goog.module('org.pepstock.charba.client.callbacks.DurationCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DurationCallback = goog.require('org.pepstock.charba.client.callbacks.DurationCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DurationCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):Integer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):Integer}*/
  this.f_fn__org_pepstock_charba_client_callbacks_DurationCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_DurationCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_DurationCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_DurationCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_DurationCallback_$JsFunction(/** ?function(DatasetContext):Integer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_DurationCallback_$LambdaAdaptor = fn;
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):Integer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_DurationCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {Integer} */
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
DurationCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.DurationCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=DurationCallback$$LambdaAdaptor.js.map
