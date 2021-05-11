goog.module('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ModeCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<InteractionAxis, ZoomContext>}
 */
class ModeCallback {
 /** @return {ModeCallback} */
 static $adapt(/** ?function(ZoomContext):InteractionAxis */ fn) {
  ModeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ModeCallback.$clinit = () =>{};
  ModeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_callbacks_ModeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_callbacks_ModeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.zoom.callbacks.ModeCallback.$LambdaAdaptor$impl');
 }
}
ModeCallback.$markImplementor(/**@type {Function}*/ (ModeCallback));
$Util.$setClassMetadataForInterface(ModeCallback, "org.pepstock.charba.client.zoom.callbacks.ModeCallback");

exports = ModeCallback;

//# sourceMappingURL=ModeCallback.js.map
