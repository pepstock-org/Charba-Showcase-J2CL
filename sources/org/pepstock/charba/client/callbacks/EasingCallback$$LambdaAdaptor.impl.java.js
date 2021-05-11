goog.module('org.pepstock.charba.client.callbacks.EasingCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EasingCallback = goog.require('org.pepstock.charba.client.callbacks.EasingCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {EasingCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):Easing */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):Easing}*/
  this.f_fn__org_pepstock_charba_client_callbacks_EasingCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_EasingCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_EasingCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_EasingCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_EasingCallback_$JsFunction(/** ?function(DatasetContext):Easing */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_EasingCallback_$LambdaAdaptor = fn;
 }
 /** @return {Easing} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):Easing */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_EasingCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {Easing} */
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
EasingCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.EasingCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=EasingCallback$$LambdaAdaptor.js.map
