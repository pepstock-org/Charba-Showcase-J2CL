goog.module('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalAnimations$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimations = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
let DefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');
let InternalNumbersAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalNumbersAnimationCollection$impl');
let InternalOpacityAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalOpacityAnimationCollection$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let DefaultAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
let IsAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');
let IsAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class InternalAnimations extends DefaultAnimations {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalAnimations} */
 static $create__() {
  InternalAnimations.$clinit();
  let $instance = new InternalAnimations();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimations__();
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  if (IsAnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection)) {
   for (let $iterator = InternalAnimations.f_DEFAULT_ANIMATION_COLLECTION_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let defaultCollection = /**@type {IsAnimationCollectionKey}*/ ($Casts.$to($iterator.m_next__(), IsAnimationCollectionKey));
    {
     if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(defaultCollection, collection)) {
      return true;
     }
    }
   }
  }
  return false;
 }
 /** @override @return {IsDefaultAnimationCollection} */
 m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  if (this.m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection)) {
   if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(DefaultAnimationCollectionKey.f_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, collection)) {
    return InternalAnimations.f_NUMBERS_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_;
   } else if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalAnimations.f_DEFAULT_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_, collection)) {
    return InternalAnimations.f_OPACITY_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_;
   }
  }
  return null;
 }
 /** @return {IsAnimationPropertyKey} */
 static get f_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_() {
  return (InternalAnimations.$clinit(), InternalAnimations.$static_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_);
 }
 
 static $clinit() {
  InternalAnimations.$clinit = () =>{};
  InternalAnimations.$loadModules();
  DefaultAnimations.$clinit();
  InternalAnimations.$static_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_ = IsAnimationPropertyKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType("opacity", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType);
  InternalAnimations.f_DEFAULT_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_ = IsAnimationCollectionKey.m_create__java_lang_String__arrayOf_org_pepstock_charba_client_options_IsAnimationPropertyKey("opacity", /**@type {!Array<IsAnimationPropertyKey>}*/ ($Arrays.$init([InternalAnimations.$static_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_], IsAnimationPropertyKey)));
  InternalAnimations.f_DEFAULT_ANIMATION_COLLECTION_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_ = /**@type {List<IsAnimationCollectionKey>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<IsAnimationCollectionKey>}*/ ($Arrays.$init([DefaultAnimationCollectionKey.f_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, InternalAnimations.f_DEFAULT_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_], IsAnimationCollectionKey))));
  InternalAnimations.f_NUMBERS_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_ = InternalNumbersAnimationCollection.$create__();
  InternalAnimations.f_OPACITY_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_ = InternalOpacityAnimationCollection.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalAnimations;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  InternalNumbersAnimationCollection = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalNumbersAnimationCollection$impl');
  InternalOpacityAnimationCollection = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalOpacityAnimationCollection$impl');
  AnimationType = goog.module.get('org.pepstock.charba.client.enums.AnimationType$impl');
  DefaultAnimationCollectionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
  IsAnimationCollectionKey = goog.module.get('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');
  IsAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {IsAnimationPropertyKey}*/
InternalAnimations.$static_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_;
/**@type {IsAnimationCollectionKey}*/
InternalAnimations.f_DEFAULT_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_;
/**@type {List<IsAnimationCollectionKey>}*/
InternalAnimations.f_DEFAULT_ANIMATION_COLLECTION_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_;
/**@type {DefaultAnimationCollection}*/
InternalAnimations.f_NUMBERS_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_;
/**@type {DefaultAnimationCollection}*/
InternalAnimations.f_OPACITY_COLLECTION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_;
$Util.$setClassMetadata(InternalAnimations, "org.pepstock.charba.client.defaults.globals.DefaultTooltips$InternalAnimations");

exports = InternalAnimations;

//# sourceMappingURL=DefaultTooltips$InternalAnimations.js.map
