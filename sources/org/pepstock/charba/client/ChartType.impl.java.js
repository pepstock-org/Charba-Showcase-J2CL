goog.module('org.pepstock.charba.client.ChartType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Type = goog.require('org.pepstock.charba.client.Type$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ChartType>}
 * @implements {Type}
 */
class ChartType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_ChartType_;
  /**@type {ScaleType}*/
  this.f_scaleType__org_pepstock_charba_client_ChartType_;
 }
 /** @return {!ChartType} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ScaleType */ scaleType) {
  let $instance = new ChartType();
  $instance.$ctor__org_pepstock_charba_client_ChartType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($name, $ordinal, value, scaleType);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_ChartType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ScaleType */ scaleType) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_ChartType_ = value;
  this.f_scaleType__org_pepstock_charba_client_ChartType_ = scaleType;
 }
 /** @override @return {ScaleType} */
 m_scaleType__() {
  return this.f_scaleType__org_pepstock_charba_client_ChartType_;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_ChartType_;
 }
 /** @return {!ChartType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ChartType.$clinit();
  if ($Equality.$same(ChartType.f_namesToValuesMap__org_pepstock_charba_client_ChartType_, null)) {
   ChartType.f_namesToValuesMap__org_pepstock_charba_client_ChartType_ = $Enums.createMapFromValues(ChartType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ChartType.f_namesToValuesMap__org_pepstock_charba_client_ChartType_);
 }
 /** @return {!Array<!ChartType>} */
 static m_values__() {
  ChartType.$clinit();
  return /**@type {!Array<ChartType>}*/ ($Arrays.$init([ChartType.$static_LINE__org_pepstock_charba_client_ChartType, ChartType.$static_BAR__org_pepstock_charba_client_ChartType, ChartType.$static_PIE__org_pepstock_charba_client_ChartType, ChartType.$static_DOUGHNUT__org_pepstock_charba_client_ChartType, ChartType.$static_RADAR__org_pepstock_charba_client_ChartType, ChartType.$static_POLAR_AREA__org_pepstock_charba_client_ChartType, ChartType.$static_SCATTER__org_pepstock_charba_client_ChartType, ChartType.$static_BUBBLE__org_pepstock_charba_client_ChartType], ChartType));
 }
 /** @return {!ChartType} */
 static get f_LINE__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_LINE__org_pepstock_charba_client_ChartType);
 }
 /** @return {!ChartType} */
 static get f_BAR__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_BAR__org_pepstock_charba_client_ChartType);
 }
 /** @return {!ChartType} */
 static get f_PIE__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_PIE__org_pepstock_charba_client_ChartType);
 }
 /** @return {!ChartType} */
 static get f_DOUGHNUT__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_DOUGHNUT__org_pepstock_charba_client_ChartType);
 }
 /** @return {!ChartType} */
 static get f_RADAR__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_RADAR__org_pepstock_charba_client_ChartType);
 }
 /** @return {!ChartType} */
 static get f_POLAR_AREA__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_POLAR_AREA__org_pepstock_charba_client_ChartType);
 }
 /** @return {!ChartType} */
 static get f_SCATTER__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_SCATTER__org_pepstock_charba_client_ChartType);
 }
 /** @return {!ChartType} */
 static get f_BUBBLE__org_pepstock_charba_client_ChartType() {
  return (ChartType.$clinit(), ChartType.$static_BUBBLE__org_pepstock_charba_client_ChartType);
 }
 
 static $clinit() {
  ChartType.$clinit = () =>{};
  ChartType.$loadModules();
  Enum.$clinit();
  ChartType.$static_LINE__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("LINE"), ChartType.$ordinal_LINE__org_pepstock_charba_client_ChartType, "line", ScaleType.f_MULTI__org_pepstock_charba_client_ScaleType);
  ChartType.$static_BAR__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("BAR"), ChartType.$ordinal_BAR__org_pepstock_charba_client_ChartType, "bar", ScaleType.f_MULTI__org_pepstock_charba_client_ScaleType);
  ChartType.$static_PIE__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("PIE"), ChartType.$ordinal_PIE__org_pepstock_charba_client_ChartType, "pie", ScaleType.f_NONE__org_pepstock_charba_client_ScaleType);
  ChartType.$static_DOUGHNUT__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("DOUGHNUT"), ChartType.$ordinal_DOUGHNUT__org_pepstock_charba_client_ChartType, "doughnut", ScaleType.f_NONE__org_pepstock_charba_client_ScaleType);
  ChartType.$static_RADAR__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("RADAR"), ChartType.$ordinal_RADAR__org_pepstock_charba_client_ChartType, "radar", ScaleType.f_SINGLE__org_pepstock_charba_client_ScaleType);
  ChartType.$static_POLAR_AREA__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("POLAR_AREA"), ChartType.$ordinal_POLAR_AREA__org_pepstock_charba_client_ChartType, "polarArea", ScaleType.f_SINGLE__org_pepstock_charba_client_ScaleType);
  ChartType.$static_SCATTER__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("SCATTER"), ChartType.$ordinal_SCATTER__org_pepstock_charba_client_ChartType, "scatter", ScaleType.f_MULTI__org_pepstock_charba_client_ScaleType);
  ChartType.$static_BUBBLE__org_pepstock_charba_client_ChartType = ChartType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_ScaleType($Util.$makeEnumName("BUBBLE"), ChartType.$ordinal_BUBBLE__org_pepstock_charba_client_ChartType, "bubble", ScaleType.f_MULTI__org_pepstock_charba_client_ScaleType);
  ChartType.f_namesToValuesMap__org_pepstock_charba_client_ChartType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ChartType}*/
ChartType.$static_LINE__org_pepstock_charba_client_ChartType;
/**@private {!ChartType}*/
ChartType.$static_BAR__org_pepstock_charba_client_ChartType;
/**@private {!ChartType}*/
ChartType.$static_PIE__org_pepstock_charba_client_ChartType;
/**@private {!ChartType}*/
ChartType.$static_DOUGHNUT__org_pepstock_charba_client_ChartType;
/**@private {!ChartType}*/
ChartType.$static_RADAR__org_pepstock_charba_client_ChartType;
/**@private {!ChartType}*/
ChartType.$static_POLAR_AREA__org_pepstock_charba_client_ChartType;
/**@private {!ChartType}*/
ChartType.$static_SCATTER__org_pepstock_charba_client_ChartType;
/**@private {!ChartType}*/
ChartType.$static_BUBBLE__org_pepstock_charba_client_ChartType;
/**@type {Map<?string, !ChartType>}*/
ChartType.f_namesToValuesMap__org_pepstock_charba_client_ChartType_;
/**@const {number}*/
ChartType.$ordinal_LINE__org_pepstock_charba_client_ChartType = 0;
/**@const {number}*/
ChartType.$ordinal_BAR__org_pepstock_charba_client_ChartType = 1;
/**@const {number}*/
ChartType.$ordinal_PIE__org_pepstock_charba_client_ChartType = 2;
/**@const {number}*/
ChartType.$ordinal_DOUGHNUT__org_pepstock_charba_client_ChartType = 3;
/**@const {number}*/
ChartType.$ordinal_RADAR__org_pepstock_charba_client_ChartType = 4;
/**@const {number}*/
ChartType.$ordinal_POLAR_AREA__org_pepstock_charba_client_ChartType = 5;
/**@const {number}*/
ChartType.$ordinal_SCATTER__org_pepstock_charba_client_ChartType = 6;
/**@const {number}*/
ChartType.$ordinal_BUBBLE__org_pepstock_charba_client_ChartType = 7;
Type.$markImplementor(ChartType);
$Util.$setClassMetadataForEnum(ChartType, "org.pepstock.charba.client.ChartType");

exports = ChartType;

//# sourceMappingURL=ChartType.js.map
