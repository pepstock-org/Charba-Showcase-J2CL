goog.module('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalNumbersAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let DefaultAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
let DefaultAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
let AnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationPropertyKey$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class InternalNumbersAnimationCollection extends DefaultAnimationCollection {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalNumbersAnimationCollection} */
 static $create__() {
  InternalNumbersAnimationCollection.$clinit();
  let $instance = new InternalNumbersAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalNumbersAnimationCollection__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalNumbersAnimationCollection__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__();
 }
 /** @override @return {List<AnimationPropertyKey>} */
 m_getProperties__() {
  return InternalNumbersAnimationCollection.f_DEFAULT_ANIMATION_PROPERTIES_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalNumbersAnimationCollection_;
 }
 /** @override @return {AnimationType} */
 m_getType__() {
  return DefaultAnimationCollectionKey.f_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey.m_type__();
 }
 
 static $clinit() {
  InternalNumbersAnimationCollection.$clinit = () =>{};
  InternalNumbersAnimationCollection.$loadModules();
  DefaultAnimationCollection.$clinit();
  InternalNumbersAnimationCollection.f_DEFAULT_ANIMATION_PROPERTIES_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalNumbersAnimationCollection_ = /**@type {List<AnimationPropertyKey>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<AnimationPropertyKey>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<AnimationPropertyKey>}*/ ($Arrays.$init([DefaultAnimationPropertyKey.f_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.f_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, AnimationPropertyKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType("width", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType), AnimationPropertyKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType("height", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType), AnimationPropertyKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType("caretX", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType), AnimationPropertyKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType("caretY", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType)], AnimationPropertyKey))))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalNumbersAnimationCollection;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  AnimationType = goog.module.get('org.pepstock.charba.client.enums.AnimationType$impl');
  DefaultAnimationCollectionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
  DefaultAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
  AnimationPropertyKey = goog.module.get('org.pepstock.charba.client.options.AnimationPropertyKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {List<AnimationPropertyKey>}*/
InternalNumbersAnimationCollection.f_DEFAULT_ANIMATION_PROPERTIES_KEYS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalNumbersAnimationCollection_;
$Util.$setClassMetadata(InternalNumbersAnimationCollection, "org.pepstock.charba.client.defaults.globals.DefaultTooltips$InternalNumbersAnimationCollection");

exports = InternalNumbersAnimationCollection;

//# sourceMappingURL=DefaultTooltips$InternalNumbersAnimationCollection.js.map
