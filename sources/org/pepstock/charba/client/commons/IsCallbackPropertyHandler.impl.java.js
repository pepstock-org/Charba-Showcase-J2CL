goog.module('org.pepstock.charba.client.commons.IsCallbackPropertyHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.commons.IsCallbackPropertyHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class IsCallbackPropertyHandler {
 /** @abstract @return {boolean} */
 m_removeChartScope__java_lang_String(/** ?string */ scope) {}
 /** @return {IsCallbackPropertyHandler} */
 static $adapt(/** ?function(?string):boolean */ fn) {
  IsCallbackPropertyHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsCallbackPropertyHandler.$clinit = () =>{};
  IsCallbackPropertyHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_commons_IsCallbackPropertyHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_IsCallbackPropertyHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.commons.IsCallbackPropertyHandler.$LambdaAdaptor$impl');
 }
}
IsCallbackPropertyHandler.$markImplementor(/**@type {Function}*/ (IsCallbackPropertyHandler));
$Util.$setClassMetadataForInterface(IsCallbackPropertyHandler, "org.pepstock.charba.client.commons.IsCallbackPropertyHandler");

exports = IsCallbackPropertyHandler;

//# sourceMappingURL=IsCallbackPropertyHandler.js.map
