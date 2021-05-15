goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FontCallback = goog.require('org.pepstock.charba.client.callbacks.FontCallback$impl');

let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let LabelsBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FontCallback<LabelsContext>}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LabelsBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3;
  /**@type {FontItem}*/
  this.f_font__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3_;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(/** LabelsBarCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(/** LabelsBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3();
 }
 /** @return {FontItem} */
 m_invoke__org_pepstock_charba_client_labels_LabelsContext(/** LabelsContext */ context) {
  this.f_font__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3_.m_setSize__int(16);
  return this.f_font__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3_;
 }
 //Bridge method.
 /** @override @return {FontItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** LabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_labels_LabelsContext(/**@type {LabelsContext}*/ ($Casts.$to(arg0, LabelsContext)));
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3() {
  this.f_font__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_3_ = FontItem.$create__();
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  FontItem = goog.module.get('org.pepstock.charba.client.items.FontItem$impl');
  LabelsContext = goog.module.get('org.pepstock.charba.client.labels.LabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FontCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase$3");

exports = $3;

//# sourceMappingURL=LabelsBarCase$3.js.map
