goog.module('org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, AnnotationContext>}
 */
class ImageSizeCallback {
 /** @return {ImageSizeCallback} */
 static $adapt(/** ?function(AnnotationContext):* */ fn) {
  ImageSizeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ImageSizeCallback.$clinit = () =>{};
  ImageSizeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback.$LambdaAdaptor$impl');
 }
}
ImageSizeCallback.$markImplementor(/**@type {Function}*/ (ImageSizeCallback));
$Util.$setClassMetadataForInterface(ImageSizeCallback, "org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback");

exports = ImageSizeCallback;

//# sourceMappingURL=ImageSizeCallback.js.map
