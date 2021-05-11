goog.module('org.pepstock.charba.client.callbacks.BorderSkippedCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderSkippedCallback.$LambdaAdaptor$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');

/**
 * @interface
 * @extends {Scriptable<BorderSkipped, DatasetContext>}
 */
class BorderSkippedCallback {
 /** @return {BorderSkippedCallback} */
 static $adapt(/** ?function(DatasetContext):BorderSkipped */ fn) {
  BorderSkippedCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  BorderSkippedCallback.$clinit = () =>{};
  BorderSkippedCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_BorderSkippedCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_BorderSkippedCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.BorderSkippedCallback.$LambdaAdaptor$impl');
 }
}
BorderSkippedCallback.$markImplementor(/**@type {Function}*/ (BorderSkippedCallback));
$Util.$setClassMetadataForInterface(BorderSkippedCallback, "org.pepstock.charba.client.callbacks.BorderSkippedCallback");

exports = BorderSkippedCallback;

//# sourceMappingURL=BorderSkippedCallback.js.map
