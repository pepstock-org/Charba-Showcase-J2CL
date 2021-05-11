goog.module('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class StartCallback {
 /** @abstract @return {boolean} */
 m_onStart__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {}
 /** @return {StartCallback} */
 static $adapt(/** ?function(ZoomContext):boolean */ fn) {
  StartCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  StartCallback.$clinit = () =>{};
  StartCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_callbacks_StartCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_callbacks_StartCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.zoom.callbacks.StartCallback.$LambdaAdaptor$impl');
 }
}
StartCallback.$markImplementor(/**@type {Function}*/ (StartCallback));
$Util.$setClassMetadataForInterface(StartCallback, "org.pepstock.charba.client.zoom.callbacks.StartCallback");

exports = StartCallback;

//# sourceMappingURL=StartCallback.js.map
