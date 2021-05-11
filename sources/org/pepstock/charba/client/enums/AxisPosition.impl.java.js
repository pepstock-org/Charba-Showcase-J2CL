goog.module('org.pepstock.charba.client.enums.AxisPosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AxisPosition>}
 * @implements {Key}
 */
class AxisPosition extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_AxisPosition_;
 }
 /** @return {!AxisPosition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new AxisPosition();
  $instance.$ctor__org_pepstock_charba_client_enums_AxisPosition__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_AxisPosition__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_AxisPosition_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_AxisPosition_;
 }
 /** @return {!AxisPosition} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AxisPosition.$clinit();
  if ($Equality.$same(AxisPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisPosition_, null)) {
   AxisPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisPosition_ = $Enums.createMapFromValues(AxisPosition.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AxisPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisPosition_);
 }
 /** @return {!Array<!AxisPosition>} */
 static m_values__() {
  AxisPosition.$clinit();
  return /**@type {!Array<AxisPosition>}*/ ($Arrays.$init([AxisPosition.$static_CENTER__org_pepstock_charba_client_enums_AxisPosition, AxisPosition.$static_TOP__org_pepstock_charba_client_enums_AxisPosition, AxisPosition.$static_LEFT__org_pepstock_charba_client_enums_AxisPosition, AxisPosition.$static_BOTTOM__org_pepstock_charba_client_enums_AxisPosition, AxisPosition.$static_RIGHT__org_pepstock_charba_client_enums_AxisPosition], AxisPosition));
 }
 /** @return {!AxisPosition} */
 static get f_CENTER__org_pepstock_charba_client_enums_AxisPosition() {
  return (AxisPosition.$clinit(), AxisPosition.$static_CENTER__org_pepstock_charba_client_enums_AxisPosition);
 }
 /** @return {!AxisPosition} */
 static get f_TOP__org_pepstock_charba_client_enums_AxisPosition() {
  return (AxisPosition.$clinit(), AxisPosition.$static_TOP__org_pepstock_charba_client_enums_AxisPosition);
 }
 /** @return {!AxisPosition} */
 static get f_LEFT__org_pepstock_charba_client_enums_AxisPosition() {
  return (AxisPosition.$clinit(), AxisPosition.$static_LEFT__org_pepstock_charba_client_enums_AxisPosition);
 }
 /** @return {!AxisPosition} */
 static get f_BOTTOM__org_pepstock_charba_client_enums_AxisPosition() {
  return (AxisPosition.$clinit(), AxisPosition.$static_BOTTOM__org_pepstock_charba_client_enums_AxisPosition);
 }
 /** @return {!AxisPosition} */
 static get f_RIGHT__org_pepstock_charba_client_enums_AxisPosition() {
  return (AxisPosition.$clinit(), AxisPosition.$static_RIGHT__org_pepstock_charba_client_enums_AxisPosition);
 }
 
 static $clinit() {
  AxisPosition.$clinit = () =>{};
  AxisPosition.$loadModules();
  Enum.$clinit();
  AxisPosition.$static_CENTER__org_pepstock_charba_client_enums_AxisPosition = AxisPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), AxisPosition.$ordinal_CENTER__org_pepstock_charba_client_enums_AxisPosition, "center");
  AxisPosition.$static_TOP__org_pepstock_charba_client_enums_AxisPosition = AxisPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOP"), AxisPosition.$ordinal_TOP__org_pepstock_charba_client_enums_AxisPosition, "top");
  AxisPosition.$static_LEFT__org_pepstock_charba_client_enums_AxisPosition = AxisPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEFT"), AxisPosition.$ordinal_LEFT__org_pepstock_charba_client_enums_AxisPosition, "left");
  AxisPosition.$static_BOTTOM__org_pepstock_charba_client_enums_AxisPosition = AxisPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOTTOM"), AxisPosition.$ordinal_BOTTOM__org_pepstock_charba_client_enums_AxisPosition, "bottom");
  AxisPosition.$static_RIGHT__org_pepstock_charba_client_enums_AxisPosition = AxisPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIGHT"), AxisPosition.$ordinal_RIGHT__org_pepstock_charba_client_enums_AxisPosition, "right");
  AxisPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisPosition_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisPosition;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AxisPosition}*/
AxisPosition.$static_CENTER__org_pepstock_charba_client_enums_AxisPosition;
/**@private {!AxisPosition}*/
AxisPosition.$static_TOP__org_pepstock_charba_client_enums_AxisPosition;
/**@private {!AxisPosition}*/
AxisPosition.$static_LEFT__org_pepstock_charba_client_enums_AxisPosition;
/**@private {!AxisPosition}*/
AxisPosition.$static_BOTTOM__org_pepstock_charba_client_enums_AxisPosition;
/**@private {!AxisPosition}*/
AxisPosition.$static_RIGHT__org_pepstock_charba_client_enums_AxisPosition;
/**@type {Map<?string, !AxisPosition>}*/
AxisPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisPosition_;
/**@const {number}*/
AxisPosition.$ordinal_CENTER__org_pepstock_charba_client_enums_AxisPosition = 0;
/**@const {number}*/
AxisPosition.$ordinal_TOP__org_pepstock_charba_client_enums_AxisPosition = 1;
/**@const {number}*/
AxisPosition.$ordinal_LEFT__org_pepstock_charba_client_enums_AxisPosition = 2;
/**@const {number}*/
AxisPosition.$ordinal_BOTTOM__org_pepstock_charba_client_enums_AxisPosition = 3;
/**@const {number}*/
AxisPosition.$ordinal_RIGHT__org_pepstock_charba_client_enums_AxisPosition = 4;
Key.$markImplementor(AxisPosition);
$Util.$setClassMetadataForEnum(AxisPosition, "org.pepstock.charba.client.enums.AxisPosition");

exports = AxisPosition;

//# sourceMappingURL=AxisPosition.js.map
