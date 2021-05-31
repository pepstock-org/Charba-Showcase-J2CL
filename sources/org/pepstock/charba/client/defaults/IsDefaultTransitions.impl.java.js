goog.module('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');

/**
 * @interface
 */
class IsDefaultTransitions {
 /** @abstract @return {boolean} */
 m_has__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {}
 /** @abstract @return {IsDefaultAnimationTransition} */
 m_get__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {}
 
 static $clinit() {
  IsDefaultTransitions.$clinit = () =>{};
  IsDefaultTransitions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTransitions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTransitions;
 }
 
 static $loadModules() {}
}
IsDefaultTransitions.$markImplementor(/**@type {Function}*/ (IsDefaultTransitions));
$Util.$setClassMetadataForInterface(IsDefaultTransitions, "org.pepstock.charba.client.defaults.IsDefaultTransitions");

exports = IsDefaultTransitions;

//# sourceMappingURL=IsDefaultTransitions.js.map
