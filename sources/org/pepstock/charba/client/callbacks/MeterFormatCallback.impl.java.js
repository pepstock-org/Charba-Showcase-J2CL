goog.module('org.pepstock.charba.client.callbacks.MeterFormatCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.MeterFormatCallback.$LambdaAdaptor$impl');
let MeterContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterContext$impl');

/**
 * @interface
 * @extends {Scriptable<?string, MeterContext>}
 */
class MeterFormatCallback {
 /** @return {MeterFormatCallback} */
 static $adapt(/** ?function(MeterContext):?string */ fn) {
  MeterFormatCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MeterFormatCallback.$clinit = () =>{};
  MeterFormatCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_MeterFormatCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_MeterFormatCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.MeterFormatCallback.$LambdaAdaptor$impl');
 }
}
MeterFormatCallback.$markImplementor(/**@type {Function}*/ (MeterFormatCallback));
$Util.$setClassMetadataForInterface(MeterFormatCallback, "org.pepstock.charba.client.callbacks.MeterFormatCallback");

exports = MeterFormatCallback;

//# sourceMappingURL=MeterFormatCallback.js.map
