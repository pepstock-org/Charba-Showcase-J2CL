goog.module('org.pepstock.charba.client.controllers.ControllerRegistrationHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');

/**
 * @interface
 */
class ControllerRegistrationHandler {
 /** @abstract */
 m_onBeforeRegister__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ controllerType) {}
 /** @abstract */
 m_onAfterRegister__org_pepstock_charba_client_controllers_ControllerType__boolean(/** ControllerType */ controllerType, /** boolean */ registered) {}
 
 static m_onBeforeRegister__$default__org_pepstock_charba_client_controllers_ControllerRegistrationHandler__org_pepstock_charba_client_controllers_ControllerType(/** !ControllerRegistrationHandler */ $thisArg, /** ControllerType */ controllerType) {
  ControllerRegistrationHandler.$clinit();
 }
 
 static m_onAfterRegister__$default__org_pepstock_charba_client_controllers_ControllerRegistrationHandler__org_pepstock_charba_client_controllers_ControllerType__boolean(/** !ControllerRegistrationHandler */ $thisArg, /** ControllerType */ controllerType, /** boolean */ registered) {
  ControllerRegistrationHandler.$clinit();
 }
 
 static $clinit() {
  ControllerRegistrationHandler.$clinit = () =>{};
  ControllerRegistrationHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_controllers_ControllerRegistrationHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_controllers_ControllerRegistrationHandler;
 }
 
 static $loadModules() {}
}
ControllerRegistrationHandler.$markImplementor(/**@type {Function}*/ (ControllerRegistrationHandler));
$Util.$setClassMetadataForInterface(ControllerRegistrationHandler, "org.pepstock.charba.client.controllers.ControllerRegistrationHandler");

exports = ControllerRegistrationHandler;

//# sourceMappingURL=ControllerRegistrationHandler.js.map
