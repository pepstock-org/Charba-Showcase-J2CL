goog.module('org.pepstock.charba.client.datalabels.callbacks.AlignCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AlignCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.AlignCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AlignCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DataLabelsContext):Align */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DataLabelsContext):Align}*/
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_AlignCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_callbacks_AlignCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_AlignCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_callbacks_AlignCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_AlignCallback_$JsFunction(/** ?function(DataLabelsContext):Align */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_AlignCallback_$LambdaAdaptor = fn;
 }
 /** @return {Align} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ arg0) {
  let /** ?function(DataLabelsContext):Align */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_callbacks_AlignCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {Align} */
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
AlignCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.callbacks.AlignCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AlignCallback$$LambdaAdaptor.js.map
