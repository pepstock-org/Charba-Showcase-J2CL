goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition.ActiveDefaultAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimation = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');

let ActiveDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition$impl');

class ActiveDefaultAnimation extends DefaultAnimation {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ActiveDefaultAnimation} */
 static $create__() {
  ActiveDefaultAnimation.$clinit();
  let $instance = new ActiveDefaultAnimation();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition_ActiveDefaultAnimation__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition_ActiveDefaultAnimation__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimation__();
 }
 /** @override @return {number} */
 m_getDuration__() {
  return ActiveDefaultAnimationTransition.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition_;
 }
 
 static $clinit() {
  ActiveDefaultAnimation.$clinit = () =>{};
  ActiveDefaultAnimation.$loadModules();
  DefaultAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActiveDefaultAnimation;
 }
 
 static $loadModules() {
  ActiveDefaultAnimationTransition = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition$impl');
 }
}
$Util.$setClassMetadata(ActiveDefaultAnimation, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ActiveDefaultAnimationTransition$ActiveDefaultAnimation");

exports = ActiveDefaultAnimation;

//# sourceMappingURL=DefaultTransitions$ActiveDefaultAnimationTransition$ActiveDefaultAnimation.js.map
