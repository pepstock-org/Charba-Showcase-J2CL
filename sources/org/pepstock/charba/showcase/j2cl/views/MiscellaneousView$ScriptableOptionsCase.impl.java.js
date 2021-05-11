goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$8$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ScriptableOptionsCase>}
 * @implements {CaseItem}
 */
class ScriptableOptionsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_;
 }
 /** @return {!ScriptableOptionsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new ScriptableOptionsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_;
 }
 /** @return {!ScriptableOptionsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ScriptableOptionsCase.$clinit();
  if ($Equality.$same(ScriptableOptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_, null)) {
   ScriptableOptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_ = $Enums.createMapFromValues(ScriptableOptionsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ScriptableOptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_);
 }
 /** @return {!Array<!ScriptableOptionsCase>} */
 static m_values__() {
  ScriptableOptionsCase.$clinit();
  return /**@type {!Array<ScriptableOptionsCase>}*/ ($Arrays.$init([ScriptableOptionsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, ScriptableOptionsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, ScriptableOptionsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, ScriptableOptionsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, ScriptableOptionsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, ScriptableOptionsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, ScriptableOptionsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, ScriptableOptionsCase.$static_BAR_THRESHOLDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase], ScriptableOptionsCase));
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_RADAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_PIE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_POLAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_BUBBLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 /** @return {!ScriptableOptionsCase} */
 static get f_BAR_THRESHOLDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase() {
  return (ScriptableOptionsCase.$clinit(), ScriptableOptionsCase.$static_BAR_THRESHOLDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase);
 }
 
 static $clinit() {
  ScriptableOptionsCase.$clinit = () =>{};
  ScriptableOptionsCase.$loadModules();
  Enum.$clinit();
  ScriptableOptionsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), ScriptableOptionsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks on bar dataset", $1.$create__());
  ScriptableOptionsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), ScriptableOptionsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks on line dataset", $2.$create__());
  ScriptableOptionsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADAR"), ScriptableOptionsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks on radar dataset", $3.$create__());
  ScriptableOptionsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DOUGHNUT"), ScriptableOptionsCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks on doughnut dataset", $4.$create__());
  ScriptableOptionsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PIE"), ScriptableOptionsCase.$ordinal_PIE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks on pie datasetr", $5.$create__());
  ScriptableOptionsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POLAR"), ScriptableOptionsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks on polar area dataset", $6.$create__());
  ScriptableOptionsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BUBBLE"), ScriptableOptionsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks on bubble dataset", $7.$create__());
  ScriptableOptionsCase.$static_BAR_THRESHOLDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = ScriptableOptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR_THRESHOLDS"), ScriptableOptionsCase.$ordinal_BAR_THRESHOLDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase, "Callbacks with threshold on bar dataset", $8.$create__());
  ScriptableOptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScriptableOptionsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$8$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@private {!ScriptableOptionsCase}*/
ScriptableOptionsCase.$static_BAR_THRESHOLDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase;
/**@type {Map<?string, !ScriptableOptionsCase>}*/
ScriptableOptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 0;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 1;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 2;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 3;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_PIE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 4;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 5;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 6;
/**@const {number}*/
ScriptableOptionsCase.$ordinal_BAR_THRESHOLDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase = 7;
CaseItem.$markImplementor(ScriptableOptionsCase);
$Util.$setClassMetadataForEnum(ScriptableOptionsCase, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$ScriptableOptionsCase");

exports = ScriptableOptionsCase;

//# sourceMappingURL=MiscellaneousView$ScriptableOptionsCase.js.map
