goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.FilteringLegendCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendFilterCallback = goog.require('org.pepstock.charba.client.callbacks.LegendFilterCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let FilteringLegendCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.FilteringLegendCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendFilterCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {FilteringLegendCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase(/** FilteringLegendCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase(/** FilteringLegendCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem(/** IsChart */ chart, /** LegendItem */ item) {
  if (this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_1.f_filter__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringLegendCase_.checked && item.m_isHidden__org_pepstock_charba_client_IsChart(chart)) {
   return false;
  }
  return true;
 }
 //Bridge method.
 /** @override @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(/** IsChart */ arg0, /** LegendItem */ arg1) {
  return this.m_onFilter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem(arg0, /**@type {LegendItem}*/ ($Casts.$to(arg1, LegendItem)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LegendFilterCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.FilteringLegendCase$1");

exports = $1;

//# sourceMappingURL=FilteringLegendCase$1.js.map
