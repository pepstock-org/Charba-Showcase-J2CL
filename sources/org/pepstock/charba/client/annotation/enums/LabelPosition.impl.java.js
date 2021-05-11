goog.module('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LabelPosition>}
 * @implements {Key}
 */
class LabelPosition extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_annotation_enums_LabelPosition_;
 }
 /** @return {!LabelPosition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new LabelPosition();
  $instance.$ctor__org_pepstock_charba_client_annotation_enums_LabelPosition__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_enums_LabelPosition__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_annotation_enums_LabelPosition_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_annotation_enums_LabelPosition_;
 }
 /** @return {!LabelPosition} */
 static m_valueOf__java_lang_String(/** string */ name) {
  LabelPosition.$clinit();
  if ($Equality.$same(LabelPosition.f_namesToValuesMap__org_pepstock_charba_client_annotation_enums_LabelPosition_, null)) {
   LabelPosition.f_namesToValuesMap__org_pepstock_charba_client_annotation_enums_LabelPosition_ = $Enums.createMapFromValues(LabelPosition.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LabelPosition.f_namesToValuesMap__org_pepstock_charba_client_annotation_enums_LabelPosition_);
 }
 /** @return {!Array<!LabelPosition>} */
 static m_values__() {
  LabelPosition.$clinit();
  return /**@type {!Array<LabelPosition>}*/ ($Arrays.$init([LabelPosition.$static_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition, LabelPosition.$static_START__org_pepstock_charba_client_annotation_enums_LabelPosition, LabelPosition.$static_END__org_pepstock_charba_client_annotation_enums_LabelPosition], LabelPosition));
 }
 /** @return {!LabelPosition} */
 static get f_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition() {
  return (LabelPosition.$clinit(), LabelPosition.$static_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition);
 }
 /** @return {!LabelPosition} */
 static get f_START__org_pepstock_charba_client_annotation_enums_LabelPosition() {
  return (LabelPosition.$clinit(), LabelPosition.$static_START__org_pepstock_charba_client_annotation_enums_LabelPosition);
 }
 /** @return {!LabelPosition} */
 static get f_END__org_pepstock_charba_client_annotation_enums_LabelPosition() {
  return (LabelPosition.$clinit(), LabelPosition.$static_END__org_pepstock_charba_client_annotation_enums_LabelPosition);
 }
 
 static $clinit() {
  LabelPosition.$clinit = () =>{};
  LabelPosition.$loadModules();
  Enum.$clinit();
  LabelPosition.$static_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition = LabelPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), LabelPosition.$ordinal_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition, "center");
  LabelPosition.$static_START__org_pepstock_charba_client_annotation_enums_LabelPosition = LabelPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), LabelPosition.$ordinal_START__org_pepstock_charba_client_annotation_enums_LabelPosition, "start");
  LabelPosition.$static_END__org_pepstock_charba_client_annotation_enums_LabelPosition = LabelPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END"), LabelPosition.$ordinal_END__org_pepstock_charba_client_annotation_enums_LabelPosition, "end");
  LabelPosition.f_namesToValuesMap__org_pepstock_charba_client_annotation_enums_LabelPosition_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelPosition;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!LabelPosition}*/
LabelPosition.$static_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition;
/**@private {!LabelPosition}*/
LabelPosition.$static_START__org_pepstock_charba_client_annotation_enums_LabelPosition;
/**@private {!LabelPosition}*/
LabelPosition.$static_END__org_pepstock_charba_client_annotation_enums_LabelPosition;
/**@type {Map<?string, !LabelPosition>}*/
LabelPosition.f_namesToValuesMap__org_pepstock_charba_client_annotation_enums_LabelPosition_;
/**@const {number}*/
LabelPosition.$ordinal_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition = 0;
/**@const {number}*/
LabelPosition.$ordinal_START__org_pepstock_charba_client_annotation_enums_LabelPosition = 1;
/**@const {number}*/
LabelPosition.$ordinal_END__org_pepstock_charba_client_annotation_enums_LabelPosition = 2;
Key.$markImplementor(LabelPosition);
$Util.$setClassMetadataForEnum(LabelPosition, "org.pepstock.charba.client.annotation.enums.LabelPosition");

exports = LabelPosition;

//# sourceMappingURL=LabelPosition.js.map
