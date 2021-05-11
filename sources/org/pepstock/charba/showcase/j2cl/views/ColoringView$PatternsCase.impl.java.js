goog.module('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$5$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PatternsCase>}
 * @implements {CaseItem}
 */
class PatternsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_;
 }
 /** @return {!PatternsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new PatternsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_;
 }
 /** @return {!PatternsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PatternsCase.$clinit();
  if ($Equality.$same(PatternsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_, null)) {
   PatternsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_ = $Enums.createMapFromValues(PatternsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PatternsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_);
 }
 /** @return {!Array<!PatternsCase>} */
 static m_values__() {
  PatternsCase.$clinit();
  return /**@type {!Array<PatternsCase>}*/ ($Arrays.$init([PatternsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, PatternsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, PatternsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, PatternsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, PatternsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase], PatternsCase));
 }
 /** @return {!PatternsCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase() {
  return (PatternsCase.$clinit(), PatternsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase);
 }
 /** @return {!PatternsCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase() {
  return (PatternsCase.$clinit(), PatternsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase);
 }
 /** @return {!PatternsCase} */
 static get f_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase() {
  return (PatternsCase.$clinit(), PatternsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase);
 }
 /** @return {!PatternsCase} */
 static get f_POLAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase() {
  return (PatternsCase.$clinit(), PatternsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase);
 }
 /** @return {!PatternsCase} */
 static get f_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase() {
  return (PatternsCase.$clinit(), PatternsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase);
 }
 
 static $clinit() {
  PatternsCase.$clinit = () =>{};
  PatternsCase.$loadModules();
  Enum.$clinit();
  PatternsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = PatternsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), PatternsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, "Pattern on bar dataset", $1.$create__());
  PatternsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = PatternsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), PatternsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, "Pattern on line dataset", $2.$create__());
  PatternsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = PatternsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADAR"), PatternsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, "Pattern on radar dataset", $3.$create__());
  PatternsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = PatternsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POLAR"), PatternsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, "Pattern on polar area dataset", $4.$create__());
  PatternsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = PatternsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BUBBLE"), PatternsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase, "Pattern on bubble dataset", $5.$create__());
  PatternsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PatternsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase.$5$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!PatternsCase}*/
PatternsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase;
/**@private {!PatternsCase}*/
PatternsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase;
/**@private {!PatternsCase}*/
PatternsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase;
/**@private {!PatternsCase}*/
PatternsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase;
/**@private {!PatternsCase}*/
PatternsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase;
/**@type {Map<?string, !PatternsCase>}*/
PatternsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase_;
/**@const {number}*/
PatternsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = 0;
/**@const {number}*/
PatternsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = 1;
/**@const {number}*/
PatternsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = 2;
/**@const {number}*/
PatternsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = 3;
/**@const {number}*/
PatternsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ColoringView_PatternsCase = 4;
CaseItem.$markImplementor(PatternsCase);
$Util.$setClassMetadataForEnum(PatternsCase, "org.pepstock.charba.showcase.j2cl.views.ColoringView$PatternsCase");

exports = PatternsCase;

//# sourceMappingURL=ColoringView$PatternsCase.js.map
