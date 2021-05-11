goog.module('org.pepstock.charba.client.callbacks.SimplePaddingCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SimplePaddingCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<Integer, ScaleContext>}
 */
class SimplePaddingCallback {
 /** @return {SimplePaddingCallback} */
 static $adapt(/** ?function(ScaleContext):Integer */ fn) {
  SimplePaddingCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SimplePaddingCallback.$clinit = () =>{};
  SimplePaddingCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_SimplePaddingCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_SimplePaddingCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.SimplePaddingCallback.$LambdaAdaptor$impl');
 }
}
SimplePaddingCallback.$markImplementor(/**@type {Function}*/ (SimplePaddingCallback));
$Util.$setClassMetadataForInterface(SimplePaddingCallback, "org.pepstock.charba.client.callbacks.SimplePaddingCallback");

exports = SimplePaddingCallback;

//# sourceMappingURL=SimplePaddingCallback.js.map
