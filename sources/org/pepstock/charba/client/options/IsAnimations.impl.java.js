goog.module('org.pepstock.charba.client.options.IsAnimations$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimations = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');

let AnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollection$impl');
let AnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollectionKey$impl');

/**
 * @interface
 * @extends {IsDefaultAnimations}
 */
class IsAnimations {
 /** @abstract */
 m_setEnabled__org_pepstock_charba_client_options_AnimationCollectionKey__boolean(/** AnimationCollectionKey */ collection, /** boolean */ enabled) {}
 /** @abstract @return {boolean} */
 m_isEnabled__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {}
 /** @abstract @override @return {AnimationCollection} */
 m_get__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {}
 /** @abstract */
 m_set__org_pepstock_charba_client_options_AnimationCollectionKey__org_pepstock_charba_client_options_AnimationCollection(/** AnimationCollectionKey */ collection, /** AnimationCollection */ animationCollection) {}
 /** @abstract @return {AnimationCollection} */
 m_create__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {}
 /** @abstract */
 m_remove__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {}
 
 static $clinit() {
  IsAnimations.$clinit = () =>{};
  IsAnimations.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAnimations.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsAnimations = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsAnimations;
 }
 
 static $loadModules() {}
}
IsAnimations.$markImplementor(/**@type {Function}*/ (IsAnimations));
$Util.$setClassMetadataForInterface(IsAnimations, "org.pepstock.charba.client.options.IsAnimations");

exports = IsAnimations;

//# sourceMappingURL=IsAnimations.js.map
