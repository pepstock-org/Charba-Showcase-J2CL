goog.module('org.pepstock.charba.client.datalabels.callbacks.ClampCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.ClampCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?boolean, DataLabelsContext>}
 */
class ClampCallback {
 /** @return {ClampCallback} */
 static $adapt(/** ?function(DataLabelsContext):?boolean */ fn) {
  ClampCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ClampCallback.$clinit = () =>{};
  ClampCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_ClampCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_ClampCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.ClampCallback.$LambdaAdaptor$impl');
 }
}
ClampCallback.$markImplementor(/**@type {Function}*/ (ClampCallback));
$Util.$setClassMetadataForInterface(ClampCallback, "org.pepstock.charba.client.datalabels.callbacks.ClampCallback");

exports = ClampCallback;

//# sourceMappingURL=ClampCallback.js.map
