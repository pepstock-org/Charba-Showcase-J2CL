goog.module('org.pepstock.charba.client.geo.callbacks.InterpolateCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.InterpolateCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class InterpolateCallback {
 /** @abstract @return {*} */
 m_interpolate__double(/** number */ normalizedValue) {}
 /** @return {InterpolateCallback} */
 static $adapt(/** ?function(number):* */ fn) {
  InterpolateCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  InterpolateCallback.$clinit = () =>{};
  InterpolateCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_geo_callbacks_InterpolateCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_callbacks_InterpolateCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.callbacks.InterpolateCallback.$LambdaAdaptor$impl');
 }
}
InterpolateCallback.$markImplementor(/**@type {Function}*/ (InterpolateCallback));
$Util.$setClassMetadataForInterface(InterpolateCallback, "org.pepstock.charba.client.geo.callbacks.InterpolateCallback");

exports = InterpolateCallback;

//# sourceMappingURL=InterpolateCallback.js.map
