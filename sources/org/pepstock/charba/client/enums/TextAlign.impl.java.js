goog.module('org.pepstock.charba.client.enums.TextAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextAlign>}
 * @implements {Key}
 */
class TextAlign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_TextAlign_;
  /**@type {?string}*/
  this.f_leftRightValue__org_pepstock_charba_client_enums_TextAlign_;
  /**@type {?string}*/
  this.f_startEndValue__org_pepstock_charba_client_enums_TextAlign_;
 }
 //Factory method corresponding to constructor 'TextAlign(String, int, String)'.
 /** @return {!TextAlign} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TextAlign();
  $instance.$ctor__org_pepstock_charba_client_enums_TextAlign__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 //Initialization from constructor 'TextAlign(String, int, String)'.
 
 $ctor__org_pepstock_charba_client_enums_TextAlign__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__org_pepstock_charba_client_enums_TextAlign__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($name, $ordinal, value, null, null);
 }
 //Factory method corresponding to constructor 'TextAlign(String, int, String, String, String)'.
 /** @return {!TextAlign} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ leftRightValue, /** ?string */ startEndValue) {
  let $instance = new TextAlign();
  $instance.$ctor__org_pepstock_charba_client_enums_TextAlign__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($name, $ordinal, value, leftRightValue, startEndValue);
  return $instance;
 }
 //Initialization from constructor 'TextAlign(String, int, String, String, String)'.
 
 $ctor__org_pepstock_charba_client_enums_TextAlign__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ leftRightValue, /** ?string */ startEndValue) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_TextAlign_ = value;
  this.f_leftRightValue__org_pepstock_charba_client_enums_TextAlign_ = $Equality.$same(leftRightValue, null) ? value : leftRightValue;
  this.f_startEndValue__org_pepstock_charba_client_enums_TextAlign_ = $Equality.$same(startEndValue, null) ? value : startEndValue;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_TextAlign_;
 }
 /** @return {?string} */
 m_getLeftRightValue__() {
  return this.f_leftRightValue__org_pepstock_charba_client_enums_TextAlign_;
 }
 /** @return {?string} */
 m_getStartEndValue__() {
  return this.f_startEndValue__org_pepstock_charba_client_enums_TextAlign_;
 }
 /** @return {!TextAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextAlign.$clinit();
  if ($Equality.$same(TextAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TextAlign_, null)) {
   TextAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TextAlign_ = $Enums.createMapFromValues(TextAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TextAlign_);
 }
 /** @return {!Array<!TextAlign>} */
 static m_values__() {
  TextAlign.$clinit();
  return /**@type {!Array<TextAlign>}*/ ($Arrays.$init([TextAlign.$static_CENTER__org_pepstock_charba_client_enums_TextAlign, TextAlign.$static_END__org_pepstock_charba_client_enums_TextAlign, TextAlign.$static_LEFT__org_pepstock_charba_client_enums_TextAlign, TextAlign.$static_RIGHT__org_pepstock_charba_client_enums_TextAlign, TextAlign.$static_START__org_pepstock_charba_client_enums_TextAlign], TextAlign));
 }
 /** @return {!TextAlign} */
 static get f_CENTER__org_pepstock_charba_client_enums_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$static_CENTER__org_pepstock_charba_client_enums_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_END__org_pepstock_charba_client_enums_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$static_END__org_pepstock_charba_client_enums_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_LEFT__org_pepstock_charba_client_enums_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$static_LEFT__org_pepstock_charba_client_enums_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_RIGHT__org_pepstock_charba_client_enums_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$static_RIGHT__org_pepstock_charba_client_enums_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_START__org_pepstock_charba_client_enums_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$static_START__org_pepstock_charba_client_enums_TextAlign);
 }
 
 static $clinit() {
  TextAlign.$clinit = () =>{};
  TextAlign.$loadModules();
  Enum.$clinit();
  TextAlign.$static_CENTER__org_pepstock_charba_client_enums_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), TextAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_TextAlign, "center");
  TextAlign.$static_END__org_pepstock_charba_client_enums_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("END"), TextAlign.$ordinal_END__org_pepstock_charba_client_enums_TextAlign, "end", "right", null);
  TextAlign.$static_LEFT__org_pepstock_charba_client_enums_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("LEFT"), TextAlign.$ordinal_LEFT__org_pepstock_charba_client_enums_TextAlign, "left", null, "start");
  TextAlign.$static_RIGHT__org_pepstock_charba_client_enums_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("RIGHT"), TextAlign.$ordinal_RIGHT__org_pepstock_charba_client_enums_TextAlign, "right", null, "end");
  TextAlign.$static_START__org_pepstock_charba_client_enums_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("START"), TextAlign.$ordinal_START__org_pepstock_charba_client_enums_TextAlign, "start", "left", null);
  TextAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TextAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TextAlign}*/
TextAlign.$static_CENTER__org_pepstock_charba_client_enums_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$static_END__org_pepstock_charba_client_enums_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$static_LEFT__org_pepstock_charba_client_enums_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$static_RIGHT__org_pepstock_charba_client_enums_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$static_START__org_pepstock_charba_client_enums_TextAlign;
/**@type {Map<?string, !TextAlign>}*/
TextAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TextAlign_;
/**@const {number}*/
TextAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_TextAlign = 0;
/**@const {number}*/
TextAlign.$ordinal_END__org_pepstock_charba_client_enums_TextAlign = 1;
/**@const {number}*/
TextAlign.$ordinal_LEFT__org_pepstock_charba_client_enums_TextAlign = 2;
/**@const {number}*/
TextAlign.$ordinal_RIGHT__org_pepstock_charba_client_enums_TextAlign = 3;
/**@const {number}*/
TextAlign.$ordinal_START__org_pepstock_charba_client_enums_TextAlign = 4;
Key.$markImplementor(TextAlign);
$Util.$setClassMetadataForEnum(TextAlign, "org.pepstock.charba.client.enums.TextAlign");

exports = TextAlign;

//# sourceMappingURL=TextAlign.js.map
