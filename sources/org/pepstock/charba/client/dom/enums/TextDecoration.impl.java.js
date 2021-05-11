goog.module('org.pepstock.charba.client.dom.enums.TextDecoration$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextDecoration>}
 * @implements {Key}
 */
class TextDecoration extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_TextDecoration_;
 }
 /** @return {!TextDecoration} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TextDecoration();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_TextDecoration__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_TextDecoration__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_TextDecoration_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_TextDecoration_;
 }
 /** @return {!TextDecoration} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextDecoration.$clinit();
  if ($Equality.$same(TextDecoration.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextDecoration_, null)) {
   TextDecoration.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextDecoration_ = $Enums.createMapFromValues(TextDecoration.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextDecoration.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextDecoration_);
 }
 /** @return {!Array<!TextDecoration>} */
 static m_values__() {
  TextDecoration.$clinit();
  return /**@type {!Array<TextDecoration>}*/ ($Arrays.$init([TextDecoration.$static_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration, TextDecoration.$static_NONE__org_pepstock_charba_client_dom_enums_TextDecoration, TextDecoration.$static_OVERLINE__org_pepstock_charba_client_dom_enums_TextDecoration, TextDecoration.$static_UNDERLINE__org_pepstock_charba_client_dom_enums_TextDecoration], TextDecoration));
 }
 /** @return {!TextDecoration} */
 static get f_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$static_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration);
 }
 /** @return {!TextDecoration} */
 static get f_NONE__org_pepstock_charba_client_dom_enums_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$static_NONE__org_pepstock_charba_client_dom_enums_TextDecoration);
 }
 /** @return {!TextDecoration} */
 static get f_OVERLINE__org_pepstock_charba_client_dom_enums_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$static_OVERLINE__org_pepstock_charba_client_dom_enums_TextDecoration);
 }
 /** @return {!TextDecoration} */
 static get f_UNDERLINE__org_pepstock_charba_client_dom_enums_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$static_UNDERLINE__org_pepstock_charba_client_dom_enums_TextDecoration);
 }
 
 static $clinit() {
  TextDecoration.$clinit = () =>{};
  TextDecoration.$loadModules();
  Enum.$clinit();
  TextDecoration.$static_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration = TextDecoration.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_THROUGH"), TextDecoration.$ordinal_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration, "line-through");
  TextDecoration.$static_NONE__org_pepstock_charba_client_dom_enums_TextDecoration = TextDecoration.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NONE"), TextDecoration.$ordinal_NONE__org_pepstock_charba_client_dom_enums_TextDecoration, "none");
  TextDecoration.$static_OVERLINE__org_pepstock_charba_client_dom_enums_TextDecoration = TextDecoration.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OVERLINE"), TextDecoration.$ordinal_OVERLINE__org_pepstock_charba_client_dom_enums_TextDecoration, "overline");
  TextDecoration.$static_UNDERLINE__org_pepstock_charba_client_dom_enums_TextDecoration = TextDecoration.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNDERLINE"), TextDecoration.$ordinal_UNDERLINE__org_pepstock_charba_client_dom_enums_TextDecoration, "underline");
  TextDecoration.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextDecoration_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextDecoration;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TextDecoration}*/
TextDecoration.$static_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration;
/**@private {!TextDecoration}*/
TextDecoration.$static_NONE__org_pepstock_charba_client_dom_enums_TextDecoration;
/**@private {!TextDecoration}*/
TextDecoration.$static_OVERLINE__org_pepstock_charba_client_dom_enums_TextDecoration;
/**@private {!TextDecoration}*/
TextDecoration.$static_UNDERLINE__org_pepstock_charba_client_dom_enums_TextDecoration;
/**@type {Map<?string, !TextDecoration>}*/
TextDecoration.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_TextDecoration_;
/**@const {number}*/
TextDecoration.$ordinal_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration = 0;
/**@const {number}*/
TextDecoration.$ordinal_NONE__org_pepstock_charba_client_dom_enums_TextDecoration = 1;
/**@const {number}*/
TextDecoration.$ordinal_OVERLINE__org_pepstock_charba_client_dom_enums_TextDecoration = 2;
/**@const {number}*/
TextDecoration.$ordinal_UNDERLINE__org_pepstock_charba_client_dom_enums_TextDecoration = 3;
Key.$markImplementor(TextDecoration);
$Util.$setClassMetadataForEnum(TextDecoration, "org.pepstock.charba.client.dom.enums.TextDecoration");

exports = TextDecoration;

//# sourceMappingURL=TextDecoration.js.map
