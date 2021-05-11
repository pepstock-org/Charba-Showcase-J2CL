goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.Category$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');
let DatasetsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase$impl');
let OptionsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase$impl');
let PluginsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase$impl');
let ScriptableOptionsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase$impl');
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
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_;
  /**@type {Array<CaseItem>}*/
  this.f_items__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_;
 }
 /** @return {!Category} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  let $instance = new Category();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($name, $ordinal, label, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_ = label;
  this.f_items__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_ = items;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_;
 }
 /** @return {Array<CaseItem>} */
 m_getItems__() {
  return this.f_items__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_;
 }
 /** @return {!Category} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Category.$clinit();
  if ($Equality.$same(Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_, null)) {
   Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_ = $Enums.createMapFromValues(Category.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_);
 }
 /** @return {!Array<!Category>} */
 static m_values__() {
  Category.$clinit();
  return /**@type {!Array<Category>}*/ ($Arrays.$init([Category.$static_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category, Category.$static_SCRIPTABLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category, Category.$static_DATASETS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category, Category.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category], Category));
 }
 /** @return {!Category} */
 static get f_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category() {
  return (Category.$clinit(), Category.$static_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category);
 }
 /** @return {!Category} */
 static get f_SCRIPTABLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category() {
  return (Category.$clinit(), Category.$static_SCRIPTABLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category);
 }
 /** @return {!Category} */
 static get f_DATASETS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category() {
  return (Category.$clinit(), Category.$static_DATASETS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category);
 }
 /** @return {!Category} */
 static get f_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category() {
  return (Category.$clinit(), Category.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category);
 }
 
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  Enum.$clinit();
  Category.$static_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("OPTIONS"), Category.$ordinal_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category, "Options", OptionsCase.m_values__());
  Category.$static_SCRIPTABLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("SCRIPTABLE_OPTIONS"), Category.$ordinal_SCRIPTABLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category, "Scriptable options", ScriptableOptionsCase.m_values__());
  Category.$static_DATASETS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("DATASETS"), Category.$ordinal_DATASETS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category, "Datasets", DatasetsCase.m_values__());
  Category.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("PLUGINS"), Category.$ordinal_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category, "Implementing plugins", PluginsCase.m_values__());
  Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DatasetsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase$impl');
  OptionsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase$impl');
  PluginsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.PluginsCase$impl');
  ScriptableOptionsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Category}*/
Category.$static_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category;
/**@private {!Category}*/
Category.$static_SCRIPTABLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category;
/**@private {!Category}*/
Category.$static_DATASETS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category;
/**@private {!Category}*/
Category.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category;
/**@type {Map<?string, !Category>}*/
Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category_;
/**@const {number}*/
Category.$ordinal_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = 0;
/**@const {number}*/
Category.$ordinal_SCRIPTABLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = 1;
/**@const {number}*/
Category.$ordinal_DATASETS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = 2;
/**@const {number}*/
Category.$ordinal_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_Category = 3;
$Util.$setClassMetadataForEnum(Category, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$Category");

exports = Category;

//# sourceMappingURL=MiscellaneousView$Category.js.map
