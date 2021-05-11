goog.module('org.pepstock.charba.client.datalabels.callbacks.ClipCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.ClipCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?boolean, DataLabelsContext>}
 */
class ClipCallback {
 /** @return {ClipCallback} */
 static $adapt(/** ?function(DataLabelsContext):?boolean */ fn) {
  ClipCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ClipCallback.$clinit = () =>{};
  ClipCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_ClipCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_ClipCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.ClipCallback.$LambdaAdaptor$impl');
 }
}
ClipCallback.$markImplementor(/**@type {Function}*/ (ClipCallback));
$Util.$setClassMetadataForInterface(ClipCallback, "org.pepstock.charba.client.datalabels.callbacks.ClipCallback");

exports = ClipCallback;

//# sourceMappingURL=ClipCallback.js.map
