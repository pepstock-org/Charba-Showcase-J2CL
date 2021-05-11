goog.module('org.pepstock.charba.client.callbacks.OffsetCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.OffsetCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<Integer, C>}
 */
class OffsetCallback {
 /** @template C @return {OffsetCallback<C>} */
 static $adapt(/** ?function(C):Integer */ fn) {
  OffsetCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  OffsetCallback.$clinit = () =>{};
  OffsetCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_OffsetCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_OffsetCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.OffsetCallback.$LambdaAdaptor$impl');
 }
}
OffsetCallback.$markImplementor(/**@type {Function}*/ (OffsetCallback));
$Util.$setClassMetadataForInterface(OffsetCallback, "org.pepstock.charba.client.callbacks.OffsetCallback");

exports = OffsetCallback;

//# sourceMappingURL=OffsetCallback.js.map
