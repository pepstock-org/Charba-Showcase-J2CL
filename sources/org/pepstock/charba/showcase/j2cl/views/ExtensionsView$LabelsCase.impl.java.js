goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$8$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LabelsCase>}
 * @implements {CaseItem}
 */
class LabelsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_;
 }
 /** @return {!LabelsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new LabelsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_;
 }
 /** @return {!LabelsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  LabelsCase.$clinit();
  if ($Equality.$same(LabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_, null)) {
   LabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_ = $Enums.createMapFromValues(LabelsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_);
 }
 /** @return {!Array<!LabelsCase>} */
 static m_values__() {
  LabelsCase.$clinit();
  return /**@type {!Array<LabelsCase>}*/ ($Arrays.$init([LabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, LabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, LabelsCase.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, LabelsCase.$static_PERCENTAGE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, LabelsCase.$static_DATA__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, LabelsCase.$static_IMAGES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, LabelsCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, LabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase], LabelsCase));
 }
 /** @return {!LabelsCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 /** @return {!LabelsCase} */
 static get f_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 /** @return {!LabelsCase} */
 static get f_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 /** @return {!LabelsCase} */
 static get f_PERCENTAGE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_PERCENTAGE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 /** @return {!LabelsCase} */
 static get f_DATA__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_DATA__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 /** @return {!LabelsCase} */
 static get f_IMAGES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_IMAGES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 /** @return {!LabelsCase} */
 static get f_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 /** @return {!LabelsCase} */
 static get f_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase() {
  return (LabelsCase.$clinit(), LabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase);
 }
 
 static $clinit() {
  LabelsCase.$clinit = () =>{};
  LabelsCase.$loadModules();
  Enum.$clinit();
  LabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), LabelsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Using on bar chart", $1.$create__());
  LabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POLAR"), LabelsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Using on polar chart", $2.$create__());
  LabelsCase.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LABELS"), LabelsCase.$ordinal_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Using dataset label", $3.$create__());
  LabelsCase.$static_PERCENTAGE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PERCENTAGE"), LabelsCase.$ordinal_PERCENTAGE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Using percentage values", $4.$create__());
  LabelsCase.$static_DATA__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DATA"), LabelsCase.$ordinal_DATA__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Using data values", $5.$create__());
  LabelsCase.$static_IMAGES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("IMAGES"), LabelsCase.$ordinal_IMAGES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Using images", $6.$create__());
  LabelsCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POSITIONING"), LabelsCase.$ordinal_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Positioning", $7.$create__());
  LabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = LabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MULTIPLE_OPTIONS"), LabelsCase.$ordinal_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase, "Multiple labels rendering options", $8.$create__());
  LabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase.$8$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!LabelsCase}*/
LabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@private {!LabelsCase}*/
LabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@private {!LabelsCase}*/
LabelsCase.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@private {!LabelsCase}*/
LabelsCase.$static_PERCENTAGE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@private {!LabelsCase}*/
LabelsCase.$static_DATA__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@private {!LabelsCase}*/
LabelsCase.$static_IMAGES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@private {!LabelsCase}*/
LabelsCase.$static_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@private {!LabelsCase}*/
LabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase;
/**@type {Map<?string, !LabelsCase>}*/
LabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase_;
/**@const {number}*/
LabelsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 0;
/**@const {number}*/
LabelsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 1;
/**@const {number}*/
LabelsCase.$ordinal_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 2;
/**@const {number}*/
LabelsCase.$ordinal_PERCENTAGE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 3;
/**@const {number}*/
LabelsCase.$ordinal_DATA__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 4;
/**@const {number}*/
LabelsCase.$ordinal_IMAGES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 5;
/**@const {number}*/
LabelsCase.$ordinal_POSITIONING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 6;
/**@const {number}*/
LabelsCase.$ordinal_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_LabelsCase = 7;
CaseItem.$markImplementor(LabelsCase);
$Util.$setClassMetadataForEnum(LabelsCase, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$LabelsCase");

exports = LabelsCase;

//# sourceMappingURL=ExtensionsView$LabelsCase.js.map
