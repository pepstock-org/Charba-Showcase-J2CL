goog.module('org.pepstock.charba.client.callbacks.CornerRadiusCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CornerRadiusCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<Integer, C>}
 */
class CornerRadiusCallback {
 /** @template C @return {CornerRadiusCallback<C>} */
 static $adapt(/** ?function(C):Integer */ fn) {
  CornerRadiusCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  CornerRadiusCallback.$clinit = () =>{};
  CornerRadiusCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_CornerRadiusCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_CornerRadiusCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.CornerRadiusCallback.$LambdaAdaptor$impl');
 }
}
CornerRadiusCallback.$markImplementor(/**@type {Function}*/ (CornerRadiusCallback));
$Util.$setClassMetadataForInterface(CornerRadiusCallback, "org.pepstock.charba.client.callbacks.CornerRadiusCallback");

exports = CornerRadiusCallback;

//# sourceMappingURL=CornerRadiusCallback.js.map
