goog.module('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback.$LambdaAdaptor$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');

/**
 * @interface
 * @extends {Scriptable<CubicInterpolationMode, DatasetContext>}
 */
class CubicInterpolationModeCallback {
 /** @return {CubicInterpolationModeCallback} */
 static $adapt(/** ?function(DatasetContext):CubicInterpolationMode */ fn) {
  CubicInterpolationModeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CubicInterpolationModeCallback.$clinit = () =>{};
  CubicInterpolationModeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback.$LambdaAdaptor$impl');
 }
}
CubicInterpolationModeCallback.$markImplementor(/**@type {Function}*/ (CubicInterpolationModeCallback));
$Util.$setClassMetadataForInterface(CubicInterpolationModeCallback, "org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback");

exports = CubicInterpolationModeCallback;

//# sourceMappingURL=CubicInterpolationModeCallback.js.map
