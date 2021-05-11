goog.module('org.pepstock.charba.client.defaults.IsDefaultAnimationContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');

let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');

/**
 * @interface
 * @extends {IsDefaultAnimationTransition}
 */
class IsDefaultAnimationContainer {
 /** @abstract @return {IsDefaultTransitions} */
 m_getTransitions__() {}
 
 static $clinit() {
  IsDefaultAnimationContainer.$clinit = () =>{};
  IsDefaultAnimationContainer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAnimationTransition.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer;
 }
 
 static $loadModules() {}
}
IsDefaultAnimationContainer.$markImplementor(/**@type {Function}*/ (IsDefaultAnimationContainer));
$Util.$setClassMetadataForInterface(IsDefaultAnimationContainer, "org.pepstock.charba.client.defaults.IsDefaultAnimationContainer");

exports = IsDefaultAnimationContainer;

//# sourceMappingURL=IsDefaultAnimationContainer.js.map
