goog.module('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback.$LambdaAdaptor$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<?number, C>}
 */
class BorderDashOffsetCallback {
 /** @template C @return {BorderDashOffsetCallback<C>} */
 static $adapt(/** ?function(C):?number */ fn) {
  BorderDashOffsetCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  BorderDashOffsetCallback.$clinit = () =>{};
  BorderDashOffsetCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback.$LambdaAdaptor$impl');
 }
}
BorderDashOffsetCallback.$markImplementor(/**@type {Function}*/ (BorderDashOffsetCallback));
$Util.$setClassMetadataForInterface(BorderDashOffsetCallback, "org.pepstock.charba.client.callbacks.BorderDashOffsetCallback");

exports = BorderDashOffsetCallback;

//# sourceMappingURL=BorderDashOffsetCallback.js.map
