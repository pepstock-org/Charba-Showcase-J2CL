goog.module('org.pepstock.charba.client.dom.enums.Unit$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Unit>}
 * @implements {Key}
 */
class Unit extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_Unit_;
 }
 /** @return {!Unit} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Unit();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_Unit__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_Unit__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_Unit_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_Unit_;
 }
 /** @return {?string} */
 m_format__double(/** number */ numValue) {
  return numValue + j_l_String.m_valueOf__java_lang_Object(this.f_value__org_pepstock_charba_client_dom_enums_Unit_);
 }
 /** @return {?string} */
 m_format__int(/** number */ numValue) {
  return numValue + j_l_String.m_valueOf__java_lang_Object(this.f_value__org_pepstock_charba_client_dom_enums_Unit_);
 }
 /** @return {!Unit} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Unit.$clinit();
  if ($Equality.$same(Unit.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Unit_, null)) {
   Unit.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Unit_ = $Enums.createMapFromValues(Unit.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Unit.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Unit_);
 }
 /** @return {!Array<!Unit>} */
 static m_values__() {
  Unit.$clinit();
  return /**@type {!Array<Unit>}*/ ($Arrays.$init([Unit.$static_PCT__org_pepstock_charba_client_dom_enums_Unit, Unit.$static_PX__org_pepstock_charba_client_dom_enums_Unit], Unit));
 }
 /** @return {!Unit} */
 static get f_PCT__org_pepstock_charba_client_dom_enums_Unit() {
  return (Unit.$clinit(), Unit.$static_PCT__org_pepstock_charba_client_dom_enums_Unit);
 }
 /** @return {!Unit} */
 static get f_PX__org_pepstock_charba_client_dom_enums_Unit() {
  return (Unit.$clinit(), Unit.$static_PX__org_pepstock_charba_client_dom_enums_Unit);
 }
 
 static $clinit() {
  Unit.$clinit = () =>{};
  Unit.$loadModules();
  Enum.$clinit();
  Unit.$static_PCT__org_pepstock_charba_client_dom_enums_Unit = Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PCT"), Unit.$ordinal_PCT__org_pepstock_charba_client_dom_enums_Unit, "%");
  Unit.$static_PX__org_pepstock_charba_client_dom_enums_Unit = Unit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PX"), Unit.$ordinal_PX__org_pepstock_charba_client_dom_enums_Unit, "px");
  Unit.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Unit_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Unit;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Unit}*/
Unit.$static_PCT__org_pepstock_charba_client_dom_enums_Unit;
/**@private {!Unit}*/
Unit.$static_PX__org_pepstock_charba_client_dom_enums_Unit;
/**@type {Map<?string, !Unit>}*/
Unit.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Unit_;
/**@const {number}*/
Unit.$ordinal_PCT__org_pepstock_charba_client_dom_enums_Unit = 0;
/**@const {number}*/
Unit.$ordinal_PX__org_pepstock_charba_client_dom_enums_Unit = 1;
Key.$markImplementor(Unit);
$Util.$setClassMetadataForEnum(Unit, "org.pepstock.charba.client.dom.enums.Unit");

exports = Unit;

//# sourceMappingURL=Unit.js.map
