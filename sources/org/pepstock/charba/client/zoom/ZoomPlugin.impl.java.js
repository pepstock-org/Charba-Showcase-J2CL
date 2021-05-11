goog.module('org.pepstock.charba.client.zoom.ZoomPlugin$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractExtensionPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractExtensionPlugin$impl');

let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Injector = goog.forwardDeclare('org.pepstock.charba.client.Injector$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let Amount = goog.forwardDeclare('org.pepstock.charba.client.zoom.Amount$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultOptions$impl');
let Drag = goog.forwardDeclare('org.pepstock.charba.client.zoom.Drag$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultOptions$impl');
let JsZoomHelper = goog.forwardDeclare('org.pepstock.charba.client.zoom.JsZoomHelper$impl');
let ScaleRange = goog.forwardDeclare('org.pepstock.charba.client.zoom.ScaleRange$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptionsFactory$impl');
let ZoomDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptionsFactory.ZoomDefaultsOptionsFactory$impl');
let ZoomPluginHammerResource = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPluginHammerResource$impl');
let ZoomPluginResource = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPluginResource$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractExtensionPlugin<ZoomOptions>}
 */
class ZoomPlugin extends AbstractExtensionPlugin {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ZoomPlugin} */
 static $create__() {
  let $instance = new ZoomPlugin();
  $instance.$ctor__org_pepstock_charba_client_zoom_ZoomPlugin__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_ZoomPlugin__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractExtensionPlugin__();
 }
 /** @return {ZoomPlugin} */
 static m_get__() {
  ZoomPlugin.$clinit();
  return ZoomPlugin.f_INSTANCE__org_pepstock_charba_client_zoom_ZoomPlugin_;
 }
 
 m_mergeDefaults__org_pepstock_charba_client_zoom_ZoomOptions_$pp_org_pepstock_charba_client_zoom(/** ZoomOptions */ options) {
  super.m_applyingDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptions(options);
 }
 
 static m_enable__() {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_enable__boolean(false);
 }
 
 static m_enable__boolean(/** boolean */ enableToAllCharts) {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_enable__boolean__boolean(enableToAllCharts, true);
 }
 
 static m_enable__boolean__boolean(/** boolean */ enableToAllCharts, /** boolean */ enableHammerInjection) {
  ZoomPlugin.$clinit();
  ResourcesType.m_getResources__().m_inject__();
  if (enableHammerInjection) {
   Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(ZoomPlugin.f_RESOURCE_HAMMER__org_pepstock_charba_client_zoom_ZoomPlugin_);
  }
  Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(ZoomPlugin.f_RESOURCE__org_pepstock_charba_client_zoom_ZoomPlugin_);
  Defaults.m_get__().m_getPlugins__().m_setEnabledAllCharts__java_lang_String__boolean(ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin, enableToAllCharts);
  ZoomPlugin.m_get__().m_loadDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 
 static m_reset__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_reset__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(chart, null);
 }
 
 static m_reset__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(/** IsChart */ chart, /** IsTransitionKey */ transition) {
  ZoomPlugin.$clinit();
  if (ZoomPlugin.m_isReadyForApi__org_pepstock_charba_client_IsChart(chart)) {
   let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
   JsZoomHelper.m_get__().m_resetZoom__org_pepstock_charba_client_Chart__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(nativeChart, transition);
  }
 }
 
 static m_pan__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount(/** IsChart */ chart, /** Amount */ amount) {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_pan__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(chart, amount, null);
 }
 
 static m_pan__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(/** IsChart */ chart, /** Amount */ amount, /** IsTransitionKey */ transition) {
  ZoomPlugin.$clinit();
  if (ZoomPlugin.m_isReadyForApi__org_pepstock_charba_client_IsChart(chart)) {
   let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
   JsZoomHelper.m_get__().m_pan__org_pepstock_charba_client_Chart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(nativeChart, amount, transition);
  }
 }
 
 static m_pan__org_pepstock_charba_client_IsChart__double(/** IsChart */ chart, /** number */ amount) {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_pan__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_options_IsTransitionKey(chart, amount, null);
 }
 
 static m_pan__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_options_IsTransitionKey(/** IsChart */ chart, /** number */ amount, /** IsTransitionKey */ transition) {
  ZoomPlugin.$clinit();
  if (ZoomPlugin.m_isReadyForApi__org_pepstock_charba_client_IsChart(chart)) {
   let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
   JsZoomHelper.m_get__().m_pan__org_pepstock_charba_client_Chart__double__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(nativeChart, amount, transition);
  }
 }
 
 static m_zoom__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount(/** IsChart */ chart, /** Amount */ amount) {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_zoom__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(chart, amount, null);
 }
 
 static m_zoom__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(/** IsChart */ chart, /** Amount */ amount, /** IsTransitionKey */ transition) {
  ZoomPlugin.$clinit();
  if (ZoomPlugin.m_isReadyForApi__org_pepstock_charba_client_IsChart(chart)) {
   let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
   JsZoomHelper.m_get__().m_zoom__org_pepstock_charba_client_Chart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(nativeChart, amount, transition);
  }
 }
 
 static m_zoom__org_pepstock_charba_client_IsChart__double(/** IsChart */ chart, /** number */ amount) {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_zoom__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_options_IsTransitionKey(chart, amount, null);
 }
 
 static m_zoom__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_options_IsTransitionKey(/** IsChart */ chart, /** number */ amount, /** IsTransitionKey */ transition) {
  ZoomPlugin.$clinit();
  if (ZoomPlugin.m_isReadyForApi__org_pepstock_charba_client_IsChart(chart)) {
   let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
   JsZoomHelper.m_get__().m_zoom__org_pepstock_charba_client_Chart__double__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(nativeChart, amount, transition);
  }
 }
 
 static m_zoomScale__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_zoom_ScaleRange(/** IsChart */ chart, /** IsScaleId */ scaleId, /** ScaleRange */ range) {
  ZoomPlugin.$clinit();
  ZoomPlugin.m_zoomScale__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_options_IsTransitionKey(chart, scaleId, range, null);
 }
 
 static m_zoomScale__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_options_IsTransitionKey(/** IsChart */ chart, /** IsScaleId */ scaleId, /** ScaleRange */ range, /** IsTransitionKey */ transition) {
  ZoomPlugin.$clinit();
  if (ZoomPlugin.m_isReadyForApi__org_pepstock_charba_client_IsChart(chart) && IsScaleId.m_isValid__org_pepstock_charba_client_options_IsScaleId(scaleId) && chart.m_getNode__().m_getScales__().m_getItems__().containsKey(scaleId.m_value__())) {
   let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
   JsZoomHelper.m_get__().m_zoomScale__org_pepstock_charba_client_Chart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_options_IsTransitionKey_$pp_org_pepstock_charba_client_zoom(nativeChart, scaleId, range, transition);
  }
 }
 /** @return {Drag} */
 static m_createDrag__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ZoomPlugin.$clinit();
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && chart.m_getDefaultChartOptions__().m_getPlugins__().m_hasOptions__java_lang_String(ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin)) {
   let defaultValues = /**@type {ZoomOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin, ZoomPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
   return ZoomPlugin.m_createDrag__org_pepstock_charba_client_zoom_IsDefaultOptions(defaultValues);
  }
  return ZoomPlugin.m_createDrag__org_pepstock_charba_client_zoom_IsDefaultOptions(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions);
 }
 /** @return {Drag} */
 static m_createDrag__() {
  ZoomPlugin.$clinit();
  if (Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_hasOptions__java_lang_String(ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin)) {
   let defaultOptions = /**@type {ZoomOptions}*/ ($Casts.$to(Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin, ZoomPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
   return ZoomPlugin.m_createDrag__org_pepstock_charba_client_zoom_IsDefaultOptions(defaultOptions);
  }
  return ZoomPlugin.m_createDrag__org_pepstock_charba_client_zoom_IsDefaultOptions(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions);
 }
 /** @return {Drag} */
 static m_createDrag__org_pepstock_charba_client_zoom_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  return Drag.$create__org_pepstock_charba_client_zoom_IsDefaultDrag(defaultValues.m_getZoom__().m_getDrag__());
 }
 /** @return {boolean} */
 static m_isReadyForApi__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  return IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && Charts.m_hasNative__org_pepstock_charba_client_IsChart(chart) && chart.m_getOptions__().m_getPlugins__().m_isEnabled__java_lang_String(ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 /** @return {?string} */
 static get f_ID__org_pepstock_charba_client_zoom_ZoomPlugin() {
  return (ZoomPlugin.$clinit(), ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 /** @return {ZoomOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin() {
  return (ZoomPlugin.$clinit(), ZoomPlugin.$static_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 /** @return {IsTransitionKey} */
 static get f_ZOOM_TRANSITION_MODE__org_pepstock_charba_client_zoom_ZoomPlugin() {
  return (ZoomPlugin.$clinit(), ZoomPlugin.$static_ZOOM_TRANSITION_MODE__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 /** @return {ZoomDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin() {
  return (ZoomPlugin.$clinit(), ZoomPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 
 static $clinit() {
  ZoomPlugin.$clinit = () =>{};
  ZoomPlugin.$loadModules();
  AbstractExtensionPlugin.$clinit();
  ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin = ResourceName.f_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName.m_value__();
  ZoomPlugin.$static_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin = ZoomOptionsFactory.$create__();
  ZoomPlugin.$static_ZOOM_TRANSITION_MODE__org_pepstock_charba_client_zoom_ZoomPlugin = IsTransitionKey.m_create__java_lang_String("zoom");
  ZoomPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin = ZoomDefaultsOptionsFactory.$create__();
  ZoomPlugin.f_RESOURCE__org_pepstock_charba_client_zoom_ZoomPlugin_ = ZoomPluginResource.$create__();
  ZoomPlugin.f_RESOURCE_HAMMER__org_pepstock_charba_client_zoom_ZoomPlugin_ = ZoomPluginHammerResource.$create__();
  ZoomPlugin.f_INSTANCE__org_pepstock_charba_client_zoom_ZoomPlugin_ = ZoomPlugin.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomPlugin;
 }
 
 static $loadModules() {
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Injector = goog.module.get('org.pepstock.charba.client.Injector$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  IsTransitionKey = goog.module.get('org.pepstock.charba.client.options.IsTransitionKey$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.zoom.DefaultOptions$impl');
  Drag = goog.module.get('org.pepstock.charba.client.zoom.Drag$impl');
  JsZoomHelper = goog.module.get('org.pepstock.charba.client.zoom.JsZoomHelper$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomOptionsFactory = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptionsFactory$impl');
  ZoomDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptionsFactory.ZoomDefaultsOptionsFactory$impl');
  ZoomPluginHammerResource = goog.module.get('org.pepstock.charba.client.zoom.ZoomPluginHammerResource$impl');
  ZoomPluginResource = goog.module.get('org.pepstock.charba.client.zoom.ZoomPluginResource$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {?string}*/
ZoomPlugin.$static_ID__org_pepstock_charba_client_zoom_ZoomPlugin;
/**@private {ZoomOptionsFactory}*/
ZoomPlugin.$static_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin;
/**@private {IsTransitionKey}*/
ZoomPlugin.$static_ZOOM_TRANSITION_MODE__org_pepstock_charba_client_zoom_ZoomPlugin;
/**@private {ZoomDefaultsOptionsFactory}*/
ZoomPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin;
/**@type {ZoomPluginResource}*/
ZoomPlugin.f_RESOURCE__org_pepstock_charba_client_zoom_ZoomPlugin_;
/**@type {ZoomPluginHammerResource}*/
ZoomPlugin.f_RESOURCE_HAMMER__org_pepstock_charba_client_zoom_ZoomPlugin_;
/**@type {ZoomPlugin}*/
ZoomPlugin.f_INSTANCE__org_pepstock_charba_client_zoom_ZoomPlugin_;
$Util.$setClassMetadata(ZoomPlugin, "org.pepstock.charba.client.zoom.ZoomPlugin");

exports = ZoomPlugin;

//# sourceMappingURL=ZoomPlugin.js.map
