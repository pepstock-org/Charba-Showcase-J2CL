goog.module('org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?number, AnnotationContext>}
 */
class AdjustSizeCallback {
 /** @return {AdjustSizeCallback} */
 static $adapt(/** ?function(AnnotationContext):?number */ fn) {
  AdjustSizeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AdjustSizeCallback.$clinit = () =>{};
  AdjustSizeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback.$LambdaAdaptor$impl');
 }
}
AdjustSizeCallback.$markImplementor(/**@type {Function}*/ (AdjustSizeCallback));
$Util.$setClassMetadataForInterface(AdjustSizeCallback, "org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback");

exports = AdjustSizeCallback;

//# sourceMappingURL=AdjustSizeCallback.js.map
