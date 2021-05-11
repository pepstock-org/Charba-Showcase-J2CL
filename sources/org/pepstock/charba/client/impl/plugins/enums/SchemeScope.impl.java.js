goog.module('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SchemeScope>}
 * @implements {Key}
 */
class SchemeScope extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_;
 }
 /** @return {!SchemeScope} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new SchemeScope();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_enums_SchemeScope__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_SchemeScope__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_;
 }
 /** @return {!SchemeScope} */
 static m_valueOf__java_lang_String(/** string */ name) {
  SchemeScope.$clinit();
  if ($Equality.$same(SchemeScope.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_, null)) {
   SchemeScope.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_ = $Enums.createMapFromValues(SchemeScope.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SchemeScope.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_);
 }
 /** @return {!Array<!SchemeScope>} */
 static m_values__() {
  SchemeScope.$clinit();
  return /**@type {!Array<SchemeScope>}*/ ($Arrays.$init([SchemeScope.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope, SchemeScope.$static_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope], SchemeScope));
 }
 /** @return {!SchemeScope} */
 static get f_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope() {
  return (SchemeScope.$clinit(), SchemeScope.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope);
 }
 /** @return {!SchemeScope} */
 static get f_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope() {
  return (SchemeScope.$clinit(), SchemeScope.$static_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope);
 }
 
 static $clinit() {
  SchemeScope.$clinit = () =>{};
  SchemeScope.$loadModules();
  Enum.$clinit();
  SchemeScope.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope = SchemeScope.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATASET"), SchemeScope.$ordinal_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope, "dataset");
  SchemeScope.$static_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope = SchemeScope.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA"), SchemeScope.$ordinal_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope, "data");
  SchemeScope.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SchemeScope;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!SchemeScope}*/
SchemeScope.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope;
/**@private {!SchemeScope}*/
SchemeScope.$static_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope;
/**@type {Map<?string, !SchemeScope>}*/
SchemeScope.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_SchemeScope_;
/**@const {number}*/
SchemeScope.$ordinal_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope = 0;
/**@const {number}*/
SchemeScope.$ordinal_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope = 1;
Key.$markImplementor(SchemeScope);
$Util.$setClassMetadataForEnum(SchemeScope, "org.pepstock.charba.client.impl.plugins.enums.SchemeScope");

exports = SchemeScope;

//# sourceMappingURL=SchemeScope.js.map
