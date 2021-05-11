goog.module('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?boolean, AnnotationContext>}
 */
class AdjustScaleRangeCallback {
 /** @return {AdjustScaleRangeCallback} */
 static $adapt(/** ?function(AnnotationContext):?boolean */ fn) {
  AdjustScaleRangeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AdjustScaleRangeCallback.$clinit = () =>{};
  AdjustScaleRangeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_AdjustScaleRangeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_AdjustScaleRangeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback.$LambdaAdaptor$impl');
 }
}
AdjustScaleRangeCallback.$markImplementor(/**@type {Function}*/ (AdjustScaleRangeCallback));
$Util.$setClassMetadataForInterface(AdjustScaleRangeCallback, "org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback");

exports = AdjustScaleRangeCallback;

//# sourceMappingURL=AdjustScaleRangeCallback.js.map
