goog.module('org.pepstock.charba.client.callbacks.MeterFormatCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MeterFormatCallback = goog.require('org.pepstock.charba.client.callbacks.MeterFormatCallback$impl');

let MeterContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {MeterFormatCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MeterContext):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MeterContext):?string}*/
  this.f_fn__org_pepstock_charba_client_callbacks_MeterFormatCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_MeterFormatCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_MeterFormatCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_MeterFormatCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_MeterFormatCallback_$JsFunction(/** ?function(MeterContext):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_MeterFormatCallback_$LambdaAdaptor = fn;
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_impl_charts_MeterContext(/** MeterContext */ arg0) {
  let /** ?function(MeterContext):?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_MeterFormatCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** MeterContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_impl_charts_MeterContext(/**@type {MeterContext}*/ ($Casts.$to(arg0, MeterContext)));
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
  MeterContext = goog.module.get('org.pepstock.charba.client.impl.charts.MeterContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
MeterFormatCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.MeterFormatCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=MeterFormatCallback$$LambdaAdaptor.js.map
