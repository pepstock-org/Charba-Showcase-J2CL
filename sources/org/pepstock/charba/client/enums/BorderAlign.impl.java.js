goog.module('org.pepstock.charba.client.enums.BorderAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<BorderAlign>}
 * @implements {Key}
 */
class BorderAlign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_BorderAlign_;
 }
 /** @return {!BorderAlign} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new BorderAlign();
  $instance.$ctor__org_pepstock_charba_client_enums_BorderAlign__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_BorderAlign__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_BorderAlign_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_BorderAlign_;
 }
 /** @return {!BorderAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  BorderAlign.$clinit();
  if ($Equality.$same(BorderAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderAlign_, null)) {
   BorderAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderAlign_ = $Enums.createMapFromValues(BorderAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, BorderAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderAlign_);
 }
 /** @return {!Array<!BorderAlign>} */
 static m_values__() {
  BorderAlign.$clinit();
  return /**@type {!Array<BorderAlign>}*/ ($Arrays.$init([BorderAlign.$static_CENTER__org_pepstock_charba_client_enums_BorderAlign, BorderAlign.$static_INNER__org_pepstock_charba_client_enums_BorderAlign], BorderAlign));
 }
 /** @return {!BorderAlign} */
 static get f_CENTER__org_pepstock_charba_client_enums_BorderAlign() {
  return (BorderAlign.$clinit(), BorderAlign.$static_CENTER__org_pepstock_charba_client_enums_BorderAlign);
 }
 /** @return {!BorderAlign} */
 static get f_INNER__org_pepstock_charba_client_enums_BorderAlign() {
  return (BorderAlign.$clinit(), BorderAlign.$static_INNER__org_pepstock_charba_client_enums_BorderAlign);
 }
 
 static $clinit() {
  BorderAlign.$clinit = () =>{};
  BorderAlign.$loadModules();
  Enum.$clinit();
  BorderAlign.$static_CENTER__org_pepstock_charba_client_enums_BorderAlign = BorderAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), BorderAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_BorderAlign, "center");
  BorderAlign.$static_INNER__org_pepstock_charba_client_enums_BorderAlign = BorderAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INNER"), BorderAlign.$ordinal_INNER__org_pepstock_charba_client_enums_BorderAlign, "inner");
  BorderAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!BorderAlign}*/
BorderAlign.$static_CENTER__org_pepstock_charba_client_enums_BorderAlign;
/**@private {!BorderAlign}*/
BorderAlign.$static_INNER__org_pepstock_charba_client_enums_BorderAlign;
/**@type {Map<?string, !BorderAlign>}*/
BorderAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderAlign_;
/**@const {number}*/
BorderAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_BorderAlign = 0;
/**@const {number}*/
BorderAlign.$ordinal_INNER__org_pepstock_charba_client_enums_BorderAlign = 1;
Key.$markImplementor(BorderAlign);
$Util.$setClassMetadataForEnum(BorderAlign, "org.pepstock.charba.client.enums.BorderAlign");

exports = BorderAlign;

//# sourceMappingURL=BorderAlign.js.map
