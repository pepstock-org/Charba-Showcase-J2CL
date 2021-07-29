goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let BubbleMapDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let GeoBubbleMapDatalabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FormatterCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GeoBubbleMapDatalabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase(/** GeoBubbleMapDatalabelsCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase(/** GeoBubbleMapDatalabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  let bmp = /**@type {BubbleMapDataPoint}*/ ($Casts.$to(dataItem.m_createDataPoint__org_pepstock_charba_client_commons_NativeObjectContainerFactory(BubbleMapDataPoint.f_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataPoint), BubbleMapDataPoint));
  return "v: [" + bmp.m_getValue__() + "]";
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
  BubbleMapDataPoint = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FormatterCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase$1");

exports = $1;

//# sourceMappingURL=GeoBubbleMapDatalabelsCase$1.js.map
