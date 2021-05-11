goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.Category$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');
let AnnotationCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase$impl');
let DataLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase$impl');
let LabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase$impl');
let ZoomCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase$impl');
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
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_;
  /**@type {Array<CaseItem>}*/
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_;
 }
 /** @return {!Category} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  let $instance = new Category();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($name, $ordinal, label, items);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** Array<CaseItem> */ items) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_ = label;
  this.f_items__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_ = items;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_;
 }
 /** @return {Array<CaseItem>} */
 m_getItems__() {
  return this.f_items__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_;
 }
 /** @return {!Category} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Category.$clinit();
  if ($Equality.$same(Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_, null)) {
   Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_ = $Enums.createMapFromValues(Category.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_);
 }
 /** @return {!Array<!Category>} */
 static m_values__() {
  Category.$clinit();
  return /**@type {!Array<Category>}*/ ($Arrays.$init([Category.$static_DATA_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, Category.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, Category.$static_ZOOM__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, Category.$static_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category], Category));
 }
 /** @return {!Category} */
 static get f_DATA_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category() {
  return (Category.$clinit(), Category.$static_DATA_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category);
 }
 /** @return {!Category} */
 static get f_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category() {
  return (Category.$clinit(), Category.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category);
 }
 /** @return {!Category} */
 static get f_ZOOM__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category() {
  return (Category.$clinit(), Category.$static_ZOOM__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category);
 }
 /** @return {!Category} */
 static get f_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category() {
  return (Category.$clinit(), Category.$static_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category);
 }
 
 static $clinit() {
  Category.$clinit = () =>{};
  Category.$loadModules();
  Enum.$clinit();
  Category.$static_DATA_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("DATA_LABELS"), Category.$ordinal_DATA_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, "Datalabels plugin", DataLabelsCase.m_values__());
  Category.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("LABELS"), Category.$ordinal_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, "Labels plugin", LabelsCase.m_values__());
  Category.$static_ZOOM__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("ZOOM"), Category.$ordinal_ZOOM__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, "Zoom plugin", ZoomCase.m_values__());
  Category.$static_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = Category.$create__java_lang_String__int__java_lang_String__arrayOf_org_pepstock_charba_showcase_j2cl_cases_CaseItem($Util.$makeEnumName("ANNOTATION"), Category.$ordinal_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, "Annotation plugin", AnnotationCase.m_values__());
  Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Category;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AnnotationCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.AnnotationCase$impl');
  DataLabelsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase$impl');
  LabelsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.LabelsCase$impl');
  ZoomCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Category}*/
Category.$static_DATA_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category;
/**@private {!Category}*/
Category.$static_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category;
/**@private {!Category}*/
Category.$static_ZOOM__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category;
/**@private {!Category}*/
Category.$static_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category;
/**@type {Map<?string, !Category>}*/
Category.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category_;
/**@const {number}*/
Category.$ordinal_DATA_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = 0;
/**@const {number}*/
Category.$ordinal_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = 1;
/**@const {number}*/
Category.$ordinal_ZOOM__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = 2;
/**@const {number}*/
Category.$ordinal_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category = 3;
$Util.$setClassMetadataForEnum(Category, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$Category");

exports = Category;

//# sourceMappingURL=ExtensionsView$Category.js.map
