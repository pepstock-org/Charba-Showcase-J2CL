goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTransitions = goog.require('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');
let DefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition$impl');
let ActiveDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition$impl');
let ResizeDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition$impl');
let ShowAndHideDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultTransitions}
 */
class DefaultTransitions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultTransitions} */
 static $create__() {
  DefaultTransitions.$clinit();
  let $instance = new DefaultTransitions();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  if (TransitionKey.m_isValid__org_pepstock_charba_client_options_TransitionKey(transition)) {
   for (let $iterator = DefaultTransitions.f_DEFAULT_ANIMATION_MODE_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTransitions_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let defaultMode = /**@type {DefaultTransitionKey}*/ ($Casts.$to($iterator.m_next__(), DefaultTransitionKey));
    {
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(defaultMode, transition)) {
      return true;
     }
    }
   }
  }
  return false;
 }
 /** @override @return {IsDefaultAnimationTransition} */
 m_get__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  if (TransitionKey.m_isValid__org_pepstock_charba_client_options_TransitionKey(transition) && DefaultTransitionKey.m_is__org_pepstock_charba_client_options_TransitionKey(transition)) {
   if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(transition, DefaultTransitionKey.f_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey)) {
    return DefaultTransitions.f_ACTIVE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
   } else if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(transition, DefaultTransitionKey.f_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey)) {
    return DefaultTransitions.f_RESIZE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
   } else if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(transition, DefaultTransitionKey.f_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey)) {
    return DefaultTransitions.f_SHOW_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
   } else if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(transition, DefaultTransitionKey.f_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey)) {
    return DefaultTransitions.f_HIDE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
   }
  }
  return DefaultTransitions.$static_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions;
 }
 /** @return {IsDefaultAnimationTransition} */
 static get f_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions() {
  return (DefaultTransitions.$clinit(), DefaultTransitions.$static_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions);
 }
 
 static $clinit() {
  DefaultTransitions.$clinit = () =>{};
  DefaultTransitions.$loadModules();
  j_l_Object.$clinit();
  DefaultTransitions.$static_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions = DefaultAnimationTransition.$create__();
  DefaultTransitions.f_ACTIVE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ = ActiveDefaultAnimationTransition.$create__();
  DefaultTransitions.f_RESIZE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ = ResizeDefaultAnimationTransition.$create__();
  DefaultTransitions.f_SHOW_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ = ShowAndHideDefaultAnimationTransition.$create__org_pepstock_charba_client_options_TransitionKey(DefaultTransitionKey.f_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey);
  DefaultTransitions.f_HIDE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ = ShowAndHideDefaultAnimationTransition.$create__org_pepstock_charba_client_options_TransitionKey(DefaultTransitionKey.f_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey);
  DefaultTransitions.f_DEFAULT_ANIMATION_MODE_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ = /**@type {List<DefaultTransitionKey>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<DefaultTransitionKey>}*/ ($Arrays.$init([DefaultTransitionKey.f_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.f_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.f_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.f_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey], DefaultTransitionKey))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTransitions;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultAnimationTransition = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimationTransition$impl');
  ActiveDefaultAnimationTransition = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ActiveDefaultAnimationTransition$impl');
  ResizeDefaultAnimationTransition = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ResizeDefaultAnimationTransition$impl');
  ShowAndHideDefaultAnimationTransition = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  TransitionKey = goog.module.get('org.pepstock.charba.client.options.TransitionKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {IsDefaultAnimationTransition}*/
DefaultTransitions.$static_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions;
/**@type {IsDefaultAnimationTransition}*/
DefaultTransitions.f_ACTIVE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
/**@type {IsDefaultAnimationTransition}*/
DefaultTransitions.f_RESIZE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
/**@type {IsDefaultAnimationTransition}*/
DefaultTransitions.f_SHOW_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
/**@type {IsDefaultAnimationTransition}*/
DefaultTransitions.f_HIDE_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
/**@type {List<DefaultTransitionKey>}*/
DefaultTransitions.f_DEFAULT_ANIMATION_MODE_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTransitions_;
IsDefaultTransitions.$markImplementor(DefaultTransitions);
$Util.$setClassMetadata(DefaultTransitions, "org.pepstock.charba.client.defaults.globals.DefaultTransitions");

exports = DefaultTransitions;

//# sourceMappingURL=DefaultTransitions.js.map
