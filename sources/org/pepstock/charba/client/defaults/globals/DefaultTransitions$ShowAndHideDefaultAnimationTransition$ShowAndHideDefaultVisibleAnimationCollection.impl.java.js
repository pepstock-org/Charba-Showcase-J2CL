goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultVisibleAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');

let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');

class ShowAndHideDefaultVisibleAnimationCollection extends DefaultAnimationCollection {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_show__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection_ = false;
 }
 /** @return {!ShowAndHideDefaultVisibleAnimationCollection} */
 static $create__boolean(/** boolean */ show) {
  ShowAndHideDefaultVisibleAnimationCollection.$clinit();
  let $instance = new ShowAndHideDefaultVisibleAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection__boolean(show);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection__boolean(/** boolean */ show) {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__();
  this.f_show__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection_ = show;
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return this.f_show__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection_ ? super.m_getEasing__() : Easing.f_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing;
 }
 /** @override @return {number} */
 m_getDuration__() {
  return this.f_show__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection_ ? ShowAndHideDefaultVisibleAnimationCollection.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection_ : super.m_getDuration__();
 }
 
 static $clinit() {
  ShowAndHideDefaultVisibleAnimationCollection.$clinit = () =>{};
  ShowAndHideDefaultVisibleAnimationCollection.$loadModules();
  DefaultAnimationCollection.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ShowAndHideDefaultVisibleAnimationCollection;
 }
 
 static $loadModules() {
  Easing = goog.module.get('org.pepstock.charba.client.enums.Easing$impl');
 }
}
/**@const {number}*/
ShowAndHideDefaultVisibleAnimationCollection.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultVisibleAnimationCollection_ = 0;
$Util.$setClassMetadata(ShowAndHideDefaultVisibleAnimationCollection, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ShowAndHideDefaultAnimationTransition$ShowAndHideDefaultVisibleAnimationCollection");

exports = ShowAndHideDefaultVisibleAnimationCollection;

//# sourceMappingURL=DefaultTransitions$ShowAndHideDefaultAnimationTransition$ShowAndHideDefaultVisibleAnimationCollection.js.map
