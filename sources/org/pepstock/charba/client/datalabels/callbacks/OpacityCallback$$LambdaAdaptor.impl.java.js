goog.module('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const OpacityCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {OpacityCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DataLabelsContext):?number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DataLabelsContext):?number}*/
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback_$JsFunction(/** ?function(DataLabelsContext):?number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback_$LambdaAdaptor = fn;
 }
 /** @return {?number} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ arg0) {
  let /** ?function(DataLabelsContext):?number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
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
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OpacityCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.callbacks.OpacityCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=OpacityCallback$$LambdaAdaptor.js.map
