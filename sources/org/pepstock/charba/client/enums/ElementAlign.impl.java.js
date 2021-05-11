goog.module('org.pepstock.charba.client.enums.ElementAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ElementAlign>}
 * @implements {Key}
 */
class ElementAlign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_ElementAlign_;
  /**@type {?string}*/
  this.f_horizontalAlignmentValue__org_pepstock_charba_client_enums_ElementAlign_;
 }
 /** @return {!ElementAlign} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ horizontalAlignmentValue) {
  let $instance = new ElementAlign();
  $instance.$ctor__org_pepstock_charba_client_enums_ElementAlign__java_lang_String__int__java_lang_String__java_lang_String($name, $ordinal, value, horizontalAlignmentValue);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ElementAlign__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ horizontalAlignmentValue) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_ElementAlign_ = value;
  this.f_horizontalAlignmentValue__org_pepstock_charba_client_enums_ElementAlign_ = horizontalAlignmentValue;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_ElementAlign_;
 }
 /** @return {?string} */
 m_getHorizontalAlignmentValue__() {
  return this.f_horizontalAlignmentValue__org_pepstock_charba_client_enums_ElementAlign_;
 }
 /** @return {!ElementAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ElementAlign.$clinit();
  if ($Equality.$same(ElementAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ElementAlign_, null)) {
   ElementAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ElementAlign_ = $Enums.createMapFromValues(ElementAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ElementAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ElementAlign_);
 }
 /** @return {!Array<!ElementAlign>} */
 static m_values__() {
  ElementAlign.$clinit();
  return /**@type {!Array<ElementAlign>}*/ ($Arrays.$init([ElementAlign.$static_START__org_pepstock_charba_client_enums_ElementAlign, ElementAlign.$static_CENTER__org_pepstock_charba_client_enums_ElementAlign, ElementAlign.$static_END__org_pepstock_charba_client_enums_ElementAlign], ElementAlign));
 }
 /** @return {!ElementAlign} */
 static get f_START__org_pepstock_charba_client_enums_ElementAlign() {
  return (ElementAlign.$clinit(), ElementAlign.$static_START__org_pepstock_charba_client_enums_ElementAlign);
 }
 /** @return {!ElementAlign} */
 static get f_CENTER__org_pepstock_charba_client_enums_ElementAlign() {
  return (ElementAlign.$clinit(), ElementAlign.$static_CENTER__org_pepstock_charba_client_enums_ElementAlign);
 }
 /** @return {!ElementAlign} */
 static get f_END__org_pepstock_charba_client_enums_ElementAlign() {
  return (ElementAlign.$clinit(), ElementAlign.$static_END__org_pepstock_charba_client_enums_ElementAlign);
 }
 
 static $clinit() {
  ElementAlign.$clinit = () =>{};
  ElementAlign.$loadModules();
  Enum.$clinit();
  ElementAlign.$static_START__org_pepstock_charba_client_enums_ElementAlign = ElementAlign.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("START"), ElementAlign.$ordinal_START__org_pepstock_charba_client_enums_ElementAlign, "start", "left");
  ElementAlign.$static_CENTER__org_pepstock_charba_client_enums_ElementAlign = ElementAlign.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CENTER"), ElementAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_ElementAlign, "center", "center");
  ElementAlign.$static_END__org_pepstock_charba_client_enums_ElementAlign = ElementAlign.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("END"), ElementAlign.$ordinal_END__org_pepstock_charba_client_enums_ElementAlign, "end", "right");
  ElementAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ElementAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ElementAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ElementAlign}*/
ElementAlign.$static_START__org_pepstock_charba_client_enums_ElementAlign;
/**@private {!ElementAlign}*/
ElementAlign.$static_CENTER__org_pepstock_charba_client_enums_ElementAlign;
/**@private {!ElementAlign}*/
ElementAlign.$static_END__org_pepstock_charba_client_enums_ElementAlign;
/**@type {Map<?string, !ElementAlign>}*/
ElementAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_ElementAlign_;
/**@const {number}*/
ElementAlign.$ordinal_START__org_pepstock_charba_client_enums_ElementAlign = 0;
/**@const {number}*/
ElementAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_ElementAlign = 1;
/**@const {number}*/
ElementAlign.$ordinal_END__org_pepstock_charba_client_enums_ElementAlign = 2;
Key.$markImplementor(ElementAlign);
$Util.$setClassMetadataForEnum(ElementAlign, "org.pepstock.charba.client.enums.ElementAlign");

exports = ElementAlign;

//# sourceMappingURL=ElementAlign.js.map
