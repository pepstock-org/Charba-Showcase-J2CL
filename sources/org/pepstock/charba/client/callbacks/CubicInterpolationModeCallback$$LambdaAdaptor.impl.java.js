goog.module('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CubicInterpolationModeCallback = goog.require('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {CubicInterpolationModeCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DatasetContext):CubicInterpolationMode */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DatasetContext):CubicInterpolationMode}*/
  this.f_fn__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback_$JsFunction(/** ?function(DatasetContext):CubicInterpolationMode */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback_$LambdaAdaptor = fn;
 }
 /** @return {CubicInterpolationMode} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ arg0) {
  let /** ?function(DatasetContext):CubicInterpolationMode */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {CubicInterpolationMode} */
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
CubicInterpolationModeCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=CubicInterpolationModeCallback$$LambdaAdaptor.js.map
