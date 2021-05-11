goog.module('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$5$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GradientsCase>}
 * @implements {CaseItem}
 */
class GradientsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_;
 }
 /** @return {!GradientsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new GradientsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_;
 }
 /** @return {!GradientsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GradientsCase.$clinit();
  if ($Equality.$same(GradientsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_, null)) {
   GradientsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_ = $Enums.createMapFromValues(GradientsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GradientsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_);
 }
 /** @return {!Array<!GradientsCase>} */
 static m_values__() {
  GradientsCase.$clinit();
  return /**@type {!Array<GradientsCase>}*/ ($Arrays.$init([GradientsCase.$static_LINEAR_ON_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, GradientsCase.$static_LINEAR_ON_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, GradientsCase.$static_RADIAL_ON_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, GradientsCase.$static_RADIAL_ON_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, GradientsCase.$static_RADIAL_ON_PIE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase], GradientsCase));
 }
 /** @return {!GradientsCase} */
 static get f_LINEAR_ON_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase() {
  return (GradientsCase.$clinit(), GradientsCase.$static_LINEAR_ON_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase);
 }
 /** @return {!GradientsCase} */
 static get f_LINEAR_ON_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase() {
  return (GradientsCase.$clinit(), GradientsCase.$static_LINEAR_ON_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase);
 }
 /** @return {!GradientsCase} */
 static get f_RADIAL_ON_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase() {
  return (GradientsCase.$clinit(), GradientsCase.$static_RADIAL_ON_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase);
 }
 /** @return {!GradientsCase} */
 static get f_RADIAL_ON_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase() {
  return (GradientsCase.$clinit(), GradientsCase.$static_RADIAL_ON_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase);
 }
 /** @return {!GradientsCase} */
 static get f_RADIAL_ON_PIE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase() {
  return (GradientsCase.$clinit(), GradientsCase.$static_RADIAL_ON_PIE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase);
 }
 
 static $clinit() {
  GradientsCase.$clinit = () =>{};
  GradientsCase.$loadModules();
  Enum.$clinit();
  GradientsCase.$static_LINEAR_ON_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = GradientsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINEAR_ON_BAR"), GradientsCase.$ordinal_LINEAR_ON_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, "Linear gradient on bar dataset", $1.$create__());
  GradientsCase.$static_LINEAR_ON_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = GradientsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINEAR_ON_LINE"), GradientsCase.$ordinal_LINEAR_ON_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, "Linear gradient on line dataset", $2.$create__());
  GradientsCase.$static_RADIAL_ON_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = GradientsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADIAL_ON_RADAR"), GradientsCase.$ordinal_RADIAL_ON_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, "Radial gradient on radar dataset", $3.$create__());
  GradientsCase.$static_RADIAL_ON_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = GradientsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADIAL_ON_PLOAR"), GradientsCase.$ordinal_RADIAL_ON_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, "Radial gradient on polar area dataset", $4.$create__());
  GradientsCase.$static_RADIAL_ON_PIE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = GradientsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADIAL_ON_PIE"), GradientsCase.$ordinal_RADIAL_ON_PIE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase, "Radial gradient on pie dataset", $5.$create__());
  GradientsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$5$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GradientsCase}*/
GradientsCase.$static_LINEAR_ON_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase;
/**@private {!GradientsCase}*/
GradientsCase.$static_LINEAR_ON_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase;
/**@private {!GradientsCase}*/
GradientsCase.$static_RADIAL_ON_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase;
/**@private {!GradientsCase}*/
GradientsCase.$static_RADIAL_ON_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase;
/**@private {!GradientsCase}*/
GradientsCase.$static_RADIAL_ON_PIE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase;
/**@type {Map<?string, !GradientsCase>}*/
GradientsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_;
/**@const {number}*/
GradientsCase.$ordinal_LINEAR_ON_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = 0;
/**@const {number}*/
GradientsCase.$ordinal_LINEAR_ON_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = 1;
/**@const {number}*/
GradientsCase.$ordinal_RADIAL_ON_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = 2;
/**@const {number}*/
GradientsCase.$ordinal_RADIAL_ON_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = 3;
/**@const {number}*/
GradientsCase.$ordinal_RADIAL_ON_PIE__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase = 4;
CaseItem.$markImplementor(GradientsCase);
$Util.$setClassMetadataForEnum(GradientsCase, "org.pepstock.charba.showcase.j2cl.views.ColoringView$GradientsCase");

exports = GradientsCase;

//# sourceMappingURL=ColoringView$GradientsCase.js.map
