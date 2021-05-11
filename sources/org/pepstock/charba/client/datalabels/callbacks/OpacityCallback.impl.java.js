goog.module('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?number, DataLabelsContext>}
 */
class OpacityCallback {
 /** @return {OpacityCallback} */
 static $adapt(/** ?function(DataLabelsContext):?number */ fn) {
  OpacityCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  OpacityCallback.$clinit = () =>{};
  OpacityCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback.$LambdaAdaptor$impl');
 }
}
OpacityCallback.$markImplementor(/**@type {Function}*/ (OpacityCallback));
$Util.$setClassMetadataForInterface(OpacityCallback, "org.pepstock.charba.client.datalabels.callbacks.OpacityCallback");

exports = OpacityCallback;

//# sourceMappingURL=OpacityCallback.js.map
