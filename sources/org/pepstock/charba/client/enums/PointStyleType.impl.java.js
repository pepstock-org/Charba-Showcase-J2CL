goog.module('org.pepstock.charba.client.enums.PointStyleType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PointStyleType>}
 * @implements {Key}
 */
class PointStyleType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_PointStyleType_;
 }
 /** @return {!PointStyleType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new PointStyleType();
  $instance.$ctor__org_pepstock_charba_client_enums_PointStyleType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_PointStyleType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_PointStyleType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_PointStyleType_;
 }
 /** @return {PointStyleType} */
 static m_getType__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_Key(/** NativeObjectContainer */ object, /** Key */ key) {
  PointStyleType.$clinit();
  if (!$Equality.$same(object, null) && Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   if (JsHelper.m_get__().m_isImage__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_Key(object, key)) {
    return PointStyleType.$static_IMAGE__org_pepstock_charba_client_enums_PointStyleType;
   } else if (JsHelper.m_get__().m_isCanvas__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_Key(object, key)) {
    return PointStyleType.$static_CANVAS__org_pepstock_charba_client_enums_PointStyleType;
   }
  }
  return PointStyleType.$static_STRING__org_pepstock_charba_client_enums_PointStyleType;
 }
 /** @return {!PointStyleType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PointStyleType.$clinit();
  if ($Equality.$same(PointStyleType.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyleType_, null)) {
   PointStyleType.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyleType_ = $Enums.createMapFromValues(PointStyleType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PointStyleType.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyleType_);
 }
 /** @return {!Array<!PointStyleType>} */
 static m_values__() {
  PointStyleType.$clinit();
  return /**@type {!Array<PointStyleType>}*/ ($Arrays.$init([PointStyleType.$static_STRING__org_pepstock_charba_client_enums_PointStyleType, PointStyleType.$static_IMAGE__org_pepstock_charba_client_enums_PointStyleType, PointStyleType.$static_CANVAS__org_pepstock_charba_client_enums_PointStyleType], PointStyleType));
 }
 /** @return {!PointStyleType} */
 static get f_STRING__org_pepstock_charba_client_enums_PointStyleType() {
  return (PointStyleType.$clinit(), PointStyleType.$static_STRING__org_pepstock_charba_client_enums_PointStyleType);
 }
 /** @return {!PointStyleType} */
 static get f_IMAGE__org_pepstock_charba_client_enums_PointStyleType() {
  return (PointStyleType.$clinit(), PointStyleType.$static_IMAGE__org_pepstock_charba_client_enums_PointStyleType);
 }
 /** @return {!PointStyleType} */
 static get f_CANVAS__org_pepstock_charba_client_enums_PointStyleType() {
  return (PointStyleType.$clinit(), PointStyleType.$static_CANVAS__org_pepstock_charba_client_enums_PointStyleType);
 }
 
 static $clinit() {
  PointStyleType.$clinit = () =>{};
  PointStyleType.$loadModules();
  Enum.$clinit();
  PointStyleType.$static_STRING__org_pepstock_charba_client_enums_PointStyleType = PointStyleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STRING"), PointStyleType.$ordinal_STRING__org_pepstock_charba_client_enums_PointStyleType, "string");
  PointStyleType.$static_IMAGE__org_pepstock_charba_client_enums_PointStyleType = PointStyleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IMAGE"), PointStyleType.$ordinal_IMAGE__org_pepstock_charba_client_enums_PointStyleType, "image");
  PointStyleType.$static_CANVAS__org_pepstock_charba_client_enums_PointStyleType = PointStyleType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CANVAS"), PointStyleType.$ordinal_CANVAS__org_pepstock_charba_client_enums_PointStyleType, "canvas");
  PointStyleType.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyleType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!PointStyleType}*/
PointStyleType.$static_STRING__org_pepstock_charba_client_enums_PointStyleType;
/**@private {!PointStyleType}*/
PointStyleType.$static_IMAGE__org_pepstock_charba_client_enums_PointStyleType;
/**@private {!PointStyleType}*/
PointStyleType.$static_CANVAS__org_pepstock_charba_client_enums_PointStyleType;
/**@type {Map<?string, !PointStyleType>}*/
PointStyleType.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyleType_;
/**@const {number}*/
PointStyleType.$ordinal_STRING__org_pepstock_charba_client_enums_PointStyleType = 0;
/**@const {number}*/
PointStyleType.$ordinal_IMAGE__org_pepstock_charba_client_enums_PointStyleType = 1;
/**@const {number}*/
PointStyleType.$ordinal_CANVAS__org_pepstock_charba_client_enums_PointStyleType = 2;
Key.$markImplementor(PointStyleType);
$Util.$setClassMetadataForEnum(PointStyleType, "org.pepstock.charba.client.enums.PointStyleType");

exports = PointStyleType;

//# sourceMappingURL=PointStyleType.js.map
