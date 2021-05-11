goog.module('org.pepstock.charba.client.dom.enums.Display$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Display>}
 * @implements {Key}
 */
class Display extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_Display_;
 }
 /** @return {!Display} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Display();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_Display__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_Display__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_Display_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_Display_;
 }
 /** @return {!Display} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Display.$clinit();
  if ($Equality.$same(Display.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Display_, null)) {
   Display.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Display_ = $Enums.createMapFromValues(Display.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Display.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Display_);
 }
 /** @return {!Array<!Display>} */
 static m_values__() {
  Display.$clinit();
  return /**@type {!Array<Display>}*/ ($Arrays.$init([Display.$static_NONE__org_pepstock_charba_client_dom_enums_Display, Display.$static_BLOCK__org_pepstock_charba_client_dom_enums_Display, Display.$static_INLINE__org_pepstock_charba_client_dom_enums_Display, Display.$static_INLINE_BLOCK__org_pepstock_charba_client_dom_enums_Display, Display.$static_INLINE_TABLE__org_pepstock_charba_client_dom_enums_Display, Display.$static_LIST_ITEM__org_pepstock_charba_client_dom_enums_Display, Display.$static_RUN_IN__org_pepstock_charba_client_dom_enums_Display, Display.$static_INITIAL__org_pepstock_charba_client_dom_enums_Display, Display.$static_FLEX__org_pepstock_charba_client_dom_enums_Display, Display.$static_INLINE_FLEX__org_pepstock_charba_client_dom_enums_Display], Display));
 }
 /** @return {!Display} */
 static get f_NONE__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_NONE__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_BLOCK__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_BLOCK__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_INLINE__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_INLINE__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_INLINE_BLOCK__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_INLINE_BLOCK__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_INLINE_TABLE__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_INLINE_TABLE__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_LIST_ITEM__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_LIST_ITEM__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_RUN_IN__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_RUN_IN__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_INITIAL__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_INITIAL__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_FLEX__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_FLEX__org_pepstock_charba_client_dom_enums_Display);
 }
 /** @return {!Display} */
 static get f_INLINE_FLEX__org_pepstock_charba_client_dom_enums_Display() {
  return (Display.$clinit(), Display.$static_INLINE_FLEX__org_pepstock_charba_client_dom_enums_Display);
 }
 
 static $clinit() {
  Display.$clinit = () =>{};
  Display.$loadModules();
  Enum.$clinit();
  Display.$static_NONE__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NONE"), Display.$ordinal_NONE__org_pepstock_charba_client_dom_enums_Display, "none");
  Display.$static_BLOCK__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BLOCK"), Display.$ordinal_BLOCK__org_pepstock_charba_client_dom_enums_Display, "block");
  Display.$static_INLINE__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INLINE"), Display.$ordinal_INLINE__org_pepstock_charba_client_dom_enums_Display, "inline");
  Display.$static_INLINE_BLOCK__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INLINE_BLOCK"), Display.$ordinal_INLINE_BLOCK__org_pepstock_charba_client_dom_enums_Display, "inline-block");
  Display.$static_INLINE_TABLE__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INLINE_TABLE"), Display.$ordinal_INLINE_TABLE__org_pepstock_charba_client_dom_enums_Display, "inline-table");
  Display.$static_LIST_ITEM__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIST_ITEM"), Display.$ordinal_LIST_ITEM__org_pepstock_charba_client_dom_enums_Display, "list-item");
  Display.$static_RUN_IN__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RUN_IN"), Display.$ordinal_RUN_IN__org_pepstock_charba_client_dom_enums_Display, "run-in");
  Display.$static_INITIAL__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INITIAL"), Display.$ordinal_INITIAL__org_pepstock_charba_client_dom_enums_Display, "initial");
  Display.$static_FLEX__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FLEX"), Display.$ordinal_FLEX__org_pepstock_charba_client_dom_enums_Display, "flex");
  Display.$static_INLINE_FLEX__org_pepstock_charba_client_dom_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INLINE_FLEX"), Display.$ordinal_INLINE_FLEX__org_pepstock_charba_client_dom_enums_Display, "inline-flex");
  Display.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Display_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Display;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Display}*/
Display.$static_NONE__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_BLOCK__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_INLINE__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_INLINE_BLOCK__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_INLINE_TABLE__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_LIST_ITEM__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_RUN_IN__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_INITIAL__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_FLEX__org_pepstock_charba_client_dom_enums_Display;
/**@private {!Display}*/
Display.$static_INLINE_FLEX__org_pepstock_charba_client_dom_enums_Display;
/**@type {Map<?string, !Display>}*/
Display.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Display_;
/**@const {number}*/
Display.$ordinal_NONE__org_pepstock_charba_client_dom_enums_Display = 0;
/**@const {number}*/
Display.$ordinal_BLOCK__org_pepstock_charba_client_dom_enums_Display = 1;
/**@const {number}*/
Display.$ordinal_INLINE__org_pepstock_charba_client_dom_enums_Display = 2;
/**@const {number}*/
Display.$ordinal_INLINE_BLOCK__org_pepstock_charba_client_dom_enums_Display = 3;
/**@const {number}*/
Display.$ordinal_INLINE_TABLE__org_pepstock_charba_client_dom_enums_Display = 4;
/**@const {number}*/
Display.$ordinal_LIST_ITEM__org_pepstock_charba_client_dom_enums_Display = 5;
/**@const {number}*/
Display.$ordinal_RUN_IN__org_pepstock_charba_client_dom_enums_Display = 6;
/**@const {number}*/
Display.$ordinal_INITIAL__org_pepstock_charba_client_dom_enums_Display = 7;
/**@const {number}*/
Display.$ordinal_FLEX__org_pepstock_charba_client_dom_enums_Display = 8;
/**@const {number}*/
Display.$ordinal_INLINE_FLEX__org_pepstock_charba_client_dom_enums_Display = 9;
Key.$markImplementor(Display);
$Util.$setClassMetadataForEnum(Display, "org.pepstock.charba.client.dom.enums.Display");

exports = Display;

//# sourceMappingURL=Display.js.map
