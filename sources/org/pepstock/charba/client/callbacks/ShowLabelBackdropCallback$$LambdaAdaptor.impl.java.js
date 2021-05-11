goog.module('org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ShowLabelBackdropCallback = goog.require('org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ShowLabelBackdropCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ScaleContext):?boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ScaleContext):?boolean}*/
  this.f_fn__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback_$JsFunction(/** ?function(ScaleContext):?boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback_$LambdaAdaptor = fn;
 }
 /** @return {?boolean} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ arg0) {
  let /** ?function(ScaleContext):?boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {?boolean} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ScaleContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/**@type {ScaleContext}*/ ($Casts.$to(arg0, ScaleContext)));
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
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ShowLabelBackdropCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ShowLabelBackdropCallback$$LambdaAdaptor.js.map
