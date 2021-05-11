goog.module('org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback.$LambdaAdaptor$impl');
let LabelPosition = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');

/**
 * @interface
 * @extends {Scriptable<LabelPosition, AnnotationContext>}
 */
class LabelPositionCallback {
 /** @return {LabelPositionCallback} */
 static $adapt(/** ?function(AnnotationContext):LabelPosition */ fn) {
  LabelPositionCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LabelPositionCallback.$clinit = () =>{};
  LabelPositionCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_LabelPositionCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_LabelPositionCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback.$LambdaAdaptor$impl');
 }
}
LabelPositionCallback.$markImplementor(/**@type {Function}*/ (LabelPositionCallback));
$Util.$setClassMetadataForInterface(LabelPositionCallback, "org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback");

exports = LabelPositionCallback;

//# sourceMappingURL=LabelPositionCallback.js.map
