goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered.Property$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Property>}
 * @implements {Key}
 */
class Property extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Property} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_value__() {
  return "hovered";
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property], Property));
 }
 /** @return {!Property} */
 static get f_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property() {
  return (Property.$clinit(), Property.$static_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property = Property.$create__java_lang_String__int($Util.$makeEnumName("hovered"), Property.$ordinal_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property);
  Property.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Property;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Property}*/
Property.$static_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property_;
/**@const {number}*/
Property.$ordinal_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property = 0;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$Hovered$Property");

exports = Property;

//# sourceMappingURL=DataLabelsHighlightCase$Hovered$Property.js.map
