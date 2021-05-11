goog.module('org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<Integer, AnnotationContext>}
 */
class PaddingSizeCallback {
 /** @return {PaddingSizeCallback} */
 static $adapt(/** ?function(AnnotationContext):Integer */ fn) {
  PaddingSizeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PaddingSizeCallback.$clinit = () =>{};
  PaddingSizeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback.$LambdaAdaptor$impl');
 }
}
PaddingSizeCallback.$markImplementor(/**@type {Function}*/ (PaddingSizeCallback));
$Util.$setClassMetadataForInterface(PaddingSizeCallback, "org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback");

exports = PaddingSizeCallback;

//# sourceMappingURL=PaddingSizeCallback.js.map
