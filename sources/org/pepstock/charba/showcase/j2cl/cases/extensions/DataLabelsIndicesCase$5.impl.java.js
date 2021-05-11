goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase.$5$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WidthCallback = goog.require('org.pepstock.charba.client.callbacks.WidthCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsIndicesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {WidthCallback<DataLabelsContext>}
 */
class $5 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsIndicesCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_5;
 }
 /** @return {!$5} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase(/** DataLabelsIndicesCase */ $outer_this) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_5__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_5__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase(/** DataLabelsIndicesCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_5 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  return Integer.m_valueOf__int($Primitives.$coerceDivision(context.m_getDataIndex__() % 2) == 0 ? 0 : 1);
 }
 //Bridge method.
 /** @override @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
WidthCallback.$markImplementor($5);
$Util.$setClassMetadata($5, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase$5");

exports = $5;

//# sourceMappingURL=DataLabelsIndicesCase$5.js.map
