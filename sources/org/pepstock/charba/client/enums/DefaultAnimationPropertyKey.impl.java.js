goog.module('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationPropertyKey = goog.require('org.pepstock.charba.client.options.AnimationPropertyKey$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DefaultAnimationPropertyKey>}
 * @implements {AnimationPropertyKey}
 */
class DefaultAnimationPropertyKey extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_;
  /**@type {AnimationType}*/
  this.f_type__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_;
  /**@type {List<AnimationPropertyKey>}*/
  this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_;
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** AnimationType */ type) {
  let $instance = new DefaultAnimationPropertyKey();
  $instance.$ctor__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($name, $ordinal, value, type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** AnimationType */ type) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.$init___$p_org_pepstock_charba_client_enums_DefaultAnimationPropertyKey();
  this.f_value__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_ = value;
  this.f_type__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_ = type;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_;
 }
 /** @override @return {AnimationType} */
 m_type__() {
  return this.f_type__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_;
 }
 /** @override @return {List<AnimationPropertyKey>} */
 m_properties__() {
  if ($Equality.$same(this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_, null)) {
   this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_ = /**@type {List<AnimationPropertyKey>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<DefaultAnimationPropertyKey>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<DefaultAnimationPropertyKey>}*/ ($Arrays.$init([this], DefaultAnimationPropertyKey))))));
  }
  return this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_;
 }
 /** @return {boolean} */
 static m_is__org_pepstock_charba_client_options_AnimationPropertyKey(/** AnimationPropertyKey */ property) {
  DefaultAnimationPropertyKey.$clinit();
  if (AnimationPropertyKey.m_isValid__org_pepstock_charba_client_options_AnimationPropertyKey(property)) {
   return DefaultAnimationPropertyKey.m_is__java_lang_String(property.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__java_lang_String(/** ?string */ property) {
  DefaultAnimationPropertyKey.$clinit();
  return Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultAnimationPropertyKey.m_values__(), property);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DefaultAnimationPropertyKey.$clinit();
  if ($Equality.$same(DefaultAnimationPropertyKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_, null)) {
   DefaultAnimationPropertyKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_ = $Enums.createMapFromValues(DefaultAnimationPropertyKey.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DefaultAnimationPropertyKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_);
 }
 /** @return {!Array<!DefaultAnimationPropertyKey>} */
 static m_values__() {
  DefaultAnimationPropertyKey.$clinit();
  return /**@type {!Array<DefaultAnimationPropertyKey>}*/ ($Arrays.$init([DefaultAnimationPropertyKey.$static_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, DefaultAnimationPropertyKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey], DefaultAnimationPropertyKey));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  this.f_properties__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_ = null;
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 /** @return {!DefaultAnimationPropertyKey} */
 static get f_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey() {
  return (DefaultAnimationPropertyKey.$clinit(), DefaultAnimationPropertyKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
 }
 
 static $clinit() {
  DefaultAnimationPropertyKey.$clinit = () =>{};
  DefaultAnimationPropertyKey.$loadModules();
  Enum.$clinit();
  DefaultAnimationPropertyKey.$static_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("X"), DefaultAnimationPropertyKey.$ordinal_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "x", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("Y"), DefaultAnimationPropertyKey.$ordinal_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "y", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("BORDER_WIDTH"), DefaultAnimationPropertyKey.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "borderWidth", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("RADIUS"), DefaultAnimationPropertyKey.$ordinal_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "radius", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("TENSION"), DefaultAnimationPropertyKey.$ordinal_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "tension", AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("BACKGROUND_COLOR"), DefaultAnimationPropertyKey.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "backgroundColor", AnimationType.f_COLOR__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("BORDER_COLOR"), DefaultAnimationPropertyKey.$ordinal_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "borderColor", AnimationType.f_COLOR__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("COLOR"), DefaultAnimationPropertyKey.$ordinal_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "color", AnimationType.f_COLOR__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = DefaultAnimationPropertyKey.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AnimationType($Util.$makeEnumName("VISIBLE"), DefaultAnimationPropertyKey.$ordinal_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey, "visible", AnimationType.f_BOOLEAN__org_pepstock_charba_client_enums_AnimationType);
  DefaultAnimationPropertyKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAnimationPropertyKey;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  AnimationType = goog.module.get('org.pepstock.charba.client.enums.AnimationType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@private {!DefaultAnimationPropertyKey}*/
DefaultAnimationPropertyKey.$static_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey;
/**@type {Map<?string, !DefaultAnimationPropertyKey>}*/
DefaultAnimationPropertyKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey_;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 0;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 1;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 2;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_RADIUS__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 3;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_TENSION__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 4;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 5;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_BORDER_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 6;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_COLOR__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 7;
/**@const {number}*/
DefaultAnimationPropertyKey.$ordinal_VISIBLE__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey = 8;
AnimationPropertyKey.$markImplementor(DefaultAnimationPropertyKey);
$Util.$setClassMetadataForEnum(DefaultAnimationPropertyKey, "org.pepstock.charba.client.enums.DefaultAnimationPropertyKey");

exports = DefaultAnimationPropertyKey;

//# sourceMappingURL=DefaultAnimationPropertyKey.js.map
