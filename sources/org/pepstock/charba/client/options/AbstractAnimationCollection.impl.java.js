goog.module('org.pepstock.charba.client.options.AbstractAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
const AbstractAnimation = goog.require('org.pepstock.charba.client.options.AbstractAnimation$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let DefaultAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractAnimationCollection.Property$impl');
let IsAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T, D
 * @extends {AbstractAnimation<T, D>}
 * @implements {IsDefaultAnimationCollection}
 */
class AbstractAnimationCollection extends AbstractAnimation {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractAnimationCollection__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** T */ childKey, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractAnimation__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
 }
 
 m_setType__org_pepstock_charba_client_enums_AnimationType(/** AnimationType */ type) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, type);
 }
 /** @override @return {AnimationType} */
 m_getType__() {
  return /**@type {AnimationType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, AnimationType.m_values__(), /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getType__()), AnimationType));
 }
 
 m_setFrom__boolean(/** boolean */ from) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, from);
 }
 
 m_setFrom__double(/** number */ from) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, from);
 }
 
 m_setFrom__java_lang_String(/** ?string */ from) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, from);
 }
 
 m_setFrom__org_pepstock_charba_client_colors_IsColor(/** IsColor */ from) {
  this.m_setFrom__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(from));
 }
 /** @override @return {number} */
 m_getFrom__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFrom__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFrom__();
 }
 /** @override @return {boolean} */
 m_getFromAsBoolean__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsBoolean__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsBoolean__();
 }
 /** @override @return {?string} */
 m_getFromAsString__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FROM__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsString__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsString__();
 }
 /** @return {IsColor} */
 m_getFromAsColor__() {
  let fromAsString = this.m_getFromAsString__();
  if (!$Equality.$same(fromAsString, null)) {
   return ColorBuilder.m_parse__java_lang_String(fromAsString);
  }
  return null;
 }
 
 m_setTo__boolean(/** boolean */ to) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, to);
 }
 
 m_setTo__double(/** number */ to) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, to);
 }
 
 m_setTo__java_lang_String(/** ?string */ to) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, to);
 }
 
 m_setTo__org_pepstock_charba_client_colors_IsColor(/** IsColor */ to) {
  this.m_setTo__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(to));
 }
 /** @override @return {number} */
 m_getTo__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getTo__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getTo__();
 }
 /** @override @return {boolean} */
 m_getToAsBoolean__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsBoolean__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsBoolean__();
 }
 /** @override @return {?string} */
 m_getToAsString__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TO__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsString__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsString__();
 }
 /** @return {IsColor} */
 m_getToAsColor__() {
  let fromAsString = this.m_getToAsString__();
  if (!$Equality.$same(fromAsString, null)) {
   return ColorBuilder.m_parse__java_lang_String(fromAsString);
  }
  return null;
 }
 
 m_setProperties__arrayOf_org_pepstock_charba_client_options_IsAnimationPropertyKey(/** Array<IsAnimationPropertyKey> */ properties) {
  if (!$Equality.$same(properties, null) && properties.length > 0) {
   let array = ArrayString_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_Key(properties);
   this.m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_PROPERTIES__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, array);
  }
 }
 
 m_setProperties__java_util_List(/** List<IsAnimationPropertyKey> */ properties) {
  if (!$Equality.$same(properties, null) && !properties.isEmpty()) {
   let array = ArrayString_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_Key(/**@type {Array<Key>}*/ ($Arrays.$castTo(properties.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<IsAnimationPropertyKey>}*/ ($Arrays.$create([0], IsAnimationPropertyKey))), Key, 1)));
   this.m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_PROPERTIES__org_pepstock_charba_client_options_AbstractAnimationCollection_Property, array);
  }
 }
 /** @override @return {List<IsAnimationPropertyKey>} */
 m_getProperties__() {
  let result = /**@type {!LinkedList<IsAnimationPropertyKey>}*/ (LinkedList.$create__());
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_PROPERTIES__org_pepstock_charba_client_options_AbstractAnimationCollection_Property), ArrayString_$Overlay));
  if (array.length > 0) {
   for (let i = 0; i < array.length; i = i + 1 | 0) {
    let property = ArrayString_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(array, i);
    if (DefaultAnimationPropertyKey.m_is__java_lang_String(property)) {
     result.add(/**@type {DefaultAnimationPropertyKey}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultAnimationPropertyKey.m_values__(), property), DefaultAnimationPropertyKey)));
    } else {
     result.add(IsAnimationPropertyKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(property, this.m_getType__()));
    }
   }
  }
  return result;
 }
 
 static $clinit() {
  AbstractAnimationCollection.$clinit = () =>{};
  AbstractAnimationCollection.$loadModules();
  AbstractAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractAnimationCollection;
 }
 
 static $loadModules() {
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  AnimationType = goog.module.get('org.pepstock.charba.client.enums.AnimationType$impl');
  DefaultAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractAnimationCollection.Property$impl');
  IsAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultAnimationCollection.$markImplementor(AbstractAnimationCollection);
$Util.$setClassMetadata(AbstractAnimationCollection, "org.pepstock.charba.client.options.AbstractAnimationCollection");

exports = AbstractAnimationCollection;

//# sourceMappingURL=AbstractAnimationCollection.js.map
