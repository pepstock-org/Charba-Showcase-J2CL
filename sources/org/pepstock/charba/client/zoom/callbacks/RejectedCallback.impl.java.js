goog.module('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class RejectedCallback {
 /** @abstract */
 m_onRejected__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {}
 /** @return {RejectedCallback} */
 static $adapt(/** ?function(ZoomContext):void */ fn) {
  RejectedCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  RejectedCallback.$clinit = () =>{};
  RejectedCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_callbacks_RejectedCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_callbacks_RejectedCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.zoom.callbacks.RejectedCallback.$LambdaAdaptor$impl');
 }
}
RejectedCallback.$markImplementor(/**@type {Function}*/ (RejectedCallback));
$Util.$setClassMetadataForInterface(RejectedCallback, "org.pepstock.charba.client.zoom.callbacks.RejectedCallback");

exports = RejectedCallback;

//# sourceMappingURL=RejectedCallback.js.map
