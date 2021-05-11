goog.module('org.pepstock.charba.client.enums.PluginOptionsScope$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PluginOptionsScope>}
 * @implements {Key}
 */
class PluginOptionsScope extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_PluginOptionsScope_;
 }
 /** @return {!PluginOptionsScope} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new PluginOptionsScope();
  $instance.$ctor__org_pepstock_charba_client_enums_PluginOptionsScope__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_PluginOptionsScope__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_PluginOptionsScope_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_PluginOptionsScope_;
 }
 /** @return {!PluginOptionsScope} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PluginOptionsScope.$clinit();
  if ($Equality.$same(PluginOptionsScope.f_namesToValuesMap__org_pepstock_charba_client_enums_PluginOptionsScope_, null)) {
   PluginOptionsScope.f_namesToValuesMap__org_pepstock_charba_client_enums_PluginOptionsScope_ = $Enums.createMapFromValues(PluginOptionsScope.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PluginOptionsScope.f_namesToValuesMap__org_pepstock_charba_client_enums_PluginOptionsScope_);
 }
 /** @return {!Array<!PluginOptionsScope>} */
 static m_values__() {
  PluginOptionsScope.$clinit();
  return /**@type {!Array<PluginOptionsScope>}*/ ($Arrays.$init([PluginOptionsScope.$static_GLOBAL__org_pepstock_charba_client_enums_PluginOptionsScope, PluginOptionsScope.$static_GLOBAL_CHART__org_pepstock_charba_client_enums_PluginOptionsScope], PluginOptionsScope));
 }
 /** @return {!PluginOptionsScope} */
 static get f_GLOBAL__org_pepstock_charba_client_enums_PluginOptionsScope() {
  return (PluginOptionsScope.$clinit(), PluginOptionsScope.$static_GLOBAL__org_pepstock_charba_client_enums_PluginOptionsScope);
 }
 /** @return {!PluginOptionsScope} */
 static get f_GLOBAL_CHART__org_pepstock_charba_client_enums_PluginOptionsScope() {
  return (PluginOptionsScope.$clinit(), PluginOptionsScope.$static_GLOBAL_CHART__org_pepstock_charba_client_enums_PluginOptionsScope);
 }
 
 static $clinit() {
  PluginOptionsScope.$clinit = () =>{};
  PluginOptionsScope.$loadModules();
  Enum.$clinit();
  PluginOptionsScope.$static_GLOBAL__org_pepstock_charba_client_enums_PluginOptionsScope = PluginOptionsScope.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GLOBAL"), PluginOptionsScope.$ordinal_GLOBAL__org_pepstock_charba_client_enums_PluginOptionsScope, "global");
  PluginOptionsScope.$static_GLOBAL_CHART__org_pepstock_charba_client_enums_PluginOptionsScope = PluginOptionsScope.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GLOBAL_CHART"), PluginOptionsScope.$ordinal_GLOBAL_CHART__org_pepstock_charba_client_enums_PluginOptionsScope, "globalChart");
  PluginOptionsScope.f_namesToValuesMap__org_pepstock_charba_client_enums_PluginOptionsScope_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginOptionsScope;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!PluginOptionsScope}*/
PluginOptionsScope.$static_GLOBAL__org_pepstock_charba_client_enums_PluginOptionsScope;
/**@private {!PluginOptionsScope}*/
PluginOptionsScope.$static_GLOBAL_CHART__org_pepstock_charba_client_enums_PluginOptionsScope;
/**@type {Map<?string, !PluginOptionsScope>}*/
PluginOptionsScope.f_namesToValuesMap__org_pepstock_charba_client_enums_PluginOptionsScope_;
/**@const {number}*/
PluginOptionsScope.$ordinal_GLOBAL__org_pepstock_charba_client_enums_PluginOptionsScope = 0;
/**@const {number}*/
PluginOptionsScope.$ordinal_GLOBAL_CHART__org_pepstock_charba_client_enums_PluginOptionsScope = 1;
Key.$markImplementor(PluginOptionsScope);
$Util.$setClassMetadataForEnum(PluginOptionsScope, "org.pepstock.charba.client.enums.PluginOptionsScope");

exports = PluginOptionsScope;

//# sourceMappingURL=PluginOptionsScope.js.map
