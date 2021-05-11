goog.module('org.pepstock.charba.client.enums.Fill$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsFill = goog.require('org.pepstock.charba.client.enums.IsFill$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let AbsoluteDatasetIndexFill = goog.forwardDeclare('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
let FillingMode = goog.forwardDeclare('org.pepstock.charba.client.enums.FillingMode$impl');
let RelativeDatasetIndexFill = goog.forwardDeclare('org.pepstock.charba.client.enums.RelativeDatasetIndexFill$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Fill>}
 * @implements {IsFill}
 */
class Fill extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {FillingMode}*/
  this.f_mode__org_pepstock_charba_client_enums_Fill_;
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_Fill_;
 }
 /** @return {!Fill} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** FillingMode */ mode) {
  let $instance = new Fill();
  $instance.$ctor__org_pepstock_charba_client_enums_Fill__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode($name, $ordinal, value, mode);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Fill__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** FillingMode */ mode) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Fill_ = value;
  this.f_mode__org_pepstock_charba_client_enums_Fill_ = mode;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Fill_;
 }
 /** @override @return {FillingMode} */
 m_getMode__() {
  return this.f_mode__org_pepstock_charba_client_enums_Fill_;
 }
 /** @override @return {number} */
 m_getValueAsInt__() {
  return Integer.f_MIN_VALUE__java_lang_Integer;
 }
 /** @override @return {?string} */
 m_getValue__() {
  return this.name();
 }
 /** @return {boolean} */
 static m_isPredefined__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  Fill.$clinit();
  return Fill.$isInstance(fill);
 }
 /** @return {IsFill} */
 static m_getFill__int(/** number */ index) {
  Fill.$clinit();
  return AbsoluteDatasetIndexFill.$create__int(index);
 }
 /** @return {IsFill} */
 static m_getFill__java_lang_String(/** ?string */ index) {
  Fill.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(index, "Index argument");
  for (let $array = Fill.m_values__(), $index = 0; $index < $array.length; $index++) {
   let fill = $array[$index];
   {
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(fill.m_value__(), index)) {
     return fill;
    }
   }
  }
  return RelativeDatasetIndexFill.$create__java_lang_String(index);
 }
 /** @return {!Fill} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Fill.$clinit();
  if ($Equality.$same(Fill.f_namesToValuesMap__org_pepstock_charba_client_enums_Fill_, null)) {
   Fill.f_namesToValuesMap__org_pepstock_charba_client_enums_Fill_ = $Enums.createMapFromValues(Fill.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Fill.f_namesToValuesMap__org_pepstock_charba_client_enums_Fill_);
 }
 /** @return {!Array<!Fill>} */
 static m_values__() {
  Fill.$clinit();
  return /**@type {!Array<Fill>}*/ ($Arrays.$init([Fill.$static_START__org_pepstock_charba_client_enums_Fill, Fill.$static_END__org_pepstock_charba_client_enums_Fill, Fill.$static_ORIGIN__org_pepstock_charba_client_enums_Fill, Fill.$static_STACK__org_pepstock_charba_client_enums_Fill, Fill.$static_FALSE__org_pepstock_charba_client_enums_Fill], Fill));
 }
 /** @return {!Fill} */
 static get f_START__org_pepstock_charba_client_enums_Fill() {
  return (Fill.$clinit(), Fill.$static_START__org_pepstock_charba_client_enums_Fill);
 }
 /** @return {!Fill} */
 static get f_END__org_pepstock_charba_client_enums_Fill() {
  return (Fill.$clinit(), Fill.$static_END__org_pepstock_charba_client_enums_Fill);
 }
 /** @return {!Fill} */
 static get f_ORIGIN__org_pepstock_charba_client_enums_Fill() {
  return (Fill.$clinit(), Fill.$static_ORIGIN__org_pepstock_charba_client_enums_Fill);
 }
 /** @return {!Fill} */
 static get f_STACK__org_pepstock_charba_client_enums_Fill() {
  return (Fill.$clinit(), Fill.$static_STACK__org_pepstock_charba_client_enums_Fill);
 }
 /** @return {!Fill} */
 static get f_FALSE__org_pepstock_charba_client_enums_Fill() {
  return (Fill.$clinit(), Fill.$static_FALSE__org_pepstock_charba_client_enums_Fill);
 }
 
 static $clinit() {
  Fill.$clinit = () =>{};
  Fill.$loadModules();
  Enum.$clinit();
  Fill.$static_START__org_pepstock_charba_client_enums_Fill = Fill.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode($Util.$makeEnumName("START"), Fill.$ordinal_START__org_pepstock_charba_client_enums_Fill, "start", FillingMode.f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode);
  Fill.$static_END__org_pepstock_charba_client_enums_Fill = Fill.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode($Util.$makeEnumName("END"), Fill.$ordinal_END__org_pepstock_charba_client_enums_Fill, "end", FillingMode.f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode);
  Fill.$static_ORIGIN__org_pepstock_charba_client_enums_Fill = Fill.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode($Util.$makeEnumName("ORIGIN"), Fill.$ordinal_ORIGIN__org_pepstock_charba_client_enums_Fill, "origin", FillingMode.f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode);
  Fill.$static_STACK__org_pepstock_charba_client_enums_Fill = Fill.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode($Util.$makeEnumName("STACK"), Fill.$ordinal_STACK__org_pepstock_charba_client_enums_Fill, "stack", FillingMode.f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode);
  Fill.$static_FALSE__org_pepstock_charba_client_enums_Fill = Fill.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_enums_FillingMode($Util.$makeEnumName("FALSE"), Fill.$ordinal_FALSE__org_pepstock_charba_client_enums_Fill, "false", FillingMode.f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode);
  Fill.f_namesToValuesMap__org_pepstock_charba_client_enums_Fill_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Fill;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AbsoluteDatasetIndexFill = goog.module.get('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
  FillingMode = goog.module.get('org.pepstock.charba.client.enums.FillingMode$impl');
  RelativeDatasetIndexFill = goog.module.get('org.pepstock.charba.client.enums.RelativeDatasetIndexFill$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Fill}*/
Fill.$static_START__org_pepstock_charba_client_enums_Fill;
/**@private {!Fill}*/
Fill.$static_END__org_pepstock_charba_client_enums_Fill;
/**@private {!Fill}*/
Fill.$static_ORIGIN__org_pepstock_charba_client_enums_Fill;
/**@private {!Fill}*/
Fill.$static_STACK__org_pepstock_charba_client_enums_Fill;
/**@private {!Fill}*/
Fill.$static_FALSE__org_pepstock_charba_client_enums_Fill;
/**@type {Map<?string, !Fill>}*/
Fill.f_namesToValuesMap__org_pepstock_charba_client_enums_Fill_;
/**@const {number}*/
Fill.$ordinal_START__org_pepstock_charba_client_enums_Fill = 0;
/**@const {number}*/
Fill.$ordinal_END__org_pepstock_charba_client_enums_Fill = 1;
/**@const {number}*/
Fill.$ordinal_ORIGIN__org_pepstock_charba_client_enums_Fill = 2;
/**@const {number}*/
Fill.$ordinal_STACK__org_pepstock_charba_client_enums_Fill = 3;
/**@const {number}*/
Fill.$ordinal_FALSE__org_pepstock_charba_client_enums_Fill = 4;
IsFill.$markImplementor(Fill);
$Util.$setClassMetadataForEnum(Fill, "org.pepstock.charba.client.enums.Fill");

exports = Fill;

//# sourceMappingURL=Fill.js.map
