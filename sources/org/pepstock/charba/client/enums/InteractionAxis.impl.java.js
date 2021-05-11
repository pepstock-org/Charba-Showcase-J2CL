goog.module('org.pepstock.charba.client.enums.InteractionAxis$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<InteractionAxis>}
 * @implements {Key}
 */
class InteractionAxis extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_InteractionAxis_;
 }
 /** @return {!InteractionAxis} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new InteractionAxis();
  $instance.$ctor__org_pepstock_charba_client_enums_InteractionAxis__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_InteractionAxis__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_InteractionAxis_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_InteractionAxis_;
 }
 /** @return {!InteractionAxis} */
 static m_valueOf__java_lang_String(/** string */ name) {
  InteractionAxis.$clinit();
  if ($Equality.$same(InteractionAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionAxis_, null)) {
   InteractionAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionAxis_ = $Enums.createMapFromValues(InteractionAxis.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, InteractionAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionAxis_);
 }
 /** @return {!Array<!InteractionAxis>} */
 static m_values__() {
  InteractionAxis.$clinit();
  return /**@type {!Array<InteractionAxis>}*/ ($Arrays.$init([InteractionAxis.$static_X__org_pepstock_charba_client_enums_InteractionAxis, InteractionAxis.$static_Y__org_pepstock_charba_client_enums_InteractionAxis, InteractionAxis.$static_XY__org_pepstock_charba_client_enums_InteractionAxis], InteractionAxis));
 }
 /** @return {!InteractionAxis} */
 static get f_X__org_pepstock_charba_client_enums_InteractionAxis() {
  return (InteractionAxis.$clinit(), InteractionAxis.$static_X__org_pepstock_charba_client_enums_InteractionAxis);
 }
 /** @return {!InteractionAxis} */
 static get f_Y__org_pepstock_charba_client_enums_InteractionAxis() {
  return (InteractionAxis.$clinit(), InteractionAxis.$static_Y__org_pepstock_charba_client_enums_InteractionAxis);
 }
 /** @return {!InteractionAxis} */
 static get f_XY__org_pepstock_charba_client_enums_InteractionAxis() {
  return (InteractionAxis.$clinit(), InteractionAxis.$static_XY__org_pepstock_charba_client_enums_InteractionAxis);
 }
 
 static $clinit() {
  InteractionAxis.$clinit = () =>{};
  InteractionAxis.$loadModules();
  Enum.$clinit();
  InteractionAxis.$static_X__org_pepstock_charba_client_enums_InteractionAxis = InteractionAxis.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X"), InteractionAxis.$ordinal_X__org_pepstock_charba_client_enums_InteractionAxis, "x");
  InteractionAxis.$static_Y__org_pepstock_charba_client_enums_InteractionAxis = InteractionAxis.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y"), InteractionAxis.$ordinal_Y__org_pepstock_charba_client_enums_InteractionAxis, "y");
  InteractionAxis.$static_XY__org_pepstock_charba_client_enums_InteractionAxis = InteractionAxis.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("XY"), InteractionAxis.$ordinal_XY__org_pepstock_charba_client_enums_InteractionAxis, "xy");
  InteractionAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionAxis_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InteractionAxis;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!InteractionAxis}*/
InteractionAxis.$static_X__org_pepstock_charba_client_enums_InteractionAxis;
/**@private {!InteractionAxis}*/
InteractionAxis.$static_Y__org_pepstock_charba_client_enums_InteractionAxis;
/**@private {!InteractionAxis}*/
InteractionAxis.$static_XY__org_pepstock_charba_client_enums_InteractionAxis;
/**@type {Map<?string, !InteractionAxis>}*/
InteractionAxis.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionAxis_;
/**@const {number}*/
InteractionAxis.$ordinal_X__org_pepstock_charba_client_enums_InteractionAxis = 0;
/**@const {number}*/
InteractionAxis.$ordinal_Y__org_pepstock_charba_client_enums_InteractionAxis = 1;
/**@const {number}*/
InteractionAxis.$ordinal_XY__org_pepstock_charba_client_enums_InteractionAxis = 2;
Key.$markImplementor(InteractionAxis);
$Util.$setClassMetadataForEnum(InteractionAxis, "org.pepstock.charba.client.enums.InteractionAxis");

exports = InteractionAxis;

//# sourceMappingURL=InteractionAxis.js.map
