goog.module('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DecimationAlgorithm>}
 * @implements {Key}
 */
class DecimationAlgorithm extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DecimationAlgorithm_;
 }
 /** @return {!DecimationAlgorithm} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DecimationAlgorithm();
  $instance.$ctor__org_pepstock_charba_client_enums_DecimationAlgorithm__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DecimationAlgorithm__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_DecimationAlgorithm_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DecimationAlgorithm_;
 }
 /** @return {!DecimationAlgorithm} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DecimationAlgorithm.$clinit();
  if ($Equality.$same(DecimationAlgorithm.f_namesToValuesMap__org_pepstock_charba_client_enums_DecimationAlgorithm_, null)) {
   DecimationAlgorithm.f_namesToValuesMap__org_pepstock_charba_client_enums_DecimationAlgorithm_ = $Enums.createMapFromValues(DecimationAlgorithm.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DecimationAlgorithm.f_namesToValuesMap__org_pepstock_charba_client_enums_DecimationAlgorithm_);
 }
 /** @return {!Array<!DecimationAlgorithm>} */
 static m_values__() {
  DecimationAlgorithm.$clinit();
  return /**@type {!Array<DecimationAlgorithm>}*/ ($Arrays.$init([DecimationAlgorithm.$static_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm, DecimationAlgorithm.$static_LTTB__org_pepstock_charba_client_enums_DecimationAlgorithm], DecimationAlgorithm));
 }
 /** @return {!DecimationAlgorithm} */
 static get f_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm() {
  return (DecimationAlgorithm.$clinit(), DecimationAlgorithm.$static_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm);
 }
 /** @return {!DecimationAlgorithm} */
 static get f_LTTB__org_pepstock_charba_client_enums_DecimationAlgorithm() {
  return (DecimationAlgorithm.$clinit(), DecimationAlgorithm.$static_LTTB__org_pepstock_charba_client_enums_DecimationAlgorithm);
 }
 
 static $clinit() {
  DecimationAlgorithm.$clinit = () =>{};
  DecimationAlgorithm.$loadModules();
  Enum.$clinit();
  DecimationAlgorithm.$static_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm = DecimationAlgorithm.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIN_MAX"), DecimationAlgorithm.$ordinal_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm, "min-max");
  DecimationAlgorithm.$static_LTTB__org_pepstock_charba_client_enums_DecimationAlgorithm = DecimationAlgorithm.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LTTB"), DecimationAlgorithm.$ordinal_LTTB__org_pepstock_charba_client_enums_DecimationAlgorithm, "lttb");
  DecimationAlgorithm.f_namesToValuesMap__org_pepstock_charba_client_enums_DecimationAlgorithm_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DecimationAlgorithm;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DecimationAlgorithm}*/
DecimationAlgorithm.$static_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm;
/**@private {!DecimationAlgorithm}*/
DecimationAlgorithm.$static_LTTB__org_pepstock_charba_client_enums_DecimationAlgorithm;
/**@type {Map<?string, !DecimationAlgorithm>}*/
DecimationAlgorithm.f_namesToValuesMap__org_pepstock_charba_client_enums_DecimationAlgorithm_;
/**@const {number}*/
DecimationAlgorithm.$ordinal_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm = 0;
/**@const {number}*/
DecimationAlgorithm.$ordinal_LTTB__org_pepstock_charba_client_enums_DecimationAlgorithm = 1;
Key.$markImplementor(DecimationAlgorithm);
$Util.$setClassMetadataForEnum(DecimationAlgorithm, "org.pepstock.charba.client.enums.DecimationAlgorithm");

exports = DecimationAlgorithm;

//# sourceMappingURL=DecimationAlgorithm.js.map
