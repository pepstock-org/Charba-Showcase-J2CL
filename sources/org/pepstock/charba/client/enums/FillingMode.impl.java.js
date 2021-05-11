goog.module('org.pepstock.charba.client.enums.FillingMode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<FillingMode>}
 * @implements {Key}
 */
class FillingMode extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_FillingMode_;
 }
 /** @return {!FillingMode} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new FillingMode();
  $instance.$ctor__org_pepstock_charba_client_enums_FillingMode__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_FillingMode__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_FillingMode_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_FillingMode_;
 }
 /** @return {!FillingMode} */
 static m_valueOf__java_lang_String(/** string */ name) {
  FillingMode.$clinit();
  if ($Equality.$same(FillingMode.f_namesToValuesMap__org_pepstock_charba_client_enums_FillingMode_, null)) {
   FillingMode.f_namesToValuesMap__org_pepstock_charba_client_enums_FillingMode_ = $Enums.createMapFromValues(FillingMode.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, FillingMode.f_namesToValuesMap__org_pepstock_charba_client_enums_FillingMode_);
 }
 /** @return {!Array<!FillingMode>} */
 static m_values__() {
  FillingMode.$clinit();
  return /**@type {!Array<FillingMode>}*/ ($Arrays.$init([FillingMode.$static_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, FillingMode.$static_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, FillingMode.$static_PREDEFINED__org_pepstock_charba_client_enums_FillingMode, FillingMode.$static_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode], FillingMode));
 }
 /** @return {!FillingMode} */
 static get f_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode() {
  return (FillingMode.$clinit(), FillingMode.$static_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode);
 }
 /** @return {!FillingMode} */
 static get f_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode() {
  return (FillingMode.$clinit(), FillingMode.$static_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode);
 }
 /** @return {!FillingMode} */
 static get f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode() {
  return (FillingMode.$clinit(), FillingMode.$static_PREDEFINED__org_pepstock_charba_client_enums_FillingMode);
 }
 /** @return {!FillingMode} */
 static get f_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode() {
  return (FillingMode.$clinit(), FillingMode.$static_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode);
 }
 
 static $clinit() {
  FillingMode.$clinit = () =>{};
  FillingMode.$loadModules();
  Enum.$clinit();
  FillingMode.$static_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode = FillingMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ABSOLUTE_DATASET_INDEX"), FillingMode.$ordinal_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, "absoluteDatasetIndex");
  FillingMode.$static_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode = FillingMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RELATIVE_DATASET_INDEX"), FillingMode.$ordinal_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, "relativeDatasetIndex");
  FillingMode.$static_PREDEFINED__org_pepstock_charba_client_enums_FillingMode = FillingMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PREDEFINED"), FillingMode.$ordinal_PREDEFINED__org_pepstock_charba_client_enums_FillingMode, "predefined");
  FillingMode.$static_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode = FillingMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PREDEFINED_BOOLEAN"), FillingMode.$ordinal_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode, "predefinedBoolean");
  FillingMode.f_namesToValuesMap__org_pepstock_charba_client_enums_FillingMode_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FillingMode;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!FillingMode}*/
FillingMode.$static_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode;
/**@private {!FillingMode}*/
FillingMode.$static_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode;
/**@private {!FillingMode}*/
FillingMode.$static_PREDEFINED__org_pepstock_charba_client_enums_FillingMode;
/**@private {!FillingMode}*/
FillingMode.$static_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode;
/**@type {Map<?string, !FillingMode>}*/
FillingMode.f_namesToValuesMap__org_pepstock_charba_client_enums_FillingMode_;
/**@const {number}*/
FillingMode.$ordinal_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode = 0;
/**@const {number}*/
FillingMode.$ordinal_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode = 1;
/**@const {number}*/
FillingMode.$ordinal_PREDEFINED__org_pepstock_charba_client_enums_FillingMode = 2;
/**@const {number}*/
FillingMode.$ordinal_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode = 3;
Key.$markImplementor(FillingMode);
$Util.$setClassMetadataForEnum(FillingMode, "org.pepstock.charba.client.enums.FillingMode");

exports = FillingMode;

//# sourceMappingURL=FillingMode.js.map
