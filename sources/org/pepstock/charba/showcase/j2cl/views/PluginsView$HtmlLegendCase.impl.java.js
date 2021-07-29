goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$1$impl');
let $10 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$10$impl');
let $11 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$11$impl');
let $12 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$12$impl');
let $13 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$13$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<HtmlLegendCase>}
 * @implements {CaseItem}
 */
class HtmlLegendCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_;
 }
 /** @return {!HtmlLegendCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new HtmlLegendCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_;
 }
 /** @return {!HtmlLegendCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  HtmlLegendCase.$clinit();
  if ($Equality.$same(HtmlLegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_, null)) {
   HtmlLegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_ = $Enums.createMapFromValues(HtmlLegendCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, HtmlLegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_);
 }
 /** @return {!Array<!HtmlLegendCase>} */
 static m_values__() {
  HtmlLegendCase.$clinit();
  return /**@type {!Array<HtmlLegendCase>}*/ ($Arrays.$init([HtmlLegendCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_PIR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_MAX_LEGEND_ITEMS__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_SPLITTING__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_IMAGES_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_CANVAS_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, HtmlLegendCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase], HtmlLegendCase));
 }
 /** @return {!HtmlLegendCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_HBAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_PIR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_PIR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_MAX_LEGEND_ITEMS__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_MAX_LEGEND_ITEMS__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_SPLITTING__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_SPLITTING__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_IMAGES_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_IMAGES_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_CANVAS_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_CANVAS_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 /** @return {!HtmlLegendCase} */
 static get f_CALLBACK__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase() {
  return (HtmlLegendCase.$clinit(), HtmlLegendCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase);
 }
 
 static $clinit() {
  HtmlLegendCase.$clinit = () =>{};
  HtmlLegendCase.$loadModules();
  Enum.$clinit();
  HtmlLegendCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), HtmlLegendCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Using a bar chart", $1.$create__());
  HtmlLegendCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HBAR"), HtmlLegendCase.$ordinal_HBAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Using a horizontal bar chart", $2.$create__());
  HtmlLegendCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), HtmlLegendCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Using a line chart", $3.$create__());
  HtmlLegendCase.$static_PIR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PIR"), HtmlLegendCase.$ordinal_PIR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Using a pie chart", $4.$create__());
  HtmlLegendCase.$static_MAX_LEGEND_ITEMS__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MAX_LEGEND_ITEMS"), HtmlLegendCase.$ordinal_MAX_LEGEND_ITEMS__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Setting max legend items per row", $5.$create__());
  HtmlLegendCase.$static_SPLITTING__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SPLITTING"), HtmlLegendCase.$ordinal_SPLITTING__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Splitting text by line separator", $6.$create__());
  HtmlLegendCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINEAR_GRADIENT"), HtmlLegendCase.$ordinal_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Managing linear gradients", $7.$create__());
  HtmlLegendCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADIAL_GRADIENT"), HtmlLegendCase.$ordinal_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Managing radial gradients", $8.$create__());
  HtmlLegendCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PATTERN"), HtmlLegendCase.$ordinal_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Managing patterns", $9.$create__());
  HtmlLegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POINT_STYLES"), HtmlLegendCase.$ordinal_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Managing point styles", $10.$create__());
  HtmlLegendCase.$static_IMAGES_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("IMAGES_AS_POINT_STYLE"), HtmlLegendCase.$ordinal_IMAGES_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Managing image as point styles", $11.$create__());
  HtmlLegendCase.$static_CANVAS_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CANVAS_AS_POINT_STYLE"), HtmlLegendCase.$ordinal_CANVAS_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Managing canvas as point styles", $12.$create__());
  HtmlLegendCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = HtmlLegendCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CALLBACK"), HtmlLegendCase.$ordinal_CALLBACK__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase, "Custom legend item text by callback", $13.$create__());
  HtmlLegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$1$impl');
  $10 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$10$impl');
  $11 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$11$impl');
  $12 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$12$impl');
  $13 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$13$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_HBAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_PIR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_MAX_LEGEND_ITEMS__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_SPLITTING__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_IMAGES_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_CANVAS_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@private {!HtmlLegendCase}*/
HtmlLegendCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase;
/**@type {Map<?string, !HtmlLegendCase>}*/
HtmlLegendCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_;
/**@const {number}*/
HtmlLegendCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 0;
/**@const {number}*/
HtmlLegendCase.$ordinal_HBAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 1;
/**@const {number}*/
HtmlLegendCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 2;
/**@const {number}*/
HtmlLegendCase.$ordinal_PIR__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 3;
/**@const {number}*/
HtmlLegendCase.$ordinal_MAX_LEGEND_ITEMS__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 4;
/**@const {number}*/
HtmlLegendCase.$ordinal_SPLITTING__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 5;
/**@const {number}*/
HtmlLegendCase.$ordinal_LINEAR_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 6;
/**@const {number}*/
HtmlLegendCase.$ordinal_RADIAL_GRADIENT__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 7;
/**@const {number}*/
HtmlLegendCase.$ordinal_PATTERN__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 8;
/**@const {number}*/
HtmlLegendCase.$ordinal_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 9;
/**@const {number}*/
HtmlLegendCase.$ordinal_IMAGES_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 10;
/**@const {number}*/
HtmlLegendCase.$ordinal_CANVAS_AS_POINT_STYLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 11;
/**@const {number}*/
HtmlLegendCase.$ordinal_CALLBACK__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase = 12;
CaseItem.$markImplementor(HtmlLegendCase);
$Util.$setClassMetadataForEnum(HtmlLegendCase, "org.pepstock.charba.showcase.j2cl.views.PluginsView$HtmlLegendCase");

exports = HtmlLegendCase;

//# sourceMappingURL=PluginsView$HtmlLegendCase.js.map
