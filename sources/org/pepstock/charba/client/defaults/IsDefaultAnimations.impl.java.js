goog.module('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
let IsAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');

/**
 * @interface
 */
class IsDefaultAnimations {
 /** @abstract @return {boolean} */
 m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {}
 /** @abstract @return {IsDefaultAnimationCollection} */
 m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {}
 
 static $clinit() {
  IsDefaultAnimations.$clinit = () =>{};
  IsDefaultAnimations.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimations = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimations;
 }
 
 static $loadModules() {}
}
IsDefaultAnimations.$markImplementor(/**@type {Function}*/ (IsDefaultAnimations));
$Util.$setClassMetadataForInterface(IsDefaultAnimations, "org.pepstock.charba.client.defaults.IsDefaultAnimations");

exports = IsDefaultAnimations;

//# sourceMappingURL=IsDefaultAnimations.js.map
