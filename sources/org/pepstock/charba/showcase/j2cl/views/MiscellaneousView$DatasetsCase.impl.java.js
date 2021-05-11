goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$5$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DatasetsCase>}
 * @implements {CaseItem}
 */
class DatasetsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_;
 }
 /** @return {!DatasetsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new DatasetsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_;
 }
 /** @return {!DatasetsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DatasetsCase.$clinit();
  if ($Equality.$same(DatasetsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_, null)) {
   DatasetsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_ = $Enums.createMapFromValues(DatasetsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DatasetsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_);
 }
 /** @return {!Array<!DatasetsCase>} */
 static m_values__() {
  DatasetsCase.$clinit();
  return /**@type {!Array<DatasetsCase>}*/ ($Arrays.$init([DatasetsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, DatasetsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, DatasetsCase.$static_STACKED__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, DatasetsCase.$static_TIMESERIES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, DatasetsCase.$static_DATALABELS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase], DatasetsCase));
 }
 /** @return {!DatasetsCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase() {
  return (DatasetsCase.$clinit(), DatasetsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase);
 }
 /** @return {!DatasetsCase} */
 static get f_HBAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase() {
  return (DatasetsCase.$clinit(), DatasetsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase);
 }
 /** @return {!DatasetsCase} */
 static get f_STACKED__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase() {
  return (DatasetsCase.$clinit(), DatasetsCase.$static_STACKED__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase);
 }
 /** @return {!DatasetsCase} */
 static get f_TIMESERIES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase() {
  return (DatasetsCase.$clinit(), DatasetsCase.$static_TIMESERIES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase);
 }
 /** @return {!DatasetsCase} */
 static get f_DATALABELS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase() {
  return (DatasetsCase.$clinit(), DatasetsCase.$static_DATALABELS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase);
 }
 
 static $clinit() {
  DatasetsCase.$clinit = () =>{};
  DatasetsCase.$loadModules();
  Enum.$clinit();
  DatasetsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = DatasetsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), DatasetsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, "Floating data on bar chart", $1.$create__());
  DatasetsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = DatasetsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HBAR"), DatasetsCase.$ordinal_HBAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, "Floating data on horizontal bar chart", $2.$create__());
  DatasetsCase.$static_STACKED__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = DatasetsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STACKED"), DatasetsCase.$ordinal_STACKED__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, "Floating data on stacked bar chart", $3.$create__());
  DatasetsCase.$static_TIMESERIES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = DatasetsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TIMESERIES"), DatasetsCase.$ordinal_TIMESERIES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, "Floating data on timeseries by bar chart", $4.$create__());
  DatasetsCase.$static_DATALABELS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = DatasetsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DATALABELS"), DatasetsCase.$ordinal_DATALABELS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase, "Floating data on bar chart and datalabels extension", $5.$create__());
  DatasetsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$5$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DatasetsCase}*/
DatasetsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase;
/**@private {!DatasetsCase}*/
DatasetsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase;
/**@private {!DatasetsCase}*/
DatasetsCase.$static_STACKED__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase;
/**@private {!DatasetsCase}*/
DatasetsCase.$static_TIMESERIES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase;
/**@private {!DatasetsCase}*/
DatasetsCase.$static_DATALABELS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase;
/**@type {Map<?string, !DatasetsCase>}*/
DatasetsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_;
/**@const {number}*/
DatasetsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = 0;
/**@const {number}*/
DatasetsCase.$ordinal_HBAR__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = 1;
/**@const {number}*/
DatasetsCase.$ordinal_STACKED__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = 2;
/**@const {number}*/
DatasetsCase.$ordinal_TIMESERIES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = 3;
/**@const {number}*/
DatasetsCase.$ordinal_DATALABELS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase = 4;
CaseItem.$markImplementor(DatasetsCase);
$Util.$setClassMetadataForEnum(DatasetsCase, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$DatasetsCase");

exports = DatasetsCase;

//# sourceMappingURL=MiscellaneousView$DatasetsCase.js.map
