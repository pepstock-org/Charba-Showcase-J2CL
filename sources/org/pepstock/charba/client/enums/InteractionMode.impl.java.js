goog.module('org.pepstock.charba.client.enums.InteractionMode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<InteractionMode>}
 * @implements {Key}
 */
class InteractionMode extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_InteractionMode_;
 }
 /** @return {!InteractionMode} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new InteractionMode();
  $instance.$ctor__org_pepstock_charba_client_enums_InteractionMode__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_InteractionMode__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_InteractionMode_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_InteractionMode_;
 }
 /** @return {!InteractionMode} */
 static m_valueOf__java_lang_String(/** string */ name) {
  InteractionMode.$clinit();
  if ($Equality.$same(InteractionMode.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionMode_, null)) {
   InteractionMode.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionMode_ = $Enums.createMapFromValues(InteractionMode.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, InteractionMode.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionMode_);
 }
 /** @return {!Array<!InteractionMode>} */
 static m_values__() {
  InteractionMode.$clinit();
  return /**@type {!Array<InteractionMode>}*/ ($Arrays.$init([InteractionMode.$static_POINT__org_pepstock_charba_client_enums_InteractionMode, InteractionMode.$static_NEAREST__org_pepstock_charba_client_enums_InteractionMode, InteractionMode.$static_INDEX__org_pepstock_charba_client_enums_InteractionMode, InteractionMode.$static_DATASET__org_pepstock_charba_client_enums_InteractionMode, InteractionMode.$static_X__org_pepstock_charba_client_enums_InteractionMode, InteractionMode.$static_Y__org_pepstock_charba_client_enums_InteractionMode], InteractionMode));
 }
 /** @return {!InteractionMode} */
 static get f_POINT__org_pepstock_charba_client_enums_InteractionMode() {
  return (InteractionMode.$clinit(), InteractionMode.$static_POINT__org_pepstock_charba_client_enums_InteractionMode);
 }
 /** @return {!InteractionMode} */
 static get f_NEAREST__org_pepstock_charba_client_enums_InteractionMode() {
  return (InteractionMode.$clinit(), InteractionMode.$static_NEAREST__org_pepstock_charba_client_enums_InteractionMode);
 }
 /** @return {!InteractionMode} */
 static get f_INDEX__org_pepstock_charba_client_enums_InteractionMode() {
  return (InteractionMode.$clinit(), InteractionMode.$static_INDEX__org_pepstock_charba_client_enums_InteractionMode);
 }
 /** @return {!InteractionMode} */
 static get f_DATASET__org_pepstock_charba_client_enums_InteractionMode() {
  return (InteractionMode.$clinit(), InteractionMode.$static_DATASET__org_pepstock_charba_client_enums_InteractionMode);
 }
 /** @return {!InteractionMode} */
 static get f_X__org_pepstock_charba_client_enums_InteractionMode() {
  return (InteractionMode.$clinit(), InteractionMode.$static_X__org_pepstock_charba_client_enums_InteractionMode);
 }
 /** @return {!InteractionMode} */
 static get f_Y__org_pepstock_charba_client_enums_InteractionMode() {
  return (InteractionMode.$clinit(), InteractionMode.$static_Y__org_pepstock_charba_client_enums_InteractionMode);
 }
 
 static $clinit() {
  InteractionMode.$clinit = () =>{};
  InteractionMode.$loadModules();
  Enum.$clinit();
  InteractionMode.$static_POINT__org_pepstock_charba_client_enums_InteractionMode = InteractionMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT"), InteractionMode.$ordinal_POINT__org_pepstock_charba_client_enums_InteractionMode, "point");
  InteractionMode.$static_NEAREST__org_pepstock_charba_client_enums_InteractionMode = InteractionMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NEAREST"), InteractionMode.$ordinal_NEAREST__org_pepstock_charba_client_enums_InteractionMode, "nearest");
  InteractionMode.$static_INDEX__org_pepstock_charba_client_enums_InteractionMode = InteractionMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDEX"), InteractionMode.$ordinal_INDEX__org_pepstock_charba_client_enums_InteractionMode, "index");
  InteractionMode.$static_DATASET__org_pepstock_charba_client_enums_InteractionMode = InteractionMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATASET"), InteractionMode.$ordinal_DATASET__org_pepstock_charba_client_enums_InteractionMode, "dataset");
  InteractionMode.$static_X__org_pepstock_charba_client_enums_InteractionMode = InteractionMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X"), InteractionMode.$ordinal_X__org_pepstock_charba_client_enums_InteractionMode, "x");
  InteractionMode.$static_Y__org_pepstock_charba_client_enums_InteractionMode = InteractionMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y"), InteractionMode.$ordinal_Y__org_pepstock_charba_client_enums_InteractionMode, "y");
  InteractionMode.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionMode_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InteractionMode;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!InteractionMode}*/
InteractionMode.$static_POINT__org_pepstock_charba_client_enums_InteractionMode;
/**@private {!InteractionMode}*/
InteractionMode.$static_NEAREST__org_pepstock_charba_client_enums_InteractionMode;
/**@private {!InteractionMode}*/
InteractionMode.$static_INDEX__org_pepstock_charba_client_enums_InteractionMode;
/**@private {!InteractionMode}*/
InteractionMode.$static_DATASET__org_pepstock_charba_client_enums_InteractionMode;
/**@private {!InteractionMode}*/
InteractionMode.$static_X__org_pepstock_charba_client_enums_InteractionMode;
/**@private {!InteractionMode}*/
InteractionMode.$static_Y__org_pepstock_charba_client_enums_InteractionMode;
/**@type {Map<?string, !InteractionMode>}*/
InteractionMode.f_namesToValuesMap__org_pepstock_charba_client_enums_InteractionMode_;
/**@const {number}*/
InteractionMode.$ordinal_POINT__org_pepstock_charba_client_enums_InteractionMode = 0;
/**@const {number}*/
InteractionMode.$ordinal_NEAREST__org_pepstock_charba_client_enums_InteractionMode = 1;
/**@const {number}*/
InteractionMode.$ordinal_INDEX__org_pepstock_charba_client_enums_InteractionMode = 2;
/**@const {number}*/
InteractionMode.$ordinal_DATASET__org_pepstock_charba_client_enums_InteractionMode = 3;
/**@const {number}*/
InteractionMode.$ordinal_X__org_pepstock_charba_client_enums_InteractionMode = 4;
/**@const {number}*/
InteractionMode.$ordinal_Y__org_pepstock_charba_client_enums_InteractionMode = 5;
Key.$markImplementor(InteractionMode);
$Util.$setClassMetadataForEnum(InteractionMode, "org.pepstock.charba.client.enums.InteractionMode");

exports = InteractionMode;

//# sourceMappingURL=InteractionMode.js.map
