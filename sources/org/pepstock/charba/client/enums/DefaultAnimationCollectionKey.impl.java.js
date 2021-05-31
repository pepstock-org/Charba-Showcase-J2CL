goog.module('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCollectionKey = goog.require('org.pepstock.charba.client.options.AnimationCollectionKey$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let DefaultAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
let AnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationPropertyKey$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DefaultAnimationCollectionKey>}
 * @implements {AnimationCollectionKey}
 */
class DefaultAnimationCollectionKey extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_;
  /**@type {AnimationType}*/
  this.f_type__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_;
  /**@type {List<AnimationPropertyKey>}*/
  this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_;
 }
 /** @return {!DefaultAnimationCollectionKey} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_client_options_AnimationPropertyKey(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** Array<AnimationPropertyKey> */ properties) {
  let $instance = new DefaultAnimationCollectionKey();
  $instance.$ctor__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_client_options_AnimationPropertyKey($name, $ordinal, value, properties);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_client_options_AnimationPropertyKey(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** Array<AnimationPropertyKey> */ properties) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.$init___$p_org_pepstock_charba_client_enums_DefaultAnimationCollectionKey();
  this.f_value__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_ = value;
  for (let $array = properties, $index = 0; $index < $array.length; $index++) {
   let property = $array[$index];
   {
    this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_.add(property);
   }
  }
  this.f_type__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_ = /**@type {AnimationPropertyKey}*/ ($Casts.$to(this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_.getAtIndex(0), AnimationPropertyKey)).m_type__();
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_;
 }
 /** @override @return {AnimationType} */
 m_type__() {
  return this.f_type__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_;
 }
 /** @override @return {List<AnimationPropertyKey>} */
 m_properties__() {
  return /**@type {List<AnimationPropertyKey>}*/ (Collections.m_unmodifiableList__java_util_List(this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_));
 }
 /** @return {boolean} */
 static m_is__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  DefaultAnimationCollectionKey.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(collection)) {
   return DefaultAnimationCollectionKey.m_is__java_lang_String(collection.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__java_lang_String(/** ?string */ collection) {
  return Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultAnimationCollectionKey.m_values__(), collection);
 }
 /** @return {!DefaultAnimationCollectionKey} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DefaultAnimationCollectionKey.$clinit();
  if ($Equality.$same(DefaultAnimationCollectionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_, null)) {
   DefaultAnimationCollectionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_ = $Enums.createMapFromValues(DefaultAnimationCollectionKey.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DefaultAnimationCollectionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_);
 }
 /** @return {!Array<!DefaultAnimationCollectionKey>} */
 static m_values__() {
  DefaultAnimationCollectionKey.$clinit();
  return /**@type {!Array<DefaultAnimationCollectionKey>}*/ ($Arrays.$init([DefaultAnimationCollectionKey.$static_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, DefaultAnimationCollectionKey.$static_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, DefaultAnimationCollectionKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey], DefaultAnimationCollectionKey));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_enums_DefaultAnimationCollectionKey() {
  this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_ = /**@type {!LinkedList<AnimationPropertyKey>}*/ (LinkedList.$create__());
 }
 /** @return {!DefaultAnimationCollectionKey} */
 static get f_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey() {
  return (DefaultAnimationCollectionKey.$clinit(), DefaultAnimationCollectionKey.$static_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey);
 }
 /** @return {!DefaultAnimationCollectionKey} */
 static get f_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey() {
  return (DefaultAnimationCollectionKey.$clinit(), DefaultAnimationCollectionKey.$static_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey);
 }
 /** @return {!DefaultAnimationCollectionKey} */
 static get f_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey() {
  return (DefaultAnimationCollectionKey.$clinit(), DefaultAnimationCollectionKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey);
 }
 
 static $clinit() {
  DefaultAnimationCollectionKey.$clinit = () =>{};
  DefaultAnimationCollectionKey.$loadModules();
  Enum.$clinit();
  DefaultAnimationCollectionKey.$static_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey = DefaultAnimationCollectionKey.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_client_options_AnimationPropertyKey($Util.$makeEnumName("COLORS"), DefaultAnimationCollectionKey.$ordinal_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, "colors", /**@type {!Array<AnimationPropertyKey>}*/ ($Arrays.$init([DefaultAnimationPropertyKey.f_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.f_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.f_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey], AnimationPropertyKey)));
  DefaultAnimationCollectionKey.$static_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey = DefaultAnimationCollectionKey.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_client_options_AnimationPropertyKey($Util.$makeEnumName("NUMBERS"), DefaultAnimationCollectionKey.$ordinal_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, "numbers", /**@type {!Array<AnimationPropertyKey>}*/ ($Arrays.$init([DefaultAnimationPropertyKey.f_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.f_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.f_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.f_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.f_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey], AnimationPropertyKey)));
  DefaultAnimationCollectionKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey = DefaultAnimationCollectionKey.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_client_options_AnimationPropertyKey($Util.$makeEnumName("VISIBLE"), DefaultAnimationCollectionKey.$ordinal_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey, "visible", /**@type {!Array<AnimationPropertyKey>}*/ ($Arrays.$init([DefaultAnimationPropertyKey.f_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey], AnimationPropertyKey)));
  DefaultAnimationCollectionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAnimationCollectionKey;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
  AnimationPropertyKey = goog.module.get('org.pepstock.charba.client.options.AnimationPropertyKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DefaultAnimationCollectionKey}*/
DefaultAnimationCollectionKey.$static_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey;
/**@private {!DefaultAnimationCollectionKey}*/
DefaultAnimationCollectionKey.$static_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey;
/**@private {!DefaultAnimationCollectionKey}*/
DefaultAnimationCollectionKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey;
/**@type {Map<?string, !DefaultAnimationCollectionKey>}*/
DefaultAnimationCollectionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey_;
/**@const {number}*/
DefaultAnimationCollectionKey.$ordinal_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey = 0;
/**@const {number}*/
DefaultAnimationCollectionKey.$ordinal_NUMBERS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey = 1;
/**@const {number}*/
DefaultAnimationCollectionKey.$ordinal_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey = 2;
AnimationCollectionKey.$markImplementor(DefaultAnimationCollectionKey);
$Util.$setClassMetadataForEnum(DefaultAnimationCollectionKey, "org.pepstock.charba.client.enums.DefaultAnimationCollectionKey");

exports = DefaultAnimationCollectionKey;

//# sourceMappingURL=DefaultAnimationCollectionKey.js.map
