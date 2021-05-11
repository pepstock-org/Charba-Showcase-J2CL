goog.module('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ProgressCallback {
 /** @abstract */
 m_onProgress__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {}
 /** @return {ProgressCallback} */
 static $adapt(/** ?function(ZoomContext):void */ fn) {
  ProgressCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ProgressCallback.$clinit = () =>{};
  ProgressCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_callbacks_ProgressCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_callbacks_ProgressCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.zoom.callbacks.ProgressCallback.$LambdaAdaptor$impl');
 }
}
ProgressCallback.$markImplementor(/**@type {Function}*/ (ProgressCallback));
$Util.$setClassMetadataForInterface(ProgressCallback, "org.pepstock.charba.client.zoom.callbacks.ProgressCallback");

exports = ProgressCallback;

//# sourceMappingURL=ProgressCallback.js.map
