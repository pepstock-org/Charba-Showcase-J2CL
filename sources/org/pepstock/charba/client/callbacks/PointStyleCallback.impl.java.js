goog.module('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, DatasetContext>}
 */
class PointStyleCallback {
 /** @return {PointStyleCallback} */
 static $adapt(/** ?function(DatasetContext):* */ fn) {
  PointStyleCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PointStyleCallback.$clinit = () =>{};
  PointStyleCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_PointStyleCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_PointStyleCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.PointStyleCallback.$LambdaAdaptor$impl');
 }
}
PointStyleCallback.$markImplementor(/**@type {Function}*/ (PointStyleCallback));
$Util.$setClassMetadataForInterface(PointStyleCallback, "org.pepstock.charba.client.callbacks.PointStyleCallback");

exports = PointStyleCallback;

//# sourceMappingURL=PointStyleCallback.js.map
