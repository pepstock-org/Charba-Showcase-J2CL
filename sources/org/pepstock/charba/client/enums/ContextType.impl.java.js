goog.module('org.pepstock.charba.client.enums.ContextType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ContextType>}
 * @implements {Key}
 */
class ContextType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_ContextType_;
 }
 /** @return {!ContextType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ContextType();
  $instance.$ctor__org_pepstock_charba_client_enums_ContextType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ContextType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_ContextType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_ContextType_;
 }
 /** @return {!ContextType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ContextType.$clinit();
  if ($Equality.$same(ContextType.f_namesToValuesMap__org_pepstock_charba_client_enums_ContextType_, null)) {
   ContextType.f_namesToValuesMap__org_pepstock_charba_client_enums_ContextType_ = $Enums.createMapFromValues(ContextType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ContextType.f_namesToValuesMap__org_pepstock_charba_client_enums_ContextType_);
 }
 /** @return {!Array<!ContextType>} */
 static m_values__() {
  ContextType.$clinit();
  return /**@type {!Array<ContextType>}*/ ($Arrays.$init([ContextType.$static_CHART__org_pepstock_charba_client_enums_ContextType, ContextType.$static_DATASET__org_pepstock_charba_client_enums_ContextType, ContextType.$static_DATA__org_pepstock_charba_client_enums_ContextType, ContextType.$static_SCALE__org_pepstock_charba_client_enums_ContextType, ContextType.$static_TICK__org_pepstock_charba_client_enums_ContextType, ContextType.$static_POINT_LABEL__org_pepstock_charba_client_enums_ContextType, ContextType.$static_TOOLTIP__org_pepstock_charba_client_enums_ContextType, ContextType.$static_DATALABELS__org_pepstock_charba_client_enums_ContextType, ContextType.$static_LABELS__org_pepstock_charba_client_enums_ContextType, ContextType.$static_ANNOTATION__org_pepstock_charba_client_enums_ContextType, ContextType.$static_ZOOM__org_pepstock_charba_client_enums_ContextType, ContextType.$static_METER__org_pepstock_charba_client_enums_ContextType, ContextType.$static_SEGMENT__org_pepstock_charba_client_enums_ContextType, ContextType.$static_UNKNOWN__org_pepstock_charba_client_enums_ContextType], ContextType));
 }
 /** @return {!ContextType} */
 static get f_CHART__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_CHART__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_DATASET__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_DATASET__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_DATA__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_DATA__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_SCALE__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_SCALE__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_TICK__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_TICK__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_POINT_LABEL__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_POINT_LABEL__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_TOOLTIP__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_TOOLTIP__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_DATALABELS__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_DATALABELS__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_LABELS__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_LABELS__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_ANNOTATION__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_ANNOTATION__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_ZOOM__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_ZOOM__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_METER__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_METER__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_SEGMENT__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_SEGMENT__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {!ContextType} */
 static get f_UNKNOWN__org_pepstock_charba_client_enums_ContextType() {
  return (ContextType.$clinit(), ContextType.$static_UNKNOWN__org_pepstock_charba_client_enums_ContextType);
 }
 
 static $clinit() {
  ContextType.$clinit = () =>{};
  ContextType.$loadModules();
  Enum.$clinit();
  ContextType.$static_CHART__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHART"), ContextType.$ordinal_CHART__org_pepstock_charba_client_enums_ContextType, "chart");
  ContextType.$static_DATASET__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATASET"), ContextType.$ordinal_DATASET__org_pepstock_charba_client_enums_ContextType, "dataset");
  ContextType.$static_DATA__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA"), ContextType.$ordinal_DATA__org_pepstock_charba_client_enums_ContextType, "data");
  ContextType.$static_SCALE__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SCALE"), ContextType.$ordinal_SCALE__org_pepstock_charba_client_enums_ContextType, "scale");
  ContextType.$static_TICK__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICK"), ContextType.$ordinal_TICK__org_pepstock_charba_client_enums_ContextType, "tick");
  ContextType.$static_POINT_LABEL__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_LABEL"), ContextType.$ordinal_POINT_LABEL__org_pepstock_charba_client_enums_ContextType, "pointLabel");
  ContextType.$static_TOOLTIP__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOOLTIP"), ContextType.$ordinal_TOOLTIP__org_pepstock_charba_client_enums_ContextType, "tooltip");
  ContextType.$static_DATALABELS__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATALABELS"), ContextType.$ordinal_DATALABELS__org_pepstock_charba_client_enums_ContextType, "datalabels");
  ContextType.$static_LABELS__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABELS"), ContextType.$ordinal_LABELS__org_pepstock_charba_client_enums_ContextType, "labels");
  ContextType.$static_ANNOTATION__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANNOTATION"), ContextType.$ordinal_ANNOTATION__org_pepstock_charba_client_enums_ContextType, "annotation");
  ContextType.$static_ZOOM__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ZOOM"), ContextType.$ordinal_ZOOM__org_pepstock_charba_client_enums_ContextType, "zoom");
  ContextType.$static_METER__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("METER"), ContextType.$ordinal_METER__org_pepstock_charba_client_enums_ContextType, "meter");
  ContextType.$static_SEGMENT__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SEGMENT"), ContextType.$ordinal_SEGMENT__org_pepstock_charba_client_enums_ContextType, "segment");
  ContextType.$static_UNKNOWN__org_pepstock_charba_client_enums_ContextType = ContextType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNKNOWN"), ContextType.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_ContextType, "unknown");
  ContextType.f_namesToValuesMap__org_pepstock_charba_client_enums_ContextType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ContextType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ContextType}*/
ContextType.$static_CHART__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_DATASET__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_DATA__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_SCALE__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_TICK__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_POINT_LABEL__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_TOOLTIP__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_DATALABELS__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_LABELS__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_ANNOTATION__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_ZOOM__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_METER__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_SEGMENT__org_pepstock_charba_client_enums_ContextType;
/**@private {!ContextType}*/
ContextType.$static_UNKNOWN__org_pepstock_charba_client_enums_ContextType;
/**@type {Map<?string, !ContextType>}*/
ContextType.f_namesToValuesMap__org_pepstock_charba_client_enums_ContextType_;
/**@const {number}*/
ContextType.$ordinal_CHART__org_pepstock_charba_client_enums_ContextType = 0;
/**@const {number}*/
ContextType.$ordinal_DATASET__org_pepstock_charba_client_enums_ContextType = 1;
/**@const {number}*/
ContextType.$ordinal_DATA__org_pepstock_charba_client_enums_ContextType = 2;
/**@const {number}*/
ContextType.$ordinal_SCALE__org_pepstock_charba_client_enums_ContextType = 3;
/**@const {number}*/
ContextType.$ordinal_TICK__org_pepstock_charba_client_enums_ContextType = 4;
/**@const {number}*/
ContextType.$ordinal_POINT_LABEL__org_pepstock_charba_client_enums_ContextType = 5;
/**@const {number}*/
ContextType.$ordinal_TOOLTIP__org_pepstock_charba_client_enums_ContextType = 6;
/**@const {number}*/
ContextType.$ordinal_DATALABELS__org_pepstock_charba_client_enums_ContextType = 7;
/**@const {number}*/
ContextType.$ordinal_LABELS__org_pepstock_charba_client_enums_ContextType = 8;
/**@const {number}*/
ContextType.$ordinal_ANNOTATION__org_pepstock_charba_client_enums_ContextType = 9;
/**@const {number}*/
ContextType.$ordinal_ZOOM__org_pepstock_charba_client_enums_ContextType = 10;
/**@const {number}*/
ContextType.$ordinal_METER__org_pepstock_charba_client_enums_ContextType = 11;
/**@const {number}*/
ContextType.$ordinal_SEGMENT__org_pepstock_charba_client_enums_ContextType = 12;
/**@const {number}*/
ContextType.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_ContextType = 13;
Key.$markImplementor(ContextType);
$Util.$setClassMetadataForEnum(ContextType, "org.pepstock.charba.client.enums.ContextType");

exports = ContextType;

//# sourceMappingURL=ContextType.js.map
