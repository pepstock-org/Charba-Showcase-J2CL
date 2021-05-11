goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FontCallback = goog.require('org.pepstock.charba.client.callbacks.FontCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let DataLabelsCustomLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FontCallback<DataLabelsContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsCustomLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase(/** DataLabelsCustomLabelsCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase(/** DataLabelsCustomLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {FontItem} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let font = FontItem.$create__();
  let width = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_.m_isInitialized__() ? this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_.m_getNode__().m_getWidth__() : 0;
  font.m_setSize__int(width < 512 ? 16 : 20);
  return font;
 }
 //Bridge method.
 /** @override @return {FontItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
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
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  FontItem = goog.module.get('org.pepstock.charba.client.items.FontItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FontCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsCustomLabelsCase$2.js.map
