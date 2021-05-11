goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ControllersCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ControllersCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ControllersCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ControllersCase>}
 * @implements {CaseItem}
 */
class ControllersCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_;
 }
 /** @return {!ControllersCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new ControllersCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_;
 }
 /** @return {!ControllersCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ControllersCase.$clinit();
  if ($Equality.$same(ControllersCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_, null)) {
   ControllersCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_ = $Enums.createMapFromValues(ControllersCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ControllersCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_);
 }
 /** @return {!Array<!ControllersCase>} */
 static m_values__() {
  ControllersCase.$clinit();
  return /**@type {!Array<ControllersCase>}*/ ($Arrays.$init([ControllersCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase, ControllersCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase], ControllersCase));
 }
 /** @return {!ControllersCase} */
 static get f_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase() {
  return (ControllersCase.$clinit(), ControllersCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase);
 }
 /** @return {!ControllersCase} */
 static get f_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase() {
  return (ControllersCase.$clinit(), ControllersCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase);
 }
 
 static $clinit() {
  ControllersCase.$clinit = () =>{};
  ControllersCase.$loadModules();
  Enum.$clinit();
  ControllersCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase = ControllersCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SIMPLE"), ControllersCase.$ordinal_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase, "My simple line chart", $1.$create__());
  ControllersCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase = ControllersCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("FLAGS"), ControllersCase.$ordinal_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase, "My horizontal bar chart with flags", $2.$create__());
  ControllersCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ControllersCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ControllersCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ControllersCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ControllersCase}*/
ControllersCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase;
/**@private {!ControllersCase}*/
ControllersCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase;
/**@type {Map<?string, !ControllersCase>}*/
ControllersCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase_;
/**@const {number}*/
ControllersCase.$ordinal_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase = 0;
/**@const {number}*/
ControllersCase.$ordinal_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ControllersCase = 1;
CaseItem.$markImplementor(ControllersCase);
$Util.$setClassMetadataForEnum(ControllersCase, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$ControllersCase");

exports = ControllersCase;

//# sourceMappingURL=MiscellaneousView$ControllersCase.js.map
