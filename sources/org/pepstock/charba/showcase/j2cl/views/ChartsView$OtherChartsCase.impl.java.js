goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<OtherChartsCase>}
 * @implements {CaseItem}
 */
class OtherChartsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_;
 }
 /** @return {!OtherChartsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new OtherChartsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_;
 }
 /** @return {!OtherChartsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  OtherChartsCase.$clinit();
  if ($Equality.$same(OtherChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_, null)) {
   OtherChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_ = $Enums.createMapFromValues(OtherChartsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, OtherChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_);
 }
 /** @return {!Array<!OtherChartsCase>} */
 static m_values__() {
  OtherChartsCase.$clinit();
  return /**@type {!Array<OtherChartsCase>}*/ ($Arrays.$init([OtherChartsCase.$static_TIMESERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_TIMESERIES_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_TIMESERIES_BY_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_TIMESERIES_BY_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_STACKED_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_STACKED_GROUP_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_STACKED_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_STACKED_AREA__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, OtherChartsCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase], OtherChartsCase));
 }
 /** @return {!OtherChartsCase} */
 static get f_TIMESERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_TIMESERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_TIMESERIES_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_TIMESERIES_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_TIMESERIES_BY_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_TIMESERIES_BY_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_TIMESERIES_BY_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_TIMESERIES_BY_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_STACKED_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_STACKED_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_STACKED_GROUP_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_STACKED_GROUP_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_STACKED_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_STACKED_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_STACKED_AREA__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_STACKED_AREA__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 /** @return {!OtherChartsCase} */
 static get f_COMBINED__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase() {
  return (OtherChartsCase.$clinit(), OtherChartsCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase);
 }
 
 static $clinit() {
  OtherChartsCase.$clinit = () =>{};
  OtherChartsCase.$loadModules();
  Enum.$clinit();
  OtherChartsCase.$static_TIMESERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TIMESERIES_LINE"), OtherChartsCase.$ordinal_TIMESERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Timeseries line", $1.$create__());
  OtherChartsCase.$static_TIMESERIES_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TIMESERIES_BAR"), OtherChartsCase.$ordinal_TIMESERIES_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Timeseries bar", $2.$create__());
  OtherChartsCase.$static_TIMESERIES_BY_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TIMESERIES_BY_LINE"), OtherChartsCase.$ordinal_TIMESERIES_BY_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Timeseries by line chart", $3.$create__());
  OtherChartsCase.$static_TIMESERIES_BY_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TIMESERIES_BY_BAR"), OtherChartsCase.$ordinal_TIMESERIES_BY_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Timeseries by bar chart", $4.$create__());
  OtherChartsCase.$static_STACKED_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STACKED_BAR"), OtherChartsCase.$ordinal_STACKED_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Stacked bar", $5.$create__());
  OtherChartsCase.$static_STACKED_GROUP_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STACKED_GROUP_BAR"), OtherChartsCase.$ordinal_STACKED_GROUP_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Stacked group bar", $6.$create__());
  OtherChartsCase.$static_STACKED_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STACKED_LINE"), OtherChartsCase.$ordinal_STACKED_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Stacked line", $7.$create__());
  OtherChartsCase.$static_STACKED_AREA__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STACKED_AREA"), OtherChartsCase.$ordinal_STACKED_AREA__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Stacked area", $8.$create__());
  OtherChartsCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = OtherChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COMBINED"), OtherChartsCase.$ordinal_COMBINED__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase, "Combined bar and line datasets", $9.$create__());
  OtherChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OtherChartsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_TIMESERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_TIMESERIES_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_TIMESERIES_BY_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_TIMESERIES_BY_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_STACKED_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_STACKED_GROUP_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_STACKED_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_STACKED_AREA__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@private {!OtherChartsCase}*/
OtherChartsCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase;
/**@type {Map<?string, !OtherChartsCase>}*/
OtherChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_;
/**@const {number}*/
OtherChartsCase.$ordinal_TIMESERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 0;
/**@const {number}*/
OtherChartsCase.$ordinal_TIMESERIES_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 1;
/**@const {number}*/
OtherChartsCase.$ordinal_TIMESERIES_BY_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 2;
/**@const {number}*/
OtherChartsCase.$ordinal_TIMESERIES_BY_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 3;
/**@const {number}*/
OtherChartsCase.$ordinal_STACKED_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 4;
/**@const {number}*/
OtherChartsCase.$ordinal_STACKED_GROUP_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 5;
/**@const {number}*/
OtherChartsCase.$ordinal_STACKED_LINE__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 6;
/**@const {number}*/
OtherChartsCase.$ordinal_STACKED_AREA__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 7;
/**@const {number}*/
OtherChartsCase.$ordinal_COMBINED__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase = 8;
CaseItem.$markImplementor(OtherChartsCase);
$Util.$setClassMetadataForEnum(OtherChartsCase, "org.pepstock.charba.showcase.j2cl.views.ChartsView$OtherChartsCase");

exports = OtherChartsCase;

//# sourceMappingURL=ChartsView$OtherChartsCase.js.map
