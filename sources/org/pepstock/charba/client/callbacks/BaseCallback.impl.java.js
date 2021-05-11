goog.module('org.pepstock.charba.client.callbacks.BaseCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BaseCallback.$LambdaAdaptor$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');

/**
 * @interface
 * @extends {Scriptable<?number, DatasetContext>}
 */
class BaseCallback {
 /** @return {BaseCallback} */
 static $adapt(/** ?function(DatasetContext):?number */ fn) {
  BaseCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  BaseCallback.$clinit = () =>{};
  BaseCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_BaseCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_BaseCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.BaseCallback.$LambdaAdaptor$impl');
 }
}
BaseCallback.$markImplementor(/**@type {Function}*/ (BaseCallback));
$Util.$setClassMetadataForInterface(BaseCallback, "org.pepstock.charba.client.callbacks.BaseCallback");

exports = BaseCallback;

//# sourceMappingURL=BaseCallback.js.map
