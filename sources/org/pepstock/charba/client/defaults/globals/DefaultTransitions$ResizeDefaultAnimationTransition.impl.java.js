goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition$impl');

let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let ResizeDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition.ResizeDefaultAnimation$impl');

class ResizeDefaultAnimationTransition extends DefaultAnimationTransition {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ResizeDefaultAnimationTransition} */
 static $create__() {
  ResizeDefaultAnimationTransition.$clinit();
  let $instance = new ResizeDefaultAnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition__();
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return ResizeDefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition_;
 }
 
 static $clinit() {
  ResizeDefaultAnimationTransition.$clinit = () =>{};
  ResizeDefaultAnimationTransition.$loadModules();
  DefaultAnimationTransition.$clinit();
  ResizeDefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition_ = ResizeDefaultAnimation.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResizeDefaultAnimationTransition;
 }
 
 static $loadModules() {
  ResizeDefaultAnimation = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition.ResizeDefaultAnimation$impl');
 }
}
/**@const {number}*/
ResizeDefaultAnimationTransition.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition_ = 0;
/**@type {ResizeDefaultAnimation}*/
ResizeDefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ResizeDefaultAnimationTransition_;
$Util.$setClassMetadata(ResizeDefaultAnimationTransition, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ResizeDefaultAnimationTransition");

exports = ResizeDefaultAnimationTransition;

//# sourceMappingURL=DefaultTransitions$ResizeDefaultAnimationTransition.js.map
