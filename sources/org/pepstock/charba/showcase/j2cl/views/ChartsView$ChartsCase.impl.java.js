goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$1$impl');
let $10 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$10$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ChartsCase>}
 * @implements {CaseItem}
 */
class ChartsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_;
 }
 /** @return {!ChartsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new ChartsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_;
 }
 /** @return {!ChartsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ChartsCase.$clinit();
  if ($Equality.$same(ChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_, null)) {
   ChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_ = $Enums.createMapFromValues(ChartsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_);
 }
 /** @return {!Array<!ChartsCase>} */
 static m_values__() {
  ChartsCase.$clinit();
  return /**@type {!Array<ChartsCase>}*/ ($Arrays.$init([ChartsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_SCATTER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, ChartsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase], ChartsCase));
 }
 /** @return {!ChartsCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_HBAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_SCATTER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_SCATTER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_POLAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_RADAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 /** @return {!ChartsCase} */
 static get f_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase() {
  return (ChartsCase.$clinit(), ChartsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase);
 }
 
 static $clinit() {
  ChartsCase.$clinit = () =>{};
  ChartsCase.$loadModules();
  Enum.$clinit();
  ChartsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), ChartsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Bar", $1.$create__());
  ChartsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HBAR"), ChartsCase.$ordinal_HBAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Horizontal bar", $2.$create__());
  ChartsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), ChartsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Line", $3.$create__());
  ChartsCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("VERTICAL_LINE"), ChartsCase.$ordinal_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Vertical line", $4.$create__());
  ChartsCase.$static_SCATTER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SCATTER"), ChartsCase.$ordinal_SCATTER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Scatter", $5.$create__());
  ChartsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DOUGHNUT"), ChartsCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Doughnut", $6.$create__());
  ChartsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PIE"), ChartsCase.$ordinal_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Pie", $7.$create__());
  ChartsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POLAR"), ChartsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Polar area", $8.$create__());
  ChartsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADAR"), ChartsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Radar", $9.$create__());
  ChartsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = ChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BUBBLE"), ChartsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase, "Bubble", $10.$create__());
  ChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$1$impl');
  $10 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$10$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ChartsCase}*/
ChartsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_SCATTER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@private {!ChartsCase}*/
ChartsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase;
/**@type {Map<?string, !ChartsCase>}*/
ChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_;
/**@const {number}*/
ChartsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 0;
/**@const {number}*/
ChartsCase.$ordinal_HBAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 1;
/**@const {number}*/
ChartsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 2;
/**@const {number}*/
ChartsCase.$ordinal_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 3;
/**@const {number}*/
ChartsCase.$ordinal_SCATTER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 4;
/**@const {number}*/
ChartsCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 5;
/**@const {number}*/
ChartsCase.$ordinal_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 6;
/**@const {number}*/
ChartsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 7;
/**@const {number}*/
ChartsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 8;
/**@const {number}*/
ChartsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase = 9;
CaseItem.$markImplementor(ChartsCase);
$Util.$setClassMetadataForEnum(ChartsCase, "org.pepstock.charba.showcase.j2cl.views.ChartsView$ChartsCase");

exports = ChartsCase;

//# sourceMappingURL=ChartsView$ChartsCase.js.map
