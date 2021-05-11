goog.module('org.pepstock.charba.client.callbacks.PaddingCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback.$LambdaAdaptor$impl');
let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<PaddingItem, C>}
 */
class PaddingCallback {
 /** @template C @return {PaddingCallback<C>} */
 static $adapt(/** ?function(C):PaddingItem */ fn) {
  PaddingCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  PaddingCallback.$clinit = () =>{};
  PaddingCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_PaddingCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_PaddingCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.PaddingCallback.$LambdaAdaptor$impl');
 }
}
PaddingCallback.$markImplementor(/**@type {Function}*/ (PaddingCallback));
$Util.$setClassMetadataForInterface(PaddingCallback, "org.pepstock.charba.client.callbacks.PaddingCallback");

exports = PaddingCallback;

//# sourceMappingURL=PaddingCallback.js.map
