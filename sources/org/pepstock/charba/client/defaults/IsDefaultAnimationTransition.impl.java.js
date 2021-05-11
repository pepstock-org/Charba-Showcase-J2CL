goog.module('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');

/**
 * @interface
 */
class IsDefaultAnimationTransition {
 /** @abstract @return {IsDefaultAnimation} */
 m_getAnimation__() {}
 /** @abstract @return {IsDefaultAnimations} */
 m_getAnimations__() {}
 
 static $clinit() {
  IsDefaultAnimationTransition.$clinit = () =>{};
  IsDefaultAnimationTransition.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition;
 }
 
 static $loadModules() {}
}
IsDefaultAnimationTransition.$markImplementor(/**@type {Function}*/ (IsDefaultAnimationTransition));
$Util.$setClassMetadataForInterface(IsDefaultAnimationTransition, "org.pepstock.charba.client.defaults.IsDefaultAnimationTransition");

exports = IsDefaultAnimationTransition;

//# sourceMappingURL=IsDefaultAnimationTransition.js.map
