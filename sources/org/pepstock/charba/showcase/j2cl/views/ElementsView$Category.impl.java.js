goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.Category$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');
let AxesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase$impl');
let LegendCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase$impl');
let TitleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TitleCase$impl');
let TooltipCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase$impl');
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
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_;
  /**@type {Array<CaseItem>}*/
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_;
 }
 /** @return {!Category} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  let $instance = new Category();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($name, $ordinal, label, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_ = label;
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_ = items;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_;
 }
 /** @return {Array<CaseItem>} */
 m_getItems__() {
  return this.f_items__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_;
 }
 /** @return {!Category} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Category.$clinit();
  if ($Equality.$same(Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_, null)) {
   Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_ = $Enums.createMapFromValues(Category.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_);
 }
 /** @return {!Array<!Category>} */
 static m_values__() {
  Category.$clinit();
  return /**@type {!Array<Category>}*/ ($Arrays.$init([Category.$static_LEGEND__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category, Category.$static_TOOLTIP__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category, Category.$static_AXES__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category, Category.$static_TITLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category], Category));
 }
 /** @return {!Category} */
 static get f_LEGEND__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category() {
  return (Category.$clinit(), Category.$static_LEGEND__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category);
 }
 /** @return {!Category} */
 static get f_TOOLTIP__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category() {
  return (Category.$clinit(), Category.$static_TOOLTIP__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category);
 }
 /** @return {!Category} */
 static get f_AXES__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category() {
  return (Category.$clinit(), Category.$static_AXES__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category);
 }
 /** @return {!Category} */
 static get f_TITLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category() {
  return (Category.$clinit(), Category.$static_TITLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category);
 }
 
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  Enum.$clinit();
  Category.$static_LEGEND__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("LEGEND"), Category.$ordinal_LEGEND__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category, "Legend", LegendCase.m_values__());
  Category.$static_TOOLTIP__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("TOOLTIP"), Category.$ordinal_TOOLTIP__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category, "Tooltip", TooltipCase.m_values__());
  Category.$static_AXES__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("AXES"), Category.$ordinal_AXES__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category, "Axes", AxesCase.m_values__());
  Category.$static_TITLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("TITLE"), Category.$ordinal_TITLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category, "Title", TitleCase.m_values__());
  Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AxesCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase$impl');
  LegendCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.LegendCase$impl');
  TitleCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TitleCase$impl');
  TooltipCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView.TooltipCase$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Category}*/
Category.$static_LEGEND__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category;
/**@private {!Category}*/
Category.$static_TOOLTIP__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category;
/**@private {!Category}*/
Category.$static_AXES__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category;
/**@private {!Category}*/
Category.$static_TITLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category;
/**@type {Map<?string, !Category>}*/
Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category_;
/**@const {number}*/
Category.$ordinal_LEGEND__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = 0;
/**@const {number}*/
Category.$ordinal_TOOLTIP__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = 1;
/**@const {number}*/
Category.$ordinal_AXES__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = 2;
/**@const {number}*/
Category.$ordinal_TITLE__org_pepstock_charba_showcase_j2cl_views_ElementsView_Category = 3;
$Util.$setClassMetadataForEnum(Category, "org.pepstock.charba.showcase.j2cl.views.ElementsView$Category");

exports = Category;

//# sourceMappingURL=ElementsView$Category.js.map
