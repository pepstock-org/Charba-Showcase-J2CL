goog.module('org.pepstock.charba.client.enums.TextDirection$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextDirection>}
 * @implements {Key}
 */
class TextDirection extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_TextDirection_;
 }
 /** @return {!TextDirection} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TextDirection();
  $instance.$ctor__org_pepstock_charba_client_enums_TextDirection__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_TextDirection__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_TextDirection_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_TextDirection_;
 }
 /** @return {!TextDirection} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextDirection.$clinit();
  if ($Equality.$same(TextDirection.f_namesToValuesMap__org_pepstock_charba_client_enums_TextDirection_, null)) {
   TextDirection.f_namesToValuesMap__org_pepstock_charba_client_enums_TextDirection_ = $Enums.createMapFromValues(TextDirection.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextDirection.f_namesToValuesMap__org_pepstock_charba_client_enums_TextDirection_);
 }
 /** @return {!Array<!TextDirection>} */
 static m_values__() {
  TextDirection.$clinit();
  return /**@type {!Array<TextDirection>}*/ ($Arrays.$init([TextDirection.$static_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection, TextDirection.$static_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection], TextDirection));
 }
 /** @return {!TextDirection} */
 static get f_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection() {
  return (TextDirection.$clinit(), TextDirection.$static_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection);
 }
 /** @return {!TextDirection} */
 static get f_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection() {
  return (TextDirection.$clinit(), TextDirection.$static_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection);
 }
 
 static $clinit() {
  TextDirection.$clinit = () =>{};
  TextDirection.$loadModules();
  Enum.$clinit();
  TextDirection.$static_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection = TextDirection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEFT_TO_RIGHT"), TextDirection.$ordinal_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection, "ltr");
  TextDirection.$static_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection = TextDirection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIGHT_TO_LEFT"), TextDirection.$ordinal_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection, "rtl");
  TextDirection.f_namesToValuesMap__org_pepstock_charba_client_enums_TextDirection_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextDirection;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TextDirection}*/
TextDirection.$static_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection;
/**@private {!TextDirection}*/
TextDirection.$static_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection;
/**@type {Map<?string, !TextDirection>}*/
TextDirection.f_namesToValuesMap__org_pepstock_charba_client_enums_TextDirection_;
/**@const {number}*/
TextDirection.$ordinal_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection = 0;
/**@const {number}*/
TextDirection.$ordinal_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection = 1;
Key.$markImplementor(TextDirection);
$Util.$setClassMetadataForEnum(TextDirection, "org.pepstock.charba.client.enums.TextDirection");

exports = TextDirection;

//# sourceMappingURL=TextDirection.js.map
