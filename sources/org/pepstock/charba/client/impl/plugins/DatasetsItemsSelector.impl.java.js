goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let BarOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.BarOptions$impl');
let LineOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.LineOptions$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let org_pepstock_charba_client_enums_Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let DatasetRangeCleanSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
let HandlerRegistration = goog.forwardDeclare('org.pepstock.charba.client.events.HandlerRegistration$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let AtLeastOneDatasetHandler = goog.forwardDeclare('org.pepstock.charba.client.impl.callbacks.AtLeastOneDatasetHandler$impl');
let DatasetsItemsSelectorDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let DatasetsItemsSelectorOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory$impl');
let DatasetsItemsSelectorDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory.DatasetsItemsSelectorDefaultsOptionsFactory$impl');
let SelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
let SelectionHandler = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionHandler$impl');
let SelectionStatus = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionStatus$impl');
let PluginEventArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginEventArgument$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class DatasetsItemsSelector extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, SelectionHandler>}*/
  this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_;
  /**@type {Map<?string, HandlerRegistration>}*/
  this.f_pluginEventsRegistrationHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_;
  /**@type {AtLeastOneDatasetHandler}*/
  this.f_pluginLegendClickHandler__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_;
  /**@type {Map<?string, ?boolean>}*/
  this.f_pluginChartEnablement__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_;
 }
 /** @return {!DatasetsItemsSelector} */
 static $create__() {
  let $instance = new DatasetsItemsSelector();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector);
  this.$init___$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector();
 }
 /** @return {DatasetsItemsSelector} */
 static m_get__() {
  DatasetsItemsSelector.$clinit();
  return DatasetsItemsSelector.f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_;
 }
 /** @return {number} */
 m_getPadding__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
   let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
   let pOptions = handler.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
   let selectionCleaner = pOptions.m_getSelectionCleaner__();
   if (selectionCleaner.m_isDisplay__()) {
    return selectionCleaner.m_getLayoutPadding___$pp_org_pepstock_charba_client_impl_plugins();
   }
  }
  return SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 
 m_cleanSelection__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let fireEvent = false;
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   fireEvent = chart.m_isEventHandled__org_pepstock_charba_client_events_EventType(DatasetRangeCleanSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent);
  }
  this.m_cleanSelection__org_pepstock_charba_client_IsChart__boolean(chart, fireEvent);
 }
 
 m_cleanSelection__org_pepstock_charba_client_IsChart__boolean(/** IsChart */ chart, /** boolean */ fireEvent) {
  if (!IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return;
  }
  let mustBeUpdated = false;
  if (this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
   let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
   handler.m_removeSelectionCleaner___$pp_org_pepstock_charba_client_impl_plugins();
   mustBeUpdated = !$Objects.m_equals__java_lang_Object__java_lang_Object(SelectionStatus.f_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus, handler.m_getStatus___$pp_org_pepstock_charba_client_impl_plugins());
  }
  this.m_onDestroy__org_pepstock_charba_client_IsChart(chart);
  this.m_onConfigure__org_pepstock_charba_client_IsChart(chart);
  if (fireEvent) {
   chart.m_fireEvent__org_pepstock_charba_client_events_Event(DatasetRangeCleanSelectionEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent(DOMBuilder.m_get__().m_createChangeEvent__()));
  }
  if (mustBeUpdated) {
   chart.m_update__();
  }
 }
 
 m_skipNextRefreshFireEvent__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart) && this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
   let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
   handler.m_setSkipNextFireEvent__boolean_$pp_org_pepstock_charba_client_impl_plugins(true);
  }
 }
 /** @override */
 m_onConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.m_storePluginEnablement__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart);
  if (this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart)) {
   chart.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
   chart.m_getOptions__().m_getLayout__().m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(null);
   chart.m_getOptions__().m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/**@type {!Array<org_pepstock_charba_client_enums_Event>}*/ ($Arrays.$init([org_pepstock_charba_client_enums_Event.f_CLICK__org_pepstock_charba_client_enums_Event, org_pepstock_charba_client_enums_Event.f_TOUCHSTART__org_pepstock_charba_client_enums_Event], org_pepstock_charba_client_enums_Event)));
   if (!this.f_pluginEventsRegistrationHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__()) && chart.m_getOptions__().m_getLegend__().m_isDisplay__()) {
    let registratrion = chart.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(this.f_pluginLegendClickHandler__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_, LegendClickEvent.f_TYPE__org_pepstock_charba_client_events_LegendClickEvent);
    this.f_pluginEventsRegistrationHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.put(chart.m_getId__(), registratrion);
   }
   if (this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
    let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
    handler.m_destroy___$pp_org_pepstock_charba_client_impl_plugins();
    this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.remove(chart.m_getId__());
   }
   let pOptions = this.m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart);
   let handler_1 = SelectionHandler.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions(chart, pOptions);
   chart.m_removeCanvasPreventDefault__();
   handler_1.m_addListeners___$pp_org_pepstock_charba_client_impl_plugins();
   this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.put(chart.m_getId__(), handler_1);
  }
 }
 /** @override */
 m_onBeginDrawing__org_pepstock_charba_client_IsChart__boolean(/** IsChart */ chart, /** boolean */ overridePreviousUpdate) {
  if (this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart)) {
   Checker.m_assertCheck__boolean__java_lang_String(!chart.m_getOptions__().m_hasDatasetSelectionHandlers__(), "Unable to activate plugin because a dataset selection handler has been defined");
   if (this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
    $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getCanvas__().style, CursorType.f_WAIT__org_pepstock_charba_client_dom_enums_CursorType);
   }
  }
 }
 /** @override */
 m_onEndDrawing__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart) && this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
   let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
   handler.m_calculateSelectionCleanerPositions___$pp_org_pepstock_charba_client_impl_plugins();
   this.m_manageSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_SelectionHandler_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart, handler);
  }
 }
 /** @override */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart)) {
   this.m_resetPluginConfiguration__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart);
  }
 }
 /** @override @return {boolean} */
 m_onBeforeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** IsChart */ chart, /** PluginEventArgument */ argument) {
  if (this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart) && this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
   let event = argument.m_getEventContext__().m_getNativeEvent__();
   let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
   if (!this.m_manageClickEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart, event, handler)) {
    return false;
   }
   if (handler.m_isPreventClickEvent___$pp_org_pepstock_charba_client_impl_plugins()) {
    handler.m_resetPreventClickEvent___$pp_org_pepstock_charba_client_impl_plugins();
    return false;
   }
  }
  return true;
 }
 /** @return {DatasetsItemsSelectorOptions} */
 m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart) {
  let pOptions = null;
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   let options = chart.m_getWholeOptions__();
   if (options.m_getPlugins__().m_hasOptions__java_lang_String(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector)) {
    pOptions = /**@type {DatasetsItemsSelectorOptions}*/ ($Casts.$to(options.m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector, DatasetsItemsSelector.$static_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector), DatasetsItemsSelectorOptions));
   } else {
    pOptions = DatasetsItemsSelectorOptions.$create__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(DatasetsItemsSelectorDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions);
   }
  } else {
   pOptions = DatasetsItemsSelectorOptions.$create__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(DatasetsItemsSelectorDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions);
   pOptions.m_setEnabled__boolean(false);
  }
  return pOptions;
 }
 
 m_storePluginEnablement__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart) {
  let pOptions = this.m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart);
  let isEnabled = /**@type {?boolean}*/ ($Casts.$to(this.f_pluginChartEnablement__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), Boolean));
  if (Boolean.m_equals__java_lang_Boolean__java_lang_Object(Boolean.f_TRUE__java_lang_Boolean, isEnabled) && !pOptions.m_isEnabled__()) {
   if (this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
    let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
    handler.m_removeSelectionCleaner___$pp_org_pepstock_charba_client_impl_plugins();
   }
   this.m_resetPluginConfiguration__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart);
  }
  this.f_pluginChartEnablement__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.put(chart.m_getId__(), pOptions.m_isEnabled__());
 }
 
 m_resetPluginConfiguration__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart) {
  if (this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
   let handler = /**@type {SelectionHandler}*/ ($Casts.$to(this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), SelectionHandler));
   handler.m_destroy___$pp_org_pepstock_charba_client_impl_plugins();
   this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.remove(chart.m_getId__());
  }
  if (this.f_pluginEventsRegistrationHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__())) {
   let registration = /**@type {HandlerRegistration}*/ ($Casts.$to(this.f_pluginEventsRegistrationHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.remove(chart.m_getId__()), HandlerRegistration));
   registration.m_removeHandler__();
  }
 }
 /** @return {boolean} */
 m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart) {
  let mustBeActivated = IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && $Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_MULTI__org_pepstock_charba_client_ScaleType, chart.m_getBaseType__().m_scaleType__());
  if (mustBeActivated) {
   mustBeActivated = !chart.m_getOptions__().m_getPlugins__().m_isEnabled__java_lang_String(DatasetsItemsSelector.f_ZOOM_PLUIGIN_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_);
   if (mustBeActivated) {
    mustBeActivated = this.m_checkIndexAxis__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart);
   }
  }
  if (mustBeActivated) {
   mustBeActivated = this.f_pluginChartEnablement__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.containsKey(chart.m_getId__()) && Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_pluginChartEnablement__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_.get(chart.m_getId__()), Boolean)));
  }
  return mustBeActivated;
 }
 /** @return {boolean} */
 m_checkIndexAxis__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ChartType.f_BAR__org_pepstock_charba_client_ChartType, chart.m_getBaseType__()) && BarOptions.$isInstance(chart.m_getOptions__())) {
   let barOptions = /**@type {BarOptions}*/ ($Casts.$to(chart.m_getOptions__(), BarOptions));
   return $Objects.m_equals__java_lang_Object__java_lang_Object(IndexAxis.f_X__org_pepstock_charba_client_enums_IndexAxis, barOptions.m_getIndexAxis__());
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ChartType.f_LINE__org_pepstock_charba_client_ChartType, chart.m_getBaseType__()) && LineOptions.$isInstance(chart.m_getOptions__())) {
   let lineOptions = /**@type {LineOptions}*/ ($Casts.$to(chart.m_getOptions__(), LineOptions));
   return $Objects.m_equals__java_lang_Object__java_lang_Object(IndexAxis.f_X__org_pepstock_charba_client_enums_IndexAxis, lineOptions.m_getIndexAxis__());
  }
  return this.m_checkDatasets__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(chart);
 }
 /** @return {boolean} */
 m_checkDatasets__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart) {
  for (let $iterator = chart.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    if (BarDataset.$isInstance(dataset)) {
     let barDataset = /**@type {BarDataset}*/ ($Casts.$to(dataset, BarDataset));
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis, barDataset.m_getIndexAxis__())) {
      return false;
     }
    } else if (LineDataset.$isInstance(dataset)) {
     let lineDataset = /**@type {LineDataset}*/ ($Casts.$to(dataset, LineDataset));
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis, lineDataset.m_getIndexAxis__())) {
      return false;
     }
    }
   }
  }
  return true;
 }
 /** @return {boolean} */
 m_manageClickEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart, /** Object */ event, /** SelectionHandler */ handler) {
  if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(org_pepstock_charba_client_enums_Event.f_CLICK__org_pepstock_charba_client_enums_Event.m_value__(), event.type)) {
   let pOptions = handler.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
   let selectionCleaner = pOptions.m_getSelectionCleaner__();
   if (selectionCleaner.m_isDisplay__()) {
    let isX = event.layerX >= selectionCleaner.m_getX___$pp_org_pepstock_charba_client_impl_plugins() && event.layerX <= selectionCleaner.m_getX___$pp_org_pepstock_charba_client_impl_plugins() + selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins();
    let isY = event.layerY >= selectionCleaner.m_getY___$pp_org_pepstock_charba_client_impl_plugins() && event.layerY <= selectionCleaner.m_getY___$pp_org_pepstock_charba_client_impl_plugins() + selectionCleaner.m_getHeight___$pp_org_pepstock_charba_client_impl_plugins();
    if (isX && isY) {
     this.m_cleanSelection__org_pepstock_charba_client_IsChart(chart);
     return false;
    }
   }
  }
  return true;
 }
 
 m_manageSelection__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_SelectionHandler_$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector(/** IsChart */ chart, /** SelectionHandler */ handler) {
  let dataUrl = Canvas_$Overlay.m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  if (handler.m_isChartChanged__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(dataUrl)) {
   handler.m_setSnapshot__org_pepstock_charba_client_dom_elements_Img_$pp_org_pepstock_charba_client_impl_plugins(Utilities.m_toImageElement__java_lang_String__int__int(dataUrl, chart.m_getCanvas__().offsetWidth, chart.m_getCanvas__().offsetHeight));
  }
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(handler.m_getStatus___$pp_org_pepstock_charba_client_impl_plugins(), SelectionStatus.f_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus)) {
   handler.m_refresh___$pp_org_pepstock_charba_client_impl_plugins();
  }
  $Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(chart.m_getCanvas__().style, CursorType.f_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector() {
  this.f_pluginSelectionHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_ = /**@type {!HashMap<?string, SelectionHandler>}*/ (HashMap.$create__());
  this.f_pluginEventsRegistrationHandlers__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_ = /**@type {!HashMap<?string, HandlerRegistration>}*/ (HashMap.$create__());
  this.f_pluginLegendClickHandler__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_ = AtLeastOneDatasetHandler.$create__();
  this.f_pluginChartEnablement__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_ = /**@type {!HashMap<?string, ?boolean>}*/ (HashMap.$create__());
 }
 /** @return {DatasetsItemsSelectorOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector() {
  return (DatasetsItemsSelector.$clinit(), DatasetsItemsSelector.$static_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector);
 }
 /** @return {DatasetsItemsSelectorDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector() {
  return (DatasetsItemsSelector.$clinit(), DatasetsItemsSelector.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector);
 }
 
 static $clinit() {
  DatasetsItemsSelector.$clinit = () =>{};
  DatasetsItemsSelector.$loadModules();
  AbstractPlugin.$clinit();
  DatasetsItemsSelector.$static_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector = DatasetsItemsSelectorOptionsFactory.$create__();
  DatasetsItemsSelector.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector = DatasetsItemsSelectorDefaultsOptionsFactory.$create__();
  DatasetsItemsSelector.f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_ = DatasetsItemsSelector.$create__();
  DatasetsItemsSelector.f_ZOOM_PLUIGIN_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_ = ResourceName.f_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName.m_value__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsItemsSelector;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  BarOptions = goog.module.get('org.pepstock.charba.client.configuration.BarOptions$impl');
  LineOptions = goog.module.get('org.pepstock.charba.client.configuration.LineOptions$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
  org_pepstock_charba_client_enums_Event = goog.module.get('org.pepstock.charba.client.enums.Event$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
  DatasetRangeCleanSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
  HandlerRegistration = goog.module.get('org.pepstock.charba.client.events.HandlerRegistration$impl');
  LegendClickEvent = goog.module.get('org.pepstock.charba.client.events.LegendClickEvent$impl');
  AtLeastOneDatasetHandler = goog.module.get('org.pepstock.charba.client.impl.callbacks.AtLeastOneDatasetHandler$impl');
  DatasetsItemsSelectorDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  DatasetsItemsSelectorOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory$impl');
  DatasetsItemsSelectorDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory.DatasetsItemsSelectorDefaultsOptionsFactory$impl');
  SelectionCleaner = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
  SelectionHandler = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionHandler$impl');
  SelectionStatus = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionStatus$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector = "charbadatasetsitemsselector";
/**@private {DatasetsItemsSelectorOptionsFactory}*/
DatasetsItemsSelector.$static_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector;
/**@private {DatasetsItemsSelectorDefaultsOptionsFactory}*/
DatasetsItemsSelector.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector;
/**@type {DatasetsItemsSelector}*/
DatasetsItemsSelector.f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_;
/**@type {?string}*/
DatasetsItemsSelector.f_ZOOM_PLUIGIN_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector_;
$Util.$setClassMetadata(DatasetsItemsSelector, "org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector");

exports = DatasetsItemsSelector;

//# sourceMappingURL=DatasetsItemsSelector.js.map
