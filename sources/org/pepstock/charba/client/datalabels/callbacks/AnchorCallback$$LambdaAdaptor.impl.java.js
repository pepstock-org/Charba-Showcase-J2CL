goog.module('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnchorCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AnchorCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DataLabelsContext):Anchor */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DataLabelsContext):Anchor}*/
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback_$LambdaAdaptor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback_$JsFunction(/** ?function(DataLabelsContext):Anchor */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback_$LambdaAdaptor = fn;
 }
 /** @return {Anchor} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ arg0) {
  let /** ?function(DataLabelsContext):Anchor */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {Anchor} */
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
AnchorCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=AnchorCallback$$LambdaAdaptor.js.map
