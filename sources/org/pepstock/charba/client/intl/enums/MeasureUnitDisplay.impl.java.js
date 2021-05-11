goog.module('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<MeasureUnitDisplay>}
 * @implements {Key}
 */
class MeasureUnitDisplay extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_;
 }
 /** @return {!MeasureUnitDisplay} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new MeasureUnitDisplay();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_;
 }
 /** @return {!MeasureUnitDisplay} */
 static m_valueOf__java_lang_String(/** string */ name) {
  MeasureUnitDisplay.$clinit();
  if ($Equality.$same(MeasureUnitDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_, null)) {
   MeasureUnitDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_ = $Enums.createMapFromValues(MeasureUnitDisplay.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, MeasureUnitDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_);
 }
 /** @return {!Array<!MeasureUnitDisplay>} */
 static m_values__() {
  MeasureUnitDisplay.$clinit();
  return /**@type {!Array<MeasureUnitDisplay>}*/ ($Arrays.$init([MeasureUnitDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay, MeasureUnitDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay, MeasureUnitDisplay.$static_NARROW__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay], MeasureUnitDisplay));
 }
 /** @return {!MeasureUnitDisplay} */
 static get f_LONG__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay() {
  return (MeasureUnitDisplay.$clinit(), MeasureUnitDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay);
 }
 /** @return {!MeasureUnitDisplay} */
 static get f_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay() {
  return (MeasureUnitDisplay.$clinit(), MeasureUnitDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay);
 }
 /** @return {!MeasureUnitDisplay} */
 static get f_NARROW__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay() {
  return (MeasureUnitDisplay.$clinit(), MeasureUnitDisplay.$static_NARROW__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay);
 }
 
 static $clinit() {
  MeasureUnitDisplay.$clinit = () =>{};
  MeasureUnitDisplay.$loadModules();
  Enum.$clinit();
  MeasureUnitDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay = MeasureUnitDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LONG"), MeasureUnitDisplay.$ordinal_LONG__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay, "long");
  MeasureUnitDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay = MeasureUnitDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHORT"), MeasureUnitDisplay.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay, "short");
  MeasureUnitDisplay.$static_NARROW__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay = MeasureUnitDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NARROW"), MeasureUnitDisplay.$ordinal_NARROW__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay, "narrow");
  MeasureUnitDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeasureUnitDisplay;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!MeasureUnitDisplay}*/
MeasureUnitDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay;
/**@private {!MeasureUnitDisplay}*/
MeasureUnitDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay;
/**@private {!MeasureUnitDisplay}*/
MeasureUnitDisplay.$static_NARROW__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay;
/**@type {Map<?string, !MeasureUnitDisplay>}*/
MeasureUnitDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay_;
/**@const {number}*/
MeasureUnitDisplay.$ordinal_LONG__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay = 0;
/**@const {number}*/
MeasureUnitDisplay.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay = 1;
/**@const {number}*/
MeasureUnitDisplay.$ordinal_NARROW__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay = 2;
Key.$markImplementor(MeasureUnitDisplay);
$Util.$setClassMetadataForEnum(MeasureUnitDisplay, "org.pepstock.charba.client.intl.enums.MeasureUnitDisplay");

exports = MeasureUnitDisplay;

//# sourceMappingURL=MeasureUnitDisplay.js.map
