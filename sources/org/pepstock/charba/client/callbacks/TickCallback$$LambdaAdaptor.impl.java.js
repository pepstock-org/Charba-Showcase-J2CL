goog.module('org.pepstock.charba.client.callbacks.TickCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TickCallback = goog.require('org.pepstock.charba.client.callbacks.TickCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @implements {TickCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Axis, number, number, List<?number>):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Axis, number, number, List<?number>):?string}*/
  this.f_fn__org_pepstock_charba_client_callbacks_TickCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_TickCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TickCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TickCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TickCallback_$JsFunction(/** ?function(Axis, number, number, List<?number>):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_TickCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(/** Axis */ arg0, /** number */ arg1, /** number */ arg2, /** List<?number> */ arg3) {
  let /** ?function(Axis, number, number, List<?number>):?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_TickCallback_$LambdaAdaptor, $function(arg0, arg1, arg2, arg3));
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
TickCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.TickCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TickCallback$$LambdaAdaptor.js.map
