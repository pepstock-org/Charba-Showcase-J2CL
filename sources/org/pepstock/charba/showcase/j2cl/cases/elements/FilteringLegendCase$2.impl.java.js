goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.FilteringLegendCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendItemSortCallback = goog.require('org.pepstock.charba.client.callbacks.LegendItemSortCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let FilteringLegendCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.FilteringLegendCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendItemSortCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {FilteringLegendCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase(/** FilteringLegendCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase(/** FilteringLegendCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_items_LegendItem(/** IsChart */ chart, /** LegendItem */ item1, /** LegendItem */ item2) {
  return item2.m_getDatasetIndex__() - item1.m_getDatasetIndex__() | 0;
 }
 //Bridge method.
 /** @override @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(/** IsChart */ arg0, /** LegendItem */ arg1, /** LegendItem */ arg2) {
  return this.m_onItemSort__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_items_LegendItem(arg0, /**@type {LegendItem}*/ ($Casts.$to(arg1, LegendItem)), /**@type {LegendItem}*/ ($Casts.$to(arg2, LegendItem)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LegendItemSortCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.elements.FilteringLegendCase$2");

exports = $2;

//# sourceMappingURL=FilteringLegendCase$2.js.map
