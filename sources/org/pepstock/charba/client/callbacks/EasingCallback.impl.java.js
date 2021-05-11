goog.module('org.pepstock.charba.client.callbacks.EasingCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EasingCallback.$LambdaAdaptor$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');

/**
 * @interface
 * @extends {Scriptable<Easing, DatasetContext>}
 */
class EasingCallback {
 /** @return {EasingCallback} */
 static $adapt(/** ?function(DatasetContext):Easing */ fn) {
  EasingCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EasingCallback.$clinit = () =>{};
  EasingCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_EasingCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_EasingCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.EasingCallback.$LambdaAdaptor$impl');
 }
}
EasingCallback.$markImplementor(/**@type {Function}*/ (EasingCallback));
$Util.$setClassMetadataForInterface(EasingCallback, "org.pepstock.charba.client.callbacks.EasingCallback");

exports = EasingCallback;

//# sourceMappingURL=EasingCallback.js.map
