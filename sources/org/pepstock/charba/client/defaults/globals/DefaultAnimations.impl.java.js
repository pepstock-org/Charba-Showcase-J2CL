goog.module('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimations = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
let DefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');
let DefaultAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
let AnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultAnimations}
 */
class DefaultAnimations extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultAnimations} */
 static $create__() {
  DefaultAnimations.$clinit();
  let $instance = new DefaultAnimations();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimations__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimations__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  if (AnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   for (let $iterator = DefaultAnimations.f_DEFAULT_ANIMATION_COLLECTION_KEYS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let defaultCollection = /**@type {DefaultAnimationCollectionKey}*/ ($Casts.$to($iterator.m_next__(), DefaultAnimationCollectionKey));
    {
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(defaultCollection, collection)) {
      return true;
     }
    }
   }
  }
  return false;
 }
 /** @override @return {IsDefaultAnimationCollection} */
 m_get__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  AnimationCollectionKey.m_checkIfValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
  if (DefaultAnimationCollectionKey.m_is__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(collection, DefaultAnimationCollectionKey.f_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey)) {
    return DefaultAnimations.f_DEFAULT_COLLECTION_COLORS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_;
   } else {
    return DefaultAnimations.f_DEFAULT_COLLECTION_NUMBERS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_;
   }
  }
  return DefaultAnimationCollection.$create__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
 }
 
 static $clinit() {
  DefaultAnimations.$clinit = () =>{};
  DefaultAnimations.$loadModules();
  j_l_Object.$clinit();
  DefaultAnimations.f_DEFAULT_COLLECTION_NUMBERS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_ = DefaultAnimationCollection.$create__org_pepstock_charba_client_options_AnimationCollectionKey(DefaultAnimationCollectionKey.f_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey);
  DefaultAnimations.f_DEFAULT_COLLECTION_COLORS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_ = DefaultAnimationCollection.$create__org_pepstock_charba_client_options_AnimationCollectionKey(DefaultAnimationCollectionKey.f_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey);
  DefaultAnimations.f_DEFAULT_ANIMATION_COLLECTION_KEYS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_ = /**@type {List<DefaultAnimationCollectionKey>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<DefaultAnimationCollectionKey>}*/ ($Arrays.$init([DefaultAnimationCollectionKey.f_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, DefaultAnimationCollectionKey.f_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey], DefaultAnimationCollectionKey))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAnimations;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultAnimationCollection = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');
  DefaultAnimationCollectionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
  AnimationCollectionKey = goog.module.get('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {IsDefaultAnimationCollection}*/
DefaultAnimations.f_DEFAULT_COLLECTION_NUMBERS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_;
/**@type {IsDefaultAnimationCollection}*/
DefaultAnimations.f_DEFAULT_COLLECTION_COLORS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_;
/**@type {List<DefaultAnimationCollectionKey>}*/
DefaultAnimations.f_DEFAULT_ANIMATION_COLLECTION_KEYS__org_pepstock_charba_client_defaults_globals_DefaultAnimations_;
IsDefaultAnimations.$markImplementor(DefaultAnimations);
$Util.$setClassMetadata(DefaultAnimations, "org.pepstock.charba.client.defaults.globals.DefaultAnimations");

exports = DefaultAnimations;

//# sourceMappingURL=DefaultAnimations.js.map
