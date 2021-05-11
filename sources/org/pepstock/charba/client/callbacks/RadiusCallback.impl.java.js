goog.module('org.pepstock.charba.client.callbacks.RadiusCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<?number, C>}
 */
class RadiusCallback {
 /** @template C @return {RadiusCallback<C>} */
 static $adapt(/** ?function(C):?number */ fn) {
  RadiusCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  RadiusCallback.$clinit = () =>{};
  RadiusCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_RadiusCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_RadiusCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.RadiusCallback.$LambdaAdaptor$impl');
 }
}
RadiusCallback.$markImplementor(/**@type {Function}*/ (RadiusCallback));
$Util.$setClassMetadataForInterface(RadiusCallback, "org.pepstock.charba.client.callbacks.RadiusCallback");

exports = RadiusCallback;

//# sourceMappingURL=RadiusCallback.js.map
