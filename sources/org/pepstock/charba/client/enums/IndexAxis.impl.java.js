goog.module('org.pepstock.charba.client.enums.IndexAxis$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<IndexAxis>}
 * @implements {Key}
 */
class IndexAxis extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_IndexAxis_;
 }
 /** @return {!IndexAxis} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new IndexAxis();
  $instance.$ctor__org_pepstock_charba_client_enums_IndexAxis__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_IndexAxis__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_IndexAxis_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_IndexAxis_;
 }
 /** @return {!IndexAxis} */
 static m_valueOf__java_lang_String(/** string */ name) {
  IndexAxis.$clinit();
  if ($Equality.$same(IndexAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_IndexAxis_, null)) {
   IndexAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_IndexAxis_ = $Enums.createMapFromValues(IndexAxis.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, IndexAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_IndexAxis_);
 }
 /** @return {!Array<!IndexAxis>} */
 static m_values__() {
  IndexAxis.$clinit();
  return /**@type {!Array<IndexAxis>}*/ ($Arrays.$init([IndexAxis.$static_X__org_pepstock_charba_client_enums_IndexAxis, IndexAxis.$static_Y__org_pepstock_charba_client_enums_IndexAxis], IndexAxis));
 }
 /** @return {!IndexAxis} */
 static get f_X__org_pepstock_charba_client_enums_IndexAxis() {
  return (IndexAxis.$clinit(), IndexAxis.$static_X__org_pepstock_charba_client_enums_IndexAxis);
 }
 /** @return {!IndexAxis} */
 static get f_Y__org_pepstock_charba_client_enums_IndexAxis() {
  return (IndexAxis.$clinit(), IndexAxis.$static_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 
 static $clinit() {
  IndexAxis.$clinit = () =>{};
  IndexAxis.$loadModules();
  Enum.$clinit();
  IndexAxis.$static_X__org_pepstock_charba_client_enums_IndexAxis = IndexAxis.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X"), IndexAxis.$ordinal_X__org_pepstock_charba_client_enums_IndexAxis, "x");
  IndexAxis.$static_Y__org_pepstock_charba_client_enums_IndexAxis = IndexAxis.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y"), IndexAxis.$ordinal_Y__org_pepstock_charba_client_enums_IndexAxis, "y");
  IndexAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_IndexAxis_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IndexAxis;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!IndexAxis}*/
IndexAxis.$static_X__org_pepstock_charba_client_enums_IndexAxis;
/**@private {!IndexAxis}*/
IndexAxis.$static_Y__org_pepstock_charba_client_enums_IndexAxis;
/**@type {Map<?string, !IndexAxis>}*/
IndexAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_IndexAxis_;
/**@const {number}*/
IndexAxis.$ordinal_X__org_pepstock_charba_client_enums_IndexAxis = 0;
/**@const {number}*/
IndexAxis.$ordinal_Y__org_pepstock_charba_client_enums_IndexAxis = 1;
Key.$markImplementor(IndexAxis);
$Util.$setClassMetadataForEnum(IndexAxis, "org.pepstock.charba.client.enums.IndexAxis");

exports = IndexAxis;

//# sourceMappingURL=IndexAxis.js.map
