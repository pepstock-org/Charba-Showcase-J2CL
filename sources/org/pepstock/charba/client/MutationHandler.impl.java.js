goog.module('org.pepstock.charba.client.MutationHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let MutationItem = goog.forwardDeclare('org.pepstock.charba.client.MutationItem$impl');

/**
 * @interface
 */
class MutationHandler {
 /** @abstract @return {?string} */
 m_getId__() {}
 /** @abstract */
 m_onAttach__org_pepstock_charba_client_MutationItem(/** MutationItem */ item) {}
 /** @abstract */
 m_onDetach__org_pepstock_charba_client_MutationItem(/** MutationItem */ item) {}
 
 static $clinit() {
  MutationHandler.$clinit = () =>{};
  MutationHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_MutationHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_MutationHandler;
 }
 
 static $loadModules() {}
}
MutationHandler.$markImplementor(/**@type {Function}*/ (MutationHandler));
$Util.$setClassMetadataForInterface(MutationHandler, "org.pepstock.charba.client.MutationHandler");

exports = MutationHandler;

//# sourceMappingURL=MutationHandler.js.map
