goog.module('org.pepstock.charba.client.defaults.globals.AbstractDefaultAnimation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBaseAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation$impl');

let DelayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DelayCallback$impl');
let DurationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DurationCallback$impl');
let EasingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EasingCallback$impl');
let LoopCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LoopCallback$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');

/**
 * @abstract
 * @implements {IsDefaultBaseAnimation}
 */
class AbstractDefaultAnimation extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return Easing.f_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing;
 }
 /** @override @return {number} */
 m_getDuration__() {
  return AbstractDefaultAnimation.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation_;
 }
 /** @override @return {number} */
 m_getDelay__() {
  return AbstractDefaultAnimation.f_DEFAULT_DELAY__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation_;
 }
 /** @override @return {boolean} */
 m_isLoop__() {
  return AbstractDefaultAnimation.f_DEFAULT_LOOP__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation_;
 }
 /** @override @return {DurationCallback} */
 m_getDurationCallback__() {
  return null;
 }
 /** @override @return {DelayCallback} */
 m_getDelayCallback__() {
  return null;
 }
 /** @override @return {LoopCallback} */
 m_getLoopCallback__() {
  return null;
 }
 /** @override @return {EasingCallback} */
 m_getEasingCallback__() {
  return null;
 }
 
 static $clinit() {
  AbstractDefaultAnimation.$clinit = () =>{};
  AbstractDefaultAnimation.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultAnimation;
 }
 
 static $loadModules() {
  Easing = goog.module.get('org.pepstock.charba.client.enums.Easing$impl');
 }
}
/**@const {number}*/
AbstractDefaultAnimation.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation_ = 1000;
/**@const {number}*/
AbstractDefaultAnimation.f_DEFAULT_DELAY__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation_ = -2147483648;
/**@const {boolean}*/
AbstractDefaultAnimation.f_DEFAULT_LOOP__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation_ = false;
IsDefaultBaseAnimation.$markImplementor(AbstractDefaultAnimation);
$Util.$setClassMetadata(AbstractDefaultAnimation, "org.pepstock.charba.client.defaults.globals.AbstractDefaultAnimation");

exports = AbstractDefaultAnimation;

//# sourceMappingURL=AbstractDefaultAnimation.js.map
