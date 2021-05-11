goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.Category$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');
let ChartBackgroundCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase$impl');
let ColorSchemesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase$impl');
let DatasetItemsSelectorCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase$impl');
let HtmlLegendCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase$impl');
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
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_;
  /**@type {Array<CaseItem>}*/
  this.f_items__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_;
 }
 /** @return {!Category} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  let $instance = new Category();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($name, $ordinal, label, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_ = label;
  this.f_items__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_ = items;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_;
 }
 /** @return {Array<CaseItem>} */
 m_getItems__() {
  return this.f_items__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_;
 }
 /** @return {!Category} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Category.$clinit();
  if ($Equality.$same(Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_, null)) {
   Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_ = $Enums.createMapFromValues(Category.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_);
 }
 /** @return {!Array<!Category>} */
 static m_values__() {
  Category.$clinit();
  return /**@type {!Array<Category>}*/ ($Arrays.$init([Category.$static_CHART_BACKGROUND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category, Category.$static_DATASET_ITEMS_SELECTOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category, Category.$static_COLOR_SCHEMES__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category, Category.$static_HTML_LEGEND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category], Category));
 }
 /** @return {!Category} */
 static get f_CHART_BACKGROUND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category() {
  return (Category.$clinit(), Category.$static_CHART_BACKGROUND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category);
 }
 /** @return {!Category} */
 static get f_DATASET_ITEMS_SELECTOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category() {
  return (Category.$clinit(), Category.$static_DATASET_ITEMS_SELECTOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category);
 }
 /** @return {!Category} */
 static get f_COLOR_SCHEMES__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category() {
  return (Category.$clinit(), Category.$static_COLOR_SCHEMES__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category);
 }
 /** @return {!Category} */
 static get f_HTML_LEGEND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category() {
  return (Category.$clinit(), Category.$static_HTML_LEGEND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category);
 }
 
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  Enum.$clinit();
  Category.$static_CHART_BACKGROUND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("CHART_BACKGROUND"), Category.$ordinal_CHART_BACKGROUND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category, "Chart background", ChartBackgroundCase.m_values__());
  Category.$static_DATASET_ITEMS_SELECTOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("DATASET_ITEMS_SELECTOR"), Category.$ordinal_DATASET_ITEMS_SELECTOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category, "Dataset items selector", DatasetItemsSelectorCase.m_values__());
  Category.$static_COLOR_SCHEMES__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("COLOR_SCHEMES"), Category.$ordinal_COLOR_SCHEMES__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category, "Color schemes", ColorSchemesCase.m_values__());
  Category.$static_HTML_LEGEND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("HTML_LEGEND"), Category.$ordinal_HTML_LEGEND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category, "HTML legend", HtmlLegendCase.m_values__());
  Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartBackgroundCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ChartBackgroundCase$impl');
  ColorSchemesCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.ColorSchemesCase$impl');
  DatasetItemsSelectorCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase$impl');
  HtmlLegendCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Category}*/
Category.$static_CHART_BACKGROUND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category;
/**@private {!Category}*/
Category.$static_DATASET_ITEMS_SELECTOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category;
/**@private {!Category}*/
Category.$static_COLOR_SCHEMES__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category;
/**@private {!Category}*/
Category.$static_HTML_LEGEND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category;
/**@type {Map<?string, !Category>}*/
Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category_;
/**@const {number}*/
Category.$ordinal_CHART_BACKGROUND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = 0;
/**@const {number}*/
Category.$ordinal_DATASET_ITEMS_SELECTOR__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = 1;
/**@const {number}*/
Category.$ordinal_COLOR_SCHEMES__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = 2;
/**@const {number}*/
Category.$ordinal_HTML_LEGEND__org_pepstock_charba_showcase_j2cl_views_PluginsView_Category = 3;
$Util.$setClassMetadataForEnum(Category, "org.pepstock.charba.showcase.j2cl.views.PluginsView$Category");

exports = Category;

//# sourceMappingURL=PluginsView$Category.js.map
