goog.module('org.pepstock.charba.client.options.IsAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');

let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');

/**
 * @interface
 * @extends {IsDefaultAnimation}
 */
class IsAnimation {
 /** @abstract */
 m_setAnimateRotate__boolean(/** boolean */ animateRotate) {}
 /** @abstract */
 m_setAnimateScale__boolean(/** boolean */ animateScale) {}
 /** @abstract */
 m_setEasing__org_pepstock_charba_client_enums_Easing(/** Easing */ easing) {}
 /** @abstract */
 m_setDuration__int(/** number */ milliseconds) {}
 /** @abstract */
 m_setDelay__int(/** number */ delay) {}
 /** @abstract */
 m_setLoop__boolean(/** boolean */ loop) {}
 
 static $clinit() {
  IsAnimation.$clinit = () =>{};
  IsAnimation.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAnimation.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsAnimation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsAnimation;
 }
 
 static $loadModules() {}
}
IsAnimation.$markImplementor(/**@type {Function}*/ (IsAnimation));
$Util.$setClassMetadataForInterface(IsAnimation, "org.pepstock.charba.client.options.IsAnimation");

exports = IsAnimation;

//# sourceMappingURL=IsAnimation.js.map
