goog.module('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DisplayCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DisplayCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DataLabelsContext):Display */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DataLabelsContext):Display}*/
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback_$JsFunction(/** ?function(DataLabelsContext):Display */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback_$LambdaAdaptor = fn;
 }
 /** @return {Display} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ arg0) {
  let /** ?function(DataLabelsContext):Display */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {Display} */
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
DisplayCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=DisplayCallback$$LambdaAdaptor.js.map
