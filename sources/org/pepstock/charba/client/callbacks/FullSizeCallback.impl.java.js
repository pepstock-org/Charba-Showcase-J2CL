goog.module('org.pepstock.charba.client.callbacks.FullSizeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FullSizeCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<?boolean, C>}
 */
class FullSizeCallback {
 /** @template C @return {FullSizeCallback<C>} */
 static $adapt(/** ?function(C):?boolean */ fn) {
  FullSizeCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  FullSizeCallback.$clinit = () =>{};
  FullSizeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_FullSizeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_FullSizeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.FullSizeCallback.$LambdaAdaptor$impl');
 }
}
FullSizeCallback.$markImplementor(/**@type {Function}*/ (FullSizeCallback));
$Util.$setClassMetadataForInterface(FullSizeCallback, "org.pepstock.charba.client.callbacks.FullSizeCallback");

exports = FullSizeCallback;

//# sourceMappingURL=FullSizeCallback.js.map
