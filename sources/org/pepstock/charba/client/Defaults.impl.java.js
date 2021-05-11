goog.module('org.pepstock.charba.client.Defaults$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Chart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let ChartOptions = goog.forwardDeclare('org.pepstock.charba.client.ChartOptions$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let InternalDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.Defaults.InternalDefaultScale$impl');
let InternalDefaultScales = goog.forwardDeclare('org.pepstock.charba.client.Defaults.InternalDefaultScales$impl');
let NativeChartHandler = goog.forwardDeclare('org.pepstock.charba.client.Defaults.NativeChartHandler$impl');
let WrapperDefaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults.WrapperDefaults$impl');
let GlobalOptions = goog.forwardDeclare('org.pepstock.charba.client.GlobalOptions$impl');
let GlobalScale = goog.forwardDeclare('org.pepstock.charba.client.GlobalScale$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let JsChartHelper = goog.forwardDeclare('org.pepstock.charba.client.JsChartHelper$impl');
let Overrides = goog.forwardDeclare('org.pepstock.charba.client.Overrides$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Merger = goog.forwardDeclare('org.pepstock.charba.client.commons.Merger$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let Controllers = goog.forwardDeclare('org.pepstock.charba.client.controllers.Controllers$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let ChartClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartClickEvent$impl');
let ChartHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEvent$impl');
let IsChartEvent = goog.forwardDeclare('org.pepstock.charba.client.events.IsChartEvent$impl');
let IsLegendEvent = goog.forwardDeclare('org.pepstock.charba.client.events.IsLegendEvent$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let LegendHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEvent$impl');
let LegendLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
let DatasetElementOptions = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElementOptions$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let TooltipLabelPointStyle = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let GlobalPlugins = goog.forwardDeclare('org.pepstock.charba.client.plugins.GlobalPlugins$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Defaults extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {WrapperDefaults}*/
  this.f_wrapperDefaults__org_pepstock_charba_client_Defaults_;
  /**@type {GlobalOptions}*/
  this.f_options__org_pepstock_charba_client_Defaults_;
  /**@type {GlobalScale}*/
  this.f_scale__org_pepstock_charba_client_Defaults_;
  /**@type {InternalDefaultScales}*/
  this.f_scales__org_pepstock_charba_client_Defaults_;
  /**@type {GlobalPlugins}*/
  this.f_plugins__org_pepstock_charba_client_Defaults_;
  /**@type {Map<?string, ChartOptions>}*/
  this.f_chartOptions__org_pepstock_charba_client_Defaults_;
  /**@type {Map<?string, InternalDefaultScale>}*/
  this.f_scaleOptions__org_pepstock_charba_client_Defaults_;
  /**@type {Controllers}*/
  this.f_controllers__org_pepstock_charba_client_Defaults_;
  /**@type {Overrides}*/
  this.f_overrides__org_pepstock_charba_client_Defaults_;
 }
 /** @return {!Defaults} */
 static $create__() {
  let $instance = new Defaults();
  $instance.$ctor__org_pepstock_charba_client_Defaults__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Defaults__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_Defaults();
  ResourcesType.m_getResources__().m_inject__();
  let defaults = Chart.defaults;
  this.f_wrapperDefaults__org_pepstock_charba_client_Defaults_ = WrapperDefaults.$create__org_pepstock_charba_client_commons_NativeObject(defaults);
  this.f_options__org_pepstock_charba_client_Defaults_ = GlobalOptions.$create__org_pepstock_charba_client_commons_NativeObject(defaults);
  this.f_scale__org_pepstock_charba_client_Defaults_ = GlobalScale.$create__org_pepstock_charba_client_commons_NativeObject(this.f_wrapperDefaults__org_pepstock_charba_client_Defaults_.m_getScale___$pp_org_pepstock_charba_client());
  this.f_scales__org_pepstock_charba_client_Defaults_ = InternalDefaultScales.$create__org_pepstock_charba_client_commons_NativeObject(this.f_wrapperDefaults__org_pepstock_charba_client_Defaults_.m_getScales___$pp_org_pepstock_charba_client());
  this.f_plugins__org_pepstock_charba_client_Defaults_ = GlobalPlugins.$create__();
  this.f_controllers__org_pepstock_charba_client_Defaults_ = Controllers.m_get__();
  this.f_plugins__org_pepstock_charba_client_Defaults_.m_register__org_pepstock_charba_client_Plugin(NativeChartHandler.$create__());
  this.f_overrides__org_pepstock_charba_client_Defaults_ = Overrides.$create__org_pepstock_charba_client_commons_NativeObject(Chart.overrides);
 }
 /** @return {Defaults} */
 static m_get__() {
  Defaults.$clinit();
  return Defaults.f_INSTANCE__org_pepstock_charba_client_Defaults_;
 }
 /** @return {GlobalOptions} */
 m_getGlobal__() {
  return this.f_options__org_pepstock_charba_client_Defaults_;
 }
 /** @return {GlobalScale} */
 m_getScale__() {
  return this.f_scale__org_pepstock_charba_client_Defaults_;
 }
 /** @return {Scale} */
 m_getScale__org_pepstock_charba_client_enums_AxisType(/** AxisType */ axisType) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(axisType);
  if (!this.f_scaleOptions__org_pepstock_charba_client_Defaults_.containsKey(axisType.m_value__())) {
   let storedScale = InternalDefaultScale.$create__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_GlobalScale__org_pepstock_charba_client_commons_NativeObject(axisType, this.m_getScale__(), this.f_scales__org_pepstock_charba_client_Defaults_.m_getScale__org_pepstock_charba_client_enums_AxisType_$pp_org_pepstock_charba_client(axisType));
   this.f_scaleOptions__org_pepstock_charba_client_Defaults_.put(axisType.m_value__(), storedScale);
  }
  return /**@type {InternalDefaultScale}*/ ($Casts.$to(this.f_scaleOptions__org_pepstock_charba_client_Defaults_.get(axisType.m_value__()), InternalDefaultScale));
 }
 /** @return {GlobalPlugins} */
 m_getPlugins__() {
  return this.f_plugins__org_pepstock_charba_client_Defaults_;
 }
 /** @return {Controllers} */
 m_getControllers__() {
  return this.f_controllers__org_pepstock_charba_client_Defaults_;
 }
 /** @return {ChartOptions} */
 m_getChartOptions__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(/** Type */ type) {
  let envelop = /**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__());
  Merger.m_get__().m_load__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartEnvelop(type, envelop);
  return ChartOptions.$create__org_pepstock_charba_client_Type__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(type, /**@type {?}*/ (envelop.m_getContent__()), DefaultsBuilder.m_get__().m_getScaledOptions__());
 }
 /** @return {ChartOptions} */
 m_getOptions__org_pepstock_charba_client_Type(/** Type */ type) {
  Type.m_checkIfValid__org_pepstock_charba_client_Type(type);
  if (!this.f_chartOptions__org_pepstock_charba_client_Defaults_.containsKey(type.m_value__())) {
   if (ControllerType.$isInstance(type)) {
    let controllerType = /**@type {ControllerType}*/ ($Casts.$to(type, ControllerType));
    controllerType.m_register__();
   }
   this.f_chartOptions__org_pepstock_charba_client_Defaults_.put(type.m_value__(), this.f_overrides__org_pepstock_charba_client_Defaults_.m_chart__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(type));
  }
  return /**@type {ChartOptions}*/ ($Casts.$to(this.f_chartOptions__org_pepstock_charba_client_Defaults_.get(type.m_value__()), ChartOptions));
 }
 /** @return {List<LegendLabelItem>} */
 m_generateLabels__org_pepstock_charba_client_Chart(/** Chart */ chart) {
  if (!$Equality.$same(chart, null) && IsChart.m_isValid__org_pepstock_charba_client_IsChart(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart))) {
   return JsChartHelper.m_get__().m_generateDefaultLabels__org_pepstock_charba_client_Chart__org_pepstock_charba_client_ChartOptions_$pp_org_pepstock_charba_client(chart, this.m_getChartOptions__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart).m_getType__()));
  }
  return /**@type {List<LegendLabelItem>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {!ArrayList<LegendLabelItem>}*/ (ArrayList.$create__())));
 }
 /** @return {List<LegendLabelItem>} */
 m_generateLabels__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && Charts.m_hasNative__org_pepstock_charba_client_IsChart(chart)) {
   return JsChartHelper.m_get__().m_generateDefaultLabels__org_pepstock_charba_client_Chart__org_pepstock_charba_client_ChartOptions_$pp_org_pepstock_charba_client(Charts.m_getNative__org_pepstock_charba_client_IsChart(chart), this.m_getChartOptions__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(chart.m_getType__()));
  }
  return /**@type {List<LegendLabelItem>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {!ArrayList<LegendLabelItem>}*/ (ArrayList.$create__())));
 }
 
 m_invokeChartOnClick__org_pepstock_charba_client_events_ChartClickEvent(/** ChartClickEvent */ event) {
  this.m_invokeChartEvent__org_pepstock_charba_client_events_IsChartEvent_$p_org_pepstock_charba_client_Defaults(event);
 }
 
 m_invokeChartOnHover__org_pepstock_charba_client_events_ChartHoverEvent(/** ChartHoverEvent */ event) {
  this.m_invokeChartEvent__org_pepstock_charba_client_events_IsChartEvent_$p_org_pepstock_charba_client_Defaults(event);
 }
 
 m_invokeChartEvent__org_pepstock_charba_client_events_IsChartEvent_$p_org_pepstock_charba_client_Defaults(/** IsChartEvent */ event) {
  if (!$Equality.$same(event, null)) {
   let chart = event.m_getChart__();
   if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && chart.m_isInitialized__()) {
    let eventContext = event.m_getContext__();
    let array = ArrayObject_$Overlay.m_fromOrNull__java_util_List(event.m_getItems__());
    JsChartHelper.m_get__().m_invokeDefaultChartEvent__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_ArrayObject_$pp_org_pepstock_charba_client(this.m_getChartOptions__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(chart.m_getType__()), event.m_getKey__(), eventContext.m_getNativeChart__(), eventContext.m_getObject__(), array);
   }
  }
 }
 
 m_invokeLegendOnClick__org_pepstock_charba_client_events_LegendClickEvent(/** LegendClickEvent */ event) {
  this.m_invokeLegendEvent__org_pepstock_charba_client_events_IsLegendEvent_$p_org_pepstock_charba_client_Defaults(event);
 }
 
 m_invokeLegendOnHover__org_pepstock_charba_client_events_LegendHoverEvent(/** LegendHoverEvent */ event) {
  this.m_invokeLegendEvent__org_pepstock_charba_client_events_IsLegendEvent_$p_org_pepstock_charba_client_Defaults(event);
 }
 
 m_invokeLegendOnLeave__org_pepstock_charba_client_events_LegendLeaveEvent(/** LegendLeaveEvent */ event) {
  this.m_invokeLegendEvent__org_pepstock_charba_client_events_IsLegendEvent_$p_org_pepstock_charba_client_Defaults(event);
 }
 
 m_invokeLegendEvent__org_pepstock_charba_client_events_IsLegendEvent_$p_org_pepstock_charba_client_Defaults(/** IsLegendEvent */ event) {
  if (!$Equality.$same(event, null)) {
   let chart = IsChart.m_isValid__org_pepstock_charba_client_IsChart(event.m_getChart__()) ? event.m_getChart__() : event.m_getContext__().m_getChart__();
   if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && chart.m_isInitialized__()) {
    let eventContext = event.m_getContext__();
    let envelop = /**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__boolean(true));
    JsChartHelper.m_get__().m_invokeDefaultLegendEvent__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client(this.m_getChartOptions__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(chart.m_getType__()), event.m_getKey__(), eventContext.m_getNativeChart__(), eventContext.m_getObject__(), /**@type {?}*/ (event.m_getItem__().m_loadNativeObject__org_pepstock_charba_client_ChartEnvelop(envelop).m_getContent__()));
   }
  }
 }
 /** @return {List<?string>} */
 m_invokeTooltipsCallbackOnTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && !items.isEmpty()) {
   let item = /**@type {TooltipItem}*/ ($Casts.$to(items.getAtIndex(0), TooltipItem));
   if (!$Equality.$same(item.m_getLabel__(), null)) {
    return /**@type {List<?string>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init([item.m_getLabel__()], j_l_String))))));
   }
   let labels = chart.m_getData__().m_getLabels__();
   if (!labels.m_isEmpty__() && item.m_getDataIndex__() < labels.m_size__()) {
    return labels.m_getStrings__int(item.m_getDataIndex__());
   }
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {?string} */
 m_invokeTooltipsCallbackOnLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(item, null)) {
   let dataset = chart.m_getData__().m_retrieveDataset__org_pepstock_charba_client_items_TooltipItem(item);
   let label = StringBuilder.$create__java_lang_String($Equality.$same(dataset.m_getLabel__(), null) ? Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants : dataset.m_getLabel__());
   if (label.m_length__() > 0) {
    label.m_append__java_lang_String(Constants.f_COLON__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants);
    if (!$Equality.$same(item.m_getFormattedValue__(), null)) {
     label.m_append__java_lang_String(item.m_getFormattedValue__());
    }
   }
   return label.toString();
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {TooltipLabelColor} */
 m_invokeTooltipsCallbackOnLabelColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  let style = this.m_retrieveDatasetElementOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem_$p_org_pepstock_charba_client_Defaults(chart, item);
  if (!$Equality.$same(style, null)) {
   return style.m_createTooltipLabelColor__();
  }
  return null;
 }
 /** @return {TooltipLabelPointStyle} */
 m_invokeTooltipsCallbackOnLabelPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  let style = this.m_retrieveDatasetElementOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem_$p_org_pepstock_charba_client_Defaults(chart, item);
  if (!$Equality.$same(style, null)) {
   return style.m_createTooltipLabelPointStyle__();
  }
  return null;
 }
 /** @return {DatasetElementOptions} */
 m_retrieveDatasetElementOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem_$p_org_pepstock_charba_client_Defaults(/** IsChart */ chart, /** TooltipItem */ item) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(item, null) && Undefined.m_isNot__int(item.m_getDatasetIndex__())) {
   let datasetItem = chart.m_getDatasetItem__int(item.m_getDatasetIndex__());
   if (!$Equality.$same(datasetItem, null)) {
    return datasetItem.m_getController__().m_getStyle__int(item.m_getDataIndex__());
   }
  }
  return null;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_Defaults() {
  this.f_chartOptions__org_pepstock_charba_client_Defaults_ = /**@type {!HashMap<?string, ChartOptions>}*/ (HashMap.$create__());
  this.f_scaleOptions__org_pepstock_charba_client_Defaults_ = /**@type {!HashMap<?string, InternalDefaultScale>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  Defaults.$clinit = () =>{};
  Defaults.$loadModules();
  j_l_Object.$clinit();
  Defaults.f_INSTANCE__org_pepstock_charba_client_Defaults_ = Defaults.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Defaults;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Chart_$Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  ChartOptions = goog.module.get('org.pepstock.charba.client.ChartOptions$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  InternalDefaultScale = goog.module.get('org.pepstock.charba.client.Defaults.InternalDefaultScale$impl');
  InternalDefaultScales = goog.module.get('org.pepstock.charba.client.Defaults.InternalDefaultScales$impl');
  NativeChartHandler = goog.module.get('org.pepstock.charba.client.Defaults.NativeChartHandler$impl');
  WrapperDefaults = goog.module.get('org.pepstock.charba.client.Defaults.WrapperDefaults$impl');
  GlobalOptions = goog.module.get('org.pepstock.charba.client.GlobalOptions$impl');
  GlobalScale = goog.module.get('org.pepstock.charba.client.GlobalScale$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  JsChartHelper = goog.module.get('org.pepstock.charba.client.JsChartHelper$impl');
  Overrides = goog.module.get('org.pepstock.charba.client.Overrides$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Merger = goog.module.get('org.pepstock.charba.client.commons.Merger$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  Controllers = goog.module.get('org.pepstock.charba.client.controllers.Controllers$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  GlobalPlugins = goog.module.get('org.pepstock.charba.client.plugins.GlobalPlugins$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Defaults}*/
Defaults.f_INSTANCE__org_pepstock_charba_client_Defaults_;
/**@const {?string}*/
Defaults.f_ID__org_pepstock_charba_client_Defaults = "charbanativecharthandler";
$Util.$setClassMetadata(Defaults, "org.pepstock.charba.client.Defaults");

exports = Defaults;

//# sourceMappingURL=Defaults.js.map
