goog.module('org.pepstock.charba.client.options.IsTypedAnimationKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');

/**
 * @interface
 * @extends {Key}
 */
class IsTypedAnimationKey {
 /** @abstract @return {AnimationType} */
 m_type__() {}
 
 static $clinit() {
  IsTypedAnimationKey.$clinit = () =>{};
  IsTypedAnimationKey.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsTypedAnimationKey = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsTypedAnimationKey;
 }
 
 static $loadModules() {}
}
IsTypedAnimationKey.$markImplementor(/**@type {Function}*/ (IsTypedAnimationKey));
$Util.$setClassMetadataForInterface(IsTypedAnimationKey, "org.pepstock.charba.client.options.IsTypedAnimationKey");

exports = IsTypedAnimationKey;

//# sourceMappingURL=IsTypedAnimationKey.js.map
