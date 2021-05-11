goog.module('org.pepstock.charba.client.controllers.ControllerProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerProvider.$LambdaAdaptor$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');

/**
 * @interface
 */
class ControllerProvider {
 /** @abstract @return {Controller} */
 m_provide__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ controllerType) {}
 /** @return {ControllerProvider} */
 static $adapt(/** ?function(ControllerType):Controller */ fn) {
  ControllerProvider.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ControllerProvider.$clinit = () =>{};
  ControllerProvider.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_controllers_ControllerProvider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_controllers_ControllerProvider;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.controllers.ControllerProvider.$LambdaAdaptor$impl');
 }
}
ControllerProvider.$markImplementor(/**@type {Function}*/ (ControllerProvider));
$Util.$setClassMetadataForInterface(ControllerProvider, "org.pepstock.charba.client.controllers.ControllerProvider");

exports = ControllerProvider;

//# sourceMappingURL=ControllerProvider.js.map
