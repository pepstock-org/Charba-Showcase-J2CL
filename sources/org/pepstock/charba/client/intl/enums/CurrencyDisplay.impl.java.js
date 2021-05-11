goog.module('org.pepstock.charba.client.intl.enums.CurrencyDisplay$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CurrencyDisplay>}
 * @implements {Key}
 */
class CurrencyDisplay extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_CurrencyDisplay_;
 }
 /** @return {!CurrencyDisplay} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CurrencyDisplay();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_CurrencyDisplay__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_CurrencyDisplay__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_CurrencyDisplay_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_CurrencyDisplay_;
 }
 /** @return {!CurrencyDisplay} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CurrencyDisplay.$clinit();
  if ($Equality.$same(CurrencyDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencyDisplay_, null)) {
   CurrencyDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencyDisplay_ = $Enums.createMapFromValues(CurrencyDisplay.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CurrencyDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencyDisplay_);
 }
 /** @return {!Array<!CurrencyDisplay>} */
 static m_values__() {
  CurrencyDisplay.$clinit();
  return /**@type {!Array<CurrencyDisplay>}*/ ($Arrays.$init([CurrencyDisplay.$static_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay, CurrencyDisplay.$static_NARROW_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay, CurrencyDisplay.$static_CODE__org_pepstock_charba_client_intl_enums_CurrencyDisplay, CurrencyDisplay.$static_NAME__org_pepstock_charba_client_intl_enums_CurrencyDisplay], CurrencyDisplay));
 }
 /** @return {!CurrencyDisplay} */
 static get f_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay() {
  return (CurrencyDisplay.$clinit(), CurrencyDisplay.$static_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay);
 }
 /** @return {!CurrencyDisplay} */
 static get f_NARROW_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay() {
  return (CurrencyDisplay.$clinit(), CurrencyDisplay.$static_NARROW_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay);
 }
 /** @return {!CurrencyDisplay} */
 static get f_CODE__org_pepstock_charba_client_intl_enums_CurrencyDisplay() {
  return (CurrencyDisplay.$clinit(), CurrencyDisplay.$static_CODE__org_pepstock_charba_client_intl_enums_CurrencyDisplay);
 }
 /** @return {!CurrencyDisplay} */
 static get f_NAME__org_pepstock_charba_client_intl_enums_CurrencyDisplay() {
  return (CurrencyDisplay.$clinit(), CurrencyDisplay.$static_NAME__org_pepstock_charba_client_intl_enums_CurrencyDisplay);
 }
 
 static $clinit() {
  CurrencyDisplay.$clinit = () =>{};
  CurrencyDisplay.$loadModules();
  Enum.$clinit();
  CurrencyDisplay.$static_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay = CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SYMBOL"), CurrencyDisplay.$ordinal_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay, "symbol");
  CurrencyDisplay.$static_NARROW_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay = CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NARROW_SYMBOL"), CurrencyDisplay.$ordinal_NARROW_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay, "narrowSymbol");
  CurrencyDisplay.$static_CODE__org_pepstock_charba_client_intl_enums_CurrencyDisplay = CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CODE"), CurrencyDisplay.$ordinal_CODE__org_pepstock_charba_client_intl_enums_CurrencyDisplay, "code");
  CurrencyDisplay.$static_NAME__org_pepstock_charba_client_intl_enums_CurrencyDisplay = CurrencyDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NAME"), CurrencyDisplay.$ordinal_NAME__org_pepstock_charba_client_intl_enums_CurrencyDisplay, "name");
  CurrencyDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencyDisplay_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CurrencyDisplay;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CurrencyDisplay}*/
CurrencyDisplay.$static_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay;
/**@private {!CurrencyDisplay}*/
CurrencyDisplay.$static_NARROW_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay;
/**@private {!CurrencyDisplay}*/
CurrencyDisplay.$static_CODE__org_pepstock_charba_client_intl_enums_CurrencyDisplay;
/**@private {!CurrencyDisplay}*/
CurrencyDisplay.$static_NAME__org_pepstock_charba_client_intl_enums_CurrencyDisplay;
/**@type {Map<?string, !CurrencyDisplay>}*/
CurrencyDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CurrencyDisplay_;
/**@const {number}*/
CurrencyDisplay.$ordinal_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay = 0;
/**@const {number}*/
CurrencyDisplay.$ordinal_NARROW_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay = 1;
/**@const {number}*/
CurrencyDisplay.$ordinal_CODE__org_pepstock_charba_client_intl_enums_CurrencyDisplay = 2;
/**@const {number}*/
CurrencyDisplay.$ordinal_NAME__org_pepstock_charba_client_intl_enums_CurrencyDisplay = 3;
Key.$markImplementor(CurrencyDisplay);
$Util.$setClassMetadataForEnum(CurrencyDisplay, "org.pepstock.charba.client.intl.enums.CurrencyDisplay");

exports = CurrencyDisplay;

//# sourceMappingURL=CurrencyDisplay.js.map
