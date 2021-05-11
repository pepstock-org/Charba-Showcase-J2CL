goog.module('org.pepstock.charba.client.enums.Bounds$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Bounds>}
 * @implements {Key}
 */
class Bounds extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_Bounds_;
 }
 /** @return {!Bounds} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Bounds();
  $instance.$ctor__org_pepstock_charba_client_enums_Bounds__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Bounds__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Bounds_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Bounds_;
 }
 /** @return {!Bounds} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Bounds.$clinit();
  if ($Equality.$same(Bounds.f_namesToValuesMap__org_pepstock_charba_client_enums_Bounds_, null)) {
   Bounds.f_namesToValuesMap__org_pepstock_charba_client_enums_Bounds_ = $Enums.createMapFromValues(Bounds.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Bounds.f_namesToValuesMap__org_pepstock_charba_client_enums_Bounds_);
 }
 /** @return {!Array<!Bounds>} */
 static m_values__() {
  Bounds.$clinit();
  return /**@type {!Array<Bounds>}*/ ($Arrays.$init([Bounds.$static_DATA__org_pepstock_charba_client_enums_Bounds, Bounds.$static_TICKS__org_pepstock_charba_client_enums_Bounds], Bounds));
 }
 /** @return {!Bounds} */
 static get f_DATA__org_pepstock_charba_client_enums_Bounds() {
  return (Bounds.$clinit(), Bounds.$static_DATA__org_pepstock_charba_client_enums_Bounds);
 }
 /** @return {!Bounds} */
 static get f_TICKS__org_pepstock_charba_client_enums_Bounds() {
  return (Bounds.$clinit(), Bounds.$static_TICKS__org_pepstock_charba_client_enums_Bounds);
 }
 
 static $clinit() {
  Bounds.$clinit = () =>{};
  Bounds.$loadModules();
  Enum.$clinit();
  Bounds.$static_DATA__org_pepstock_charba_client_enums_Bounds = Bounds.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA"), Bounds.$ordinal_DATA__org_pepstock_charba_client_enums_Bounds, "data");
  Bounds.$static_TICKS__org_pepstock_charba_client_enums_Bounds = Bounds.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICKS"), Bounds.$ordinal_TICKS__org_pepstock_charba_client_enums_Bounds, "ticks");
  Bounds.f_namesToValuesMap__org_pepstock_charba_client_enums_Bounds_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bounds;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Bounds}*/
Bounds.$static_DATA__org_pepstock_charba_client_enums_Bounds;
/**@private {!Bounds}*/
Bounds.$static_TICKS__org_pepstock_charba_client_enums_Bounds;
/**@type {Map<?string, !Bounds>}*/
Bounds.f_namesToValuesMap__org_pepstock_charba_client_enums_Bounds_;
/**@const {number}*/
Bounds.$ordinal_DATA__org_pepstock_charba_client_enums_Bounds = 0;
/**@const {number}*/
Bounds.$ordinal_TICKS__org_pepstock_charba_client_enums_Bounds = 1;
Key.$markImplementor(Bounds);
$Util.$setClassMetadataForEnum(Bounds, "org.pepstock.charba.client.enums.Bounds");

exports = Bounds;

//# sourceMappingURL=Bounds.js.map
