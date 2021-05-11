goog.module('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$8$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TilesCase>}
 * @implements {CaseItem}
 */
class TilesCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_;
 }
 /** @return {!TilesCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new TilesCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_;
 }
 /** @return {!TilesCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TilesCase.$clinit();
  if ($Equality.$same(TilesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_, null)) {
   TilesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_ = $Enums.createMapFromValues(TilesCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TilesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_);
 }
 /** @return {!Array<!TilesCase>} */
 static m_values__() {
  TilesCase.$clinit();
  return /**@type {!Array<TilesCase>}*/ ($Arrays.$init([TilesCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, TilesCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, TilesCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, TilesCase.$static_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, TilesCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, TilesCase.$static_IMAGES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, TilesCase.$static_CHARS_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, TilesCase.$static_POINT_STYLES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase], TilesCase));
 }
 /** @return {!TilesCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 /** @return {!TilesCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 /** @return {!TilesCase} */
 static get f_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 /** @return {!TilesCase} */
 static get f_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 /** @return {!TilesCase} */
 static get f_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 /** @return {!TilesCase} */
 static get f_IMAGES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_IMAGES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 /** @return {!TilesCase} */
 static get f_CHARS_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_CHARS_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 /** @return {!TilesCase} */
 static get f_POINT_STYLES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase() {
  return (TilesCase.$clinit(), TilesCase.$static_POINT_STYLES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase);
 }
 
 static $clinit() {
  TilesCase.$clinit = () =>{};
  TilesCase.$loadModules();
  Enum.$clinit();
  TilesCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), TilesCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Applying on bar dataset", $1.$create__());
  TilesCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), TilesCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Applying on line dataset", $2.$create__());
  TilesCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADAR"), TilesCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Applying on radar dataset", $3.$create__());
  TilesCase.$static_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PLOAR"), TilesCase.$ordinal_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Applying on polar area dataset", $4.$create__());
  TilesCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DOUGHNUT"), TilesCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Applying on doughnut dataset", $5.$create__());
  TilesCase.$static_IMAGES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("IMAGES_SHAPES"), TilesCase.$ordinal_IMAGES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Using image shapes", $6.$create__());
  TilesCase.$static_CHARS_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHARS_SHAPES"), TilesCase.$ordinal_CHARS_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Using character shapes", $7.$create__());
  TilesCase.$static_POINT_STYLES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = TilesCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POINT_STYLES_SHAPES"), TilesCase.$ordinal_POINT_STYLES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase, "Using point styles shapes", $8.$create__());
  TilesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$8$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TilesCase}*/
TilesCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@private {!TilesCase}*/
TilesCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@private {!TilesCase}*/
TilesCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@private {!TilesCase}*/
TilesCase.$static_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@private {!TilesCase}*/
TilesCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@private {!TilesCase}*/
TilesCase.$static_IMAGES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@private {!TilesCase}*/
TilesCase.$static_CHARS_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@private {!TilesCase}*/
TilesCase.$static_POINT_STYLES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase;
/**@type {Map<?string, !TilesCase>}*/
TilesCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_;
/**@const {number}*/
TilesCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 0;
/**@const {number}*/
TilesCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 1;
/**@const {number}*/
TilesCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 2;
/**@const {number}*/
TilesCase.$ordinal_PLOAR__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 3;
/**@const {number}*/
TilesCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 4;
/**@const {number}*/
TilesCase.$ordinal_IMAGES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 5;
/**@const {number}*/
TilesCase.$ordinal_CHARS_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 6;
/**@const {number}*/
TilesCase.$ordinal_POINT_STYLES_SHAPES__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase = 7;
CaseItem.$markImplementor(TilesCase);
$Util.$setClassMetadataForEnum(TilesCase, "org.pepstock.charba.showcase.j2cl.views.ColoringView$TilesCase");

exports = TilesCase;

//# sourceMappingURL=ColoringView$TilesCase.js.map
