goog.module('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');

/**
 * @interface
 */
class IsDefaultInteraction {
 /** @abstract @return {InteractionMode} */
 m_getMode__() {}
 /** @abstract @return {boolean} */
 m_isIntersect__() {}
 /** @abstract @return {InteractionAxis} */
 m_getAxis__() {}
 
 static $clinit() {
  IsDefaultInteraction.$clinit = () =>{};
  IsDefaultInteraction.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultInteraction = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultInteraction;
 }
 
 static $loadModules() {}
}
IsDefaultInteraction.$markImplementor(/**@type {Function}*/ (IsDefaultInteraction));
$Util.$setClassMetadataForInterface(IsDefaultInteraction, "org.pepstock.charba.client.defaults.IsDefaultInteraction");

exports = IsDefaultInteraction;

//# sourceMappingURL=IsDefaultInteraction.js.map
