goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$1$impl');
let $10 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$10$impl');
let $11 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$11$impl');
let $12 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$12$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AxesCase>}
 * @implements {CaseItem}
 */
class AxesCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_;
 }
 /** @return {!AxesCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new AxesCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_;
 }
 /** @return {!AxesCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AxesCase.$clinit();
  if ($Equality.$same(AxesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_, null)) {
   AxesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_ = $Enums.createMapFromValues(AxesCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AxesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_);
 }
 /** @return {!Array<!AxesCase>} */
 static m_values__() {
  AxesCase.$clinit();
  return /**@type {!Array<AxesCase>}*/ ($Arrays.$init([AxesCase.$static_MULTI_BAR__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_MULTI_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_MULTI_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_STYLING_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_MULTI_LABELS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_NON_NUMERIC__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_STEP_SIZE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_MIN_MAX__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_LOG_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, AxesCase.$static_LOG_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase], AxesCase));
 }
 /** @return {!AxesCase} */
 static get f_MULTI_BAR__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_MULTI_BAR__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_MULTI_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_MULTI_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_MULTI_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_MULTI_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_STYLING_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_STYLING_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_MULTI_LABELS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_MULTI_LABELS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_NON_NUMERIC__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_NON_NUMERIC__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_STEP_SIZE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_STEP_SIZE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_MIN_MAX__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_MIN_MAX__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_LOG_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_LOG_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 /** @return {!AxesCase} */
 static get f_LOG_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase() {
  return (AxesCase.$clinit(), AxesCase.$static_LOG_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase);
 }
 
 static $clinit() {
  AxesCase.$clinit = () =>{};
  AxesCase.$loadModules();
  Enum.$clinit();
  AxesCase.$static_MULTI_BAR__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MULTI_BAR"), AxesCase.$ordinal_MULTI_BAR__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Multiple axes on bar chart", $1.$create__());
  AxesCase.$static_MULTI_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MULTI_LINE"), AxesCase.$ordinal_MULTI_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Multiple axes on line chart", $2.$create__());
  AxesCase.$static_MULTI_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MULTI_SCATTER"), AxesCase.$ordinal_MULTI_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Multiple axes on scatter chart", $3.$create__());
  AxesCase.$static_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("GRID_LINES"), AxesCase.$ordinal_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Displaying grid lines", $4.$create__());
  AxesCase.$static_STYLING_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STYLING_GRID_LINES"), AxesCase.$ordinal_STYLING_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Styling grid lines", $5.$create__());
  AxesCase.$static_MULTI_LABELS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MULTI_LABELS"), AxesCase.$ordinal_MULTI_LABELS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Multiple lines labels on axis", $6.$create__());
  AxesCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("FILTERING"), AxesCase.$ordinal_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Filtering labels on axis", $7.$create__());
  AxesCase.$static_NON_NUMERIC__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("NON_NUMERIC"), AxesCase.$ordinal_NON_NUMERIC__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Non numeric Y axis", $8.$create__());
  AxesCase.$static_STEP_SIZE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STEP_SIZE"), AxesCase.$ordinal_STEP_SIZE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Changing step size on ticks", $9.$create__());
  AxesCase.$static_MIN_MAX__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MIN_MAX"), AxesCase.$ordinal_MIN_MAX__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Setting min/max on ticks", $10.$create__());
  AxesCase.$static_LOG_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LOG_LINE"), AxesCase.$ordinal_LOG_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Logarithmic axis on line chart", $11.$create__());
  AxesCase.$static_LOG_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = AxesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LOG_SCATTER"), AxesCase.$ordinal_LOG_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase, "Logarithmic axis on scatter chart", $12.$create__());
  AxesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxesCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$1$impl');
  $10 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$10$impl');
  $11 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$11$impl');
  $12 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$12$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AxesCase}*/
AxesCase.$static_MULTI_BAR__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_MULTI_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_MULTI_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_STYLING_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_MULTI_LABELS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_NON_NUMERIC__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_STEP_SIZE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_MIN_MAX__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_LOG_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@private {!AxesCase}*/
AxesCase.$static_LOG_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase;
/**@type {Map<?string, !AxesCase>}*/
AxesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_;
/**@const {number}*/
AxesCase.$ordinal_MULTI_BAR__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 0;
/**@const {number}*/
AxesCase.$ordinal_MULTI_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 1;
/**@const {number}*/
AxesCase.$ordinal_MULTI_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 2;
/**@const {number}*/
AxesCase.$ordinal_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 3;
/**@const {number}*/
AxesCase.$ordinal_STYLING_GRID_LINES__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 4;
/**@const {number}*/
AxesCase.$ordinal_MULTI_LABELS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 5;
/**@const {number}*/
AxesCase.$ordinal_FILTERING__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 6;
/**@const {number}*/
AxesCase.$ordinal_NON_NUMERIC__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 7;
/**@const {number}*/
AxesCase.$ordinal_STEP_SIZE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 8;
/**@const {number}*/
AxesCase.$ordinal_MIN_MAX__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 9;
/**@const {number}*/
AxesCase.$ordinal_LOG_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 10;
/**@const {number}*/
AxesCase.$ordinal_LOG_SCATTER__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase = 11;
CaseItem.$markImplementor(AxesCase);
$Util.$setClassMetadataForEnum(AxesCase, "org.pepstock.charba.showcase.j2cl.views.ElementsView$AxesCase");

exports = AxesCase;

//# sourceMappingURL=ElementsView$AxesCase.js.map
