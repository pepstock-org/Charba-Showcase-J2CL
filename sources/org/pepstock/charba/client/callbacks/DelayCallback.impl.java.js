goog.module('org.pepstock.charba.client.callbacks.DelayCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DelayCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<Integer, DatasetContext>}
 */
class DelayCallback {
 /** @return {DelayCallback} */
 static $adapt(/** ?function(DatasetContext):Integer */ fn) {
  DelayCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DelayCallback.$clinit = () =>{};
  DelayCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_DelayCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_DelayCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.DelayCallback.$LambdaAdaptor$impl');
 }
}
DelayCallback.$markImplementor(/**@type {Function}*/ (DelayCallback));
$Util.$setClassMetadataForInterface(DelayCallback, "org.pepstock.charba.client.callbacks.DelayCallback");

exports = DelayCallback;

//# sourceMappingURL=DelayCallback.js.map
