goog.module('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ScaleTitleAlign>}
 * @implements {Key}
 */
class ScaleTitleAlign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_ScaleTitleAlign_;
 }
 /** @return {!ScaleTitleAlign} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ScaleTitleAlign();
  $instance.$ctor__org_pepstock_charba_client_enums_ScaleTitleAlign__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ScaleTitleAlign__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_ScaleTitleAlign_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_ScaleTitleAlign_;
 }
 /** @return {!ScaleTitleAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ScaleTitleAlign.$clinit();
  if ($Equality.$same(ScaleTitleAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleTitleAlign_, null)) {
   ScaleTitleAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleTitleAlign_ = $Enums.createMapFromValues(ScaleTitleAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ScaleTitleAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleTitleAlign_);
 }
 /** @return {!Array<!ScaleTitleAlign>} */
 static m_values__() {
  ScaleTitleAlign.$clinit();
  return /**@type {!Array<ScaleTitleAlign>}*/ ($Arrays.$init([ScaleTitleAlign.$static_START__org_pepstock_charba_client_enums_ScaleTitleAlign, ScaleTitleAlign.$static_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign, ScaleTitleAlign.$static_END__org_pepstock_charba_client_enums_ScaleTitleAlign], ScaleTitleAlign));
 }
 /** @return {!ScaleTitleAlign} */
 static get f_START__org_pepstock_charba_client_enums_ScaleTitleAlign() {
  return (ScaleTitleAlign.$clinit(), ScaleTitleAlign.$static_START__org_pepstock_charba_client_enums_ScaleTitleAlign);
 }
 /** @return {!ScaleTitleAlign} */
 static get f_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign() {
  return (ScaleTitleAlign.$clinit(), ScaleTitleAlign.$static_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign);
 }
 /** @return {!ScaleTitleAlign} */
 static get f_END__org_pepstock_charba_client_enums_ScaleTitleAlign() {
  return (ScaleTitleAlign.$clinit(), ScaleTitleAlign.$static_END__org_pepstock_charba_client_enums_ScaleTitleAlign);
 }
 
 static $clinit() {
  ScaleTitleAlign.$clinit = () =>{};
  ScaleTitleAlign.$loadModules();
  Enum.$clinit();
  ScaleTitleAlign.$static_START__org_pepstock_charba_client_enums_ScaleTitleAlign = ScaleTitleAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), ScaleTitleAlign.$ordinal_START__org_pepstock_charba_client_enums_ScaleTitleAlign, "start");
  ScaleTitleAlign.$static_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign = ScaleTitleAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), ScaleTitleAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign, "center");
  ScaleTitleAlign.$static_END__org_pepstock_charba_client_enums_ScaleTitleAlign = ScaleTitleAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END"), ScaleTitleAlign.$ordinal_END__org_pepstock_charba_client_enums_ScaleTitleAlign, "end");
  ScaleTitleAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleTitleAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleTitleAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ScaleTitleAlign}*/
ScaleTitleAlign.$static_START__org_pepstock_charba_client_enums_ScaleTitleAlign;
/**@private {!ScaleTitleAlign}*/
ScaleTitleAlign.$static_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign;
/**@private {!ScaleTitleAlign}*/
ScaleTitleAlign.$static_END__org_pepstock_charba_client_enums_ScaleTitleAlign;
/**@type {Map<?string, !ScaleTitleAlign>}*/
ScaleTitleAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleTitleAlign_;
/**@const {number}*/
ScaleTitleAlign.$ordinal_START__org_pepstock_charba_client_enums_ScaleTitleAlign = 0;
/**@const {number}*/
ScaleTitleAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_ScaleTitleAlign = 1;
/**@const {number}*/
ScaleTitleAlign.$ordinal_END__org_pepstock_charba_client_enums_ScaleTitleAlign = 2;
Key.$markImplementor(ScaleTitleAlign);
$Util.$setClassMetadataForEnum(ScaleTitleAlign, "org.pepstock.charba.client.enums.ScaleTitleAlign");

exports = ScaleTitleAlign;

//# sourceMappingURL=ScaleTitleAlign.js.map
