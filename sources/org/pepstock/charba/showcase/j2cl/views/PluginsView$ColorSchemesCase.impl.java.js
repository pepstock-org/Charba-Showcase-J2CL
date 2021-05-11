goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$6$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ColorSchemesCase>}
 * @implements {CaseItem}
 */
class ColorSchemesCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_;
 }
 /** @return {!ColorSchemesCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new ColorSchemesCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_;
 }
 /** @return {!ColorSchemesCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ColorSchemesCase.$clinit();
  if ($Equality.$same(ColorSchemesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_, null)) {
   ColorSchemesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_ = $Enums.createMapFromValues(ColorSchemesCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ColorSchemesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_);
 }
 /** @return {!Array<!ColorSchemesCase>} */
 static m_values__() {
  ColorSchemesCase.$clinit();
  return /**@type {!Array<ColorSchemesCase>}*/ ($Arrays.$init([ColorSchemesCase.$static_COLORING_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, ColorSchemesCase.$static_COLORING_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, ColorSchemesCase.$static_COLORING_RADAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, ColorSchemesCase.$static_COLORING_PIE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, ColorSchemesCase.$static_COLORING_POLAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, ColorSchemesCase.$static_COLORING_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase], ColorSchemesCase));
 }
 /** @return {!ColorSchemesCase} */
 static get f_COLORING_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase() {
  return (ColorSchemesCase.$clinit(), ColorSchemesCase.$static_COLORING_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase);
 }
 /** @return {!ColorSchemesCase} */
 static get f_COLORING_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase() {
  return (ColorSchemesCase.$clinit(), ColorSchemesCase.$static_COLORING_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase);
 }
 /** @return {!ColorSchemesCase} */
 static get f_COLORING_RADAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase() {
  return (ColorSchemesCase.$clinit(), ColorSchemesCase.$static_COLORING_RADAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase);
 }
 /** @return {!ColorSchemesCase} */
 static get f_COLORING_PIE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase() {
  return (ColorSchemesCase.$clinit(), ColorSchemesCase.$static_COLORING_PIE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase);
 }
 /** @return {!ColorSchemesCase} */
 static get f_COLORING_POLAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase() {
  return (ColorSchemesCase.$clinit(), ColorSchemesCase.$static_COLORING_POLAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase);
 }
 /** @return {!ColorSchemesCase} */
 static get f_COLORING_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase() {
  return (ColorSchemesCase.$clinit(), ColorSchemesCase.$static_COLORING_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase);
 }
 
 static $clinit() {
  ColorSchemesCase.$clinit = () =>{};
  ColorSchemesCase.$loadModules();
  Enum.$clinit();
  ColorSchemesCase.$static_COLORING_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = ColorSchemesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COLORING_BAR"), ColorSchemesCase.$ordinal_COLORING_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, "Coloring bar chart by schemes", $1.$create__());
  ColorSchemesCase.$static_COLORING_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = ColorSchemesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COLORING_LINE"), ColorSchemesCase.$ordinal_COLORING_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, "Coloring line chart by schemes", $2.$create__());
  ColorSchemesCase.$static_COLORING_RADAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = ColorSchemesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COLORING_RADAR"), ColorSchemesCase.$ordinal_COLORING_RADAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, "Coloring radar chart by schemes", $3.$create__());
  ColorSchemesCase.$static_COLORING_PIE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = ColorSchemesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COLORING_PIE"), ColorSchemesCase.$ordinal_COLORING_PIE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, "Coloring pie chart by schemes", $4.$create__());
  ColorSchemesCase.$static_COLORING_POLAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = ColorSchemesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COLORING_POLAR"), ColorSchemesCase.$ordinal_COLORING_POLAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, "Coloring polar area chart by scheme", $5.$create__());
  ColorSchemesCase.$static_COLORING_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = ColorSchemesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COLORING_BUBBLE"), ColorSchemesCase.$ordinal_COLORING_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase, "Coloring bubble chart by scheme", $6.$create__());
  ColorSchemesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemesCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase.$6$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ColorSchemesCase}*/
ColorSchemesCase.$static_COLORING_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase;
/**@private {!ColorSchemesCase}*/
ColorSchemesCase.$static_COLORING_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase;
/**@private {!ColorSchemesCase}*/
ColorSchemesCase.$static_COLORING_RADAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase;
/**@private {!ColorSchemesCase}*/
ColorSchemesCase.$static_COLORING_PIE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase;
/**@private {!ColorSchemesCase}*/
ColorSchemesCase.$static_COLORING_POLAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase;
/**@private {!ColorSchemesCase}*/
ColorSchemesCase.$static_COLORING_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase;
/**@type {Map<?string, !ColorSchemesCase>}*/
ColorSchemesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase_;
/**@const {number}*/
ColorSchemesCase.$ordinal_COLORING_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = 0;
/**@const {number}*/
ColorSchemesCase.$ordinal_COLORING_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = 1;
/**@const {number}*/
ColorSchemesCase.$ordinal_COLORING_RADAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = 2;
/**@const {number}*/
ColorSchemesCase.$ordinal_COLORING_PIE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = 3;
/**@const {number}*/
ColorSchemesCase.$ordinal_COLORING_POLAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = 4;
/**@const {number}*/
ColorSchemesCase.$ordinal_COLORING_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_ColorSchemesCase = 5;
CaseItem.$markImplementor(ColorSchemesCase);
$Util.$setClassMetadataForEnum(ColorSchemesCase, "org.pepstock.charba.showcase.j2cl.views.PluginsView$ColorSchemesCase");

exports = ColorSchemesCase;

//# sourceMappingURL=PluginsView$ColorSchemesCase.js.map
