goog.module('org.pepstock.charba.client.callbacks.TimeTickCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TimeTickCallback = goog.require('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');

/**
 * @implements {TimeTickCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Axis, Date, ?string, number, List<ScaleTickItem>):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Axis, Date, ?string, number, List<ScaleTickItem>):?string}*/
  this.f_fn__org_pepstock_charba_client_callbacks_TimeTickCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_TimeTickCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TimeTickCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TimeTickCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TimeTickCallback_$JsFunction(/** ?function(Axis, Date, ?string, number, List<ScaleTickItem>):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_TimeTickCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_util_Date__java_lang_String__int__java_util_List(/** Axis */ arg0, /** Date */ arg1, /** ?string */ arg2, /** number */ arg3, /** List<ScaleTickItem> */ arg4) {
  let /** ?function(Axis, Date, ?string, number, List<ScaleTickItem>):?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_TimeTickCallback_$LambdaAdaptor, $function(arg0, arg1, arg2, arg3, arg4));
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
TimeTickCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.TimeTickCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TimeTickCallback$$LambdaAdaptor.js.map
