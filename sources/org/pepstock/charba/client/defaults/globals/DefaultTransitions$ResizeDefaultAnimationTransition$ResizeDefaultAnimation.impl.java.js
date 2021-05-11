goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition.ResizeDefaultAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimation = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');

let ResizeDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition$impl');

class ResizeDefaultAnimation extends DefaultAnimation {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ResizeDefaultAnimation} */
 static $create__() {
  ResizeDefaultAnimation.$clinit();
  let $instance = new ResizeDefaultAnimation();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition_ResizeDefaultAnimation__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition_ResizeDefaultAnimation__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimation__();
 }
 /** @override @return {number} */
 m_getDuration__() {
  return ResizeDefaultAnimationTransition.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition_;
 }
 
 static $clinit() {
  ResizeDefaultAnimation.$clinit = () =>{};
  ResizeDefaultAnimation.$loadModules();
  DefaultAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResizeDefaultAnimation;
 }
 
 static $loadModules() {
  ResizeDefaultAnimationTransition = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition$impl');
 }
}
$Util.$setClassMetadata(ResizeDefaultAnimation, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ResizeDefaultAnimationTransition$ResizeDefaultAnimation");

exports = ResizeDefaultAnimation;

//# sourceMappingURL=DefaultTransitions$ResizeDefaultAnimationTransition$ResizeDefaultAnimation.js.map
