goog.module('org.pepstock.charba.client.defaults.IsDefaultFiller$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.enums.DrawTime$impl');

/**
 * @interface
 */
class IsDefaultFiller {
 /** @abstract @return {boolean} */
 m_isPropagate__() {}
 /** @abstract @return {DrawTime} */
 m_getDrawTime__() {}
 
 static $clinit() {
  IsDefaultFiller.$clinit = () =>{};
  IsDefaultFiller.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultFiller = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultFiller;
 }
 
 static $loadModules() {}
}
IsDefaultFiller.$markImplementor(/**@type {Function}*/ (IsDefaultFiller));
$Util.$setClassMetadataForInterface(IsDefaultFiller, "org.pepstock.charba.client.defaults.IsDefaultFiller");

exports = IsDefaultFiller;

//# sourceMappingURL=IsDefaultFiller.js.map
