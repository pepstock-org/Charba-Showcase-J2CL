goog.module('org.pepstock.charba.client.dom.enums.Repetition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Repetition>}
 * @implements {Key}
 */
class Repetition extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_Repetition_;
 }
 /** @return {!Repetition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Repetition();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_Repetition__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_Repetition__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_Repetition_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_Repetition_;
 }
 /** @return {!Repetition} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Repetition.$clinit();
  if ($Equality.$same(Repetition.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Repetition_, null)) {
   Repetition.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Repetition_ = $Enums.createMapFromValues(Repetition.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Repetition.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Repetition_);
 }
 /** @return {!Array<!Repetition>} */
 static m_values__() {
  Repetition.$clinit();
  return /**@type {!Array<Repetition>}*/ ($Arrays.$init([Repetition.$static_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition, Repetition.$static_REPEAT__org_pepstock_charba_client_dom_enums_Repetition, Repetition.$static_REPEAT_X__org_pepstock_charba_client_dom_enums_Repetition, Repetition.$static_REPEAT_Y__org_pepstock_charba_client_dom_enums_Repetition], Repetition));
 }
 /** @return {!Repetition} */
 static get f_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition() {
  return (Repetition.$clinit(), Repetition.$static_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition);
 }
 /** @return {!Repetition} */
 static get f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition() {
  return (Repetition.$clinit(), Repetition.$static_REPEAT__org_pepstock_charba_client_dom_enums_Repetition);
 }
 /** @return {!Repetition} */
 static get f_REPEAT_X__org_pepstock_charba_client_dom_enums_Repetition() {
  return (Repetition.$clinit(), Repetition.$static_REPEAT_X__org_pepstock_charba_client_dom_enums_Repetition);
 }
 /** @return {!Repetition} */
 static get f_REPEAT_Y__org_pepstock_charba_client_dom_enums_Repetition() {
  return (Repetition.$clinit(), Repetition.$static_REPEAT_Y__org_pepstock_charba_client_dom_enums_Repetition);
 }
 
 static $clinit() {
  Repetition.$clinit = () =>{};
  Repetition.$loadModules();
  Enum.$clinit();
  Repetition.$static_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NO_REPEAT"), Repetition.$ordinal_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition, "no-repeat");
  Repetition.$static_REPEAT__org_pepstock_charba_client_dom_enums_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT"), Repetition.$ordinal_REPEAT__org_pepstock_charba_client_dom_enums_Repetition, "repeat");
  Repetition.$static_REPEAT_X__org_pepstock_charba_client_dom_enums_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT_X"), Repetition.$ordinal_REPEAT_X__org_pepstock_charba_client_dom_enums_Repetition, "repeat-x");
  Repetition.$static_REPEAT_Y__org_pepstock_charba_client_dom_enums_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT_Y"), Repetition.$ordinal_REPEAT_Y__org_pepstock_charba_client_dom_enums_Repetition, "repeat-y");
  Repetition.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Repetition_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Repetition;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Repetition}*/
Repetition.$static_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition;
/**@private {!Repetition}*/
Repetition.$static_REPEAT__org_pepstock_charba_client_dom_enums_Repetition;
/**@private {!Repetition}*/
Repetition.$static_REPEAT_X__org_pepstock_charba_client_dom_enums_Repetition;
/**@private {!Repetition}*/
Repetition.$static_REPEAT_Y__org_pepstock_charba_client_dom_enums_Repetition;
/**@type {Map<?string, !Repetition>}*/
Repetition.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_Repetition_;
/**@const {number}*/
Repetition.$ordinal_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition = 0;
/**@const {number}*/
Repetition.$ordinal_REPEAT__org_pepstock_charba_client_dom_enums_Repetition = 1;
/**@const {number}*/
Repetition.$ordinal_REPEAT_X__org_pepstock_charba_client_dom_enums_Repetition = 2;
/**@const {number}*/
Repetition.$ordinal_REPEAT_Y__org_pepstock_charba_client_dom_enums_Repetition = 3;
Key.$markImplementor(Repetition);
$Util.$setClassMetadataForEnum(Repetition, "org.pepstock.charba.client.dom.enums.Repetition");

exports = Repetition;

//# sourceMappingURL=Repetition.js.map
