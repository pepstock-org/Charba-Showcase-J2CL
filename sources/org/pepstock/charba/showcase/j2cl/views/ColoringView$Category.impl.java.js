goog.module('org.pepstock.charba.showcase.j2cl.views.ColoringView.Category$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');
let FillingCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase$impl');
let GradientsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase$impl');
let PatternsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase$impl');
let TilesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase$impl');
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
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_;
  /**@type {Array<CaseItem>}*/
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_;
 }
 /** @return {!Category} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  let $instance = new Category();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($name, $ordinal, label, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_ = label;
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_ = items;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_;
 }
 /** @return {Array<CaseItem>} */
 m_getItems__() {
  return this.f_items__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_;
 }
 /** @return {!Category} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Category.$clinit();
  if ($Equality.$same(Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_, null)) {
   Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_ = $Enums.createMapFromValues(Category.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_);
 }
 /** @return {!Array<!Category>} */
 static m_values__() {
  Category.$clinit();
  return /**@type {!Array<Category>}*/ ($Arrays.$init([Category.$static_PATTERNS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category, Category.$static_GRADIENTS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category, Category.$static_TILES__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category, Category.$static_FILLING__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category], Category));
 }
 /** @return {!Category} */
 static get f_PATTERNS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category() {
  return (Category.$clinit(), Category.$static_PATTERNS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category);
 }
 /** @return {!Category} */
 static get f_GRADIENTS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category() {
  return (Category.$clinit(), Category.$static_GRADIENTS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category);
 }
 /** @return {!Category} */
 static get f_TILES__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category() {
  return (Category.$clinit(), Category.$static_TILES__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category);
 }
 /** @return {!Category} */
 static get f_FILLING__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category() {
  return (Category.$clinit(), Category.$static_FILLING__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category);
 }
 
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  Enum.$clinit();
  Category.$static_PATTERNS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("PATTERNS"), Category.$ordinal_PATTERNS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category, "Patterns", PatternsCase.m_values__());
  Category.$static_GRADIENTS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("GRADIENTS"), Category.$ordinal_GRADIENTS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category, "Gradients", GradientsCase.m_values__());
  Category.$static_TILES__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("TILES"), Category.$ordinal_TILES__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category, "Tiles", TilesCase.m_values__());
  Category.$static_FILLING__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("FILLING"), Category.$ordinal_FILLING__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category, "Filling", FillingCase.m_values__());
  Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FillingCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.FillingCase$impl');
  GradientsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase$impl');
  PatternsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.PatternsCase$impl');
  TilesCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Category}*/
Category.$static_PATTERNS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category;
/**@private {!Category}*/
Category.$static_GRADIENTS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category;
/**@private {!Category}*/
Category.$static_TILES__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category;
/**@private {!Category}*/
Category.$static_FILLING__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category;
/**@type {Map<?string, !Category>}*/
Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category_;
/**@const {number}*/
Category.$ordinal_PATTERNS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = 0;
/**@const {number}*/
Category.$ordinal_GRADIENTS__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = 1;
/**@const {number}*/
Category.$ordinal_TILES__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = 2;
/**@const {number}*/
Category.$ordinal_FILLING__org_pepstock_charba_showcase_j2cl_views_ColoringView_Category = 3;
$Util.$setClassMetadataForEnum(Category, "org.pepstock.charba.showcase.j2cl.views.ColoringView$Category");

exports = Category;

//# sourceMappingURL=ColoringView$Category.js.map
