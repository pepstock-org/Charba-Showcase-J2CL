goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition$impl');

let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let ShowAndHideDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultAnimations$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');

class ShowAndHideDefaultAnimationTransition extends DefaultAnimationTransition {
 /** @protected */
 constructor() {
  super();
  /**@type {ShowAndHideDefaultAnimations}*/
  this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_;
 }
 /** @return {!ShowAndHideDefaultAnimationTransition} */
 static $create__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ mode) {
  ShowAndHideDefaultAnimationTransition.$clinit();
  let $instance = new ShowAndHideDefaultAnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition__org_pepstock_charba_client_options_IsTransitionKey(mode);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ mode) {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationTransition__();
  this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ = ShowAndHideDefaultAnimations.$create__org_pepstock_charba_client_options_IsTransitionKey(mode);
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_;
 }
 
 static $clinit() {
  ShowAndHideDefaultAnimationTransition.$clinit = () =>{};
  ShowAndHideDefaultAnimationTransition.$loadModules();
  DefaultAnimationTransition.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ShowAndHideDefaultAnimationTransition;
 }
 
 static $loadModules() {
  ShowAndHideDefaultAnimations = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultAnimations$impl');
 }
}
$Util.$setClassMetadata(ShowAndHideDefaultAnimationTransition, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ShowAndHideDefaultAnimationTransition");

exports = ShowAndHideDefaultAnimationTransition;

//# sourceMappingURL=DefaultTransitions$ShowAndHideDefaultAnimationTransition.js.map
