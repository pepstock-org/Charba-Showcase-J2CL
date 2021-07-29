goog.module('org.pepstock.charba.client.callbacks.AngleCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AngleCallback.$LambdaAdaptor$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');

/**
 * @interface
 * @extends {Scriptable<?number, DatasetContext>}
 */
class AngleCallback {
 /** @return {AngleCallback} */
 static $adapt(/** ?function(DatasetContext):?number */ fn) {
  AngleCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AngleCallback.$clinit = () =>{};
  AngleCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AngleCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AngleCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.AngleCallback.$LambdaAdaptor$impl');
 }
}
AngleCallback.$markImplementor(/**@type {Function}*/ (AngleCallback));
$Util.$setClassMetadataForInterface(AngleCallback, "org.pepstock.charba.client.callbacks.AngleCallback");

exports = AngleCallback;

//# sourceMappingURL=AngleCallback.js.map
