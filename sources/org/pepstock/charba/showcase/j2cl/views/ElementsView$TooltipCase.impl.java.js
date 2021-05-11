goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$7$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TooltipCase>}
 * @implements {CaseItem}
 */
class TooltipCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_;
 }
 /** @return {!TooltipCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new TooltipCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_;
 }
 /** @return {!TooltipCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TooltipCase.$clinit();
  if ($Equality.$same(TooltipCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_, null)) {
   TooltipCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_ = $Enums.createMapFromValues(TooltipCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TooltipCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_);
 }
 /** @return {!Array<!TooltipCase>} */
 static m_values__() {
  TooltipCase.$clinit();
  return /**@type {!Array<TooltipCase>}*/ ($Arrays.$init([TooltipCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, TooltipCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, TooltipCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, TooltipCase.$static_STYLING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, TooltipCase.$static_POSITIONER__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, TooltipCase.$static_HTML_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, TooltipCase.$static_HTML_PIE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase], TooltipCase));
 }
 /** @return {!TooltipCase} */
 static get f_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase() {
  return (TooltipCase.$clinit(), TooltipCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase);
 }
 /** @return {!TooltipCase} */
 static get f_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase() {
  return (TooltipCase.$clinit(), TooltipCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase);
 }
 /** @return {!TooltipCase} */
 static get f_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase() {
  return (TooltipCase.$clinit(), TooltipCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase);
 }
 /** @return {!TooltipCase} */
 static get f_STYLING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase() {
  return (TooltipCase.$clinit(), TooltipCase.$static_STYLING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase);
 }
 /** @return {!TooltipCase} */
 static get f_POSITIONER__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase() {
  return (TooltipCase.$clinit(), TooltipCase.$static_POSITIONER__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase);
 }
 /** @return {!TooltipCase} */
 static get f_HTML_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase() {
  return (TooltipCase.$clinit(), TooltipCase.$static_HTML_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase);
 }
 /** @return {!TooltipCase} */
 static get f_HTML_PIE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase() {
  return (TooltipCase.$clinit(), TooltipCase.$static_HTML_PIE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase);
 }
 
 static $clinit() {
  TooltipCase.$clinit = () =>{};
  TooltipCase.$loadModules();
  Enum.$clinit();
  TooltipCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = TooltipCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POSITIONING"), TooltipCase.$ordinal_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, "Positioning", $1.$create__());
  TooltipCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = TooltipCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("INTERACTIONS"), TooltipCase.$ordinal_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, "Interactions among datasets", $2.$create__());
  TooltipCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = TooltipCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CALLBACK"), TooltipCase.$ordinal_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, "Callback to add elements", $3.$create__());
  TooltipCase.$static_STYLING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = TooltipCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STYLING"), TooltipCase.$ordinal_STYLING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, "Styling", $4.$create__());
  TooltipCase.$static_POSITIONER__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = TooltipCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POSITIONER"), TooltipCase.$ordinal_POSITIONER__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, "Positioner for custom positioning", $5.$create__());
  TooltipCase.$static_HTML_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = TooltipCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HTML_LINE"), TooltipCase.$ordinal_HTML_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, "HTML tooltip by callback on line chart", $6.$create__());
  TooltipCase.$static_HTML_PIE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = TooltipCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HTML_PIE"), TooltipCase.$ordinal_HTML_PIE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase, "HTML tooltip bu callback on pie chart", $7.$create__());
  TooltipCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase.$7$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TooltipCase}*/
TooltipCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase;
/**@private {!TooltipCase}*/
TooltipCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase;
/**@private {!TooltipCase}*/
TooltipCase.$static_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase;
/**@private {!TooltipCase}*/
TooltipCase.$static_STYLING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase;
/**@private {!TooltipCase}*/
TooltipCase.$static_POSITIONER__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase;
/**@private {!TooltipCase}*/
TooltipCase.$static_HTML_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase;
/**@private {!TooltipCase}*/
TooltipCase.$static_HTML_PIE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase;
/**@type {Map<?string, !TooltipCase>}*/
TooltipCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase_;
/**@const {number}*/
TooltipCase.$ordinal_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = 0;
/**@const {number}*/
TooltipCase.$ordinal_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = 1;
/**@const {number}*/
TooltipCase.$ordinal_CALLBACK__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = 2;
/**@const {number}*/
TooltipCase.$ordinal_STYLING__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = 3;
/**@const {number}*/
TooltipCase.$ordinal_POSITIONER__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = 4;
/**@const {number}*/
TooltipCase.$ordinal_HTML_LINE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = 5;
/**@const {number}*/
TooltipCase.$ordinal_HTML_PIE__org_pepstock_charba_showcase_j2cl_views_ElementsView_TooltipCase = 6;
CaseItem.$markImplementor(TooltipCase);
$Util.$setClassMetadataForEnum(TooltipCase, "org.pepstock.charba.showcase.j2cl.views.ElementsView$TooltipCase");

exports = TooltipCase;

//# sourceMappingURL=ElementsView$TooltipCase.js.map
