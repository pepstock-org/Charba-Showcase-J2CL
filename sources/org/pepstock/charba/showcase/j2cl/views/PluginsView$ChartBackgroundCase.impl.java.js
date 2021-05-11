goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ChartBackgroundCase>}
 * @implements {CaseItem}
 */
class ChartBackgroundCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_;
 }
 /** @return {!ChartBackgroundCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new ChartBackgroundCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_;
 }
 /** @return {!ChartBackgroundCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ChartBackgroundCase.$clinit();
  if ($Equality.$same(ChartBackgroundCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_, null)) {
   ChartBackgroundCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_ = $Enums.createMapFromValues(ChartBackgroundCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ChartBackgroundCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_);
 }
 /** @return {!Array<!ChartBackgroundCase>} */
 static m_values__() {
  ChartBackgroundCase.$clinit();
  return /**@type {!Array<ChartBackgroundCase>}*/ ($Arrays.$init([ChartBackgroundCase.$static_COLOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase, ChartBackgroundCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase, ChartBackgroundCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase, ChartBackgroundCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase], ChartBackgroundCase));
 }
 /** @return {!ChartBackgroundCase} */
 static get f_COLOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase() {
  return (ChartBackgroundCase.$clinit(), ChartBackgroundCase.$static_COLOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase);
 }
 /** @return {!ChartBackgroundCase} */
 static get f_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase() {
  return (ChartBackgroundCase.$clinit(), ChartBackgroundCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase);
 }
 /** @return {!ChartBackgroundCase} */
 static get f_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase() {
  return (ChartBackgroundCase.$clinit(), ChartBackgroundCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase);
 }
 /** @return {!ChartBackgroundCase} */
 static get f_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase() {
  return (ChartBackgroundCase.$clinit(), ChartBackgroundCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase);
 }
 
 static $clinit() {
  ChartBackgroundCase.$clinit = () =>{};
  ChartBackgroundCase.$loadModules();
  Enum.$clinit();
  ChartBackgroundCase.$static_COLOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = ChartBackgroundCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COLOR"), ChartBackgroundCase.$ordinal_COLOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase, "Applying color on bar chart", $1.$create__());
  ChartBackgroundCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = ChartBackgroundCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINEAR_GRADIENT"), ChartBackgroundCase.$ordinal_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase, "Applying linear gradient on bar chart", $2.$create__());
  ChartBackgroundCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = ChartBackgroundCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADIAL_GRADIENT"), ChartBackgroundCase.$ordinal_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase, "Applying radial gradient on pie chart", $3.$create__());
  ChartBackgroundCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = ChartBackgroundCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PATTERN"), ChartBackgroundCase.$ordinal_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase, "Applying pattern on line chart", $4.$create__());
  ChartBackgroundCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ChartBackgroundCase}*/
ChartBackgroundCase.$static_COLOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase;
/**@private {!ChartBackgroundCase}*/
ChartBackgroundCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase;
/**@private {!ChartBackgroundCase}*/
ChartBackgroundCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase;
/**@private {!ChartBackgroundCase}*/
ChartBackgroundCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase;
/**@type {Map<?string, !ChartBackgroundCase>}*/
ChartBackgroundCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase_;
/**@const {number}*/
ChartBackgroundCase.$ordinal_COLOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = 0;
/**@const {number}*/
ChartBackgroundCase.$ordinal_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = 1;
/**@const {number}*/
ChartBackgroundCase.$ordinal_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = 2;
/**@const {number}*/
ChartBackgroundCase.$ordinal_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_ChartBackgroundCase = 3;
CaseItem.$markImplementor(ChartBackgroundCase);
$Util.$setClassMetadataForEnum(ChartBackgroundCase, "org.pepstock.charba.showcase.j2cl.views.PluginsView$ChartBackgroundCase");

exports = ChartBackgroundCase;

//# sourceMappingURL=PluginsView$ChartBackgroundCase.js.map
