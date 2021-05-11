goog.module('org.pepstock.charba.client.enums.Display$impl');

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
  this.f_value__org_pepstock_charba_client_enums_Display_;
 }
 /** @return {!Display} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Display();
  $instance.$ctor__org_pepstock_charba_client_enums_Display__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Display__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Display_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Display_;
 }
 /** @return {!Display} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Display.$clinit();
  if ($Equality.$same(Display.f_namesToValuesMap__org_pepstock_charba_client_enums_Display_, null)) {
   Display.f_namesToValuesMap__org_pepstock_charba_client_enums_Display_ = $Enums.createMapFromValues(Display.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Display.f_namesToValuesMap__org_pepstock_charba_client_enums_Display_);
 }
 /** @return {!Array<!Display>} */
 static m_values__() {
  Display.$clinit();
  return /**@type {!Array<Display>}*/ ($Arrays.$init([Display.$static_TRUE__org_pepstock_charba_client_enums_Display, Display.$static_FALSE__org_pepstock_charba_client_enums_Display, Display.$static_AUTO__org_pepstock_charba_client_enums_Display], Display));
 }
 /** @return {!Display} */
 static get f_TRUE__org_pepstock_charba_client_enums_Display() {
  return (Display.$clinit(), Display.$static_TRUE__org_pepstock_charba_client_enums_Display);
 }
 /** @return {!Display} */
 static get f_FALSE__org_pepstock_charba_client_enums_Display() {
  return (Display.$clinit(), Display.$static_FALSE__org_pepstock_charba_client_enums_Display);
 }
 /** @return {!Display} */
 static get f_AUTO__org_pepstock_charba_client_enums_Display() {
  return (Display.$clinit(), Display.$static_AUTO__org_pepstock_charba_client_enums_Display);
 }
 
 static $clinit() {
  Display.$clinit = () =>{};
  Display.$loadModules();
  Enum.$clinit();
  Display.$static_TRUE__org_pepstock_charba_client_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TRUE"), Display.$ordinal_TRUE__org_pepstock_charba_client_enums_Display, "true");
  Display.$static_FALSE__org_pepstock_charba_client_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FALSE"), Display.$ordinal_FALSE__org_pepstock_charba_client_enums_Display, "false");
  Display.$static_AUTO__org_pepstock_charba_client_enums_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AUTO"), Display.$ordinal_AUTO__org_pepstock_charba_client_enums_Display, "auto");
  Display.f_namesToValuesMap__org_pepstock_charba_client_enums_Display_ = null;
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
Display.$static_TRUE__org_pepstock_charba_client_enums_Display;
/**@private {!Display}*/
Display.$static_FALSE__org_pepstock_charba_client_enums_Display;
/**@private {!Display}*/
Display.$static_AUTO__org_pepstock_charba_client_enums_Display;
/**@type {Map<?string, !Display>}*/
Display.f_namesToValuesMap__org_pepstock_charba_client_enums_Display_;
/**@const {number}*/
Display.$ordinal_TRUE__org_pepstock_charba_client_enums_Display = 0;
/**@const {number}*/
Display.$ordinal_FALSE__org_pepstock_charba_client_enums_Display = 1;
/**@const {number}*/
Display.$ordinal_AUTO__org_pepstock_charba_client_enums_Display = 2;
Key.$markImplementor(Display);
$Util.$setClassMetadataForEnum(Display, "org.pepstock.charba.client.enums.Display");

exports = Display;

//# sourceMappingURL=Display.js.map
