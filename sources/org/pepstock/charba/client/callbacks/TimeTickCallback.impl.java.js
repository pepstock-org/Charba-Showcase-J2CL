goog.module('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TimeTickCallback.$LambdaAdaptor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');

/**
 * @interface
 */
class TimeTickCallback {
 /** @abstract @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_util_Date__java_lang_String__int__java_util_List(/** Axis */ axis, /** Date */ value, /** ?string */ label, /** number */ index, /** List<ScaleTickItem> */ values) {}
 /** @return {TimeTickCallback} */
 static $adapt(/** ?function(Axis, Date, ?string, number, List<ScaleTickItem>):?string */ fn) {
  TimeTickCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TimeTickCallback.$clinit = () =>{};
  TimeTickCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TimeTickCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TimeTickCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.TimeTickCallback.$LambdaAdaptor$impl');
 }
}
TimeTickCallback.$markImplementor(/**@type {Function}*/ (TimeTickCallback));
$Util.$setClassMetadataForInterface(TimeTickCallback, "org.pepstock.charba.client.callbacks.TimeTickCallback");

exports = TimeTickCallback;

//# sourceMappingURL=TimeTickCallback.js.map
