goog.module('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback.$LambdaAdaptor$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');

/**
 * @interface
 * @extends {Scriptable<Display, DataLabelsContext>}
 */
class DisplayCallback {
 /** @return {DisplayCallback} */
 static $adapt(/** ?function(DataLabelsContext):Display */ fn) {
  DisplayCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DisplayCallback.$clinit = () =>{};
  DisplayCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback.$LambdaAdaptor$impl');
 }
}
DisplayCallback.$markImplementor(/**@type {Function}*/ (DisplayCallback));
$Util.$setClassMetadataForInterface(DisplayCallback, "org.pepstock.charba.client.datalabels.callbacks.DisplayCallback");

exports = DisplayCallback;

//# sourceMappingURL=DisplayCallback.js.map
