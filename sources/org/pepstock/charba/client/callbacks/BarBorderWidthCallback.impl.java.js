goog.module('org.pepstock.charba.client.callbacks.BarBorderWidthCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BarBorderWidthCallback.$LambdaAdaptor$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');

/**
 * @interface
 * @extends {Scriptable<*, DatasetContext>}
 */
class BarBorderWidthCallback {
 /** @return {BarBorderWidthCallback} */
 static $adapt(/** ?function(DatasetContext):* */ fn) {
  BarBorderWidthCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  BarBorderWidthCallback.$clinit = () =>{};
  BarBorderWidthCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_BarBorderWidthCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_BarBorderWidthCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.BarBorderWidthCallback.$LambdaAdaptor$impl');
 }
}
BarBorderWidthCallback.$markImplementor(/**@type {Function}*/ (BarBorderWidthCallback));
$Util.$setClassMetadataForInterface(BarBorderWidthCallback, "org.pepstock.charba.client.callbacks.BarBorderWidthCallback");

exports = BarBorderWidthCallback;

//# sourceMappingURL=BarBorderWidthCallback.js.map
