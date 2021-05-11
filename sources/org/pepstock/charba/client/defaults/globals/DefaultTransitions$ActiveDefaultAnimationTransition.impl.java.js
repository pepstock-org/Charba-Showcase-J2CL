goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition$impl');

let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let ActiveDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition.ActiveDefaultAnimation$impl');

class ActiveDefaultAnimationTransition extends DefaultAnimationTransition {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ActiveDefaultAnimationTransition} */
 static $create__() {
  ActiveDefaultAnimationTransition.$clinit();
  let $instance = new ActiveDefaultAnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition__();
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return ActiveDefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition_;
 }
 
 static $clinit() {
  ActiveDefaultAnimationTransition.$clinit = () =>{};
  ActiveDefaultAnimationTransition.$loadModules();
  DefaultAnimationTransition.$clinit();
  ActiveDefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition_ = ActiveDefaultAnimation.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActiveDefaultAnimationTransition;
 }
 
 static $loadModules() {
  ActiveDefaultAnimation = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition.ActiveDefaultAnimation$impl');
 }
}
/**@const {number}*/
ActiveDefaultAnimationTransition.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition_ = 400;
/**@type {ActiveDefaultAnimation}*/
ActiveDefaultAnimationTransition.f_DEFAULT_ANIMATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ActiveDefaultAnimationTransition_;
$Util.$setClassMetadata(ActiveDefaultAnimationTransition, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ActiveDefaultAnimationTransition");

exports = ActiveDefaultAnimationTransition;

//# sourceMappingURL=DefaultTransitions$ActiveDefaultAnimationTransition.js.map
