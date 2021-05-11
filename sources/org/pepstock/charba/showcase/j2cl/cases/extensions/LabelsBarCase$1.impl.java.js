goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RenderCallback = goog.require('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');

let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let LabelsBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {RenderCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LabelsBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(/** LabelsBarCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(/** LabelsBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_labels_LabelsContext(/** LabelsContext */ context) {
  let value = 0;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, context.m_getDataItem__().m_getDataType__())) {
   value = context.m_getDataItem__().m_getValueAsFloatingData__().m_getAbsValue__();
  } else {
   value = context.m_getDataItem__().m_getValue__();
  }
  return "$$ " + value;
 }
 //Bridge method.
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** LabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_labels_LabelsContext(/**@type {LabelsContext}*/ ($Casts.$to(arg0, LabelsContext)));
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
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  LabelsContext = goog.module.get('org.pepstock.charba.client.labels.LabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
RenderCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase$1");

exports = $1;

//# sourceMappingURL=LabelsBarCase$1.js.map
