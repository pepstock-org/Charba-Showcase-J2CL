goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AnnotationCase>}
 * @implements {CaseItem}
 */
class AnnotationCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_;
 }
 /** @return {!AnnotationCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new AnnotationCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_;
 }
 /** @return {!AnnotationCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AnnotationCase.$clinit();
  if ($Equality.$same(AnnotationCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_, null)) {
   AnnotationCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_ = $Enums.createMapFromValues(AnnotationCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AnnotationCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_);
 }
 /** @return {!Array<!AnnotationCase>} */
 static m_values__() {
  AnnotationCase.$clinit();
  return /**@type {!Array<AnnotationCase>}*/ ($Arrays.$init([AnnotationCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_HORIZONTAL_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_LOG_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_ELLIPSE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_POINTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_OBLIQUE_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, AnnotationCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase], AnnotationCase));
 }
 /** @return {!AnnotationCase} */
 static get f_COMBINED__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_HORIZONTAL_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_HORIZONTAL_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_LOG_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_LOG_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_ELLIPSE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_ELLIPSE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_POINTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_POINTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_OBLIQUE_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_OBLIQUE_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 /** @return {!AnnotationCase} */
 static get f_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase() {
  return (AnnotationCase.$clinit(), AnnotationCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase);
 }
 
 static $clinit() {
  AnnotationCase.$clinit = () =>{};
  AnnotationCase.$loadModules();
  Enum.$clinit();
  AnnotationCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("COMBINED"), AnnotationCase.$ordinal_COMBINED__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Applying line and box on combined chart", $1.$create__());
  AnnotationCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), AnnotationCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Box annotations on line chart", $2.$create__());
  AnnotationCase.$static_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TIME_SERIES"), AnnotationCase.$ordinal_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Line annotation on timeseries chart", $3.$create__());
  AnnotationCase.$static_HORIZONTAL_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HORIZONTAL_BAR"), AnnotationCase.$ordinal_HORIZONTAL_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Line annotation on horizontal bar chart", $4.$create__());
  AnnotationCase.$static_LOG_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LOG_SCALE"), AnnotationCase.$ordinal_LOG_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Line annotation on logarithmic scale", $5.$create__());
  AnnotationCase.$static_ELLIPSE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ELLIPSE"), AnnotationCase.$ordinal_ELLIPSE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Ellipse annotation on line chart", $6.$create__());
  AnnotationCase.$static_POINTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POINTS"), AnnotationCase.$ordinal_POINTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Points annotations on line chart", $7.$create__());
  AnnotationCase.$static_OBLIQUE_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("OBLIQUE_LINE"), AnnotationCase.$ordinal_OBLIQUE_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Oblique line annotation on timeseries chart", $8.$create__());
  AnnotationCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = AnnotationCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("EVENTS"), AnnotationCase.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase, "Catching annotations events", $9.$create__());
  AnnotationCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AnnotationCase}*/
AnnotationCase.$static_COMBINED__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_HORIZONTAL_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_LOG_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_ELLIPSE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_POINTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_OBLIQUE_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@private {!AnnotationCase}*/
AnnotationCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase;
/**@type {Map<?string, !AnnotationCase>}*/
AnnotationCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase_;
/**@const {number}*/
AnnotationCase.$ordinal_COMBINED__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 0;
/**@const {number}*/
AnnotationCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 1;
/**@const {number}*/
AnnotationCase.$ordinal_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 2;
/**@const {number}*/
AnnotationCase.$ordinal_HORIZONTAL_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 3;
/**@const {number}*/
AnnotationCase.$ordinal_LOG_SCALE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 4;
/**@const {number}*/
AnnotationCase.$ordinal_ELLIPSE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 5;
/**@const {number}*/
AnnotationCase.$ordinal_POINTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 6;
/**@const {number}*/
AnnotationCase.$ordinal_OBLIQUE_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 7;
/**@const {number}*/
AnnotationCase.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_AnnotationCase = 8;
CaseItem.$markImplementor(AnnotationCase);
$Util.$setClassMetadataForEnum(AnnotationCase, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$AnnotationCase");

exports = AnnotationCase;

//# sourceMappingURL=ExtensionsView$AnnotationCase.js.map
