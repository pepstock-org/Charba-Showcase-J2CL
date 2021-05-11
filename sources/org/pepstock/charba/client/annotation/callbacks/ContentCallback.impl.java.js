goog.module('org.pepstock.charba.client.annotation.callbacks.ContentCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ContentCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, AnnotationContext>}
 */
class ContentCallback {
 /** @return {ContentCallback} */
 static $adapt(/** ?function(AnnotationContext):* */ fn) {
  ContentCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ContentCallback.$clinit = () =>{};
  ContentCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_callbacks_ContentCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_callbacks_ContentCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ContentCallback.$LambdaAdaptor$impl');
 }
}
ContentCallback.$markImplementor(/**@type {Function}*/ (ContentCallback));
$Util.$setClassMetadataForInterface(ContentCallback, "org.pepstock.charba.client.annotation.callbacks.ContentCallback");

exports = ContentCallback;

//# sourceMappingURL=ContentCallback.js.map
