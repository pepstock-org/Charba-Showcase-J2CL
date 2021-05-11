goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.TitleCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TitleCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TitleCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TitleCase>}
 * @implements {CaseItem}
 */
class TitleCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_;
 }
 /** @return {!TitleCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new TitleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_;
 }
 /** @return {!TitleCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TitleCase.$clinit();
  if ($Equality.$same(TitleCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_, null)) {
   TitleCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_ = $Enums.createMapFromValues(TitleCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TitleCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_);
 }
 /** @return {!Array<!TitleCase>} */
 static m_values__() {
  TitleCase.$clinit();
  return /**@type {!Array<TitleCase>}*/ ($Arrays.$init([TitleCase.$static_CHANGING_TEXT__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase, TitleCase.$static_CHANGING_STYLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase], TitleCase));
 }
 /** @return {!TitleCase} */
 static get f_CHANGING_TEXT__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase() {
  return (TitleCase.$clinit(), TitleCase.$static_CHANGING_TEXT__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase);
 }
 /** @return {!TitleCase} */
 static get f_CHANGING_STYLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase() {
  return (TitleCase.$clinit(), TitleCase.$static_CHANGING_STYLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase);
 }
 
 static $clinit() {
  TitleCase.$clinit = () =>{};
  TitleCase.$loadModules();
  Enum.$clinit();
  TitleCase.$static_CHANGING_TEXT__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase = TitleCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHANGING_TEXT"), TitleCase.$ordinal_CHANGING_TEXT__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase, "Changing text", $1.$create__());
  TitleCase.$static_CHANGING_STYLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase = TitleCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHANGING_STYLE"), TitleCase.$ordinal_CHANGING_STYLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase, "Changing style", $2.$create__());
  TitleCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TitleCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TitleCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TitleCase}*/
TitleCase.$static_CHANGING_TEXT__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase;
/**@private {!TitleCase}*/
TitleCase.$static_CHANGING_STYLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase;
/**@type {Map<?string, !TitleCase>}*/
TitleCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase_;
/**@const {number}*/
TitleCase.$ordinal_CHANGING_TEXT__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase = 0;
/**@const {number}*/
TitleCase.$ordinal_CHANGING_STYLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TitleCase = 1;
CaseItem.$markImplementor(TitleCase);
$Util.$setClassMetadataForEnum(TitleCase, "org.pepstock.charba.showcase.j2cl.views.ElementsView$TitleCase");

exports = TitleCase;

//# sourceMappingURL=ElementsView$TitleCase.js.map
