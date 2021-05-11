goog.module('org.pepstock.charba.client.callbacks.PointLabelCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PointLabelCallback = goog.require('org.pepstock.charba.client.callbacks.PointLabelCallback$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @implements {PointLabelCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Axis, ?string, number):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Axis, ?string, number):?string}*/
  this.f_fn__org_pepstock_charba_client_callbacks_PointLabelCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_PointLabelCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_PointLabelCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_PointLabelCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_PointLabelCallback_$JsFunction(/** ?function(Axis, ?string, number):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_PointLabelCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_lang_String__int(/** Axis */ arg0, /** ?string */ arg1, /** number */ arg2) {
  let /** ?function(Axis, ?string, number):?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_PointLabelCallback_$LambdaAdaptor, $function(arg0, arg1, arg2));
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
 
 static $loadModules() {}
}
PointLabelCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.PointLabelCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=PointLabelCallback$$LambdaAdaptor.js.map
