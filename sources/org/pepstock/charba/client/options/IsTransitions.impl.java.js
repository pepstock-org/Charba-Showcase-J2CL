goog.module('org.pepstock.charba.client.options.IsTransitions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTransitions = goog.require('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');

let AnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');

/**
 * @interface
 * @extends {IsDefaultTransitions}
 */
class IsTransitions {
 /** @abstract @override @return {AnimationTransition} */
 m_get__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {}
 /** @abstract */
 m_set__org_pepstock_charba_client_options_TransitionKey__org_pepstock_charba_client_options_AnimationTransition(/** TransitionKey */ transition, /** AnimationTransition */ animationTransition) {}
 /** @abstract @return {AnimationTransition} */
 m_create__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {}
 /** @abstract */
 m_remove__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {}
 
 static $clinit() {
  IsTransitions.$clinit = () =>{};
  IsTransitions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultTransitions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsTransitions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsTransitions;
 }
 
 static $loadModules() {}
}
IsTransitions.$markImplementor(/**@type {Function}*/ (IsTransitions));
$Util.$setClassMetadataForInterface(IsTransitions, "org.pepstock.charba.client.options.IsTransitions");

exports = IsTransitions;

//# sourceMappingURL=IsTransitions.js.map
