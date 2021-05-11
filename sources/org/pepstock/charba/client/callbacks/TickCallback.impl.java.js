goog.module('org.pepstock.charba.client.callbacks.TickCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TickCallback.$LambdaAdaptor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @interface
 */
class TickCallback {
 /** @abstract @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(/** Axis */ axis, /** number */ value, /** number */ index, /** List<?number> */ values) {}
 /** @return {TickCallback} */
 static $adapt(/** ?function(Axis, number, number, List<?number>):?string */ fn) {
  TickCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TickCallback.$clinit = () =>{};
  TickCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TickCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TickCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.TickCallback.$LambdaAdaptor$impl');
 }
}
TickCallback.$markImplementor(/**@type {Function}*/ (TickCallback));
$Util.$setClassMetadataForInterface(TickCallback, "org.pepstock.charba.client.callbacks.TickCallback");

exports = TickCallback;

//# sourceMappingURL=TickCallback.js.map
