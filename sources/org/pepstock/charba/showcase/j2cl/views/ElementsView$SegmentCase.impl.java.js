goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SegmentCase>}
 * @implements {CaseItem}
 */
class SegmentCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_;
 }
 /** @return {!SegmentCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new SegmentCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_;
 }
 /** @return {!SegmentCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  SegmentCase.$clinit();
  if ($Equality.$same(SegmentCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_, null)) {
   SegmentCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_ = $Enums.createMapFromValues(SegmentCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SegmentCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_);
 }
 /** @return {!Array<!SegmentCase>} */
 static m_values__() {
  SegmentCase.$clinit();
  return /**@type {!Array<SegmentCase>}*/ ($Arrays.$init([SegmentCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase, SegmentCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase, SegmentCase.$static_TIME_SERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase], SegmentCase));
 }
 /** @return {!SegmentCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase() {
  return (SegmentCase.$clinit(), SegmentCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase);
 }
 /** @return {!SegmentCase} */
 static get f_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase() {
  return (SegmentCase.$clinit(), SegmentCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase);
 }
 /** @return {!SegmentCase} */
 static get f_TIME_SERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase() {
  return (SegmentCase.$clinit(), SegmentCase.$static_TIME_SERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase);
 }
 
 static $clinit() {
  SegmentCase.$clinit = () =>{};
  SegmentCase.$loadModules();
  Enum.$clinit();
  SegmentCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase = SegmentCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), SegmentCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase, "Using segment on line chart", $1.$create__());
  SegmentCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase = SegmentCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("VERTICAL_LINE"), SegmentCase.$ordinal_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase, "Using segment on vertical line chart", $2.$create__());
  SegmentCase.$static_TIME_SERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase = SegmentCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TIME_SERIES_LINE"), SegmentCase.$ordinal_TIME_SERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase, "Using segment on timeseries line chart", $3.$create__());
  SegmentCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SegmentCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!SegmentCase}*/
SegmentCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase;
/**@private {!SegmentCase}*/
SegmentCase.$static_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase;
/**@private {!SegmentCase}*/
SegmentCase.$static_TIME_SERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase;
/**@type {Map<?string, !SegmentCase>}*/
SegmentCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_;
/**@const {number}*/
SegmentCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase = 0;
/**@const {number}*/
SegmentCase.$ordinal_VERTICAL_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase = 1;
/**@const {number}*/
SegmentCase.$ordinal_TIME_SERIES_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase = 2;
CaseItem.$markImplementor(SegmentCase);
$Util.$setClassMetadataForEnum(SegmentCase, "org.pepstock.charba.showcase.j2cl.views.ElementsView$SegmentCase");

exports = SegmentCase;

//# sourceMappingURL=ElementsView$SegmentCase.js.map
