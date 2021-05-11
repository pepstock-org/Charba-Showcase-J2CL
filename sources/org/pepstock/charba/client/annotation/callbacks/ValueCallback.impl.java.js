goog.module('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, AnnotationContext>}
 */
class ValueCallback {
 /** @return {ValueCallback} */
 static $adapt(/** ?function(AnnotationContext):* */ fn) {
  ValueCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ValueCallback.$clinit = () =>{};
  ValueCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_ValueCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_ValueCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ValueCallback.$LambdaAdaptor$impl');
 }
}
ValueCallback.$markImplementor(/**@type {Function}*/ (ValueCallback));
$Util.$setClassMetadataForInterface(ValueCallback, "org.pepstock.charba.client.annotation.callbacks.ValueCallback");

exports = ValueCallback;

//# sourceMappingURL=ValueCallback.js.map
