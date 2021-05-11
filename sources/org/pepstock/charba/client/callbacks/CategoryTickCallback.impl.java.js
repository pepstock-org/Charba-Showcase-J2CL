goog.module('org.pepstock.charba.client.callbacks.CategoryTickCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CategoryTickCallback.$LambdaAdaptor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @interface
 */
class CategoryTickCallback {
 /** @abstract @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_lang_String__int__java_util_List(/** Axis */ axis, /** ?string */ value, /** number */ index, /** List<?string> */ values) {}
 /** @return {CategoryTickCallback} */
 static $adapt(/** ?function(Axis, ?string, number, List<?string>):?string */ fn) {
  CategoryTickCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CategoryTickCallback.$clinit = () =>{};
  CategoryTickCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_CategoryTickCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_CategoryTickCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.CategoryTickCallback.$LambdaAdaptor$impl');
 }
}
CategoryTickCallback.$markImplementor(/**@type {Function}*/ (CategoryTickCallback));
$Util.$setClassMetadataForInterface(CategoryTickCallback, "org.pepstock.charba.client.callbacks.CategoryTickCallback");

exports = CategoryTickCallback;

//# sourceMappingURL=CategoryTickCallback.js.map
