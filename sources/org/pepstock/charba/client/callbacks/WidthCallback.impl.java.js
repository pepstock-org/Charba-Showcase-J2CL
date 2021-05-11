goog.module('org.pepstock.charba.client.callbacks.WidthCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<Integer, C>}
 */
class WidthCallback {
 /** @template C @return {WidthCallback<C>} */
 static $adapt(/** ?function(C):Integer */ fn) {
  WidthCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  WidthCallback.$clinit = () =>{};
  WidthCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_WidthCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_WidthCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.WidthCallback.$LambdaAdaptor$impl');
 }
}
WidthCallback.$markImplementor(/**@type {Function}*/ (WidthCallback));
$Util.$setClassMetadataForInterface(WidthCallback, "org.pepstock.charba.client.callbacks.WidthCallback");

exports = WidthCallback;

//# sourceMappingURL=WidthCallback.js.map
