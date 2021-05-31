goog.module('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');

/**
 * @interface
 * @template T
 */
class IsScriptableFontProvider {
 /** @abstract @return {FontCallback<T>} */
 m_getFontCallback__() {}
 /** @abstract */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<T> */ fontCallback) {}
 /** @abstract */
 m_setFont__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fontCallback) {}
 
 static $clinit() {
  IsScriptableFontProvider.$clinit = () =>{};
  IsScriptableFontProvider.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsScriptableFontProvider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsScriptableFontProvider;
 }
 
 static $loadModules() {}
}
IsScriptableFontProvider.$markImplementor(/**@type {Function}*/ (IsScriptableFontProvider));
$Util.$setClassMetadataForInterface(IsScriptableFontProvider, "org.pepstock.charba.client.options.IsScriptableFontProvider");

exports = IsScriptableFontProvider;

//# sourceMappingURL=IsScriptableFontProvider.js.map
