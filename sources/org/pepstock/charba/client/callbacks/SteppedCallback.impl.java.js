goog.module('org.pepstock.charba.client.callbacks.SteppedCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SteppedCallback.$LambdaAdaptor$impl');
let Stepped = goog.forwardDeclare('org.pepstock.charba.client.enums.Stepped$impl');

/**
 * @interface
 * @extends {Scriptable<Stepped, DatasetContext>}
 */
class SteppedCallback {
 /** @return {SteppedCallback} */
 static $adapt(/** ?function(DatasetContext):Stepped */ fn) {
  SteppedCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SteppedCallback.$clinit = () =>{};
  SteppedCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_SteppedCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_SteppedCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.SteppedCallback.$LambdaAdaptor$impl');
 }
}
SteppedCallback.$markImplementor(/**@type {Function}*/ (SteppedCallback));
$Util.$setClassMetadataForInterface(SteppedCallback, "org.pepstock.charba.client.callbacks.SteppedCallback");

exports = SteppedCallback;

//# sourceMappingURL=SteppedCallback.js.map
