goog.module('org.pepstock.charba.client.callbacks.JoinStyleCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.JoinStyleCallback.$LambdaAdaptor$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<JoinStyle, C>}
 */
class JoinStyleCallback {
 /** @template C @return {JoinStyleCallback<C>} */
 static $adapt(/** ?function(C):JoinStyle */ fn) {
  JoinStyleCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  JoinStyleCallback.$clinit = () =>{};
  JoinStyleCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_JoinStyleCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_JoinStyleCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.JoinStyleCallback.$LambdaAdaptor$impl');
 }
}
JoinStyleCallback.$markImplementor(/**@type {Function}*/ (JoinStyleCallback));
$Util.$setClassMetadataForInterface(JoinStyleCallback, "org.pepstock.charba.client.callbacks.JoinStyleCallback");

exports = JoinStyleCallback;

//# sourceMappingURL=JoinStyleCallback.js.map
