goog.module('org.pepstock.charba.client.callbacks.ToCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ToCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, DatasetContext>}
 */
class ToCallback {
 /** @return {ToCallback} */
 static $adapt(/** ?function(DatasetContext):* */ fn) {
  ToCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ToCallback.$clinit = () =>{};
  ToCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_ToCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_ToCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.ToCallback.$LambdaAdaptor$impl');
 }
}
ToCallback.$markImplementor(/**@type {Function}*/ (ToCallback));
$Util.$setClassMetadataForInterface(ToCallback, "org.pepstock.charba.client.callbacks.ToCallback");

exports = ToCallback;

//# sourceMappingURL=ToCallback.js.map
