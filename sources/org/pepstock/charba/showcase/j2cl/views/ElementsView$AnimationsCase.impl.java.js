goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AnimationsCase>}
 * @implements {CaseItem}
 */
class AnimationsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_;
 }
 /** @return {!AnimationsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new AnimationsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_;
 }
 /** @return {!AnimationsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AnimationsCase.$clinit();
  if ($Equality.$same(AnimationsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_, null)) {
   AnimationsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_ = $Enums.createMapFromValues(AnimationsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AnimationsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_);
 }
 /** @return {!Array<!AnimationsCase>} */
 static m_values__() {
  AnimationsCase.$clinit();
  return /**@type {!Array<AnimationsCase>}*/ ($Arrays.$init([AnimationsCase.$static_DELAY__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase, AnimationsCase.$static_LOOP__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase, AnimationsCase.$static_PROGRESSIVE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase, AnimationsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase], AnimationsCase));
 }
 /** @return {!AnimationsCase} */
 static get f_DELAY__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase() {
  return (AnimationsCase.$clinit(), AnimationsCase.$static_DELAY__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase);
 }
 /** @return {!AnimationsCase} */
 static get f_LOOP__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase() {
  return (AnimationsCase.$clinit(), AnimationsCase.$static_LOOP__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase);
 }
 /** @return {!AnimationsCase} */
 static get f_PROGRESSIVE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase() {
  return (AnimationsCase.$clinit(), AnimationsCase.$static_PROGRESSIVE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase);
 }
 /** @return {!AnimationsCase} */
 static get f_EVENTS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase() {
  return (AnimationsCase.$clinit(), AnimationsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase);
 }
 
 static $clinit() {
  AnimationsCase.$clinit = () =>{};
  AnimationsCase.$loadModules();
  Enum.$clinit();
  AnimationsCase.$static_DELAY__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = AnimationsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DELAY"), AnimationsCase.$ordinal_DELAY__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase, "Delay drawing", $1.$create__());
  AnimationsCase.$static_LOOP__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = AnimationsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LOOP"), AnimationsCase.$ordinal_LOOP__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase, "Animation looping", $2.$create__());
  AnimationsCase.$static_PROGRESSIVE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = AnimationsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("PROGRESSIVE"), AnimationsCase.$ordinal_PROGRESSIVE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase, "Progressive line", $3.$create__());
  AnimationsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = AnimationsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("EVENTS"), AnimationsCase.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase, "Animation events", $4.$create__());
  AnimationsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AnimationsCase}*/
AnimationsCase.$static_DELAY__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase;
/**@private {!AnimationsCase}*/
AnimationsCase.$static_LOOP__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase;
/**@private {!AnimationsCase}*/
AnimationsCase.$static_PROGRESSIVE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase;
/**@private {!AnimationsCase}*/
AnimationsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase;
/**@type {Map<?string, !AnimationsCase>}*/
AnimationsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_;
/**@const {number}*/
AnimationsCase.$ordinal_DELAY__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = 0;
/**@const {number}*/
AnimationsCase.$ordinal_LOOP__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = 1;
/**@const {number}*/
AnimationsCase.$ordinal_PROGRESSIVE__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = 2;
/**@const {number}*/
AnimationsCase.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase = 3;
CaseItem.$markImplementor(AnimationsCase);
$Util.$setClassMetadataForEnum(AnimationsCase, "org.pepstock.charba.showcase.j2cl.views.ElementsView$AnimationsCase");

exports = AnimationsCase;

//# sourceMappingURL=ElementsView$AnimationsCase.js.map
