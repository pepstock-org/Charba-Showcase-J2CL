goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.GeoChartsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.GeoChartsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.GeoChartsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.GeoChartsCase.$3$impl');
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
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_;
 }
 /** @return {!GeoChartsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new GeoChartsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_;
 }
 /** @return {!GeoChartsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GeoChartsCase.$clinit();
  if ($Equality.$same(GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_, null)) {
   GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_ = $Enums.createMapFromValues(GeoChartsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_);
 }
 /** @return {!Array<!GeoChartsCase>} */
 static m_values__() {
  GeoChartsCase.$clinit();
  return /**@type {!Array<GeoChartsCase>}*/ ($Arrays.$init([GeoChartsCase.$static_EARTH_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase, GeoChartsCase.$static_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase, GeoChartsCase.$static_BUBBLE_MAP__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase], GeoChartsCase));
 }
 /** @return {!GeoChartsCase} */
 static get f_EARTH_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_EARTH_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase);
 }
 /** @return {!GeoChartsCase} */
 static get f_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase);
 }
 /** @return {!GeoChartsCase} */
 static get f_BUBBLE_MAP__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase() {
  return (GeoChartsCase.$clinit(), GeoChartsCase.$static_BUBBLE_MAP__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase);
 }
 
 static $clinit() {
  GeoChartsCase.$clinit = () =>{};
  GeoChartsCase.$loadModules();
  Enum.$clinit();
  GeoChartsCase.$static_EARTH_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("EARTH_CHOROPLETH"), GeoChartsCase.$ordinal_EARTH_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase, "Earth choropleth", $1.$create__());
  GeoChartsCase.$static_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHOROPLETH"), GeoChartsCase.$ordinal_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase, "Choropleth", $2.$create__());
  GeoChartsCase.$static_BUBBLE_MAP__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase = GeoChartsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BUBBLE_MAP"), GeoChartsCase.$ordinal_BUBBLE_MAP__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase, "Bubble map", $3.$create__());
  GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoChartsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.GeoChartsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.GeoChartsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.GeoChartsCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_EARTH_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase;
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase;
/**@private {!GeoChartsCase}*/
GeoChartsCase.$static_BUBBLE_MAP__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase;
/**@type {Map<?string, !GeoChartsCase>}*/
GeoChartsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase_;
/**@const {number}*/
GeoChartsCase.$ordinal_EARTH_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase = 0;
/**@const {number}*/
GeoChartsCase.$ordinal_CHOROPLETH__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase = 1;
/**@const {number}*/
GeoChartsCase.$ordinal_BUBBLE_MAP__org_pepstock_charba_showcase_j2cl_views_ChartsView_GeoChartsCase = 2;
CaseItem.$markImplementor(GeoChartsCase);
$Util.$setClassMetadataForEnum(GeoChartsCase, "org.pepstock.charba.showcase.j2cl.views.ChartsView$GeoChartsCase");

exports = GeoChartsCase;

//# sourceMappingURL=ChartsView$GeoChartsCase.js.map
