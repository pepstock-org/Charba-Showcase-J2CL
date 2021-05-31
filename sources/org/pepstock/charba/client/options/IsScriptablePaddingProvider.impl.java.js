goog.module('org.pepstock.charba.client.options.IsScriptablePaddingProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let PaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback$impl');

/**
 * @interface
 * @template T
 */
class IsScriptablePaddingProvider {
 /** @abstract @return {PaddingCallback<T>} */
 m_getPaddingCallback__() {}
 /** @abstract */
 m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/** PaddingCallback<T> */ paddingCallback) {}
 /** @abstract */
 m_setPadding__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ paddingCallback) {}
 
 static $clinit() {
  IsScriptablePaddingProvider.$clinit = () =>{};
  IsScriptablePaddingProvider.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsScriptablePaddingProvider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsScriptablePaddingProvider;
 }
 
 static $loadModules() {}
}
IsScriptablePaddingProvider.$markImplementor(/**@type {Function}*/ (IsScriptablePaddingProvider));
$Util.$setClassMetadataForInterface(IsScriptablePaddingProvider, "org.pepstock.charba.client.options.IsScriptablePaddingProvider");

exports = IsScriptablePaddingProvider;

//# sourceMappingURL=IsScriptablePaddingProvider.js.map
