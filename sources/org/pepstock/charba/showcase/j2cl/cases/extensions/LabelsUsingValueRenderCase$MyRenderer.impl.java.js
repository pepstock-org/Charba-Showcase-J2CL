goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingValueRenderCase.MyRenderer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RenderCallback = goog.require('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');

let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {RenderCallback}
 */
class MyRenderer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MyRenderer} */
 static $create__() {
  MyRenderer.$clinit();
  let $instance = new MyRenderer();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsUsingValueRenderCase_MyRenderer__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsUsingValueRenderCase_MyRenderer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_labels_LabelsContext(/** LabelsContext */ item) {
  return "$$ " + item.m_getDataItem__().m_getValue__();
 }
 //Bridge method.
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** LabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_labels_LabelsContext(/**@type {LabelsContext}*/ ($Casts.$to(arg0, LabelsContext)));
 }
 
 static $clinit() {
  MyRenderer.$clinit = () =>{};
  MyRenderer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyRenderer;
 }
 
 static $loadModules() {
  LabelsContext = goog.module.get('org.pepstock.charba.client.labels.LabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
RenderCallback.$markImplementor(MyRenderer);
$Util.$setClassMetadata(MyRenderer, "org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingValueRenderCase$MyRenderer");

exports = MyRenderer;

//# sourceMappingURL=LabelsUsingValueRenderCase$MyRenderer.js.map
