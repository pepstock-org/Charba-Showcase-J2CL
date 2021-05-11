goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$5$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PluginsCase>}
 * @implements {CaseItem}
 */
class PluginsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_;
 }
 /** @return {!PluginsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new PluginsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_;
 }
 /** @return {!PluginsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PluginsCase.$clinit();
  if ($Equality.$same(PluginsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_, null)) {
   PluginsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_ = $Enums.createMapFromValues(PluginsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PluginsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_);
 }
 /** @return {!Array<!PluginsCase>} */
 static m_values__() {
  PluginsCase.$clinit();
  return /**@type {!Array<PluginsCase>}*/ ($Arrays.$init([PluginsCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, PluginsCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, PluginsCase.$static_STANDINGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, PluginsCase.$static_HTML_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, PluginsCase.$static_HTML_ANNOTATION_ELEMENT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase], PluginsCase));
 }
 /** @return {!PluginsCase} */
 static get f_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase() {
  return (PluginsCase.$clinit(), PluginsCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase);
 }
 /** @return {!PluginsCase} */
 static get f_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase() {
  return (PluginsCase.$clinit(), PluginsCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase);
 }
 /** @return {!PluginsCase} */
 static get f_STANDINGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase() {
  return (PluginsCase.$clinit(), PluginsCase.$static_STANDINGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase);
 }
 /** @return {!PluginsCase} */
 static get f_HTML_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase() {
  return (PluginsCase.$clinit(), PluginsCase.$static_HTML_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase);
 }
 /** @return {!PluginsCase} */
 static get f_HTML_ANNOTATION_ELEMENT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase() {
  return (PluginsCase.$clinit(), PluginsCase.$static_HTML_ANNOTATION_ELEMENT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase);
 }
 
 static $clinit() {
  PluginsCase.$clinit = () =>{};
  PluginsCase.$loadModules();
  Enum.$clinit();
  PluginsCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = PluginsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SIMPLE"), PluginsCase.$ordinal_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, "Simple dataset labels", $1.$create__());
  PluginsCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = PluginsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("FLAGS"), PluginsCase.$ordinal_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, "Flags as ticks", $2.$create__());
  PluginsCase.$static_STANDINGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = PluginsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("STANDINGS"), PluginsCase.$ordinal_STANDINGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, "Standings chart", $3.$create__());
  PluginsCase.$static_HTML_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = PluginsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HTML_ANNOTATION"), PluginsCase.$ordinal_HTML_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, "HTML annotation as ticks", $4.$create__());
  PluginsCase.$static_HTML_ANNOTATION_ELEMENT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = PluginsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HTML_ANNOTATION_ELEMENT"), PluginsCase.$ordinal_HTML_ANNOTATION_ELEMENT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase, "HTML annotation by element", $5.$create__());
  PluginsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase.$5$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!PluginsCase}*/
PluginsCase.$static_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase;
/**@private {!PluginsCase}*/
PluginsCase.$static_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase;
/**@private {!PluginsCase}*/
PluginsCase.$static_STANDINGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase;
/**@private {!PluginsCase}*/
PluginsCase.$static_HTML_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase;
/**@private {!PluginsCase}*/
PluginsCase.$static_HTML_ANNOTATION_ELEMENT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase;
/**@type {Map<?string, !PluginsCase>}*/
PluginsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase_;
/**@const {number}*/
PluginsCase.$ordinal_SIMPLE__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = 0;
/**@const {number}*/
PluginsCase.$ordinal_FLAGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = 1;
/**@const {number}*/
PluginsCase.$ordinal_STANDINGS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = 2;
/**@const {number}*/
PluginsCase.$ordinal_HTML_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = 3;
/**@const {number}*/
PluginsCase.$ordinal_HTML_ANNOTATION_ELEMENT__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_PluginsCase = 4;
CaseItem.$markImplementor(PluginsCase);
$Util.$setClassMetadataForEnum(PluginsCase, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$PluginsCase");

exports = PluginsCase;

//# sourceMappingURL=MiscellaneousView$PluginsCase.js.map
