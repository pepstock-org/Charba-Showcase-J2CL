goog.module('com.google.gwt.core.client.UnsafeNativeLong$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('com.google.gwt.core.client.UnsafeNativeLong.$LambdaAdaptor$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UnsafeNativeLong {
 /** @return {UnsafeNativeLong} */
 static $adapt(/** ?function():Class<?> */ fn) {
  UnsafeNativeLong.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  UnsafeNativeLong.$clinit = () =>{};
  UnsafeNativeLong.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__com_google_gwt_core_client_UnsafeNativeLong = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__com_google_gwt_core_client_UnsafeNativeLong;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('com.google.gwt.core.client.UnsafeNativeLong.$LambdaAdaptor$impl');
 }
}
UnsafeNativeLong.$markImplementor(/**@type {Function}*/ (UnsafeNativeLong));
$Util.$setClassMetadataForInterface(UnsafeNativeLong, "com.google.gwt.core.client.UnsafeNativeLong");

exports = UnsafeNativeLong;

//# sourceMappingURL=UnsafeNativeLong.js.map
