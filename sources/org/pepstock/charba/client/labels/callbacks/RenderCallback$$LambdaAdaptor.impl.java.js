goog.module('org.pepstock.charba.client.labels.callbacks.RenderCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RenderCallback = goog.require('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');

let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {RenderCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(LabelsContext):* */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(LabelsContext):*}*/
  this.f_fn__org_pepstock_charba_client_labels_callbacks_RenderCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_labels_callbacks_RenderCallback_$LambdaAdaptor__org_pepstock_charba_client_labels_callbacks_RenderCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_labels_callbacks_RenderCallback_$LambdaAdaptor__org_pepstock_charba_client_labels_callbacks_RenderCallback_$JsFunction(/** ?function(LabelsContext):* */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_labels_callbacks_RenderCallback_$LambdaAdaptor = fn;
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_labels_LabelsContext(/** LabelsContext */ arg0) {
  let /** ?function(LabelsContext):* */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_labels_callbacks_RenderCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** LabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_labels_LabelsContext(/**@type {LabelsContext}*/ ($Casts.$to(arg0, LabelsContext)));
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
  LabelsContext = goog.module.get('org.pepstock.charba.client.labels.LabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
RenderCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.labels.callbacks.RenderCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=RenderCallback$$LambdaAdaptor.js.map
