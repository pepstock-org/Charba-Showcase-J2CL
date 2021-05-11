goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let LabelsBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {ColorCallback<LabelsContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LabelsBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(/** LabelsBarCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(/** LabelsBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_labels_LabelsContext(/** LabelsContext */ item) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, item.m_getDataItem__().m_getDataType__())) {
   return item.m_getDataItem__().m_getValueAsFloatingData__().m_getAbsValue__() > 25 ? HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor : HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor;
  } else {
   return item.m_getDataItem__().m_getValue__() > 25 ? HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor : HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor;
  }
 }
 //Bridge method.
 /** @override @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** LabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_labels_LabelsContext(/**@type {LabelsContext}*/ ($Casts.$to(arg0, LabelsContext)));
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
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  LabelsContext = goog.module.get('org.pepstock.charba.client.labels.LabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
ColorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase$2");

exports = $2;

//# sourceMappingURL=LabelsBarCase$2.js.map
