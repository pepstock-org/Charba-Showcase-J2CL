goog.module('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DelayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DelayCallback$impl');
let DurationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DurationCallback$impl');
let EasingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EasingCallback$impl');
let LoopCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LoopCallback$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');

/**
 * @interface
 */
class IsDefaultBaseAnimation {
 /** @abstract @return {Easing} */
 m_getEasing__() {}
 /** @abstract @return {number} */
 m_getDuration__() {}
 /** @abstract @return {number} */
 m_getDelay__() {}
 /** @abstract @return {boolean} */
 m_isLoop__() {}
 /** @abstract @return {DurationCallback} */
 m_getDurationCallback__() {}
 /** @abstract @return {DelayCallback} */
 m_getDelayCallback__() {}
 /** @abstract @return {LoopCallback} */
 m_getLoopCallback__() {}
 /** @abstract @return {EasingCallback} */
 m_getEasingCallback__() {}
 
 static $clinit() {
  IsDefaultBaseAnimation.$clinit = () =>{};
  IsDefaultBaseAnimation.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation;
 }
 
 static $loadModules() {}
}
IsDefaultBaseAnimation.$markImplementor(/**@type {Function}*/ (IsDefaultBaseAnimation));
$Util.$setClassMetadataForInterface(IsDefaultBaseAnimation, "org.pepstock.charba.client.defaults.IsDefaultBaseAnimation");

exports = IsDefaultBaseAnimation;

//# sourceMappingURL=IsDefaultBaseAnimation.js.map
