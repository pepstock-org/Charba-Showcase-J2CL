goog.module('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<FillingCase>}
 * @implements {CaseItem}
 */
class FillingCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_;
 }
 /** @return {!FillingCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new FillingCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_;
 }
 /** @return {!FillingCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  FillingCase.$clinit();
  if ($Equality.$same(FillingCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_, null)) {
   FillingCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_ = $Enums.createMapFromValues(FillingCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, FillingCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_);
 }
 /** @return {!Array<!FillingCase>} */
 static m_values__() {
  FillingCase.$clinit();
  return /**@type {!Array<FillingCase>}*/ ($Arrays.$init([FillingCase.$static_BOUNDARIES__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase, FillingCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase, FillingCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase], FillingCase));
 }
 /** @return {!FillingCase} */
 static get f_BOUNDARIES__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase() {
  return (FillingCase.$clinit(), FillingCase.$static_BOUNDARIES__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase);
 }
 /** @return {!FillingCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase() {
  return (FillingCase.$clinit(), FillingCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase);
 }
 /** @return {!FillingCase} */
 static get f_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase() {
  return (FillingCase.$clinit(), FillingCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase);
 }
 
 static $clinit() {
  FillingCase.$clinit = () =>{};
  FillingCase.$loadModules();
  Enum.$clinit();
  FillingCase.$static_BOUNDARIES__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase = FillingCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BOUNDARIES"), FillingCase.$ordinal_BOUNDARIES__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase, "Setting filling boundaries", $1.$create__());
  FillingCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase = FillingCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), FillingCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase, "Setting filling on line chart", $2.$create__());
  FillingCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase = FillingCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADAR"), FillingCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase, "Setting filling on radar chart", $3.$create__());
  FillingCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FillingCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!FillingCase}*/
FillingCase.$static_BOUNDARIES__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase;
/**@private {!FillingCase}*/
FillingCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase;
/**@private {!FillingCase}*/
FillingCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase;
/**@type {Map<?string, !FillingCase>}*/
FillingCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase_;
/**@const {number}*/
FillingCase.$ordinal_BOUNDARIES__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase = 0;
/**@const {number}*/
FillingCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase = 1;
/**@const {number}*/
FillingCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_FillingCase = 2;
CaseItem.$markImplementor(FillingCase);
$Util.$setClassMetadataForEnum(FillingCase, "org.pepstock.charba.showcase.j2cl.views.ColoringView$FillingCase");

exports = FillingCase;

//# sourceMappingURL=ColoringView$FillingCase.js.map
