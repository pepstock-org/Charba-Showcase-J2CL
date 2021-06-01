goog.module('org.pepstock.charba.client.IsChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractChart = goog.forwardDeclare('org.pepstock.charba.client.AbstractChart$impl');
let ChartNode = goog.forwardDeclare('org.pepstock.charba.client.ChartNode$impl');
let ChartTimerTask = goog.forwardDeclare('org.pepstock.charba.client.ChartTimerTask$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let UpdateConfiguration = goog.forwardDeclare('org.pepstock.charba.client.UpdateConfiguration$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Data = goog.forwardDeclare('org.pepstock.charba.client.data.Data$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let ImageMimeType = goog.forwardDeclare('org.pepstock.charba.client.enums.ImageMimeType$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.events.Event$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let HandlerRegistration = goog.forwardDeclare('org.pepstock.charba.client.events.HandlerRegistration$impl');
let ActiveDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.ActiveDatasetElement$impl');
let DatasetItem = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItem$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.plugins.Plugins$impl');
let CTimer = goog.forwardDeclare('org.pepstock.charba.client.utils.CTimer$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 */
class IsChart {
 /** @return {boolean} */
 static m_isConsistent__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  IsChart.$clinit();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return !$Equality.$same(chart.m_getChartElement__(), null) && !$Equality.$same(chart.m_getOptions__(), null) && Type.m_isValid__org_pepstock_charba_client_Type(chart.m_getType__()) && !$Equality.$same(chart.m_getCanvas__(), null) && !$Equality.$same(chart.m_getNode__(), null) && !$Equality.$same(chart.m_getData__(), null) && !$Equality.$same(chart.m_getPlugins__(), null) && !$Equality.$same(chart.m_getDefaultChartOptions__(), null);
  }
  return false;
 }
 
 static m_checkIfConsistent__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  IsChart.$clinit();
  if (!IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Chart is not consistent"));
  }
 }
 /** @return {IsChart} */
 static m_checkAndGetIfConsistent__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  IsChart.$clinit();
  IsChart.m_checkIfConsistent__org_pepstock_charba_client_IsChart(chart);
  return chart;
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  IsChart.$clinit();
  return !$Equality.$same(chart, null) && !$Equality.$same(chart.m_getId__(), null);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  IsChart.$clinit();
  if (!IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Chart is null or not consistent"));
  }
 }
 /** @return {IsChart} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  IsChart.$clinit();
  IsChart.m_checkIfValid__org_pepstock_charba_client_IsChart(chart);
  return chart;
 }
 /** @return {boolean} */
 static m_isAbstractChart__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  IsChart.$clinit();
  return AbstractChart.$isInstance(chart);
 }
 /** @abstract @return {HandlerRegistration} */
 m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(/** EventHandler */ handler, /** EventType */ type) {}
 /** @abstract */
 m_fireEvent__org_pepstock_charba_client_events_Event(/** Event */ event) {}
 /** @abstract @return {number} */
 m_getHandlerCount__org_pepstock_charba_client_events_EventType(/** EventType */ type) {}
 /** @abstract @return {boolean} */
 m_isEventHandled__org_pepstock_charba_client_events_EventType(/** EventType */ type) {}
 /** @abstract @return {HTMLDivElement} */
 m_getChartElement__() {}
 /** @abstract @return {boolean} */
 m_isChartAttached__() {}
 /** @abstract @return {ConfigurationOptions} */
 m_getOptions__() {}
 /** @abstract @return {Type} */
 m_getType__() {}
 /** @abstract @return {Type} */
 m_getBaseType__() {}
 /** @abstract @return {?string} */
 m_getId__() {}
 /** @abstract @return {HTMLCanvasElement} */
 m_getCanvas__() {}
 /** @abstract */
 m_removeCanvasPreventDefault__() {}
 /** @abstract @return {CursorType} */
 m_getInitialCursor__() {}
 /** @abstract @return {boolean} */
 m_isInitialized__() {}
 /** @abstract @return {ChartNode} */
 m_getNode__() {}
 /** @abstract @return {Data} */
 m_getData__() {}
 /** @abstract @return {Plugins} */
 m_getPlugins__() {}
 /** @abstract @return {IsDefaultScaledOptions} */
 m_getDefaultChartOptions__() {}
 /** @abstract @return {IsDefaultScaledOptions} */
 m_getWholeOptions__() {}
 /** @abstract @return {CTimer} */
 m_getTimer__() {}
 /** @abstract */
 m_createAndSetTimer__org_pepstock_charba_client_ChartTimerTask__int(/** ChartTimerTask */ task, /** number */ interval) {}
 /** @abstract @return {boolean} */
 m_isDrawOnAttach__() {}
 /** @abstract */
 m_setDrawOnAttach__boolean(/** boolean */ drawOnAttach) {}
 /** @abstract @return {boolean} */
 m_isDestroyOnDetach__() {}
 /** @abstract */
 m_setDestroyOnDetach__boolean(/** boolean */ destroyOnDetach) {}
 /** @abstract */
 m_setActiveElements__java_util_List(/** List<ActiveDatasetElement> */ elements) {}
 /** @abstract */
 m_setActiveElements__arrayOf_org_pepstock_charba_client_items_ActiveDatasetElement(/** Array<ActiveDatasetElement> */ elements) {}
 /** @abstract */
 m_resetActiveElements__() {}
 /** @abstract @return {List<ActiveDatasetElement>} */
 m_getActiveElements__() {}
 /** @abstract */
 m_setTooltipActiveElements__java_util_List(/** List<ActiveDatasetElement> */ elements) {}
 /** @abstract */
 m_resetTooltipActiveElements__() {}
 /** @abstract */
 m_setTooltipActiveElements__arrayOf_org_pepstock_charba_client_items_ActiveDatasetElement(/** Array<ActiveDatasetElement> */ elements) {}
 /** @abstract @return {List<ActiveDatasetElement>} */
 m_getTooltipActiveElements__() {}
 /** @abstract */
 m_destroy__() {}
 /** @abstract */
 m_stop__() {}
 /** @abstract */
 m_clear__() {}
 /** @abstract */
 m_reset__() {}
 /** @abstract @return {?string} */
 m_toBase64Image__() {}
 /** @abstract @return {?string} */
 m_toBase64Image__double(/** number */ encoderOptions) {}
 /** @abstract @return {?string} */
 m_toBase64Image__org_pepstock_charba_client_enums_ImageMimeType(/** ImageMimeType */ type) {}
 /** @abstract @return {?string} */
 m_toBase64Image__org_pepstock_charba_client_enums_ImageMimeType__double(/** ImageMimeType */ type, /** number */ encoderOptions) {}
 /** @abstract */
 m_resize__() {}
 /** @abstract */
 m_resize__int__int(/** number */ width, /** number */ height) {}
 /** @abstract */
 m_update__() {}
 /** @abstract */
 m_update__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ mode) {}
 /** @abstract */
 m_update__org_pepstock_charba_client_UpdateConfiguration(/** UpdateConfiguration */ config) {}
 /** @abstract */
 m_reconfigure__() {}
 /** @abstract */
 m_reconfigure__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ mode) {}
 /** @abstract */
 m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(/** UpdateConfiguration */ config) {}
 /** @abstract */
 m_render__() {}
 /** @abstract @return {DatasetItem} */
 m_getDatasetItem__int(/** number */ index) {}
 /** @abstract @return {List<DatasetReference>} */
 m_getDatasetAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {}
 /** @abstract @return {boolean} */
 m_isDatasetVisible__int(/** number */ index) {}
 /** @abstract @return {number} */
 m_getVisibleDatasetCount__() {}
 /** @abstract */
 m_setDatasetVisibility__int__boolean(/** number */ datasetIndex, /** boolean */ visibility) {}
 /** @abstract */
 m_toggleDataVisibility__int(/** number */ index) {}
 /** @abstract @return {boolean} */
 m_isDataVisible__int(/** number */ index) {}
 /** @abstract */
 m_hide__int(/** number */ datasetIndex) {}
 /** @abstract */
 m_show__int(/** number */ datasetIndex) {}
 /** @abstract @return {DatasetReference} */
 m_getElementAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {}
 /** @abstract @return {List<DatasetReference>} */
 m_getElementsAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {}
 /** @abstract */
 m_draw__() {}
 /** @return {?string} */
 static m_toBase64Image__$default__org_pepstock_charba_client_IsChart(/** !IsChart */ $thisArg) {
  IsChart.$clinit();
  return $thisArg.m_toBase64Image__org_pepstock_charba_client_enums_ImageMimeType(ImageMimeType.f_PNG__org_pepstock_charba_client_enums_ImageMimeType);
 }
 /** @return {?string} */
 static m_toBase64Image__$default__org_pepstock_charba_client_IsChart__double(/** !IsChart */ $thisArg, /** number */ encoderOptions) {
  IsChart.$clinit();
  return $thisArg.m_toBase64Image__org_pepstock_charba_client_enums_ImageMimeType__double(ImageMimeType.f_PNG__org_pepstock_charba_client_enums_ImageMimeType, encoderOptions);
 }
 /** @return {?string} */
 static m_toBase64Image__$default__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_ImageMimeType(/** !IsChart */ $thisArg, /** ImageMimeType */ type) {
  IsChart.$clinit();
  return $thisArg.m_toBase64Image__org_pepstock_charba_client_enums_ImageMimeType__double(type, Canvas_$Overlay.f_DEFAULT_ENCODER_OPTIONS__org_pepstock_charba_client_dom_elements_Canvas_$Overlay);
 }
 
 static $clinit() {
  IsChart.$clinit = () =>{};
  IsChart.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_IsChart = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_IsChart;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractChart = goog.module.get('org.pepstock.charba.client.AbstractChart$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  ImageMimeType = goog.module.get('org.pepstock.charba.client.enums.ImageMimeType$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
IsChart.$markImplementor(/**@type {Function}*/ (IsChart));
$Util.$setClassMetadataForInterface(IsChart, "org.pepstock.charba.client.IsChart");

exports = IsChart;

//# sourceMappingURL=IsChart.js.map
