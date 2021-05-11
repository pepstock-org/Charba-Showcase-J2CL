goog.module('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback.$LambdaAdaptor$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');

/**
 * @interface
 * @extends {Scriptable<DrawTime, AnnotationContext>}
 */
class DrawTimeCallback {
 /** @return {DrawTimeCallback} */
 static $adapt(/** ?function(AnnotationContext):DrawTime */ fn) {
  DrawTimeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DrawTimeCallback.$clinit = () =>{};
  DrawTimeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_DrawTimeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_DrawTimeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback.$LambdaAdaptor$impl');
 }
}
DrawTimeCallback.$markImplementor(/**@type {Function}*/ (DrawTimeCallback));
$Util.$setClassMetadataForInterface(DrawTimeCallback, "org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback");

exports = DrawTimeCallback;

//# sourceMappingURL=DrawTimeCallback.js.map
