goog.module('org.pepstock.charba.client.enums.BorderSkipped$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<BorderSkipped>}
 * @implements {Key}
 */
class BorderSkipped extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_BorderSkipped_;
 }
 /** @return {!BorderSkipped} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new BorderSkipped();
  $instance.$ctor__org_pepstock_charba_client_enums_BorderSkipped__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_BorderSkipped__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_BorderSkipped_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_BorderSkipped_;
 }
 /** @return {!BorderSkipped} */
 static m_valueOf__java_lang_String(/** string */ name) {
  BorderSkipped.$clinit();
  if ($Equality.$same(BorderSkipped.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderSkipped_, null)) {
   BorderSkipped.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderSkipped_ = $Enums.createMapFromValues(BorderSkipped.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, BorderSkipped.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderSkipped_);
 }
 /** @return {!Array<!BorderSkipped>} */
 static m_values__() {
  BorderSkipped.$clinit();
  return /**@type {!Array<BorderSkipped>}*/ ($Arrays.$init([BorderSkipped.$static_START__org_pepstock_charba_client_enums_BorderSkipped, BorderSkipped.$static_END__org_pepstock_charba_client_enums_BorderSkipped, BorderSkipped.$static_TOP__org_pepstock_charba_client_enums_BorderSkipped, BorderSkipped.$static_LEFT__org_pepstock_charba_client_enums_BorderSkipped, BorderSkipped.$static_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped, BorderSkipped.$static_RIGHT__org_pepstock_charba_client_enums_BorderSkipped, BorderSkipped.$static_MIDDLE__org_pepstock_charba_client_enums_BorderSkipped, BorderSkipped.$static_FALSE__org_pepstock_charba_client_enums_BorderSkipped], BorderSkipped));
 }
 /** @return {!BorderSkipped} */
 static get f_START__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_START__org_pepstock_charba_client_enums_BorderSkipped);
 }
 /** @return {!BorderSkipped} */
 static get f_END__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_END__org_pepstock_charba_client_enums_BorderSkipped);
 }
 /** @return {!BorderSkipped} */
 static get f_TOP__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_TOP__org_pepstock_charba_client_enums_BorderSkipped);
 }
 /** @return {!BorderSkipped} */
 static get f_LEFT__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_LEFT__org_pepstock_charba_client_enums_BorderSkipped);
 }
 /** @return {!BorderSkipped} */
 static get f_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped);
 }
 /** @return {!BorderSkipped} */
 static get f_RIGHT__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_RIGHT__org_pepstock_charba_client_enums_BorderSkipped);
 }
 /** @return {!BorderSkipped} */
 static get f_MIDDLE__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_MIDDLE__org_pepstock_charba_client_enums_BorderSkipped);
 }
 /** @return {!BorderSkipped} */
 static get f_FALSE__org_pepstock_charba_client_enums_BorderSkipped() {
  return (BorderSkipped.$clinit(), BorderSkipped.$static_FALSE__org_pepstock_charba_client_enums_BorderSkipped);
 }
 
 static $clinit() {
  BorderSkipped.$clinit = () =>{};
  BorderSkipped.$loadModules();
  Enum.$clinit();
  BorderSkipped.$static_START__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), BorderSkipped.$ordinal_START__org_pepstock_charba_client_enums_BorderSkipped, "start");
  BorderSkipped.$static_END__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END"), BorderSkipped.$ordinal_END__org_pepstock_charba_client_enums_BorderSkipped, "end");
  BorderSkipped.$static_TOP__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOP"), BorderSkipped.$ordinal_TOP__org_pepstock_charba_client_enums_BorderSkipped, "top");
  BorderSkipped.$static_LEFT__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEFT"), BorderSkipped.$ordinal_LEFT__org_pepstock_charba_client_enums_BorderSkipped, "left");
  BorderSkipped.$static_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOTTOM"), BorderSkipped.$ordinal_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped, "bottom");
  BorderSkipped.$static_RIGHT__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIGHT"), BorderSkipped.$ordinal_RIGHT__org_pepstock_charba_client_enums_BorderSkipped, "right");
  BorderSkipped.$static_MIDDLE__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIDDLE"), BorderSkipped.$ordinal_MIDDLE__org_pepstock_charba_client_enums_BorderSkipped, "middle");
  BorderSkipped.$static_FALSE__org_pepstock_charba_client_enums_BorderSkipped = BorderSkipped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FALSE"), BorderSkipped.$ordinal_FALSE__org_pepstock_charba_client_enums_BorderSkipped, "false");
  BorderSkipped.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderSkipped_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderSkipped;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!BorderSkipped}*/
BorderSkipped.$static_START__org_pepstock_charba_client_enums_BorderSkipped;
/**@private {!BorderSkipped}*/
BorderSkipped.$static_END__org_pepstock_charba_client_enums_BorderSkipped;
/**@private {!BorderSkipped}*/
BorderSkipped.$static_TOP__org_pepstock_charba_client_enums_BorderSkipped;
/**@private {!BorderSkipped}*/
BorderSkipped.$static_LEFT__org_pepstock_charba_client_enums_BorderSkipped;
/**@private {!BorderSkipped}*/
BorderSkipped.$static_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped;
/**@private {!BorderSkipped}*/
BorderSkipped.$static_RIGHT__org_pepstock_charba_client_enums_BorderSkipped;
/**@private {!BorderSkipped}*/
BorderSkipped.$static_MIDDLE__org_pepstock_charba_client_enums_BorderSkipped;
/**@private {!BorderSkipped}*/
BorderSkipped.$static_FALSE__org_pepstock_charba_client_enums_BorderSkipped;
/**@type {Map<?string, !BorderSkipped>}*/
BorderSkipped.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderSkipped_;
/**@const {number}*/
BorderSkipped.$ordinal_START__org_pepstock_charba_client_enums_BorderSkipped = 0;
/**@const {number}*/
BorderSkipped.$ordinal_END__org_pepstock_charba_client_enums_BorderSkipped = 1;
/**@const {number}*/
BorderSkipped.$ordinal_TOP__org_pepstock_charba_client_enums_BorderSkipped = 2;
/**@const {number}*/
BorderSkipped.$ordinal_LEFT__org_pepstock_charba_client_enums_BorderSkipped = 3;
/**@const {number}*/
BorderSkipped.$ordinal_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped = 4;
/**@const {number}*/
BorderSkipped.$ordinal_RIGHT__org_pepstock_charba_client_enums_BorderSkipped = 5;
/**@const {number}*/
BorderSkipped.$ordinal_MIDDLE__org_pepstock_charba_client_enums_BorderSkipped = 6;
/**@const {number}*/
BorderSkipped.$ordinal_FALSE__org_pepstock_charba_client_enums_BorderSkipped = 7;
Key.$markImplementor(BorderSkipped);
$Util.$setClassMetadataForEnum(BorderSkipped, "org.pepstock.charba.client.enums.BorderSkipped");

exports = BorderSkipped;

//# sourceMappingURL=BorderSkipped.js.map
