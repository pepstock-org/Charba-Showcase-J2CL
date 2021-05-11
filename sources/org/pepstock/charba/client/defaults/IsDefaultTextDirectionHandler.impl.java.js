goog.module('org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');

/**
 * @interface
 */
class IsDefaultTextDirectionHandler {
 /** @abstract @return {boolean} */
 m_isRtl__() {}
 /** @abstract @return {TextDirection} */
 m_getTextDirection__() {}
 
 static $clinit() {
  IsDefaultTextDirectionHandler.$clinit = () =>{};
  IsDefaultTextDirectionHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTextDirectionHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTextDirectionHandler;
 }
 
 static $loadModules() {}
}
IsDefaultTextDirectionHandler.$markImplementor(/**@type {Function}*/ (IsDefaultTextDirectionHandler));
$Util.$setClassMetadataForInterface(IsDefaultTextDirectionHandler, "org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler");

exports = IsDefaultTextDirectionHandler;

//# sourceMappingURL=IsDefaultTextDirectionHandler.js.map
