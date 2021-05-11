goog.module('org.pepstock.charba.client.enums.AxisType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AxisType>}
 * @implements {Key}
 */
class AxisType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_AxisType_;
  /**@type {DefaultScaleId}*/
  this.f_defaultScaleId__org_pepstock_charba_client_enums_AxisType_;
  /**@type {ScaleDataType}*/
  this.f_dataType__org_pepstock_charba_client_enums_AxisType_;
 }
 /** @return {!AxisType} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** DefaultScaleId */ defaultScaleId, /** ScaleDataType */ dataType) {
  let $instance = new AxisType();
  $instance.$ctor__org_pepstock_charba_client_enums_AxisType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($name, $ordinal, value, defaultScaleId, dataType);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_AxisType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** DefaultScaleId */ defaultScaleId, /** ScaleDataType */ dataType) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_AxisType_ = value;
  this.f_defaultScaleId__org_pepstock_charba_client_enums_AxisType_ = defaultScaleId;
  this.f_dataType__org_pepstock_charba_client_enums_AxisType_ = dataType;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_AxisType_;
 }
 /** @return {DefaultScaleId} */
 m_getDefaultScaleId__() {
  return this.f_defaultScaleId__org_pepstock_charba_client_enums_AxisType_;
 }
 /** @return {ScaleDataType} */
 m_getDataType__() {
  return this.f_dataType__org_pepstock_charba_client_enums_AxisType_;
 }
 /** @return {!AxisType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AxisType.$clinit();
  if ($Equality.$same(AxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisType_, null)) {
   AxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisType_ = $Enums.createMapFromValues(AxisType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisType_);
 }
 /** @return {!Array<!AxisType>} */
 static m_values__() {
  AxisType.$clinit();
  return /**@type {!Array<AxisType>}*/ ($Arrays.$init([AxisType.$static_LINEAR__org_pepstock_charba_client_enums_AxisType, AxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_AxisType, AxisType.$static_CATEGORY__org_pepstock_charba_client_enums_AxisType, AxisType.$static_TIME__org_pepstock_charba_client_enums_AxisType, AxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_AxisType, AxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType], AxisType));
 }
 /** @return {!AxisType} */
 static get f_LINEAR__org_pepstock_charba_client_enums_AxisType() {
  return (AxisType.$clinit(), AxisType.$static_LINEAR__org_pepstock_charba_client_enums_AxisType);
 }
 /** @return {!AxisType} */
 static get f_LOGARITHMIC__org_pepstock_charba_client_enums_AxisType() {
  return (AxisType.$clinit(), AxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_AxisType);
 }
 /** @return {!AxisType} */
 static get f_CATEGORY__org_pepstock_charba_client_enums_AxisType() {
  return (AxisType.$clinit(), AxisType.$static_CATEGORY__org_pepstock_charba_client_enums_AxisType);
 }
 /** @return {!AxisType} */
 static get f_TIME__org_pepstock_charba_client_enums_AxisType() {
  return (AxisType.$clinit(), AxisType.$static_TIME__org_pepstock_charba_client_enums_AxisType);
 }
 /** @return {!AxisType} */
 static get f_TIMESERIES__org_pepstock_charba_client_enums_AxisType() {
  return (AxisType.$clinit(), AxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_AxisType);
 }
 /** @return {!AxisType} */
 static get f_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType() {
  return (AxisType.$clinit(), AxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType);
 }
 
 static $clinit() {
  AxisType.$clinit = () =>{};
  AxisType.$loadModules();
  Enum.$clinit();
  AxisType.$static_LINEAR__org_pepstock_charba_client_enums_AxisType = AxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("LINEAR"), AxisType.$ordinal_LINEAR__org_pepstock_charba_client_enums_AxisType, "linear", DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
  AxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_AxisType = AxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("LOGARITHMIC"), AxisType.$ordinal_LOGARITHMIC__org_pepstock_charba_client_enums_AxisType, "logarithmic", DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
  AxisType.$static_CATEGORY__org_pepstock_charba_client_enums_AxisType = AxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("CATEGORY"), AxisType.$ordinal_CATEGORY__org_pepstock_charba_client_enums_AxisType, "category", DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_STRING__org_pepstock_charba_client_enums_ScaleDataType);
  AxisType.$static_TIME__org_pepstock_charba_client_enums_AxisType = AxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("TIME"), AxisType.$ordinal_TIME__org_pepstock_charba_client_enums_AxisType, "time", DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_DATE__org_pepstock_charba_client_enums_ScaleDataType);
  AxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_AxisType = AxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("TIMESERIES"), AxisType.$ordinal_TIMESERIES__org_pepstock_charba_client_enums_AxisType, "timeseries", DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_DATE__org_pepstock_charba_client_enums_ScaleDataType);
  AxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType = AxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("RADIAL_LINEAR"), AxisType.$ordinal_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType, "radialLinear", DefaultScaleId.f_R__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
  AxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AxisType}*/
AxisType.$static_LINEAR__org_pepstock_charba_client_enums_AxisType;
/**@private {!AxisType}*/
AxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_AxisType;
/**@private {!AxisType}*/
AxisType.$static_CATEGORY__org_pepstock_charba_client_enums_AxisType;
/**@private {!AxisType}*/
AxisType.$static_TIME__org_pepstock_charba_client_enums_AxisType;
/**@private {!AxisType}*/
AxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_AxisType;
/**@private {!AxisType}*/
AxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType;
/**@type {Map<?string, !AxisType>}*/
AxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisType_;
/**@const {number}*/
AxisType.$ordinal_LINEAR__org_pepstock_charba_client_enums_AxisType = 0;
/**@const {number}*/
AxisType.$ordinal_LOGARITHMIC__org_pepstock_charba_client_enums_AxisType = 1;
/**@const {number}*/
AxisType.$ordinal_CATEGORY__org_pepstock_charba_client_enums_AxisType = 2;
/**@const {number}*/
AxisType.$ordinal_TIME__org_pepstock_charba_client_enums_AxisType = 3;
/**@const {number}*/
AxisType.$ordinal_TIMESERIES__org_pepstock_charba_client_enums_AxisType = 4;
/**@const {number}*/
AxisType.$ordinal_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType = 5;
Key.$markImplementor(AxisType);
$Util.$setClassMetadataForEnum(AxisType, "org.pepstock.charba.client.enums.AxisType");

exports = AxisType;

//# sourceMappingURL=AxisType.js.map
