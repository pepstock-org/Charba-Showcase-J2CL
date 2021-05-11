goog.module('org.pepstock.charba.client.commons.ObjectType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ObjectType>}
 */
class ObjectType extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ObjectType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ObjectType();
  $instance.$ctor__org_pepstock_charba_client_commons_ObjectType__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_ObjectType__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {ObjectType} */
 static m_getType__java_lang_String__boolean(/** ?string */ value, /** boolean */ isArray) {
  ObjectType.$clinit();
  if (isArray) {
   return ObjectType.$static_ARRAY__org_pepstock_charba_client_commons_ObjectType;
  }
  if (!$Equality.$same(value, null)) {
   for (let $array = ObjectType.m_values__(), $index = 0; $index < $array.length; $index++) {
    let type = $array[$index];
    {
     if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(type.name(), value)) {
      return type;
     }
    }
   }
  }
  return ObjectType.$static_UNDEFINED__org_pepstock_charba_client_commons_ObjectType;
 }
 /** @return {!ObjectType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ObjectType.$clinit();
  if ($Equality.$same(ObjectType.f_namesToValuesMap__org_pepstock_charba_client_commons_ObjectType_, null)) {
   ObjectType.f_namesToValuesMap__org_pepstock_charba_client_commons_ObjectType_ = $Enums.createMapFromValues(ObjectType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ObjectType.f_namesToValuesMap__org_pepstock_charba_client_commons_ObjectType_);
 }
 /** @return {!Array<!ObjectType>} */
 static m_values__() {
  ObjectType.$clinit();
  return /**@type {!Array<ObjectType>}*/ ($Arrays.$init([ObjectType.$static_UNDEFINED__org_pepstock_charba_client_commons_ObjectType, ObjectType.$static_BOOLEAN__org_pepstock_charba_client_commons_ObjectType, ObjectType.$static_NUMBER__org_pepstock_charba_client_commons_ObjectType, ObjectType.$static_STRING__org_pepstock_charba_client_commons_ObjectType, ObjectType.$static_SYMBOL__org_pepstock_charba_client_commons_ObjectType, ObjectType.$static_FUNCTION__org_pepstock_charba_client_commons_ObjectType, ObjectType.$static_OBJECT__org_pepstock_charba_client_commons_ObjectType, ObjectType.$static_ARRAY__org_pepstock_charba_client_commons_ObjectType], ObjectType));
 }
 /** @return {!ObjectType} */
 static get f_UNDEFINED__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_UNDEFINED__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {!ObjectType} */
 static get f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_BOOLEAN__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {!ObjectType} */
 static get f_NUMBER__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_NUMBER__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {!ObjectType} */
 static get f_STRING__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {!ObjectType} */
 static get f_SYMBOL__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_SYMBOL__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {!ObjectType} */
 static get f_FUNCTION__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_FUNCTION__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {!ObjectType} */
 static get f_OBJECT__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_OBJECT__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {!ObjectType} */
 static get f_ARRAY__org_pepstock_charba_client_commons_ObjectType() {
  return (ObjectType.$clinit(), ObjectType.$static_ARRAY__org_pepstock_charba_client_commons_ObjectType);
 }
 
 static $clinit() {
  ObjectType.$clinit = () =>{};
  ObjectType.$loadModules();
  Enum.$clinit();
  ObjectType.$static_UNDEFINED__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("UNDEFINED"), ObjectType.$ordinal_UNDEFINED__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.$static_BOOLEAN__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("BOOLEAN"), ObjectType.$ordinal_BOOLEAN__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.$static_NUMBER__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("NUMBER"), ObjectType.$ordinal_NUMBER__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.$static_STRING__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("STRING"), ObjectType.$ordinal_STRING__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.$static_SYMBOL__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("SYMBOL"), ObjectType.$ordinal_SYMBOL__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.$static_FUNCTION__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("FUNCTION"), ObjectType.$ordinal_FUNCTION__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.$static_OBJECT__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("OBJECT"), ObjectType.$ordinal_OBJECT__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.$static_ARRAY__org_pepstock_charba_client_commons_ObjectType = ObjectType.$create__java_lang_String__int($Util.$makeEnumName("ARRAY"), ObjectType.$ordinal_ARRAY__org_pepstock_charba_client_commons_ObjectType);
  ObjectType.f_namesToValuesMap__org_pepstock_charba_client_commons_ObjectType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ObjectType;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ObjectType}*/
ObjectType.$static_UNDEFINED__org_pepstock_charba_client_commons_ObjectType;
/**@private {!ObjectType}*/
ObjectType.$static_BOOLEAN__org_pepstock_charba_client_commons_ObjectType;
/**@private {!ObjectType}*/
ObjectType.$static_NUMBER__org_pepstock_charba_client_commons_ObjectType;
/**@private {!ObjectType}*/
ObjectType.$static_STRING__org_pepstock_charba_client_commons_ObjectType;
/**@private {!ObjectType}*/
ObjectType.$static_SYMBOL__org_pepstock_charba_client_commons_ObjectType;
/**@private {!ObjectType}*/
ObjectType.$static_FUNCTION__org_pepstock_charba_client_commons_ObjectType;
/**@private {!ObjectType}*/
ObjectType.$static_OBJECT__org_pepstock_charba_client_commons_ObjectType;
/**@private {!ObjectType}*/
ObjectType.$static_ARRAY__org_pepstock_charba_client_commons_ObjectType;
/**@type {Map<?string, !ObjectType>}*/
ObjectType.f_namesToValuesMap__org_pepstock_charba_client_commons_ObjectType_;
/**@const {number}*/
ObjectType.$ordinal_UNDEFINED__org_pepstock_charba_client_commons_ObjectType = 0;
/**@const {number}*/
ObjectType.$ordinal_BOOLEAN__org_pepstock_charba_client_commons_ObjectType = 1;
/**@const {number}*/
ObjectType.$ordinal_NUMBER__org_pepstock_charba_client_commons_ObjectType = 2;
/**@const {number}*/
ObjectType.$ordinal_STRING__org_pepstock_charba_client_commons_ObjectType = 3;
/**@const {number}*/
ObjectType.$ordinal_SYMBOL__org_pepstock_charba_client_commons_ObjectType = 4;
/**@const {number}*/
ObjectType.$ordinal_FUNCTION__org_pepstock_charba_client_commons_ObjectType = 5;
/**@const {number}*/
ObjectType.$ordinal_OBJECT__org_pepstock_charba_client_commons_ObjectType = 6;
/**@const {number}*/
ObjectType.$ordinal_ARRAY__org_pepstock_charba_client_commons_ObjectType = 7;
$Util.$setClassMetadataForEnum(ObjectType, "org.pepstock.charba.client.commons.ObjectType");

exports = ObjectType;

//# sourceMappingURL=ObjectType.js.map
