goog.module('org.pepstock.charba.client.enums.Position$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Position>}
 * @implements {Key}
 */
class Position extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_Position_;
 }
 /** @return {!Position} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Position();
  $instance.$ctor__org_pepstock_charba_client_enums_Position__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Position__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Position_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Position_;
 }
 /** @return {!Position} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Position.$clinit();
  if ($Equality.$same(Position.f_namesToValuesMap__org_pepstock_charba_client_enums_Position_, null)) {
   Position.f_namesToValuesMap__org_pepstock_charba_client_enums_Position_ = $Enums.createMapFromValues(Position.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Position.f_namesToValuesMap__org_pepstock_charba_client_enums_Position_);
 }
 /** @return {!Array<!Position>} */
 static m_values__() {
  Position.$clinit();
  return /**@type {!Array<Position>}*/ ($Arrays.$init([Position.$static_TOP__org_pepstock_charba_client_enums_Position, Position.$static_LEFT__org_pepstock_charba_client_enums_Position, Position.$static_BOTTOM__org_pepstock_charba_client_enums_Position, Position.$static_RIGHT__org_pepstock_charba_client_enums_Position], Position));
 }
 /** @return {!Position} */
 static get f_TOP__org_pepstock_charba_client_enums_Position() {
  return (Position.$clinit(), Position.$static_TOP__org_pepstock_charba_client_enums_Position);
 }
 /** @return {!Position} */
 static get f_LEFT__org_pepstock_charba_client_enums_Position() {
  return (Position.$clinit(), Position.$static_LEFT__org_pepstock_charba_client_enums_Position);
 }
 /** @return {!Position} */
 static get f_BOTTOM__org_pepstock_charba_client_enums_Position() {
  return (Position.$clinit(), Position.$static_BOTTOM__org_pepstock_charba_client_enums_Position);
 }
 /** @return {!Position} */
 static get f_RIGHT__org_pepstock_charba_client_enums_Position() {
  return (Position.$clinit(), Position.$static_RIGHT__org_pepstock_charba_client_enums_Position);
 }
 
 static $clinit() {
  Position.$clinit = () =>{};
  Position.$loadModules();
  Enum.$clinit();
  Position.$static_TOP__org_pepstock_charba_client_enums_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOP"), Position.$ordinal_TOP__org_pepstock_charba_client_enums_Position, "top");
  Position.$static_LEFT__org_pepstock_charba_client_enums_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEFT"), Position.$ordinal_LEFT__org_pepstock_charba_client_enums_Position, "left");
  Position.$static_BOTTOM__org_pepstock_charba_client_enums_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOTTOM"), Position.$ordinal_BOTTOM__org_pepstock_charba_client_enums_Position, "bottom");
  Position.$static_RIGHT__org_pepstock_charba_client_enums_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIGHT"), Position.$ordinal_RIGHT__org_pepstock_charba_client_enums_Position, "right");
  Position.f_namesToValuesMap__org_pepstock_charba_client_enums_Position_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Position;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Position}*/
Position.$static_TOP__org_pepstock_charba_client_enums_Position;
/**@private {!Position}*/
Position.$static_LEFT__org_pepstock_charba_client_enums_Position;
/**@private {!Position}*/
Position.$static_BOTTOM__org_pepstock_charba_client_enums_Position;
/**@private {!Position}*/
Position.$static_RIGHT__org_pepstock_charba_client_enums_Position;
/**@type {Map<?string, !Position>}*/
Position.f_namesToValuesMap__org_pepstock_charba_client_enums_Position_;
/**@const {number}*/
Position.$ordinal_TOP__org_pepstock_charba_client_enums_Position = 0;
/**@const {number}*/
Position.$ordinal_LEFT__org_pepstock_charba_client_enums_Position = 1;
/**@const {number}*/
Position.$ordinal_BOTTOM__org_pepstock_charba_client_enums_Position = 2;
/**@const {number}*/
Position.$ordinal_RIGHT__org_pepstock_charba_client_enums_Position = 3;
Key.$markImplementor(Position);
$Util.$setClassMetadataForEnum(Position, "org.pepstock.charba.client.enums.Position");

exports = Position;

//# sourceMappingURL=Position.js.map
