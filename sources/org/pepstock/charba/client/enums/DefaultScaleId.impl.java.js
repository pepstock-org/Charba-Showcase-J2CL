goog.module('org.pepstock.charba.client.enums.DefaultScaleId$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsScaleId = goog.require('org.pepstock.charba.client.options.IsScaleId$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {Enum<DefaultScaleId>}
 * @implements {IsScaleId}
 */
class DefaultScaleId extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DefaultScaleId_;
  /**@type {AxisKind}*/
  this.f_axisKind__org_pepstock_charba_client_enums_DefaultScaleId_;
 }
 /** @return {!DefaultScaleId} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** AxisKind */ kind) {
  let $instance = new DefaultScaleId();
  $instance.$ctor__org_pepstock_charba_client_enums_DefaultScaleId__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AxisKind($name, $ordinal, value, kind);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DefaultScaleId__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** AxisKind */ kind) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_DefaultScaleId_ = value;
  this.f_axisKind__org_pepstock_charba_client_enums_DefaultScaleId_ = kind;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DefaultScaleId_;
 }
 /** @return {AxisKind} */
 m_getAxisKind__() {
  return this.f_axisKind__org_pepstock_charba_client_enums_DefaultScaleId_;
 }
 /** @return {boolean} */
 m_is__java_lang_String(/** ?string */ scaleId) {
  if (!$Equality.$same(scaleId, null)) {
   let id = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(scaleId, Locale.m_getDefault__());
   return j_l_String.m_startsWith__java_lang_String__java_lang_String(id, this.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 m_is__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  return this.m_is__java_lang_String(/**@type {IsScaleId}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(scaleId), IsScaleId)).m_value__());
 }
 /** @return {DefaultScaleId} */
 static m_getByAxisKind__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_enums_DefaultScaleId(/** AxisKind */ kind, /** DefaultScaleId */ defaultValue) {
  DefaultScaleId.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(kind)) {
   for (let $array = DefaultScaleId.m_values__(), $index = 0; $index < $array.length; $index++) {
    let scaleId = $array[$index];
    {
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(scaleId.m_getAxisKind__(), kind)) {
      return scaleId;
     }
    }
   }
  }
  return /**@type {DefaultScaleId}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(defaultValue), DefaultScaleId));
 }
 /** @return {AxisKind} */
 static m_getAxisKindByScaleId__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_enums_AxisKind(/** Key */ scaleId, /** AxisKind */ defaultValue) {
  DefaultScaleId.$clinit();
  return DefaultScaleId.m_getAxisKindByScaleId__java_lang_String__org_pepstock_charba_client_enums_AxisKind(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(scaleId).m_value__(), defaultValue);
 }
 /** @return {AxisKind} */
 static m_getAxisKindByScaleId__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** ?string */ scaleId, /** AxisKind */ defaultValue) {
  DefaultScaleId.$clinit();
  if (!$Equality.$same(scaleId, null)) {
   for (let $array = DefaultScaleId.m_values__(), $index = 0; $index < $array.length; $index++) {
    let defaultScaleId = $array[$index];
    {
     if (defaultScaleId.m_is__java_lang_String(scaleId) && !$Equality.$same(defaultScaleId.m_getAxisKind__(), null)) {
      return defaultScaleId.m_getAxisKind__();
     }
    }
   }
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(DefaultScaleId.f_DEFAULT_X_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId, scaleId)) {
   return AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(DefaultScaleId.f_DEFAULT_Y_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId, scaleId)) {
   return AxisKind.f_Y__org_pepstock_charba_client_enums_AxisKind;
  }
  return /**@type {AxisKind}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(defaultValue), AxisKind));
 }
 /** @return {!DefaultScaleId} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DefaultScaleId.$clinit();
  if ($Equality.$same(DefaultScaleId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultScaleId_, null)) {
   DefaultScaleId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultScaleId_ = $Enums.createMapFromValues(DefaultScaleId.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DefaultScaleId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultScaleId_);
 }
 /** @return {!Array<!DefaultScaleId>} */
 static m_values__() {
  DefaultScaleId.$clinit();
  return /**@type {!Array<DefaultScaleId>}*/ ($Arrays.$init([DefaultScaleId.$static_X__org_pepstock_charba_client_enums_DefaultScaleId, DefaultScaleId.$static_Y__org_pepstock_charba_client_enums_DefaultScaleId, DefaultScaleId.$static_R__org_pepstock_charba_client_enums_DefaultScaleId, DefaultScaleId.$static_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId], DefaultScaleId));
 }
 /** @return {!DefaultScaleId} */
 static get f_X__org_pepstock_charba_client_enums_DefaultScaleId() {
  return (DefaultScaleId.$clinit(), DefaultScaleId.$static_X__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {!DefaultScaleId} */
 static get f_Y__org_pepstock_charba_client_enums_DefaultScaleId() {
  return (DefaultScaleId.$clinit(), DefaultScaleId.$static_Y__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {!DefaultScaleId} */
 static get f_R__org_pepstock_charba_client_enums_DefaultScaleId() {
  return (DefaultScaleId.$clinit(), DefaultScaleId.$static_R__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {!DefaultScaleId} */
 static get f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId() {
  return (DefaultScaleId.$clinit(), DefaultScaleId.$static_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 
 static $clinit() {
  DefaultScaleId.$clinit = () =>{};
  DefaultScaleId.$loadModules();
  Enum.$clinit();
  DefaultScaleId.$static_X__org_pepstock_charba_client_enums_DefaultScaleId = DefaultScaleId.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AxisKind($Util.$makeEnumName("X"), DefaultScaleId.$ordinal_X__org_pepstock_charba_client_enums_DefaultScaleId, "x", AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  DefaultScaleId.$static_Y__org_pepstock_charba_client_enums_DefaultScaleId = DefaultScaleId.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AxisKind($Util.$makeEnumName("Y"), DefaultScaleId.$ordinal_Y__org_pepstock_charba_client_enums_DefaultScaleId, "y", AxisKind.f_Y__org_pepstock_charba_client_enums_AxisKind);
  DefaultScaleId.$static_R__org_pepstock_charba_client_enums_DefaultScaleId = DefaultScaleId.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AxisKind($Util.$makeEnumName("R"), DefaultScaleId.$ordinal_R__org_pepstock_charba_client_enums_DefaultScaleId, "r", AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind);
  DefaultScaleId.$static_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId = DefaultScaleId.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_AxisKind($Util.$makeEnumName("UNKNOWN"), DefaultScaleId.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId, "charbaunknown", null);
  DefaultScaleId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultScaleId_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultScaleId;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {!DefaultScaleId}*/
DefaultScaleId.$static_X__org_pepstock_charba_client_enums_DefaultScaleId;
/**@private {!DefaultScaleId}*/
DefaultScaleId.$static_Y__org_pepstock_charba_client_enums_DefaultScaleId;
/**@private {!DefaultScaleId}*/
DefaultScaleId.$static_R__org_pepstock_charba_client_enums_DefaultScaleId;
/**@private {!DefaultScaleId}*/
DefaultScaleId.$static_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId;
/**@const {?string}*/
DefaultScaleId.f_DEFAULT_X_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId = "_index_";
/**@const {?string}*/
DefaultScaleId.f_DEFAULT_Y_FOR_BAR_AND_LINE_OPTIONS__org_pepstock_charba_client_enums_DefaultScaleId = "_value_";
/**@type {Map<?string, !DefaultScaleId>}*/
DefaultScaleId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultScaleId_;
/**@const {number}*/
DefaultScaleId.$ordinal_X__org_pepstock_charba_client_enums_DefaultScaleId = 0;
/**@const {number}*/
DefaultScaleId.$ordinal_Y__org_pepstock_charba_client_enums_DefaultScaleId = 1;
/**@const {number}*/
DefaultScaleId.$ordinal_R__org_pepstock_charba_client_enums_DefaultScaleId = 2;
/**@const {number}*/
DefaultScaleId.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId = 3;
IsScaleId.$markImplementor(DefaultScaleId);
$Util.$setClassMetadataForEnum(DefaultScaleId, "org.pepstock.charba.client.enums.DefaultScaleId");

exports = DefaultScaleId;

//# sourceMappingURL=DefaultScaleId.js.map
