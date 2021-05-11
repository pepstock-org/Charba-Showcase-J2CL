goog.module('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let ChartPointerDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let ChartPointerOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory$impl');
let ChartPointerDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory.ChartPointerDefaultsOptionsFactory$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
let LegendHitBoxItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendHitBoxItem$impl');
let PluginEventArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginEventArgument$impl');
let PluginUpdateArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginUpdateArgument$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ChartPointer extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, ChartPointerOptions>}*/
  this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_ChartPointer_;
 }
 /** @return {!ChartPointer} */
 static $create__() {
  let $instance = new ChartPointer();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointer__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointer__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer);
  this.$init___$p_org_pepstock_charba_client_impl_plugins_ChartPointer();
 }
 /** @return {ChartPointer} */
 static m_get__() {
  ChartPointer.$clinit();
  return ChartPointer.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointer_;
 }
 /** @override @return {boolean} */
 m_onBeforeUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   let pOptions = null;
   let options = chart.m_getWholeOptions__();
   if (options.m_getPlugins__().m_hasOptions__java_lang_String(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer)) {
    pOptions = /**@type {ChartPointerOptions}*/ ($Casts.$to(options.m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, ChartPointer.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer), ChartPointerOptions));
   } else {
    pOptions = ChartPointerOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions(ChartPointerDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions);
   }
   this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_ChartPointer_.put(chart.m_getId__(), pOptions);
   pOptions.m_setCurrentCursor__org_pepstock_charba_client_dom_enums_CursorType_$pp_org_pepstock_charba_client_impl_plugins(chart.m_getInitialCursor__());
  }
  return true;
 }
 /** @override */
 m_onAfterEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** IsChart */ chart, /** PluginEventArgument */ argument) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_ChartPointer_.containsKey(chart.m_getId__())) {
   let event = argument.m_getEventContext__().m_getNativeEvent__();
   let pOptions = /**@type {ChartPointerOptions}*/ ($Casts.$to(this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_ChartPointer_.get(chart.m_getId__()), ChartPointerOptions));
   let scope = pOptions.m_getElements__();
   if (this.m_hasDatasetSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(chart, event, scope)) {
    $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getChartElement__().style, pOptions.m_getCursorPointer__());
   } else if (this.m_hasTitleSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(chart, event, scope)) {
    $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getChartElement__().style, pOptions.m_getCursorPointer__());
   } else if (this.m_hasScaleSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(chart, event, scope)) {
    $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getChartElement__().style, pOptions.m_getCursorPointer__());
   } else if (this.m_hasLegendSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(chart, event, scope)) {
    $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getChartElement__().style, pOptions.m_getCursorPointer__());
   } else {
    $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getChartElement__().style, chart.m_getInitialCursor__());
   }
  }
 }
 /** @override */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_ChartPointer_.remove(chart.m_getId__());
  }
 }
 /** @return {boolean} */
 m_hasDatasetSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(/** IsChart */ chart, /** Object */ event, /** List<PointerElement> */ scope) {
  if (chart.m_getOptions__().m_hasDatasetSelectionHandlers__() && this.m_isElementInScope__java_util_List__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(scope, PointerElement.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement)) {
   return !$Equality.$same(chart.m_getElementAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(event), null);
  }
  return false;
 }
 /** @return {boolean} */
 m_hasTitleSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(/** IsChart */ chart, /** Object */ event, /** List<PointerElement> */ scope) {
  let isTitleEnabled = chart.m_getOptions__().m_getTitle__().m_isDisplay__();
  return isTitleEnabled && chart.m_getOptions__().m_hasTitleClickHandlers__() && this.m_isElementInScope__java_util_List__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(scope, PointerElement.f_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement) && chart.m_getNode__().m_getTitle__().m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event);
 }
 /** @return {boolean} */
 m_hasScaleSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(/** IsChart */ chart, /** Object */ event, /** List<PointerElement> */ scope) {
  return chart.m_getOptions__().m_hasAxisClickHandlers__() && this.m_isElementInScope__java_util_List__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(scope, PointerElement.f_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement) && !$Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_NONE__org_pepstock_charba_client_ScaleType, chart.m_getType__().m_scaleType__()) && chart.m_getNode__().m_getScales__().m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event);
 }
 /** @return {boolean} */
 m_hasLegendSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(/** IsChart */ chart, /** Object */ event, /** List<PointerElement> */ scope) {
  let isLegendEnabled = chart.m_getOptions__().m_getLegend__().m_isDisplay__() && chart.m_getOptions__().m_getPlugins__().m_isEnabled__org_pepstock_charba_client_enums_DefaultPluginId(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId);
  if (isLegendEnabled && this.m_isElementInScope__java_util_List__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(scope, PointerElement.f_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement) && chart.m_getNode__().m_getLegend__().m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event)) {
   let legendItems = chart.m_getNode__().m_getLegend__().m_getHitBoxes__();
   for (let $iterator = legendItems.m_iterator__(); $iterator.m_hasNext__(); ) {
    let legendItem = /**@type {LegendHitBoxItem}*/ ($Casts.$to($iterator.m_next__(), LegendHitBoxItem));
    {
     if (legendItem.m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event)) {
      return true;
     }
    }
   }
  }
  return false;
 }
 /** @return {boolean} */
 m_isElementInScope__java_util_List__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_client_impl_plugins_ChartPointer(/** List<PointerElement> */ scope, /** PointerElement */ element) {
  for (let $iterator = scope.m_iterator__(); $iterator.m_hasNext__(); ) {
   let scopeElement = /**@type {PointerElement}*/ ($Casts.$to($iterator.m_next__(), PointerElement));
   {
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(element, scopeElement)) {
     return true;
    }
   }
  }
  return false;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_ChartPointer() {
  this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_ChartPointer_ = /**@type {!HashMap<?string, ChartPointerOptions>}*/ (HashMap.$create__());
 }
 /** @return {ChartPointerOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer() {
  return (ChartPointer.$clinit(), ChartPointer.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer);
 }
 /** @return {ChartPointerDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer() {
  return (ChartPointer.$clinit(), ChartPointer.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer);
 }
 
 static $clinit() {
  ChartPointer.$clinit = () =>{};
  ChartPointer.$loadModules();
  AbstractPlugin.$clinit();
  ChartPointer.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer = ChartPointerOptionsFactory.$create__();
  ChartPointer.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointer_ = ChartPointer.$create__();
  ChartPointer.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer = ChartPointerDefaultsOptionsFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartPointer;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  ChartPointerDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions$impl');
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
  ChartPointerOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory$impl');
  ChartPointerDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory.ChartPointerDefaultsOptionsFactory$impl');
  PointerElement = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
  LegendHitBoxItem = goog.module.get('org.pepstock.charba.client.items.LegendHitBoxItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer = "charbacursorpointer";
/**@private {ChartPointerOptionsFactory}*/
ChartPointer.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer;
/**@type {ChartPointer}*/
ChartPointer.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointer_;
/**@private {ChartPointerDefaultsOptionsFactory}*/
ChartPointer.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer;
$Util.$setClassMetadata(ChartPointer, "org.pepstock.charba.client.impl.plugins.ChartPointer");

exports = ChartPointer;

//# sourceMappingURL=ChartPointer.js.map
