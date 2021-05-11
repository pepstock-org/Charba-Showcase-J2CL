goog.module('org.pepstock.charba.client.intl.enums.Notation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Notation>}
 * @implements {Key}
 */
class Notation extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_Notation_;
 }
 /** @return {!Notation} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Notation();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_Notation__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_Notation__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_Notation_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_Notation_;
 }
 /** @return {!Notation} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Notation.$clinit();
  if ($Equality.$same(Notation.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Notation_, null)) {
   Notation.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Notation_ = $Enums.createMapFromValues(Notation.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Notation.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Notation_);
 }
 /** @return {!Array<!Notation>} */
 static m_values__() {
  Notation.$clinit();
  return /**@type {!Array<Notation>}*/ ($Arrays.$init([Notation.$static_STANDARD__org_pepstock_charba_client_intl_enums_Notation, Notation.$static_SCIENTIFIC__org_pepstock_charba_client_intl_enums_Notation, Notation.$static_ENGINEERING__org_pepstock_charba_client_intl_enums_Notation, Notation.$static_COMPACT__org_pepstock_charba_client_intl_enums_Notation], Notation));
 }
 /** @return {!Notation} */
 static get f_STANDARD__org_pepstock_charba_client_intl_enums_Notation() {
  return (Notation.$clinit(), Notation.$static_STANDARD__org_pepstock_charba_client_intl_enums_Notation);
 }
 /** @return {!Notation} */
 static get f_SCIENTIFIC__org_pepstock_charba_client_intl_enums_Notation() {
  return (Notation.$clinit(), Notation.$static_SCIENTIFIC__org_pepstock_charba_client_intl_enums_Notation);
 }
 /** @return {!Notation} */
 static get f_ENGINEERING__org_pepstock_charba_client_intl_enums_Notation() {
  return (Notation.$clinit(), Notation.$static_ENGINEERING__org_pepstock_charba_client_intl_enums_Notation);
 }
 /** @return {!Notation} */
 static get f_COMPACT__org_pepstock_charba_client_intl_enums_Notation() {
  return (Notation.$clinit(), Notation.$static_COMPACT__org_pepstock_charba_client_intl_enums_Notation);
 }
 
 static $clinit() {
  Notation.$clinit = () =>{};
  Notation.$loadModules();
  Enum.$clinit();
  Notation.$static_STANDARD__org_pepstock_charba_client_intl_enums_Notation = Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STANDARD"), Notation.$ordinal_STANDARD__org_pepstock_charba_client_intl_enums_Notation, "standard");
  Notation.$static_SCIENTIFIC__org_pepstock_charba_client_intl_enums_Notation = Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SCIENTIFIC"), Notation.$ordinal_SCIENTIFIC__org_pepstock_charba_client_intl_enums_Notation, "scientific");
  Notation.$static_ENGINEERING__org_pepstock_charba_client_intl_enums_Notation = Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENGINEERING"), Notation.$ordinal_ENGINEERING__org_pepstock_charba_client_intl_enums_Notation, "engineering");
  Notation.$static_COMPACT__org_pepstock_charba_client_intl_enums_Notation = Notation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COMPACT"), Notation.$ordinal_COMPACT__org_pepstock_charba_client_intl_enums_Notation, "compact");
  Notation.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Notation_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Notation;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Notation}*/
Notation.$static_STANDARD__org_pepstock_charba_client_intl_enums_Notation;
/**@private {!Notation}*/
Notation.$static_SCIENTIFIC__org_pepstock_charba_client_intl_enums_Notation;
/**@private {!Notation}*/
Notation.$static_ENGINEERING__org_pepstock_charba_client_intl_enums_Notation;
/**@private {!Notation}*/
Notation.$static_COMPACT__org_pepstock_charba_client_intl_enums_Notation;
/**@type {Map<?string, !Notation>}*/
Notation.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Notation_;
/**@const {number}*/
Notation.$ordinal_STANDARD__org_pepstock_charba_client_intl_enums_Notation = 0;
/**@const {number}*/
Notation.$ordinal_SCIENTIFIC__org_pepstock_charba_client_intl_enums_Notation = 1;
/**@const {number}*/
Notation.$ordinal_ENGINEERING__org_pepstock_charba_client_intl_enums_Notation = 2;
/**@const {number}*/
Notation.$ordinal_COMPACT__org_pepstock_charba_client_intl_enums_Notation = 3;
Key.$markImplementor(Notation);
$Util.$setClassMetadataForEnum(Notation, "org.pepstock.charba.client.intl.enums.Notation");

exports = Notation;

//# sourceMappingURL=Notation.js.map
