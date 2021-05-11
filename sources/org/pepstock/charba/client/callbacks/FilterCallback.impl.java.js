goog.module('org.pepstock.charba.client.callbacks.FilterCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FilterCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class FilterCallback {
 /** @abstract @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(/** IsChart */ chart, /** T */ item) {}
 /** @template T @return {FilterCallback<T>} */
 static $adapt(/** ?function(IsChart, T):boolean */ fn) {
  FilterCallback.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  FilterCallback.$clinit = () =>{};
  FilterCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_FilterCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_FilterCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.FilterCallback.$LambdaAdaptor$impl');
 }
}
FilterCallback.$markImplementor(/**@type {Function}*/ (FilterCallback));
$Util.$setClassMetadataForInterface(FilterCallback, "org.pepstock.charba.client.callbacks.FilterCallback");

exports = FilterCallback;

//# sourceMappingURL=FilterCallback.js.map
