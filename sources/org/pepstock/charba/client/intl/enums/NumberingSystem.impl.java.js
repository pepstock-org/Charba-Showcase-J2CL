goog.module('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<NumberingSystem>}
 * @implements {Key}
 */
class NumberingSystem extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_NumberingSystem_;
 }
 /** @return {!NumberingSystem} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new NumberingSystem();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_NumberingSystem__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_NumberingSystem__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_NumberingSystem_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_NumberingSystem_;
 }
 /** @return {!NumberingSystem} */
 static m_valueOf__java_lang_String(/** string */ name) {
  NumberingSystem.$clinit();
  if ($Equality.$same(NumberingSystem.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberingSystem_, null)) {
   NumberingSystem.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberingSystem_ = $Enums.createMapFromValues(NumberingSystem.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, NumberingSystem.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberingSystem_);
 }
 /** @return {!Array<!NumberingSystem>} */
 static m_values__() {
  NumberingSystem.$clinit();
  return /**@type {!Array<NumberingSystem>}*/ ($Arrays.$init([NumberingSystem.$static_ADLM__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_AHOM__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_ARAB__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_ARABEXT__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_BALI__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_BENG__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_BHKS__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_BRAH__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_CAKM__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_CHAM__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_DEVA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_DIAK__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_FULLWIDE__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_GONG__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_GONM__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_GUJR__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_GURU__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_HANIDEC__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_HMNG__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_HMNP__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_JAVA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_KALI__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_KHMR__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_KNDA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_LANA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_LANATHAM__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_LAOO__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_LATN__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_LEPC__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_LIMB__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MATHBOLD__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MATHDBL__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MATHMONO__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MATHSANB__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MATHSANS__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MLYM__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MODI__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MONG__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MROO__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MTEI__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MYMR__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MYMRSHAN__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_MYMRTLNG__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_NEWA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_NKOO__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_OLCK__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_ORYA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_OSMA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_ROHG__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_SAUR__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_SEGMENT__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_SHRD__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_SIND__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_SINH__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_SORA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_SUND__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_TAKR__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_TALU__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_TAMLDEC__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_TELU__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_THAI__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_TIBT__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_TIRH__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_VAII__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_WARA__org_pepstock_charba_client_intl_enums_NumberingSystem, NumberingSystem.$static_WCHO__org_pepstock_charba_client_intl_enums_NumberingSystem], NumberingSystem));
 }
 /** @return {!NumberingSystem} */
 static get f_ADLM__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_ADLM__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_AHOM__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_AHOM__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_ARAB__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_ARAB__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_ARABEXT__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_ARABEXT__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_BALI__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_BALI__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_BENG__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_BENG__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_BHKS__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_BHKS__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_BRAH__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_BRAH__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_CAKM__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_CAKM__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_CHAM__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_CHAM__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_DEVA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_DEVA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_DIAK__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_DIAK__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_FULLWIDE__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_FULLWIDE__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_GONG__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_GONG__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_GONM__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_GONM__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_GUJR__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_GUJR__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_GURU__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_GURU__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_HANIDEC__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_HANIDEC__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_HMNG__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_HMNG__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_HMNP__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_HMNP__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_JAVA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_JAVA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_KALI__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_KALI__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_KHMR__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_KHMR__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_KNDA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_KNDA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_LANA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_LANA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_LANATHAM__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_LANATHAM__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_LAOO__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_LAOO__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_LATN__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_LATN__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_LEPC__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_LEPC__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_LIMB__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_LIMB__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MATHBOLD__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MATHBOLD__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MATHDBL__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MATHDBL__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MATHMONO__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MATHMONO__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MATHSANB__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MATHSANB__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MATHSANS__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MATHSANS__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MLYM__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MLYM__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MODI__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MODI__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MONG__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MONG__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MROO__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MROO__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MTEI__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MTEI__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MYMR__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MYMR__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MYMRSHAN__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MYMRSHAN__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_MYMRTLNG__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_MYMRTLNG__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_NEWA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_NEWA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_NKOO__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_NKOO__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_OLCK__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_OLCK__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_ORYA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_ORYA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_OSMA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_OSMA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_ROHG__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_ROHG__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_SAUR__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_SAUR__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_SEGMENT__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_SEGMENT__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_SHRD__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_SHRD__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_SIND__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_SIND__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_SINH__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_SINH__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_SORA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_SORA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_SUND__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_SUND__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_TAKR__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_TAKR__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_TALU__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_TALU__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_TAMLDEC__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_TAMLDEC__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_TELU__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_TELU__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_THAI__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_THAI__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_TIBT__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_TIBT__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_TIRH__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_TIRH__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_VAII__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_VAII__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_WARA__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_WARA__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 /** @return {!NumberingSystem} */
 static get f_WCHO__org_pepstock_charba_client_intl_enums_NumberingSystem() {
  return (NumberingSystem.$clinit(), NumberingSystem.$static_WCHO__org_pepstock_charba_client_intl_enums_NumberingSystem);
 }
 
 static $clinit() {
  NumberingSystem.$clinit = () =>{};
  NumberingSystem.$loadModules();
  Enum.$clinit();
  NumberingSystem.$static_ADLM__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ADLM"), NumberingSystem.$ordinal_ADLM__org_pepstock_charba_client_intl_enums_NumberingSystem, "adlm");
  NumberingSystem.$static_AHOM__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AHOM"), NumberingSystem.$ordinal_AHOM__org_pepstock_charba_client_intl_enums_NumberingSystem, "ahom");
  NumberingSystem.$static_ARAB__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ARAB"), NumberingSystem.$ordinal_ARAB__org_pepstock_charba_client_intl_enums_NumberingSystem, "arab");
  NumberingSystem.$static_ARABEXT__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ARABEXT"), NumberingSystem.$ordinal_ARABEXT__org_pepstock_charba_client_intl_enums_NumberingSystem, "arabext");
  NumberingSystem.$static_BALI__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BALI"), NumberingSystem.$ordinal_BALI__org_pepstock_charba_client_intl_enums_NumberingSystem, "bali");
  NumberingSystem.$static_BENG__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BENG"), NumberingSystem.$ordinal_BENG__org_pepstock_charba_client_intl_enums_NumberingSystem, "beng");
  NumberingSystem.$static_BHKS__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BHKS"), NumberingSystem.$ordinal_BHKS__org_pepstock_charba_client_intl_enums_NumberingSystem, "bhks");
  NumberingSystem.$static_BRAH__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BRAH"), NumberingSystem.$ordinal_BRAH__org_pepstock_charba_client_intl_enums_NumberingSystem, "brah");
  NumberingSystem.$static_CAKM__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CAKM"), NumberingSystem.$ordinal_CAKM__org_pepstock_charba_client_intl_enums_NumberingSystem, "cakm");
  NumberingSystem.$static_CHAM__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHAM"), NumberingSystem.$ordinal_CHAM__org_pepstock_charba_client_intl_enums_NumberingSystem, "cham");
  NumberingSystem.$static_DEVA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEVA"), NumberingSystem.$ordinal_DEVA__org_pepstock_charba_client_intl_enums_NumberingSystem, "deva");
  NumberingSystem.$static_DIAK__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DIAK"), NumberingSystem.$ordinal_DIAK__org_pepstock_charba_client_intl_enums_NumberingSystem, "diak");
  NumberingSystem.$static_FULLWIDE__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FULLWIDE"), NumberingSystem.$ordinal_FULLWIDE__org_pepstock_charba_client_intl_enums_NumberingSystem, "fullwide");
  NumberingSystem.$static_GONG__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GONG"), NumberingSystem.$ordinal_GONG__org_pepstock_charba_client_intl_enums_NumberingSystem, "gong");
  NumberingSystem.$static_GONM__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GONM"), NumberingSystem.$ordinal_GONM__org_pepstock_charba_client_intl_enums_NumberingSystem, "gonm");
  NumberingSystem.$static_GUJR__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GUJR"), NumberingSystem.$ordinal_GUJR__org_pepstock_charba_client_intl_enums_NumberingSystem, "gujr");
  NumberingSystem.$static_GURU__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GURU"), NumberingSystem.$ordinal_GURU__org_pepstock_charba_client_intl_enums_NumberingSystem, "guru");
  NumberingSystem.$static_HANIDEC__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HANIDEC"), NumberingSystem.$ordinal_HANIDEC__org_pepstock_charba_client_intl_enums_NumberingSystem, "hanidec");
  NumberingSystem.$static_HMNG__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HMNG"), NumberingSystem.$ordinal_HMNG__org_pepstock_charba_client_intl_enums_NumberingSystem, "hmng");
  NumberingSystem.$static_HMNP__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HMNP"), NumberingSystem.$ordinal_HMNP__org_pepstock_charba_client_intl_enums_NumberingSystem, "hmnp");
  NumberingSystem.$static_JAVA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("JAVA"), NumberingSystem.$ordinal_JAVA__org_pepstock_charba_client_intl_enums_NumberingSystem, "java");
  NumberingSystem.$static_KALI__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KALI"), NumberingSystem.$ordinal_KALI__org_pepstock_charba_client_intl_enums_NumberingSystem, "kali");
  NumberingSystem.$static_KHMR__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KHMR"), NumberingSystem.$ordinal_KHMR__org_pepstock_charba_client_intl_enums_NumberingSystem, "khmr");
  NumberingSystem.$static_KNDA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KNDA"), NumberingSystem.$ordinal_KNDA__org_pepstock_charba_client_intl_enums_NumberingSystem, "knda");
  NumberingSystem.$static_LANA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LANA"), NumberingSystem.$ordinal_LANA__org_pepstock_charba_client_intl_enums_NumberingSystem, "lana");
  NumberingSystem.$static_LANATHAM__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LANATHAM"), NumberingSystem.$ordinal_LANATHAM__org_pepstock_charba_client_intl_enums_NumberingSystem, "lanatham");
  NumberingSystem.$static_LAOO__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LAOO"), NumberingSystem.$ordinal_LAOO__org_pepstock_charba_client_intl_enums_NumberingSystem, "laoo");
  NumberingSystem.$static_LATN__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LATN"), NumberingSystem.$ordinal_LATN__org_pepstock_charba_client_intl_enums_NumberingSystem, "latn");
  NumberingSystem.$static_LEPC__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEPC"), NumberingSystem.$ordinal_LEPC__org_pepstock_charba_client_intl_enums_NumberingSystem, "lepc");
  NumberingSystem.$static_LIMB__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIMB"), NumberingSystem.$ordinal_LIMB__org_pepstock_charba_client_intl_enums_NumberingSystem, "limb");
  NumberingSystem.$static_MATHBOLD__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MATHBOLD"), NumberingSystem.$ordinal_MATHBOLD__org_pepstock_charba_client_intl_enums_NumberingSystem, "mathbold");
  NumberingSystem.$static_MATHDBL__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MATHDBL"), NumberingSystem.$ordinal_MATHDBL__org_pepstock_charba_client_intl_enums_NumberingSystem, "mathdbl");
  NumberingSystem.$static_MATHMONO__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MATHMONO"), NumberingSystem.$ordinal_MATHMONO__org_pepstock_charba_client_intl_enums_NumberingSystem, "mathmono");
  NumberingSystem.$static_MATHSANB__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MATHSANB"), NumberingSystem.$ordinal_MATHSANB__org_pepstock_charba_client_intl_enums_NumberingSystem, "mathsanb");
  NumberingSystem.$static_MATHSANS__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MATHSANS"), NumberingSystem.$ordinal_MATHSANS__org_pepstock_charba_client_intl_enums_NumberingSystem, "mathsans");
  NumberingSystem.$static_MLYM__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MLYM"), NumberingSystem.$ordinal_MLYM__org_pepstock_charba_client_intl_enums_NumberingSystem, "mlym");
  NumberingSystem.$static_MODI__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MODI"), NumberingSystem.$ordinal_MODI__org_pepstock_charba_client_intl_enums_NumberingSystem, "modi");
  NumberingSystem.$static_MONG__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MONG"), NumberingSystem.$ordinal_MONG__org_pepstock_charba_client_intl_enums_NumberingSystem, "mong");
  NumberingSystem.$static_MROO__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MROO"), NumberingSystem.$ordinal_MROO__org_pepstock_charba_client_intl_enums_NumberingSystem, "mroo");
  NumberingSystem.$static_MTEI__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MTEI"), NumberingSystem.$ordinal_MTEI__org_pepstock_charba_client_intl_enums_NumberingSystem, "mtei");
  NumberingSystem.$static_MYMR__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MYMR"), NumberingSystem.$ordinal_MYMR__org_pepstock_charba_client_intl_enums_NumberingSystem, "mymr");
  NumberingSystem.$static_MYMRSHAN__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MYMRSHAN"), NumberingSystem.$ordinal_MYMRSHAN__org_pepstock_charba_client_intl_enums_NumberingSystem, "mymrshan");
  NumberingSystem.$static_MYMRTLNG__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MYMRTLNG"), NumberingSystem.$ordinal_MYMRTLNG__org_pepstock_charba_client_intl_enums_NumberingSystem, "mymrtlng");
  NumberingSystem.$static_NEWA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NEWA"), NumberingSystem.$ordinal_NEWA__org_pepstock_charba_client_intl_enums_NumberingSystem, "newa");
  NumberingSystem.$static_NKOO__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NKOO"), NumberingSystem.$ordinal_NKOO__org_pepstock_charba_client_intl_enums_NumberingSystem, "nkoo");
  NumberingSystem.$static_OLCK__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OLCK"), NumberingSystem.$ordinal_OLCK__org_pepstock_charba_client_intl_enums_NumberingSystem, "olck");
  NumberingSystem.$static_ORYA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ORYA"), NumberingSystem.$ordinal_ORYA__org_pepstock_charba_client_intl_enums_NumberingSystem, "orya");
  NumberingSystem.$static_OSMA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OSMA"), NumberingSystem.$ordinal_OSMA__org_pepstock_charba_client_intl_enums_NumberingSystem, "osma");
  NumberingSystem.$static_ROHG__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROHG"), NumberingSystem.$ordinal_ROHG__org_pepstock_charba_client_intl_enums_NumberingSystem, "rohg");
  NumberingSystem.$static_SAUR__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SAUR"), NumberingSystem.$ordinal_SAUR__org_pepstock_charba_client_intl_enums_NumberingSystem, "saur");
  NumberingSystem.$static_SEGMENT__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SEGMENT"), NumberingSystem.$ordinal_SEGMENT__org_pepstock_charba_client_intl_enums_NumberingSystem, "segment");
  NumberingSystem.$static_SHRD__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHRD"), NumberingSystem.$ordinal_SHRD__org_pepstock_charba_client_intl_enums_NumberingSystem, "shrd");
  NumberingSystem.$static_SIND__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SIND"), NumberingSystem.$ordinal_SIND__org_pepstock_charba_client_intl_enums_NumberingSystem, "sind");
  NumberingSystem.$static_SINH__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SINH"), NumberingSystem.$ordinal_SINH__org_pepstock_charba_client_intl_enums_NumberingSystem, "sinh");
  NumberingSystem.$static_SORA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SORA"), NumberingSystem.$ordinal_SORA__org_pepstock_charba_client_intl_enums_NumberingSystem, "sora");
  NumberingSystem.$static_SUND__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SUND"), NumberingSystem.$ordinal_SUND__org_pepstock_charba_client_intl_enums_NumberingSystem, "sund");
  NumberingSystem.$static_TAKR__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TAKR"), NumberingSystem.$ordinal_TAKR__org_pepstock_charba_client_intl_enums_NumberingSystem, "takr");
  NumberingSystem.$static_TALU__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TALU"), NumberingSystem.$ordinal_TALU__org_pepstock_charba_client_intl_enums_NumberingSystem, "talu");
  NumberingSystem.$static_TAMLDEC__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TAMLDEC"), NumberingSystem.$ordinal_TAMLDEC__org_pepstock_charba_client_intl_enums_NumberingSystem, "tamldec");
  NumberingSystem.$static_TELU__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TELU"), NumberingSystem.$ordinal_TELU__org_pepstock_charba_client_intl_enums_NumberingSystem, "telu");
  NumberingSystem.$static_THAI__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("THAI"), NumberingSystem.$ordinal_THAI__org_pepstock_charba_client_intl_enums_NumberingSystem, "thai");
  NumberingSystem.$static_TIBT__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TIBT"), NumberingSystem.$ordinal_TIBT__org_pepstock_charba_client_intl_enums_NumberingSystem, "tibt");
  NumberingSystem.$static_TIRH__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TIRH"), NumberingSystem.$ordinal_TIRH__org_pepstock_charba_client_intl_enums_NumberingSystem, "tirh");
  NumberingSystem.$static_VAII__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("VAII"), NumberingSystem.$ordinal_VAII__org_pepstock_charba_client_intl_enums_NumberingSystem, "vaii");
  NumberingSystem.$static_WARA__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WARA"), NumberingSystem.$ordinal_WARA__org_pepstock_charba_client_intl_enums_NumberingSystem, "wara");
  NumberingSystem.$static_WCHO__org_pepstock_charba_client_intl_enums_NumberingSystem = NumberingSystem.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WCHO"), NumberingSystem.$ordinal_WCHO__org_pepstock_charba_client_intl_enums_NumberingSystem, "wcho");
  NumberingSystem.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberingSystem_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberingSystem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!NumberingSystem}*/
NumberingSystem.$static_ADLM__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_AHOM__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_ARAB__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_ARABEXT__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_BALI__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_BENG__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_BHKS__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_BRAH__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_CAKM__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_CHAM__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_DEVA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_DIAK__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_FULLWIDE__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_GONG__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_GONM__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_GUJR__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_GURU__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_HANIDEC__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_HMNG__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_HMNP__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_JAVA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_KALI__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_KHMR__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_KNDA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_LANA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_LANATHAM__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_LAOO__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_LATN__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_LEPC__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_LIMB__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MATHBOLD__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MATHDBL__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MATHMONO__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MATHSANB__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MATHSANS__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MLYM__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MODI__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MONG__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MROO__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MTEI__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MYMR__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MYMRSHAN__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_MYMRTLNG__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_NEWA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_NKOO__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_OLCK__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_ORYA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_OSMA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_ROHG__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_SAUR__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_SEGMENT__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_SHRD__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_SIND__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_SINH__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_SORA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_SUND__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_TAKR__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_TALU__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_TAMLDEC__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_TELU__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_THAI__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_TIBT__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_TIRH__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_VAII__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_WARA__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@private {!NumberingSystem}*/
NumberingSystem.$static_WCHO__org_pepstock_charba_client_intl_enums_NumberingSystem;
/**@type {Map<?string, !NumberingSystem>}*/
NumberingSystem.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberingSystem_;
/**@const {number}*/
NumberingSystem.$ordinal_ADLM__org_pepstock_charba_client_intl_enums_NumberingSystem = 0;
/**@const {number}*/
NumberingSystem.$ordinal_AHOM__org_pepstock_charba_client_intl_enums_NumberingSystem = 1;
/**@const {number}*/
NumberingSystem.$ordinal_ARAB__org_pepstock_charba_client_intl_enums_NumberingSystem = 2;
/**@const {number}*/
NumberingSystem.$ordinal_ARABEXT__org_pepstock_charba_client_intl_enums_NumberingSystem = 3;
/**@const {number}*/
NumberingSystem.$ordinal_BALI__org_pepstock_charba_client_intl_enums_NumberingSystem = 4;
/**@const {number}*/
NumberingSystem.$ordinal_BENG__org_pepstock_charba_client_intl_enums_NumberingSystem = 5;
/**@const {number}*/
NumberingSystem.$ordinal_BHKS__org_pepstock_charba_client_intl_enums_NumberingSystem = 6;
/**@const {number}*/
NumberingSystem.$ordinal_BRAH__org_pepstock_charba_client_intl_enums_NumberingSystem = 7;
/**@const {number}*/
NumberingSystem.$ordinal_CAKM__org_pepstock_charba_client_intl_enums_NumberingSystem = 8;
/**@const {number}*/
NumberingSystem.$ordinal_CHAM__org_pepstock_charba_client_intl_enums_NumberingSystem = 9;
/**@const {number}*/
NumberingSystem.$ordinal_DEVA__org_pepstock_charba_client_intl_enums_NumberingSystem = 10;
/**@const {number}*/
NumberingSystem.$ordinal_DIAK__org_pepstock_charba_client_intl_enums_NumberingSystem = 11;
/**@const {number}*/
NumberingSystem.$ordinal_FULLWIDE__org_pepstock_charba_client_intl_enums_NumberingSystem = 12;
/**@const {number}*/
NumberingSystem.$ordinal_GONG__org_pepstock_charba_client_intl_enums_NumberingSystem = 13;
/**@const {number}*/
NumberingSystem.$ordinal_GONM__org_pepstock_charba_client_intl_enums_NumberingSystem = 14;
/**@const {number}*/
NumberingSystem.$ordinal_GUJR__org_pepstock_charba_client_intl_enums_NumberingSystem = 15;
/**@const {number}*/
NumberingSystem.$ordinal_GURU__org_pepstock_charba_client_intl_enums_NumberingSystem = 16;
/**@const {number}*/
NumberingSystem.$ordinal_HANIDEC__org_pepstock_charba_client_intl_enums_NumberingSystem = 17;
/**@const {number}*/
NumberingSystem.$ordinal_HMNG__org_pepstock_charba_client_intl_enums_NumberingSystem = 18;
/**@const {number}*/
NumberingSystem.$ordinal_HMNP__org_pepstock_charba_client_intl_enums_NumberingSystem = 19;
/**@const {number}*/
NumberingSystem.$ordinal_JAVA__org_pepstock_charba_client_intl_enums_NumberingSystem = 20;
/**@const {number}*/
NumberingSystem.$ordinal_KALI__org_pepstock_charba_client_intl_enums_NumberingSystem = 21;
/**@const {number}*/
NumberingSystem.$ordinal_KHMR__org_pepstock_charba_client_intl_enums_NumberingSystem = 22;
/**@const {number}*/
NumberingSystem.$ordinal_KNDA__org_pepstock_charba_client_intl_enums_NumberingSystem = 23;
/**@const {number}*/
NumberingSystem.$ordinal_LANA__org_pepstock_charba_client_intl_enums_NumberingSystem = 24;
/**@const {number}*/
NumberingSystem.$ordinal_LANATHAM__org_pepstock_charba_client_intl_enums_NumberingSystem = 25;
/**@const {number}*/
NumberingSystem.$ordinal_LAOO__org_pepstock_charba_client_intl_enums_NumberingSystem = 26;
/**@const {number}*/
NumberingSystem.$ordinal_LATN__org_pepstock_charba_client_intl_enums_NumberingSystem = 27;
/**@const {number}*/
NumberingSystem.$ordinal_LEPC__org_pepstock_charba_client_intl_enums_NumberingSystem = 28;
/**@const {number}*/
NumberingSystem.$ordinal_LIMB__org_pepstock_charba_client_intl_enums_NumberingSystem = 29;
/**@const {number}*/
NumberingSystem.$ordinal_MATHBOLD__org_pepstock_charba_client_intl_enums_NumberingSystem = 30;
/**@const {number}*/
NumberingSystem.$ordinal_MATHDBL__org_pepstock_charba_client_intl_enums_NumberingSystem = 31;
/**@const {number}*/
NumberingSystem.$ordinal_MATHMONO__org_pepstock_charba_client_intl_enums_NumberingSystem = 32;
/**@const {number}*/
NumberingSystem.$ordinal_MATHSANB__org_pepstock_charba_client_intl_enums_NumberingSystem = 33;
/**@const {number}*/
NumberingSystem.$ordinal_MATHSANS__org_pepstock_charba_client_intl_enums_NumberingSystem = 34;
/**@const {number}*/
NumberingSystem.$ordinal_MLYM__org_pepstock_charba_client_intl_enums_NumberingSystem = 35;
/**@const {number}*/
NumberingSystem.$ordinal_MODI__org_pepstock_charba_client_intl_enums_NumberingSystem = 36;
/**@const {number}*/
NumberingSystem.$ordinal_MONG__org_pepstock_charba_client_intl_enums_NumberingSystem = 37;
/**@const {number}*/
NumberingSystem.$ordinal_MROO__org_pepstock_charba_client_intl_enums_NumberingSystem = 38;
/**@const {number}*/
NumberingSystem.$ordinal_MTEI__org_pepstock_charba_client_intl_enums_NumberingSystem = 39;
/**@const {number}*/
NumberingSystem.$ordinal_MYMR__org_pepstock_charba_client_intl_enums_NumberingSystem = 40;
/**@const {number}*/
NumberingSystem.$ordinal_MYMRSHAN__org_pepstock_charba_client_intl_enums_NumberingSystem = 41;
/**@const {number}*/
NumberingSystem.$ordinal_MYMRTLNG__org_pepstock_charba_client_intl_enums_NumberingSystem = 42;
/**@const {number}*/
NumberingSystem.$ordinal_NEWA__org_pepstock_charba_client_intl_enums_NumberingSystem = 43;
/**@const {number}*/
NumberingSystem.$ordinal_NKOO__org_pepstock_charba_client_intl_enums_NumberingSystem = 44;
/**@const {number}*/
NumberingSystem.$ordinal_OLCK__org_pepstock_charba_client_intl_enums_NumberingSystem = 45;
/**@const {number}*/
NumberingSystem.$ordinal_ORYA__org_pepstock_charba_client_intl_enums_NumberingSystem = 46;
/**@const {number}*/
NumberingSystem.$ordinal_OSMA__org_pepstock_charba_client_intl_enums_NumberingSystem = 47;
/**@const {number}*/
NumberingSystem.$ordinal_ROHG__org_pepstock_charba_client_intl_enums_NumberingSystem = 48;
/**@const {number}*/
NumberingSystem.$ordinal_SAUR__org_pepstock_charba_client_intl_enums_NumberingSystem = 49;
/**@const {number}*/
NumberingSystem.$ordinal_SEGMENT__org_pepstock_charba_client_intl_enums_NumberingSystem = 50;
/**@const {number}*/
NumberingSystem.$ordinal_SHRD__org_pepstock_charba_client_intl_enums_NumberingSystem = 51;
/**@const {number}*/
NumberingSystem.$ordinal_SIND__org_pepstock_charba_client_intl_enums_NumberingSystem = 52;
/**@const {number}*/
NumberingSystem.$ordinal_SINH__org_pepstock_charba_client_intl_enums_NumberingSystem = 53;
/**@const {number}*/
NumberingSystem.$ordinal_SORA__org_pepstock_charba_client_intl_enums_NumberingSystem = 54;
/**@const {number}*/
NumberingSystem.$ordinal_SUND__org_pepstock_charba_client_intl_enums_NumberingSystem = 55;
/**@const {number}*/
NumberingSystem.$ordinal_TAKR__org_pepstock_charba_client_intl_enums_NumberingSystem = 56;
/**@const {number}*/
NumberingSystem.$ordinal_TALU__org_pepstock_charba_client_intl_enums_NumberingSystem = 57;
/**@const {number}*/
NumberingSystem.$ordinal_TAMLDEC__org_pepstock_charba_client_intl_enums_NumberingSystem = 58;
/**@const {number}*/
NumberingSystem.$ordinal_TELU__org_pepstock_charba_client_intl_enums_NumberingSystem = 59;
/**@const {number}*/
NumberingSystem.$ordinal_THAI__org_pepstock_charba_client_intl_enums_NumberingSystem = 60;
/**@const {number}*/
NumberingSystem.$ordinal_TIBT__org_pepstock_charba_client_intl_enums_NumberingSystem = 61;
/**@const {number}*/
NumberingSystem.$ordinal_TIRH__org_pepstock_charba_client_intl_enums_NumberingSystem = 62;
/**@const {number}*/
NumberingSystem.$ordinal_VAII__org_pepstock_charba_client_intl_enums_NumberingSystem = 63;
/**@const {number}*/
NumberingSystem.$ordinal_WARA__org_pepstock_charba_client_intl_enums_NumberingSystem = 64;
/**@const {number}*/
NumberingSystem.$ordinal_WCHO__org_pepstock_charba_client_intl_enums_NumberingSystem = 65;
Key.$markImplementor(NumberingSystem);
$Util.$setClassMetadataForEnum(NumberingSystem, "org.pepstock.charba.client.intl.enums.NumberingSystem");

exports = NumberingSystem;

//# sourceMappingURL=NumberingSystem.js.map
