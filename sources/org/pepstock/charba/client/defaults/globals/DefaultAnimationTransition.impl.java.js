goog.module('org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');

let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let DefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
let DefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');

/**
 * @implements {IsDefaultAnimationTransition}
 */
class DefaultAnimationTransition extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultAnimationTransition} */
 static $create__() {
  DefaultAnimationTransition.$clinit();
  let $instance = new DefaultAnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return DefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition_;
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return DefaultAnimationTransition.f_DEFAULT_ANIMATIONS__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition_;
 }
 
 static $clinit() {
  DefaultAnimationTransition.$clinit = () =>{};
  DefaultAnimationTransition.$loadModules();
  j_l_Object.$clinit();
  DefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition_ = DefaultAnimation.$create__();
  DefaultAnimationTransition.f_DEFAULT_ANIMATIONS__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition_ = DefaultAnimations.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAnimationTransition;
 }
 
 static $loadModules() {
  DefaultAnimation = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
  DefaultAnimations = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');
 }
}
/**@type {DefaultAnimation}*/
DefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition_;
/**@type {DefaultAnimations}*/
DefaultAnimationTransition.f_DEFAULT_ANIMATIONS__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition_;
IsDefaultAnimationTransition.$markImplementor(DefaultAnimationTransition);
$Util.$setClassMetadata(DefaultAnimationTransition, "org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition");

exports = DefaultAnimationTransition;

//# sourceMappingURL=DefaultAnimationTransition.js.map
