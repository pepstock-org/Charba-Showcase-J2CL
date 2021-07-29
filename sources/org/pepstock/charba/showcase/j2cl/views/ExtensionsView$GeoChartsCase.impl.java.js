goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$6$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GeoChartsCase>}
 * @implements {CaseItem}
 */
class GeoChartsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_;
 }
 /** @return {!GeoChartsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new GeoChartsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_;
 }
 /** @return {!GeoChartsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GeoChartsCase.$clinit();
  if ($Equality.$same(GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_, null)) {
   GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_ = $Enums.createMapFromValues(GeoChartsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_);
 }
 /** @return {!Array<!GeoChartsCase>} */
 static m_values__() {
  GeoChartsCase.$clinit();
  return /**@type {!Array<GeoChartsCase>}*/ ($Arrays.$init([GeoChartsCase.$static_LOG_COLOR_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, GeoChartsCase.$static_LOG_SIZE_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, GeoChartsCase.$static_INTERPOLATIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, GeoChartsCase.$static_CUSTOM_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, GeoChartsCase.$static_CLICK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, GeoChartsCase.$static_BUBBLE_MAP_DATALABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase], GeoChartsCase));
 }
 /** @return {!GeoChartsCase} */
 static get f_LOG_COLOR_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_LOG_COLOR_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase);
 }
 /** @return {!GeoChartsCase} */
 static get f_LOG_SIZE_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_LOG_SIZE_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase);
 }
 /** @return {!GeoChartsCase} */
 static get f_INTERPOLATIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_INTERPOLATIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase);
 }
 /** @return {!GeoChartsCase} */
 static get f_CUSTOM_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_CUSTOM_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase);
 }
 /** @return {!GeoChartsCase} */
 static get f_CLICK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_CLICK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase);
 }
 /** @return {!GeoChartsCase} */
 static get f_BUBBLE_MAP_DATALABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_BUBBLE_MAP_DATALABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase);
 }
 
 static $clinit() {
  GeoChartsCase.$clinit = () =>{};
  GeoChartsCase.$loadModules();
  Enum.$clinit();
  GeoChartsCase.$static_LOG_COLOR_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LOG_COLOR_SCALE"), GeoChartsCase.$ordinal_LOG_COLOR_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, "Choropleth with logarithmic axis", $1.$create__());
  GeoChartsCase.$static_LOG_SIZE_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LOG_SIZE_SCALE"), GeoChartsCase.$ordinal_LOG_SIZE_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, "Bubble map with logarithmic axis", $2.$create__());
  GeoChartsCase.$static_INTERPOLATIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("INTERPOLATIONS"), GeoChartsCase.$ordinal_INTERPOLATIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, "Interpolations", $3.$create__());
  GeoChartsCase.$static_CUSTOM_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CUSTOM_INTERPOLATION"), GeoChartsCase.$ordinal_CUSTOM_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, "Custom interpolation", $4.$create__());
  GeoChartsCase.$static_CLICK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CLICK"), GeoChartsCase.$ordinal_CLICK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, "Select country from map", $5.$create__());
  GeoChartsCase.$static_BUBBLE_MAP_DATALABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BUBBLE_MAP_DATALABELS"), GeoChartsCase.$ordinal_BUBBLE_MAP_DATALABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase, "Using Datalabels on map", $6.$create__());
  GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoChartsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$6$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_LOG_COLOR_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase;
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_LOG_SIZE_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase;
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_INTERPOLATIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase;
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_CUSTOM_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase;
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_CLICK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase;
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_BUBBLE_MAP_DATALABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase;
/**@type {Map<?string, !GeoChartsCase>}*/
GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_;
/**@const {number}*/
GeoChartsCase.$ordinal_LOG_COLOR_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = 0;
/**@const {number}*/
GeoChartsCase.$ordinal_LOG_SIZE_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = 1;
/**@const {number}*/
GeoChartsCase.$ordinal_INTERPOLATIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = 2;
/**@const {number}*/
GeoChartsCase.$ordinal_CUSTOM_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = 3;
/**@const {number}*/
GeoChartsCase.$ordinal_CLICK__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = 4;
/**@const {number}*/
GeoChartsCase.$ordinal_BUBBLE_MAP_DATALABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase = 5;
CaseItem.$markImplementor(GeoChartsCase);
$Util.$setClassMetadataForEnum(GeoChartsCase, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$GeoChartsCase");

exports = GeoChartsCase;

//# sourceMappingURL=ExtensionsView$GeoChartsCase.js.map
