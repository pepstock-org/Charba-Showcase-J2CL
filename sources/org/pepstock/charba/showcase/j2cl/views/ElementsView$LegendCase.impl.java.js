goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LegendCase>}
 * @implements {CaseItem}
 */
class LegendCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_;
 }
 /** @return {!LegendCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new LegendCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_;
 }
 /** @return {!LegendCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  LegendCase.$clinit();
  if ($Equality.$same(LegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_, null)) {
   LegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_ = $Enums.createMapFromValues(LegendCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_);
 }
 /** @return {!Array<!LegendCase>} */
 static m_values__() {
  LegendCase.$clinit();
  return /**@type {!Array<LegendCase>}*/ ($Arrays.$init([LegendCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase, LegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase, LegendCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase, LegendCase.$static_CHANGING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase], LegendCase));
 }
 /** @return {!LegendCase} */
 static get f_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase() {
  return (LegendCase.$clinit(), LegendCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase);
 }
 /** @return {!LegendCase} */
 static get f_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase() {
  return (LegendCase.$clinit(), LegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase);
 }
 /** @return {!LegendCase} */
 static get f_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase() {
  return (LegendCase.$clinit(), LegendCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase);
 }
 /** @return {!LegendCase} */
 static get f_CHANGING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase() {
  return (LegendCase.$clinit(), LegendCase.$static_CHANGING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase);
 }
 
 static $clinit() {
  LegendCase.$clinit = () =>{};
  LegendCase.$loadModules();
  Enum.$clinit();
  LegendCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = LegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POSITIONING"), LegendCase.$ordinal_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase, "Positioning", $1.$create__());
  LegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = LegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POINT_STYLES"), LegendCase.$ordinal_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase, "Point style from line datasets", $2.$create__());
  LegendCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = LegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("FILTERING"), LegendCase.$ordinal_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase, "Filtering hidden datasets by callbacks", $3.$create__());
  LegendCase.$static_CHANGING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = LegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHANGING"), LegendCase.$ordinal_CHANGING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase, "Changing texts and colors by callbacks", $4.$create__());
  LegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!LegendCase}*/
LegendCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase;
/**@private {!LegendCase}*/
LegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase;
/**@private {!LegendCase}*/
LegendCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase;
/**@private {!LegendCase}*/
LegendCase.$static_CHANGING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase;
/**@type {Map<?string, !LegendCase>}*/
LegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase_;
/**@const {number}*/
LegendCase.$ordinal_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = 0;
/**@const {number}*/
LegendCase.$ordinal_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = 1;
/**@const {number}*/
LegendCase.$ordinal_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = 2;
/**@const {number}*/
LegendCase.$ordinal_CHANGING__org_pepstock_charba_showcase_j2cl_views_ElementsView_LegendCase = 3;
CaseItem.$markImplementor(LegendCase);
$Util.$setClassMetadataForEnum(LegendCase, "org.pepstock.charba.showcase.j2cl.views.ElementsView$LegendCase");

exports = LegendCase;

//# sourceMappingURL=ElementsView$LegendCase.js.map
