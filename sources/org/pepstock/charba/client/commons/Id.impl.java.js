goog.module('org.pepstock.charba.client.commons.Id$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let NativeObjectUtils = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Id>}
 * @implements {Key}
 */
class Id extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_commons_Id_;
 }
 /** @return {!Id} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Id();
  $instance.$ctor__org_pepstock_charba_client_commons_Id__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_Id__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_commons_Id_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_commons_Id_;
 }
 /** @return {?string} */
 static m_get__org_pepstock_charba_client_commons_NativeObjectContainer(/** NativeObjectContainer */ nativeObjectContainer) {
  Id.$clinit();
  if (!$Equality.$same(nativeObjectContainer, null)) {
   return Id.m_get__org_pepstock_charba_client_commons_NativeObject(nativeObjectContainer.m_getNativeObject__());
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?string} */
 static m_get__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Id.$clinit();
  if (!$Equality.$same(nativeObject, null) && NativeObjectUtils.m_hasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(nativeObject, Id.$static_CHARBA_ID__org_pepstock_charba_client_commons_Id.m_value__())) {
   return NativeObjectUtils.m_getStringProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__java_lang_String(nativeObject, Id.$static_CHARBA_ID__org_pepstock_charba_client_commons_Id.m_value__(), Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getIntegerProperty__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** Key */ key, /** ? */ nativeObject) {
  Id.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key) && !$Equality.$same(nativeObject, null) && NativeObjectUtils.m_hasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(nativeObject, key.m_value__())) {
   return NativeObjectUtils.m_getIntProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__int(nativeObject, key.m_value__(), Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?string} */
 static m_getStringProperty__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** Key */ key, /** ? */ nativeObject) {
  Id.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key) && !$Equality.$same(nativeObject, null) && NativeObjectUtils.m_hasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(nativeObject, key.m_value__())) {
   return NativeObjectUtils.m_getStringProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__java_lang_String(nativeObject, key.m_value__(), Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {!Id} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Id.$clinit();
  if ($Equality.$same(Id.f_namesToValuesMap__org_pepstock_charba_client_commons_Id_, null)) {
   Id.f_namesToValuesMap__org_pepstock_charba_client_commons_Id_ = $Enums.createMapFromValues(Id.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Id.f_namesToValuesMap__org_pepstock_charba_client_commons_Id_);
 }
 /** @return {!Array<!Id>} */
 static m_values__() {
  Id.$clinit();
  return /**@type {!Array<Id>}*/ ($Arrays.$init([Id.$static_CHARBA_ID__org_pepstock_charba_client_commons_Id], Id));
 }
 /** @return {!Id} */
 static get f_CHARBA_ID__org_pepstock_charba_client_commons_Id() {
  return (Id.$clinit(), Id.$static_CHARBA_ID__org_pepstock_charba_client_commons_Id);
 }
 
 static $clinit() {
  Id.$clinit = () =>{};
  Id.$loadModules();
  Enum.$clinit();
  Id.$static_CHARBA_ID__org_pepstock_charba_client_commons_Id = Id.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_ID"), Id.$ordinal_CHARBA_ID__org_pepstock_charba_client_commons_Id, "charbaId");
  Id.f_namesToValuesMap__org_pepstock_charba_client_commons_Id_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Id;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NativeObjectUtils = goog.module.get('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Id}*/
Id.$static_CHARBA_ID__org_pepstock_charba_client_commons_Id;
/**@type {Map<?string, !Id>}*/
Id.f_namesToValuesMap__org_pepstock_charba_client_commons_Id_;
/**@const {number}*/
Id.$ordinal_CHARBA_ID__org_pepstock_charba_client_commons_Id = 0;
Key.$markImplementor(Id);
$Util.$setClassMetadataForEnum(Id, "org.pepstock.charba.client.commons.Id");

exports = Id;

//# sourceMappingURL=Id.js.map
