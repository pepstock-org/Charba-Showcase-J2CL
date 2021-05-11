goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.ExtendedChartsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ExtendedChartsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ExtendedChartsCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ExtendedChartsCase>}
 * @implements {CaseItem}
 */
class ExtendedChartsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_;
 }
 /** @return {!ExtendedChartsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new ExtendedChartsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_;
 }
 /** @return {!ExtendedChartsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ExtendedChartsCase.$clinit();
  if ($Equality.$same(ExtendedChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_, null)) {
   ExtendedChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_ = $Enums.createMapFromValues(ExtendedChartsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ExtendedChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_);
 }
 /** @return {!Array<!ExtendedChartsCase>} */
 static m_values__() {
  ExtendedChartsCase.$clinit();
  return /**@type {!Array<ExtendedChartsCase>}*/ ($Arrays.$init([ExtendedChartsCase.$static_METER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase, ExtendedChartsCase.$static_GAUGE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase], ExtendedChartsCase));
 }
 /** @return {!ExtendedChartsCase} */
 static get f_METER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase() {
  return (ExtendedChartsCase.$clinit(), ExtendedChartsCase.$static_METER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase);
 }
 /** @return {!ExtendedChartsCase} */
 static get f_GAUGE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase() {
  return (ExtendedChartsCase.$clinit(), ExtendedChartsCase.$static_GAUGE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase);
 }
 
 static $clinit() {
  ExtendedChartsCase.$clinit = () =>{};
  ExtendedChartsCase.$loadModules();
  Enum.$clinit();
  ExtendedChartsCase.$static_METER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase = ExtendedChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("METER"), ExtendedChartsCase.$ordinal_METER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase, "Meter", $1.$create__());
  ExtendedChartsCase.$static_GAUGE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase = ExtendedChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("GAUGE"), ExtendedChartsCase.$ordinal_GAUGE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase, "Gauge", $2.$create__());
  ExtendedChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExtendedChartsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ExtendedChartsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ExtendedChartsCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ExtendedChartsCase}*/
ExtendedChartsCase.$static_METER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase;
/**@private {!ExtendedChartsCase}*/
ExtendedChartsCase.$static_GAUGE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase;
/**@type {Map<?string, !ExtendedChartsCase>}*/
ExtendedChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase_;
/**@const {number}*/
ExtendedChartsCase.$ordinal_METER__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase = 0;
/**@const {number}*/
ExtendedChartsCase.$ordinal_GAUGE__org_pepstock_charba_showcase_j2cl_views_ChartsView_ExtendedChartsCase = 1;
CaseItem.$markImplementor(ExtendedChartsCase);
$Util.$setClassMetadataForEnum(ExtendedChartsCase, "org.pepstock.charba.showcase.j2cl.views.ChartsView$ExtendedChartsCase");

exports = ExtendedChartsCase;

//# sourceMappingURL=ChartsView$ExtendedChartsCase.js.map
