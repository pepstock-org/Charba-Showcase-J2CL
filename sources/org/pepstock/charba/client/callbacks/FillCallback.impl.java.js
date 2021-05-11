goog.module('org.pepstock.charba.client.callbacks.FillCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FillCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, DatasetContext>}
 */
class FillCallback {
 /** @return {FillCallback} */
 static $adapt(/** ?function(DatasetContext):* */ fn) {
  FillCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  FillCallback.$clinit = () =>{};
  FillCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_FillCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_FillCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.FillCallback.$LambdaAdaptor$impl');
 }
}
FillCallback.$markImplementor(/**@type {Function}*/ (FillCallback));
$Util.$setClassMetadataForInterface(FillCallback, "org.pepstock.charba.client.callbacks.FillCallback");

exports = FillCallback;

//# sourceMappingURL=FillCallback.js.map
