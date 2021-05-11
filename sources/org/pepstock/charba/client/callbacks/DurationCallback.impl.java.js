goog.module('org.pepstock.charba.client.callbacks.DurationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DurationCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<Integer, DatasetContext>}
 */
class DurationCallback {
 /** @return {DurationCallback} */
 static $adapt(/** ?function(DatasetContext):Integer */ fn) {
  DurationCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DurationCallback.$clinit = () =>{};
  DurationCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_DurationCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_DurationCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.DurationCallback.$LambdaAdaptor$impl');
 }
}
DurationCallback.$markImplementor(/**@type {Function}*/ (DurationCallback));
$Util.$setClassMetadataForInterface(DurationCallback, "org.pepstock.charba.client.callbacks.DurationCallback");

exports = DurationCallback;

//# sourceMappingURL=DurationCallback.js.map
