goog.module('org.pepstock.charba.client.dom.enums.TextBaseline$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextBaseline>}
 * @implements {Key}
 */
class TextBaseline extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_TextBaseline_;
 }
 /** @return {!TextBaseline} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TextBaseline();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_TextBaseline__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_TextBaseline__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_TextBaseline_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_TextBaseline_;
 }
 /** @return {!TextBaseline} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextBaseline.$clinit();
  if ($Equality.$same(TextBaseline.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextBaseline_, null)) {
   TextBaseline.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextBaseline_ = $Enums.createMapFromValues(TextBaseline.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextBaseline.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextBaseline_);
 }
 /** @return {!Array<!TextBaseline>} */
 static m_values__() {
  TextBaseline.$clinit();
  return /**@type {!Array<TextBaseline>}*/ ($Arrays.$init([TextBaseline.$static_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline, TextBaseline.$static_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline, TextBaseline.$static_HANGING__org_pepstock_charba_client_dom_enums_TextBaseline, TextBaseline.$static_IDEOGRAPHIC__org_pepstock_charba_client_dom_enums_TextBaseline, TextBaseline.$static_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline, TextBaseline.$static_TOP__org_pepstock_charba_client_dom_enums_TextBaseline], TextBaseline));
 }
 /** @return {!TextBaseline} */
 static get f_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$static_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline);
 }
 /** @return {!TextBaseline} */
 static get f_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$static_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline);
 }
 /** @return {!TextBaseline} */
 static get f_HANGING__org_pepstock_charba_client_dom_enums_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$static_HANGING__org_pepstock_charba_client_dom_enums_TextBaseline);
 }
 /** @return {!TextBaseline} */
 static get f_IDEOGRAPHIC__org_pepstock_charba_client_dom_enums_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$static_IDEOGRAPHIC__org_pepstock_charba_client_dom_enums_TextBaseline);
 }
 /** @return {!TextBaseline} */
 static get f_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$static_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline);
 }
 /** @return {!TextBaseline} */
 static get f_TOP__org_pepstock_charba_client_dom_enums_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$static_TOP__org_pepstock_charba_client_dom_enums_TextBaseline);
 }
 
 static $clinit() {
  TextBaseline.$clinit = () =>{};
  TextBaseline.$loadModules();
  Enum.$clinit();
  TextBaseline.$static_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALPHABETIC"), TextBaseline.$ordinal_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline, "alphabetic");
  TextBaseline.$static_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOTTOM"), TextBaseline.$ordinal_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline, "bottom");
  TextBaseline.$static_HANGING__org_pepstock_charba_client_dom_enums_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HANGING"), TextBaseline.$ordinal_HANGING__org_pepstock_charba_client_dom_enums_TextBaseline, "hanging");
  TextBaseline.$static_IDEOGRAPHIC__org_pepstock_charba_client_dom_enums_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IDEOGRAPHIC"), TextBaseline.$ordinal_IDEOGRAPHIC__org_pepstock_charba_client_dom_enums_TextBaseline, "ideographic");
  TextBaseline.$static_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIDDLE"), TextBaseline.$ordinal_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline, "middle");
  TextBaseline.$static_TOP__org_pepstock_charba_client_dom_enums_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOP"), TextBaseline.$ordinal_TOP__org_pepstock_charba_client_dom_enums_TextBaseline, "top");
  TextBaseline.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextBaseline_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextBaseline;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TextBaseline}*/
TextBaseline.$static_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline;
/**@private {!TextBaseline}*/
TextBaseline.$static_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline;
/**@private {!TextBaseline}*/
TextBaseline.$static_HANGING__org_pepstock_charba_client_dom_enums_TextBaseline;
/**@private {!TextBaseline}*/
TextBaseline.$static_IDEOGRAPHIC__org_pepstock_charba_client_dom_enums_TextBaseline;
/**@private {!TextBaseline}*/
TextBaseline.$static_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline;
/**@private {!TextBaseline}*/
TextBaseline.$static_TOP__org_pepstock_charba_client_dom_enums_TextBaseline;
/**@type {Map<?string, !TextBaseline>}*/
TextBaseline.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextBaseline_;
/**@const {number}*/
TextBaseline.$ordinal_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline = 0;
/**@const {number}*/
TextBaseline.$ordinal_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline = 1;
/**@const {number}*/
TextBaseline.$ordinal_HANGING__org_pepstock_charba_client_dom_enums_TextBaseline = 2;
/**@const {number}*/
TextBaseline.$ordinal_IDEOGRAPHIC__org_pepstock_charba_client_dom_enums_TextBaseline = 3;
/**@const {number}*/
TextBaseline.$ordinal_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline = 4;
/**@const {number}*/
TextBaseline.$ordinal_TOP__org_pepstock_charba_client_dom_enums_TextBaseline = 5;
Key.$markImplementor(TextBaseline);
$Util.$setClassMetadataForEnum(TextBaseline, "org.pepstock.charba.client.dom.enums.TextBaseline");

exports = TextBaseline;

//# sourceMappingURL=TextBaseline.js.map
