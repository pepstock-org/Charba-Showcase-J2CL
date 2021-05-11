goog.module('org.pepstock.charba.client.callbacks.DisplayCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DisplayCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<?boolean, C>}
 */
class DisplayCallback {
 /** @template C @return {DisplayCallback<C>} */
 static $adapt(/** ?function(C):?boolean */ fn) {
  DisplayCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  DisplayCallback.$clinit = () =>{};
  DisplayCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_DisplayCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_DisplayCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.DisplayCallback.$LambdaAdaptor$impl');
 }
}
DisplayCallback.$markImplementor(/**@type {Function}*/ (DisplayCallback));
$Util.$setClassMetadataForInterface(DisplayCallback, "org.pepstock.charba.client.callbacks.DisplayCallback");

exports = DisplayCallback;

//# sourceMappingURL=DisplayCallback.js.map
