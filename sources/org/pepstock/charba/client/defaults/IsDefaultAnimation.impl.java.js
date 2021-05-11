goog.module('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBaseAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation$impl');

/**
 * @interface
 * @extends {IsDefaultBaseAnimation}
 */
class IsDefaultAnimation {
 /** @abstract @return {boolean} */
 m_isAnimateRotate__() {}
 /** @abstract @return {boolean} */
 m_isAnimateScale__() {}
 
 static $clinit() {
  IsDefaultAnimation.$clinit = () =>{};
  IsDefaultAnimation.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBaseAnimation.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimation;
 }
 
 static $loadModules() {}
}
IsDefaultAnimation.$markImplementor(/**@type {Function}*/ (IsDefaultAnimation));
$Util.$setClassMetadataForInterface(IsDefaultAnimation, "org.pepstock.charba.client.defaults.IsDefaultAnimation");

exports = IsDefaultAnimation;

//# sourceMappingURL=IsDefaultAnimation.js.map
