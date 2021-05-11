goog.module('com.google.gwt.core.client.UnsafeNativeLong.$LambdaAdaptor$impl');

const UnsafeNativeLong = goog.require('com.google.gwt.core.client.UnsafeNativeLong$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {UnsafeNativeLong}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_fn__com_google_gwt_core_client_UnsafeNativeLong_$LambdaAdaptor;
  this.$ctor__com_google_gwt_core_client_UnsafeNativeLong_$LambdaAdaptor__com_google_gwt_core_client_UnsafeNativeLong_$JsFunction(fn);
 }
 
 $ctor__com_google_gwt_core_client_UnsafeNativeLong_$LambdaAdaptor__com_google_gwt_core_client_UnsafeNativeLong_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__com_google_gwt_core_client_UnsafeNativeLong_$LambdaAdaptor = fn;
 }
 /** @override @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_fn__com_google_gwt_core_client_UnsafeNativeLong_$LambdaAdaptor, $function());
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
UnsafeNativeLong.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "com.google.gwt.core.client.UnsafeNativeLong$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=UnsafeNativeLong$$LambdaAdaptor.js.map
