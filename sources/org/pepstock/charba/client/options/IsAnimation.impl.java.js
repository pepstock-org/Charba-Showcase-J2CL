goog.module('org.pepstock.charba.client.options.IsAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');

let DelayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DelayCallback$impl');
let DurationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DurationCallback$impl');
let EasingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EasingCallback$impl');
let LoopCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LoopCallback$impl');
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
 /** @abstract */
 m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(/** DurationCallback */ durationCallback) {}
 /** @abstract */
 m_setDuration__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ durationCallback) {}
 /** @abstract */
 m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(/** DelayCallback */ delayCallback) {}
 /** @abstract */
 m_setDelay__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ delayCallback) {}
 /** @abstract */
 m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(/** LoopCallback */ loopCallback) {}
 /** @abstract */
 m_setLoop__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ loopCallback) {}
 /** @abstract */
 m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(/** EasingCallback */ easingCallback) {}
 /** @abstract */
 m_setEasing__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ easingCallback) {}
 
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
