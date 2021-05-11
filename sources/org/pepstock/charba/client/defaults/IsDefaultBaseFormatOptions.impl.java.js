goog.module('org.pepstock.charba.client.defaults.IsDefaultBaseFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let LocaleMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');

/**
 * @interface
 */
class IsDefaultBaseFormatOptions {
 /** @abstract @return {LocaleMatcher} */
 m_getLocaleMatcher__() {}
 /** @abstract @return {NumberingSystem} */
 m_getNumberingSystem__() {}
 
 static $clinit() {
  IsDefaultBaseFormatOptions.$clinit = () =>{};
  IsDefaultBaseFormatOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions;
 }
 
 static $loadModules() {}
}
IsDefaultBaseFormatOptions.$markImplementor(/**@type {Function}*/ (IsDefaultBaseFormatOptions));
$Util.$setClassMetadataForInterface(IsDefaultBaseFormatOptions, "org.pepstock.charba.client.defaults.IsDefaultBaseFormatOptions");

exports = IsDefaultBaseFormatOptions;

//# sourceMappingURL=IsDefaultBaseFormatOptions.js.map
