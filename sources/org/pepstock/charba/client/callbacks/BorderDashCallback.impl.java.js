goog.module('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashCallback.$LambdaAdaptor$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<List<Integer>, C>}
 */
class BorderDashCallback {
 /** @template C @return {BorderDashCallback<C>} */
 static $adapt(/** ?function(C):List<Integer> */ fn) {
  BorderDashCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  BorderDashCallback.$clinit = () =>{};
  BorderDashCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_BorderDashCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_BorderDashCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.BorderDashCallback.$LambdaAdaptor$impl');
 }
}
BorderDashCallback.$markImplementor(/**@type {Function}*/ (BorderDashCallback));
$Util.$setClassMetadataForInterface(BorderDashCallback, "org.pepstock.charba.client.callbacks.BorderDashCallback");

exports = BorderDashCallback;

//# sourceMappingURL=BorderDashCallback.js.map
