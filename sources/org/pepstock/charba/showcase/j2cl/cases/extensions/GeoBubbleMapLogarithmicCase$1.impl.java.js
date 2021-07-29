goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapLogarithmicCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let BubbleMapDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let GeoBubbleMapLogarithmicCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapLogarithmicCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DatasetContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GeoBubbleMapLogarithmicCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase(/** GeoBubbleMapLogarithmicCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase(/** GeoBubbleMapLogarithmicCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  if (Undefined.m_is__int(context.m_getDataIndex__())) {
   return null;
  }
  let dataPoint = /**@type {BubbleMapDataPoint}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase_1.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapLogarithmicCase_.m_getValues__().getAtIndex(context.m_getDataIndex__()), BubbleMapDataPoint));
  return HtmlColor.f_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(dataPoint.m_getValue__() / 1000000);
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
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
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  BubbleMapDataPoint = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapLogarithmicCase$1");

exports = $1;

//# sourceMappingURL=GeoBubbleMapLogarithmicCase$1.js.map
