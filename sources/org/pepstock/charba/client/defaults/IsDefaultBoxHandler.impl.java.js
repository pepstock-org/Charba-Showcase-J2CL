goog.module('org.pepstock.charba.client.defaults.IsDefaultBoxHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IsDefaultBoxHandler {
 /** @abstract @return {number} */
 m_getBoxWidth__() {}
 /** @abstract @return {number} */
 m_getBoxHeight__() {}
 
 static $clinit() {
  IsDefaultBoxHandler.$clinit = () =>{};
  IsDefaultBoxHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultBoxHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultBoxHandler;
 }
 
 static $loadModules() {}
}
IsDefaultBoxHandler.$markImplementor(/**@type {Function}*/ (IsDefaultBoxHandler));
$Util.$setClassMetadataForInterface(IsDefaultBoxHandler, "org.pepstock.charba.client.defaults.IsDefaultBoxHandler");

exports = IsDefaultBoxHandler;

//# sourceMappingURL=IsDefaultBoxHandler.js.map
