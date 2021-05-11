goog.module('org.pepstock.charba.client.defaults.IsDefaultPluginElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

/**
 * @interface
 */
class IsDefaultPluginElement {
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {Position} */
 m_getPosition__() {}
 /** @abstract @return {ElementAlign} */
 m_getAlign__() {}
 
 static $clinit() {
  IsDefaultPluginElement.$clinit = () =>{};
  IsDefaultPluginElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultPluginElement = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultPluginElement;
 }
 
 static $loadModules() {}
}
IsDefaultPluginElement.$markImplementor(/**@type {Function}*/ (IsDefaultPluginElement));
$Util.$setClassMetadataForInterface(IsDefaultPluginElement, "org.pepstock.charba.client.defaults.IsDefaultPluginElement");

exports = IsDefaultPluginElement;

//# sourceMappingURL=IsDefaultPluginElement.js.map
