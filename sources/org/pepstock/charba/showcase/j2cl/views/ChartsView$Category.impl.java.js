goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.Category$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');
let ChartsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase$impl');
let EventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase$impl');
let ExtendedChartsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.ExtendedChartsCase$impl');
let OtherChartsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Category>}
 */
class Category extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_;
  /**@type {Array<CaseItem>}*/
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_;
 }
 /** @return {!Category} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  let $instance = new Category();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($name, $ordinal, label, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_ = label;
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_ = items;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_;
 }
 /** @return {Array<CaseItem>} */
 m_getItems__() {
  return this.f_items__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_;
 }
 /** @return {!Category} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Category.$clinit();
  if ($Equality.$same(Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_, null)) {
   Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_ = $Enums.createMapFromValues(Category.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_);
 }
 /** @return {!Array<!Category>} */
 static m_values__() {
  Category.$clinit();
  return /**@type {!Array<Category>}*/ ($Arrays.$init([Category.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category, Category.$static_OTHER_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category, Category.$static_EXTENDED_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category, Category.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category], Category));
 }
 /** @return {!Category} */
 static get f_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category() {
  return (Category.$clinit(), Category.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category);
 }
 /** @return {!Category} */
 static get f_OTHER_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category() {
  return (Category.$clinit(), Category.$static_OTHER_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category);
 }
 /** @return {!Category} */
 static get f_EXTENDED_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category() {
  return (Category.$clinit(), Category.$static_EXTENDED_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category);
 }
 /** @return {!Category} */
 static get f_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category() {
  return (Category.$clinit(), Category.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category);
 }
 
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  Enum.$clinit();
  Category.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("CHARTS"), Category.$ordinal_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category, "Charts", ChartsCase.m_values__());
  Category.$static_OTHER_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("OTHER_CHARTS"), Category.$ordinal_OTHER_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category, "Other charts", OtherChartsCase.m_values__());
  Category.$static_EXTENDED_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("EXTENDED_CHARTS"), Category.$ordinal_EXTENDED_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category, "Extended charts", ExtendedChartsCase.m_values__());
  Category.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("EVENTS"), Category.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category, "Events", EventsCase.m_values__());
  Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase$impl');
  EventsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase$impl');
  ExtendedChartsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.ExtendedChartsCase$impl');
  OtherChartsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Category}*/
Category.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category;
/**@private {!Category}*/
Category.$static_OTHER_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category;
/**@private {!Category}*/
Category.$static_EXTENDED_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category;
/**@private {!Category}*/
Category.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category;
/**@type {Map<?string, !Category>}*/
Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category_;
/**@const {number}*/
Category.$ordinal_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = 0;
/**@const {number}*/
Category.$ordinal_OTHER_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = 1;
/**@const {number}*/
Category.$ordinal_EXTENDED_CHARTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = 2;
/**@const {number}*/
Category.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_Category = 3;
$Util.$setClassMetadataForEnum(Category, "org.pepstock.charba.showcase.j2cl.views.ChartsView$Category");

exports = Category;

//# sourceMappingURL=ChartsView$Category.js.map
