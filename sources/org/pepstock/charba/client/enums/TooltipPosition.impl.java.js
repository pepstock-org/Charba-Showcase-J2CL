goog.module('org.pepstock.charba.client.enums.TooltipPosition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsTooltipPosition = goog.require('org.pepstock.charba.client.enums.IsTooltipPosition$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TooltipPosition>}
 * @implements {IsTooltipPosition}
 */
class TooltipPosition extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_TooltipPosition_;
 }
 /** @return {!TooltipPosition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TooltipPosition();
  $instance.$ctor__org_pepstock_charba_client_enums_TooltipPosition__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_TooltipPosition__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_TooltipPosition_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_TooltipPosition_;
 }
 /** @return {!TooltipPosition} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TooltipPosition.$clinit();
  if ($Equality.$same(TooltipPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipPosition_, null)) {
   TooltipPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipPosition_ = $Enums.createMapFromValues(TooltipPosition.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TooltipPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipPosition_);
 }
 /** @return {!Array<!TooltipPosition>} */
 static m_values__() {
  TooltipPosition.$clinit();
  return /**@type {!Array<TooltipPosition>}*/ ($Arrays.$init([TooltipPosition.$static_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition, TooltipPosition.$static_NEAREST__org_pepstock_charba_client_enums_TooltipPosition], TooltipPosition));
 }
 /** @return {!TooltipPosition} */
 static get f_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition() {
  return (TooltipPosition.$clinit(), TooltipPosition.$static_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition);
 }
 /** @return {!TooltipPosition} */
 static get f_NEAREST__org_pepstock_charba_client_enums_TooltipPosition() {
  return (TooltipPosition.$clinit(), TooltipPosition.$static_NEAREST__org_pepstock_charba_client_enums_TooltipPosition);
 }
 
 static $clinit() {
  TooltipPosition.$clinit = () =>{};
  TooltipPosition.$loadModules();
  Enum.$clinit();
  TooltipPosition.$static_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition = TooltipPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AVERAGE"), TooltipPosition.$ordinal_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition, "average");
  TooltipPosition.$static_NEAREST__org_pepstock_charba_client_enums_TooltipPosition = TooltipPosition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NEAREST"), TooltipPosition.$ordinal_NEAREST__org_pepstock_charba_client_enums_TooltipPosition, "nearest");
  TooltipPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipPosition_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipPosition;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TooltipPosition}*/
TooltipPosition.$static_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition;
/**@private {!TooltipPosition}*/
TooltipPosition.$static_NEAREST__org_pepstock_charba_client_enums_TooltipPosition;
/**@type {Map<?string, !TooltipPosition>}*/
TooltipPosition.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipPosition_;
/**@const {number}*/
TooltipPosition.$ordinal_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition = 0;
/**@const {number}*/
TooltipPosition.$ordinal_NEAREST__org_pepstock_charba_client_enums_TooltipPosition = 1;
IsTooltipPosition.$markImplementor(TooltipPosition);
$Util.$setClassMetadataForEnum(TooltipPosition, "org.pepstock.charba.client.enums.TooltipPosition");

exports = TooltipPosition;

//# sourceMappingURL=TooltipPosition.js.map
