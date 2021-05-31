goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<OptionsCase>}
 * @implements {CaseItem}
 */
class OptionsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_;
 }
 /** @return {!OptionsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new OptionsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_;
 }
 /** @return {!OptionsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  OptionsCase.$clinit();
  if ($Equality.$same(OptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_, null)) {
   OptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_ = $Enums.createMapFromValues(OptionsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, OptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_);
 }
 /** @return {!Array<!OptionsCase>} */
 static m_values__() {
  OptionsCase.$clinit();
  return /**@type {!Array<OptionsCase>}*/ ($Arrays.$init([OptionsCase.$static_STEPPED_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_POINT_STYLES_AS_IMAGES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_POINT_SIZE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_HOVER_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_TRENDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, OptionsCase.$static_AUTO_UPDATE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase], OptionsCase));
 }
 /** @return {!OptionsCase} */
 static get f_STEPPED_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_STEPPED_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_POINT_STYLES_AS_IMAGES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_POINT_STYLES_AS_IMAGES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_POINT_SIZE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_POINT_SIZE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_HOVER_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_HOVER_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_TRENDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_TRENDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 /** @return {!OptionsCase} */
 static get f_AUTO_UPDATE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase() {
  return (OptionsCase.$clinit(), OptionsCase.$static_AUTO_UPDATE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase);
 }
 
 static $clinit() {
  OptionsCase.$clinit = () =>{};
  OptionsCase.$loadModules();
  Enum.$clinit();
  OptionsCase.$static_STEPPED_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STEPPED_LINE"), OptionsCase.$ordinal_STEPPED_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Stepped line options on line chart", $1.$create__());
  OptionsCase.$static_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("INTERPOLATION"), OptionsCase.$ordinal_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Interpolation options on line chart", $2.$create__());
  OptionsCase.$static_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STYLES"), OptionsCase.$ordinal_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Applying styles on line chart", $3.$create__());
  OptionsCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POINT_STYLES"), OptionsCase.$ordinal_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Applying point styles on line chart", $4.$create__());
  OptionsCase.$static_POINT_STYLES_AS_IMAGES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POINT_STYLES_AS_IMAGES"), OptionsCase.$ordinal_POINT_STYLES_AS_IMAGES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Applying point styles as images on line chart", $5.$create__());
  OptionsCase.$static_POINT_SIZE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POINT_SIZE"), OptionsCase.$ordinal_POINT_SIZE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Applying point sizes on line chart", $6.$create__());
  OptionsCase.$static_HOVER_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HOVER_STYLES"), OptionsCase.$ordinal_HOVER_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Applying hover styles on stacked area chart", $7.$create__());
  OptionsCase.$static_TRENDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TRENDS"), OptionsCase.$ordinal_TRENDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Drawing trend and forecast on timeseries chart", $8.$create__());
  OptionsCase.$static_AUTO_UPDATE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = OptionsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("AUTO_UPDATE"), OptionsCase.$ordinal_AUTO_UPDATE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase, "Auto updating on timeseries chart", $9.$create__());
  OptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!OptionsCase}*/
OptionsCase.$static_STEPPED_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_POINT_STYLES_AS_IMAGES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_POINT_SIZE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_HOVER_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_TRENDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@private {!OptionsCase}*/
OptionsCase.$static_AUTO_UPDATE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase;
/**@type {Map<?string, !OptionsCase>}*/
OptionsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_;
/**@const {number}*/
OptionsCase.$ordinal_STEPPED_LINE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 0;
/**@const {number}*/
OptionsCase.$ordinal_INTERPOLATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 1;
/**@const {number}*/
OptionsCase.$ordinal_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 2;
/**@const {number}*/
OptionsCase.$ordinal_POINT_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 3;
/**@const {number}*/
OptionsCase.$ordinal_POINT_STYLES_AS_IMAGES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 4;
/**@const {number}*/
OptionsCase.$ordinal_POINT_SIZE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 5;
/**@const {number}*/
OptionsCase.$ordinal_HOVER_STYLES__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 6;
/**@const {number}*/
OptionsCase.$ordinal_TRENDS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 7;
/**@const {number}*/
OptionsCase.$ordinal_AUTO_UPDATE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase = 8;
CaseItem.$markImplementor(OptionsCase);
$Util.$setClassMetadataForEnum(OptionsCase, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$OptionsCase");

exports = OptionsCase;

//# sourceMappingURL=MiscellaneousView$OptionsCase.js.map
