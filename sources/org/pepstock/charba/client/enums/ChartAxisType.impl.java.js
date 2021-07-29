goog.module('org.pepstock.charba.client.enums.ChartAxisType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisType = goog.require('org.pepstock.charba.client.configuration.AxisType$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ChartAxisType>}
 * @implements {AxisType}
 */
class ChartAxisType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_ChartAxisType_;
  /**@type {DefaultScaleId}*/
  this.f_defaultScaleId__org_pepstock_charba_client_enums_ChartAxisType_;
  /**@type {ScaleDataType}*/
  this.f_dataType__org_pepstock_charba_client_enums_ChartAxisType_;
 }
 /** @return {!ChartAxisType} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** DefaultScaleId */ defaultScaleId, /** ScaleDataType */ dataType) {
  let $instance = new ChartAxisType();
  $instance.$ctor__org_pepstock_charba_client_enums_ChartAxisType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($name, $ordinal, value, defaultScaleId, dataType);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ChartAxisType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** DefaultScaleId */ defaultScaleId, /** ScaleDataType */ dataType) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_ChartAxisType_ = value;
  this.f_defaultScaleId__org_pepstock_charba_client_enums_ChartAxisType_ = defaultScaleId;
  this.f_dataType__org_pepstock_charba_client_enums_ChartAxisType_ = dataType;
 }
 /** @return {boolean} */
 m_is__org_pepstock_charba_client_configuration_AxisType(/** AxisType */ type) {
  if (AxisType.m_isValid__org_pepstock_charba_client_configuration_AxisType(type)) {
   return this.m_is__java_lang_String(type.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 m_is__java_lang_String(/** ?string */ type) {
  if (!$Equality.$same(type, null)) {
   return j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_value__org_pepstock_charba_client_enums_ChartAxisType_, type);
  }
  return false;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_ChartAxisType_;
 }
 /** @override @return {ScaleId} */
 m_getDefaultScaleId__() {
  return this.f_defaultScaleId__org_pepstock_charba_client_enums_ChartAxisType_;
 }
 /** @override @return {ScaleDataType} */
 m_getDataType__() {
  return this.f_dataType__org_pepstock_charba_client_enums_ChartAxisType_;
 }
 /** @override @return {AxisType} */
 m_getBaseType__() {
  return this;
 }
 /** @return {!ChartAxisType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ChartAxisType.$clinit();
  if ($Equality.$same(ChartAxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_ChartAxisType_, null)) {
   ChartAxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_ChartAxisType_ = $Enums.createMapFromValues(ChartAxisType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ChartAxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_ChartAxisType_);
 }
 /** @return {!Array<!ChartAxisType>} */
 static m_values__() {
  ChartAxisType.$clinit();
  return /**@type {!Array<ChartAxisType>}*/ ($Arrays.$init([ChartAxisType.$static_LINEAR__org_pepstock_charba_client_enums_ChartAxisType, ChartAxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType, ChartAxisType.$static_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType, ChartAxisType.$static_TIME__org_pepstock_charba_client_enums_ChartAxisType, ChartAxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_ChartAxisType, ChartAxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType], ChartAxisType));
 }
 /** @return {!ChartAxisType} */
 static get f_LINEAR__org_pepstock_charba_client_enums_ChartAxisType() {
  return (ChartAxisType.$clinit(), ChartAxisType.$static_LINEAR__org_pepstock_charba_client_enums_ChartAxisType);
 }
 /** @return {!ChartAxisType} */
 static get f_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType() {
  return (ChartAxisType.$clinit(), ChartAxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType);
 }
 /** @return {!ChartAxisType} */
 static get f_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType() {
  return (ChartAxisType.$clinit(), ChartAxisType.$static_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType);
 }
 /** @return {!ChartAxisType} */
 static get f_TIME__org_pepstock_charba_client_enums_ChartAxisType() {
  return (ChartAxisType.$clinit(), ChartAxisType.$static_TIME__org_pepstock_charba_client_enums_ChartAxisType);
 }
 /** @return {!ChartAxisType} */
 static get f_TIMESERIES__org_pepstock_charba_client_enums_ChartAxisType() {
  return (ChartAxisType.$clinit(), ChartAxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_ChartAxisType);
 }
 /** @return {!ChartAxisType} */
 static get f_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType() {
  return (ChartAxisType.$clinit(), ChartAxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType);
 }
 
 static $clinit() {
  ChartAxisType.$clinit = () =>{};
  ChartAxisType.$loadModules();
  Enum.$clinit();
  ChartAxisType.$static_LINEAR__org_pepstock_charba_client_enums_ChartAxisType = ChartAxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("LINEAR"), ChartAxisType.$ordinal_LINEAR__org_pepstock_charba_client_enums_ChartAxisType, "linear", DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
  ChartAxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType = ChartAxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("LOGARITHMIC"), ChartAxisType.$ordinal_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType, "logarithmic", DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
  ChartAxisType.$static_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType = ChartAxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("CATEGORY"), ChartAxisType.$ordinal_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType, "category", DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_STRING__org_pepstock_charba_client_enums_ScaleDataType);
  ChartAxisType.$static_TIME__org_pepstock_charba_client_enums_ChartAxisType = ChartAxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("TIME"), ChartAxisType.$ordinal_TIME__org_pepstock_charba_client_enums_ChartAxisType, "time", DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_DATE__org_pepstock_charba_client_enums_ScaleDataType);
  ChartAxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_ChartAxisType = ChartAxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("TIMESERIES"), ChartAxisType.$ordinal_TIMESERIES__org_pepstock_charba_client_enums_ChartAxisType, "timeseries", DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_DATE__org_pepstock_charba_client_enums_ScaleDataType);
  ChartAxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType = ChartAxisType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_DefaultScaleId__org_pepstock_charba_client_enums_ScaleDataType($Util.$makeEnumName("RADIAL_LINEAR"), ChartAxisType.$ordinal_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType, "radialLinear", DefaultScaleId.f_R__org_pepstock_charba_client_enums_DefaultScaleId, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
  ChartAxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_ChartAxisType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartAxisType;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ChartAxisType}*/
ChartAxisType.$static_LINEAR__org_pepstock_charba_client_enums_ChartAxisType;
/**@private {!ChartAxisType}*/
ChartAxisType.$static_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType;
/**@private {!ChartAxisType}*/
ChartAxisType.$static_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType;
/**@private {!ChartAxisType}*/
ChartAxisType.$static_TIME__org_pepstock_charba_client_enums_ChartAxisType;
/**@private {!ChartAxisType}*/
ChartAxisType.$static_TIMESERIES__org_pepstock_charba_client_enums_ChartAxisType;
/**@private {!ChartAxisType}*/
ChartAxisType.$static_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType;
/**@type {Map<?string, !ChartAxisType>}*/
ChartAxisType.f_namesToValuesMap__org_pepstock_charba_client_enums_ChartAxisType_;
/**@const {number}*/
ChartAxisType.$ordinal_LINEAR__org_pepstock_charba_client_enums_ChartAxisType = 0;
/**@const {number}*/
ChartAxisType.$ordinal_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType = 1;
/**@const {number}*/
ChartAxisType.$ordinal_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType = 2;
/**@const {number}*/
ChartAxisType.$ordinal_TIME__org_pepstock_charba_client_enums_ChartAxisType = 3;
/**@const {number}*/
ChartAxisType.$ordinal_TIMESERIES__org_pepstock_charba_client_enums_ChartAxisType = 4;
/**@const {number}*/
ChartAxisType.$ordinal_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType = 5;
AxisType.$markImplementor(ChartAxisType);
$Util.$setClassMetadataForEnum(ChartAxisType, "org.pepstock.charba.client.enums.ChartAxisType");

exports = ChartAxisType;

//# sourceMappingURL=ChartAxisType.js.map
