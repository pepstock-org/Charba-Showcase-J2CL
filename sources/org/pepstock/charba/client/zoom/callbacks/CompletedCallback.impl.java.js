goog.module('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class CompletedCallback {
 /** @abstract */
 m_onCompleted__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {}
 /** @return {CompletedCallback} */
 static $adapt(/** ?function(ZoomContext):void */ fn) {
  CompletedCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CompletedCallback.$clinit = () =>{};
  CompletedCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_callbacks_CompletedCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_callbacks_CompletedCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.zoom.callbacks.CompletedCallback.$LambdaAdaptor$impl');
 }
}
CompletedCallback.$markImplementor(/**@type {Function}*/ (CompletedCallback));
$Util.$setClassMetadataForInterface(CompletedCallback, "org.pepstock.charba.client.zoom.callbacks.CompletedCallback");

exports = CompletedCallback;

//# sourceMappingURL=CompletedCallback.js.map
