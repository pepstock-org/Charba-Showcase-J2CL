goog.module('org.pepstock.charba.client.colors.GradientScope$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GradientScope>}
 * @implements {Key}
 */
class GradientScope extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_colors_GradientScope_;
 }
 /** @return {!GradientScope} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new GradientScope();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientScope__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_GradientScope__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_colors_GradientScope_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_colors_GradientScope_;
 }
 /** @return {!GradientScope} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GradientScope.$clinit();
  if ($Equality.$same(GradientScope.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientScope_, null)) {
   GradientScope.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientScope_ = $Enums.createMapFromValues(GradientScope.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GradientScope.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientScope_);
 }
 /** @return {!Array<!GradientScope>} */
 static m_values__() {
  GradientScope.$clinit();
  return /**@type {!Array<GradientScope>}*/ ($Arrays.$init([GradientScope.$static_CHART__org_pepstock_charba_client_colors_GradientScope, GradientScope.$static_CANVAS__org_pepstock_charba_client_colors_GradientScope], GradientScope));
 }
 /** @return {!GradientScope} */
 static get f_CHART__org_pepstock_charba_client_colors_GradientScope() {
  return (GradientScope.$clinit(), GradientScope.$static_CHART__org_pepstock_charba_client_colors_GradientScope);
 }
 /** @return {!GradientScope} */
 static get f_CANVAS__org_pepstock_charba_client_colors_GradientScope() {
  return (GradientScope.$clinit(), GradientScope.$static_CANVAS__org_pepstock_charba_client_colors_GradientScope);
 }
 
 static $clinit() {
  GradientScope.$clinit = () =>{};
  GradientScope.$loadModules();
  Enum.$clinit();
  GradientScope.$static_CHART__org_pepstock_charba_client_colors_GradientScope = GradientScope.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHART"), GradientScope.$ordinal_CHART__org_pepstock_charba_client_colors_GradientScope, "chart");
  GradientScope.$static_CANVAS__org_pepstock_charba_client_colors_GradientScope = GradientScope.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CANVAS"), GradientScope.$ordinal_CANVAS__org_pepstock_charba_client_colors_GradientScope, "canvas");
  GradientScope.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientScope_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientScope;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GradientScope}*/
GradientScope.$static_CHART__org_pepstock_charba_client_colors_GradientScope;
/**@private {!GradientScope}*/
GradientScope.$static_CANVAS__org_pepstock_charba_client_colors_GradientScope;
/**@type {Map<?string, !GradientScope>}*/
GradientScope.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientScope_;
/**@const {number}*/
GradientScope.$ordinal_CHART__org_pepstock_charba_client_colors_GradientScope = 0;
/**@const {number}*/
GradientScope.$ordinal_CANVAS__org_pepstock_charba_client_colors_GradientScope = 1;
Key.$markImplementor(GradientScope);
$Util.$setClassMetadataForEnum(GradientScope, "org.pepstock.charba.client.colors.GradientScope");

exports = GradientScope;

//# sourceMappingURL=GradientScope.js.map
