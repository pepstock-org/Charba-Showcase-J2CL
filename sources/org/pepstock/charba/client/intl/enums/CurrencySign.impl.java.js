goog.module('org.pepstock.charba.client.intl.enums.CurrencySign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CurrencySign>}
 * @implements {Key}
 */
class CurrencySign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_CurrencySign_;
 }
 /** @return {!CurrencySign} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CurrencySign();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_CurrencySign__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_CurrencySign__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_CurrencySign_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_CurrencySign_;
 }
 /** @return {!CurrencySign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CurrencySign.$clinit();
  if ($Equality.$same(CurrencySign.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencySign_, null)) {
   CurrencySign.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencySign_ = $Enums.createMapFromValues(CurrencySign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CurrencySign.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencySign_);
 }
 /** @return {!Array<!CurrencySign>} */
 static m_values__() {
  CurrencySign.$clinit();
  return /**@type {!Array<CurrencySign>}*/ ($Arrays.$init([CurrencySign.$static_ACCOUNTING__org_pepstock_charba_client_intl_enums_CurrencySign, CurrencySign.$static_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign], CurrencySign));
 }
 /** @return {!CurrencySign} */
 static get f_ACCOUNTING__org_pepstock_charba_client_intl_enums_CurrencySign() {
  return (CurrencySign.$clinit(), CurrencySign.$static_ACCOUNTING__org_pepstock_charba_client_intl_enums_CurrencySign);
 }
 /** @return {!CurrencySign} */
 static get f_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign() {
  return (CurrencySign.$clinit(), CurrencySign.$static_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign);
 }
 
 static $clinit() {
  CurrencySign.$clinit = () =>{};
  CurrencySign.$loadModules();
  Enum.$clinit();
  CurrencySign.$static_ACCOUNTING__org_pepstock_charba_client_intl_enums_CurrencySign = CurrencySign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ACCOUNTING"), CurrencySign.$ordinal_ACCOUNTING__org_pepstock_charba_client_intl_enums_CurrencySign, "accounting");
  CurrencySign.$static_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign = CurrencySign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STANDARD"), CurrencySign.$ordinal_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign, "standard");
  CurrencySign.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencySign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CurrencySign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CurrencySign}*/
CurrencySign.$static_ACCOUNTING__org_pepstock_charba_client_intl_enums_CurrencySign;
/**@private {!CurrencySign}*/
CurrencySign.$static_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign;
/**@type {Map<?string, !CurrencySign>}*/
CurrencySign.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencySign_;
/**@const {number}*/
CurrencySign.$ordinal_ACCOUNTING__org_pepstock_charba_client_intl_enums_CurrencySign = 0;
/**@const {number}*/
CurrencySign.$ordinal_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign = 1;
Key.$markImplementor(CurrencySign);
$Util.$setClassMetadataForEnum(CurrencySign, "org.pepstock.charba.client.intl.enums.CurrencySign");

exports = CurrencySign;

//# sourceMappingURL=CurrencySign.js.map
