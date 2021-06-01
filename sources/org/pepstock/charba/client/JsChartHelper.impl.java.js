goog.module('org.pepstock.charba.client.JsChartHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartOptions = goog.forwardDeclare('org.pepstock.charba.client.ChartOptions$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class JsChartHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsChartHelper} */
 static $create__() {
  let $instance = new JsChartHelper();
  $instance.$ctor__org_pepstock_charba_client_JsChartHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_JsChartHelper__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
  JsHelper.m_get__();
 }
 /** @return {JsChartHelper} */
 static m_get__() {
  JsChartHelper.$clinit();
  return JsChartHelper.f_INSTANCE__org_pepstock_charba_client_JsChartHelper_;
 }
 /** @return {List<LegendLabelItem>} */
 m_generateDefaultLabels__org_pepstock_charba_client_Chart__org_pepstock_charba_client_ChartOptions_$pp_org_pepstock_charba_client(/** Chart */ chart, /** ChartOptions */ options) {
  let array = CharbaJsChartHelper.generateDefaultLabels(chart, options.m_nativeObject___$pp_org_pepstock_charba_client());
  return /**@type {List<LegendLabelItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, LegendLabelItem.f_FACTORY__org_pepstock_charba_client_items_LegendLabelItem));
 }
 
 m_invokeDefaultLegendEvent__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client(/** ChartOptions */ options, /** Key */ key, /** Chart */ context, /** ? */ event, /** ? */ item) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   CharbaJsChartHelper.invokeDefaultLegendEvent(options.m_nativeObject___$pp_org_pepstock_charba_client(), key.m_value__(), context, event, item);
  }
 }
 
 m_invokeDefaultChartEvent__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_ArrayObject_$pp_org_pepstock_charba_client(/** ChartOptions */ options, /** Key */ key, /** Chart */ context, /** ? */ event, /** Array */ items) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   CharbaJsChartHelper.invokeDefaultChartEvent(options.m_nativeObject___$pp_org_pepstock_charba_client(), key.m_value__(), context, event, items);
  }
 }
 
 m_setTooltipActiveElements__org_pepstock_charba_client_Chart__org_pepstock_charba_client_commons_ArrayObject_$pp_org_pepstock_charba_client(/** Chart */ chart, /** Array */ elements) {
  if (!$Equality.$same(chart, null) && !$Equality.$same(elements, null)) {
   CharbaJsChartHelper.setTooltipActiveElements(chart, elements);
  }
 }
 /** @return {Array} */
 m_getTooltipActiveElements__org_pepstock_charba_client_Chart_$pp_org_pepstock_charba_client(/** Chart */ chart) {
  return CharbaJsChartHelper.getTooltipActiveElements(chart);
 }
 
 static $clinit() {
  JsChartHelper.$clinit = () =>{};
  JsChartHelper.$loadModules();
  j_l_Object.$clinit();
  JsChartHelper.f_INSTANCE__org_pepstock_charba_client_JsChartHelper_ = JsChartHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsChartHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@type {JsChartHelper}*/
JsChartHelper.f_INSTANCE__org_pepstock_charba_client_JsChartHelper_;
$Util.$setClassMetadata(JsChartHelper, "org.pepstock.charba.client.JsChartHelper");

exports = JsChartHelper;

//# sourceMappingURL=JsChartHelper.js.map
