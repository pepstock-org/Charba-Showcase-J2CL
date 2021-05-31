goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultAnimations$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimations = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
let ShowAndHideDefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultAnimationCollection$impl');
let ShowAndHideDefaultVisibleAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultVisibleAnimationCollection$impl');
let DefaultAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let AnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ShowAndHideDefaultAnimations extends DefaultAnimations {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimationCollection}*/
  this.f_visibleCollection__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations_;
 }
 /** @return {!ShowAndHideDefaultAnimations} */
 static $create__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ mode) {
  ShowAndHideDefaultAnimations.$clinit();
  let $instance = new ShowAndHideDefaultAnimations();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations__org_pepstock_charba_client_options_TransitionKey(mode);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ mode) {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimations__();
  this.f_visibleCollection__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations_ = ShowAndHideDefaultVisibleAnimationCollection.$create__boolean($Objects.m_equals__java_lang_Object__java_lang_Object(DefaultTransitionKey.f_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey, mode));
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  return AnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection) && (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(collection, DefaultAnimationCollectionKey.f_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey) || Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(collection, DefaultAnimationCollectionKey.f_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey));
 }
 /** @override @return {IsDefaultAnimationCollection} */
 m_get__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  if (this.m_has__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(DefaultAnimationCollectionKey.f_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, collection)) {
    return ShowAndHideDefaultAnimations.f_DEFAULT_COLORS_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations_;
   } else if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(DefaultAnimationCollectionKey.f_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, collection)) {
    return this.f_visibleCollection__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations_;
   }
  }
  return null;
 }
 
 static $clinit() {
  ShowAndHideDefaultAnimations.$clinit = () =>{};
  ShowAndHideDefaultAnimations.$loadModules();
  DefaultAnimations.$clinit();
  ShowAndHideDefaultAnimations.f_DEFAULT_COLORS_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations_ = ShowAndHideDefaultAnimationCollection.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ShowAndHideDefaultAnimations;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ShowAndHideDefaultAnimationCollection = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultAnimationCollection$impl');
  ShowAndHideDefaultVisibleAnimationCollection = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultVisibleAnimationCollection$impl');
  DefaultAnimationCollectionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  AnimationCollectionKey = goog.module.get('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {IsDefaultAnimationCollection}*/
ShowAndHideDefaultAnimations.f_DEFAULT_COLORS_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimations_;
$Util.$setClassMetadata(ShowAndHideDefaultAnimations, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ShowAndHideDefaultAnimationTransition$ShowAndHideDefaultAnimations");

exports = ShowAndHideDefaultAnimations;

//# sourceMappingURL=DefaultTransitions$ShowAndHideDefaultAnimationTransition$ShowAndHideDefaultAnimations.js.map
