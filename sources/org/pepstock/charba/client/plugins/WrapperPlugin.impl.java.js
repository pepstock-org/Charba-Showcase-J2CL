goog.module('org.pepstock.charba.client.plugins.WrapperPlugin$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let Chart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Plugin = goog.forwardDeclare('org.pepstock.charba.client.Plugin$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let PluginDatasetArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginDatasetArgument$impl');
let PluginEventArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginEventArgument$impl');
let PluginResizeArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginResizeArgument$impl');
let PluginScaleArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginScaleArgument$impl');
let PluginTooltipArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginTooltipArgument$impl');
let PluginUpdateArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginUpdateArgument$impl');
let PluginsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.plugins.WrapperPlugin.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class WrapperPlugin extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_beforeInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_beforeElementsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/
  this.f_beforeTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_resetCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_resizeCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_destroyCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_installCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_startCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_stopCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/
  this.f_uninstallCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {Plugin}*/
  this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_;
  /**@type {Map<?string, AtomicInteger>}*/
  this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_;
 }
 /** @return {!WrapperPlugin} */
 static $create__org_pepstock_charba_client_Plugin(/** Plugin */ delegation) {
  WrapperPlugin.$clinit();
  let $instance = new WrapperPlugin();
  $instance.$ctor__org_pepstock_charba_client_plugins_WrapperPlugin__org_pepstock_charba_client_Plugin(delegation);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_WrapperPlugin__org_pepstock_charba_client_Plugin(/** Plugin */ delegation) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.$init___$p_org_pepstock_charba_client_plugins_WrapperPlugin();
  this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_ = delegation;
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_ID__org_pepstock_charba_client_plugins_WrapperPlugin_Property, delegation.m_getId__());
  this.f_beforeInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context, /** Chart */ chart, /** ? */ args, /** ? */ options) =>{
   this.m_onBeforeInit__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart));
  };
  this.f_afterInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_1, /** Chart */ chart_1, /** ? */ args_1, /** ? */ options_1) =>{
   this.m_onAfterInit__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_1), chart_1);
  };
  this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_2, /** Chart */ chart_2, /** ? */ args_2, /** ? */ options_2) =>{
   this.m_onAfterUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_2), PluginUpdateArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_2, true))));
  };
  this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_3, /** Chart */ chart_3, /** ? */ args_3, /** ? */ options_3) =>{
   return this.m_onBeforeUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_3), PluginUpdateArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_3, true))));
  };
  this.f_beforeDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_4, /** Chart */ chart_4, /** ? */ args_4, /** ? */ options_4) =>{
   return this.m_onBeforeDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_4), PluginUpdateArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_4, true))));
  };
  this.f_afterDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_5, /** Chart */ chart_5, /** ? */ args_5, /** ? */ options_5) =>{
   this.m_onAfterDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_5), PluginUpdateArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_5, true))));
  };
  this.f_beforeDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_6, /** Chart */ chart_6, /** ? */ args_6, /** ? */ options_6) =>{
   return this.m_onBeforeDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_6), PluginDatasetArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_6, true))));
  };
  this.f_afterDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_7, /** Chart */ chart_7, /** ? */ args_7, /** ? */ options_7) =>{
   this.m_onAfterDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_7), PluginDatasetArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_7, true))));
  };
  this.f_beforeElementsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_8, /** Chart */ chart_8, /** ? */ args_8, /** ? */ options_8) =>{
   this.m_onBeforeElementsUpdate__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_8));
  };
  this.f_beforeLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_9, /** Chart */ chart_9, /** ? */ args_9, /** ? */ options_9) =>{
   return this.m_onBeforeLayout__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_9));
  };
  this.f_afterLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_10, /** Chart */ chart_10, /** ? */ args_10, /** ? */ options_10) =>{
   this.m_onAfterLayout__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_10));
  };
  this.f_beforeRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_11, /** Chart */ chart_11, /** ? */ args_11, /** ? */ options_11) =>{
   return this.m_onBeforeRender__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_11));
  };
  this.f_afterRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_12, /** Chart */ chart_12, /** ? */ args_12, /** ? */ options_12) =>{
   this.m_onAfterRender__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_12));
  };
  this.f_beforeDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_13, /** Chart */ chart_13, /** ? */ args_13, /** ? */ options_13) =>{
   return this.m_onBeforeDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_13));
  };
  this.f_afterDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_14, /** Chart */ chart_14, /** ? */ args_14, /** ? */ options_14) =>{
   this.m_onAfterDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_14));
  };
  this.f_beforeDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_15, /** Chart */ chart_15, /** ? */ args_15, /** ? */ options_15) =>{
   return this.m_onBeforeDatasetsDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_15));
  };
  this.f_afterDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_16, /** Chart */ chart_16, /** ? */ args_16, /** ? */ options_16) =>{
   this.m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_16));
  };
  this.f_beforeDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_17, /** Chart */ chart_17, /** ? */ args_17, /** ? */ options_17) =>{
   return this.m_onBeforeDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_17), PluginDatasetArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_17, true))));
  };
  this.f_afterDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_18, /** Chart */ chart_18, /** ? */ args_18, /** ? */ options_18) =>{
   this.m_onAfterDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_18), PluginDatasetArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_18, true))));
  };
  this.f_beforeEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_19, /** Chart */ chart_19, /** ? */ args_19, /** ? */ options_19) =>{
   return this.m_onBeforeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_19), PluginEventArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_19, true))));
  };
  this.f_afterEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_20, /** Chart */ chart_20, /** ? */ args_20, /** ? */ options_20) =>{
   this.m_onAfterEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_20), PluginEventArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_20, true))));
  };
  this.f_beforeTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_21, /** Chart */ chart_21, /** ? */ args_21, /** ? */ options_21) =>{
   return this.m_onBeforeTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_21), PluginTooltipArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_21, true))));
  };
  this.f_afterTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_22, /** Chart */ chart_22, /** ? */ args_22, /** ? */ options_22) =>{
   this.m_onAfterTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_22), PluginTooltipArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_22, true))));
  };
  this.f_resetCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_23, /** Chart */ chart_23, /** ? */ args_23, /** ? */ options_23) =>{
   this.m_onReset__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_23));
  };
  this.f_resizeCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_24, /** Chart */ chart_24, /** ? */ args_24, /** ? */ options_24) =>{
   this.m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_24), PluginResizeArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_24, true))));
  };
  this.f_destroyCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_25, /** Chart */ chart_25, /** ? */ args_25, /** ? */ options_25) =>{
   this.m_onDestroy__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_25));
  };
  this.f_installCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_26, /** Chart */ chart_26, /** ? */ args_26, /** ? */ options_26) =>{
   this.m_onInstall__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_26));
  };
  this.f_startCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_27, /** Chart */ chart_27, /** ? */ args_27, /** ? */ options_27) =>{
   this.m_onStart__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_27));
  };
  this.f_stopCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_28, /** Chart */ chart_28, /** ? */ args_28, /** ? */ options_28) =>{
   this.m_onStop__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_28));
  };
  this.f_uninstallCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_29, /** Chart */ chart_29, /** ? */ args_29, /** ? */ options_29) =>{
   this.m_onUninstall__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_29));
  };
  this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_30, /** Chart */ chart_30, /** ? */ args_30, /** ? */ options_30) =>{
   this.m_onBeforeDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_30), PluginScaleArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_30, true))));
  };
  this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_31, /** Chart */ chart_31, /** ? */ args_31, /** ? */ options_31) =>{
   this.m_onAfterDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_31), PluginScaleArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_31, true))));
  };
  this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_32, /** Chart */ chart_32, /** ? */ args_32, /** ? */ options_32) =>{
   this.m_onBeforeBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_32), PluginScaleArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_32, true))));
  };
  this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.callback = (/** Object */ context_33, /** Chart */ chart_33, /** ? */ args_33, /** ? */ options_33) =>{
   this.m_onAfterBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart_33), PluginScaleArgument.$create__org_pepstock_charba_client_plugins_PluginsEnvelop(/**@type {!PluginsEnvelop<?>}*/ (PluginsEnvelop.$create__java_lang_Object__boolean(args_33, true))));
  };
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_AFTER_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_DATA_LIMITS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_BUILD_TICKS__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_DATASET_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_DATASET_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_DATASETS_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_EVENT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_INIT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_LAYOUT__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_RENDER__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_TOOLTIP_DRAW__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BEFORE_UPDATE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_DESTROY__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_destroyCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_RESIZE__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_resizeCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_RESET__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_resetCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_INSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_installCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_START__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_startCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_STOP__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_stopCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_UNINSTALL__org_pepstock_charba_client_plugins_WrapperPlugin_Property, this.f_uninstallCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_.proxy);
 }
 /** @return {?string} */
 m_getId___$pp_org_pepstock_charba_client_plugins() {
  return this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_getId__();
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_plugins() {
  return super.m_getNativeObject__();
 }
 
 m_onConfigure__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onConfigure__org_pepstock_charba_client_IsChart(chart);
  }
 }
 
 m_onBeforeInit__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_.put(chart.m_getId__(), AtomicInteger.$create__int(0));
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeInit__org_pepstock_charba_client_IsChart(chart);
  }
 }
 
 m_onAfterInit__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** Chart */ nativeChart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterInit__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart(chart, nativeChart);
  }
 }
 /** @return {boolean} */
 m_onBeforeUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   let counter = /**@type {AtomicInteger}*/ ($Casts.$to(this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_.get(chart.m_getId__()), AtomicInteger));
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeginDrawing__org_pepstock_charba_client_IsChart__boolean(chart, counter.m_incrementAndGet__() > 1);
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(chart, argument));
  }
  return true;
 }
 
 m_onAfterUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(chart, argument);
  }
 }
 
 m_onBeforeElementsUpdate__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeElementsUpdate__org_pepstock_charba_client_IsChart(chart);
  }
 }
 /** @return {boolean} */
 m_onBeforeLayout__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeLayout__org_pepstock_charba_client_IsChart(chart));
  }
  return true;
 }
 
 m_onAfterLayout__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterLayout__org_pepstock_charba_client_IsChart(chart);
  }
 }
 /** @return {boolean} */
 m_onBeforeDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(chart, argument));
  }
  return true;
 }
 
 m_onAfterDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(chart, argument);
  }
 }
 /** @return {boolean} */
 m_onBeforeDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginDatasetArgument */ item) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(chart, item));
  }
  return true;
 }
 
 m_onAfterDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginDatasetArgument */ item) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(chart, item);
  }
 }
 /** @return {boolean} */
 m_onBeforeRender__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeRender__org_pepstock_charba_client_IsChart(chart));
  }
  return true;
 }
 
 m_onAfterRender__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterRender__org_pepstock_charba_client_IsChart(chart);
   let counter = /**@type {AtomicInteger}*/ ($Casts.$to(this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_.get(chart.m_getId__()), AtomicInteger));
   if (counter.m_intValue__() > 0) {
    this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onEndDrawing__org_pepstock_charba_client_IsChart(chart);
   }
   counter.m_set__int(0);
  }
 }
 /** @return {boolean} */
 m_onBeforeDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeDraw__org_pepstock_charba_client_IsChart(chart));
  }
  return true;
 }
 
 m_onAfterDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterDraw__org_pepstock_charba_client_IsChart(chart);
  }
 }
 /** @return {boolean} */
 m_onBeforeDatasetsDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeDatasetsDraw__org_pepstock_charba_client_IsChart(chart));
  }
  return true;
 }
 
 m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart(chart);
  }
 }
 /** @return {boolean} */
 m_onBeforeDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginDatasetArgument */ item) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(chart, this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(chart, item));
  }
  return true;
 }
 
 m_onAfterDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginDatasetArgument */ item) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(chart, item);
  }
 }
 /** @return {boolean} */
 m_onBeforeTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginTooltipArgument */ item) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(chart, item);
  }
  return true;
 }
 
 m_onAfterTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginTooltipArgument */ item) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(chart, item);
  }
 }
 /** @return {boolean} */
 m_onBeforeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginEventArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(chart, argument);
  }
  return true;
 }
 
 m_onAfterEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginEventArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(chart, argument);
  }
 }
 
 m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginResizeArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(chart, argument);
  }
 }
 
 m_onReset__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   let counter = /**@type {AtomicInteger}*/ ($Casts.$to(this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_.get(chart.m_getId__()), AtomicInteger));
   counter.m_set__int(0);
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onReset__org_pepstock_charba_client_IsChart(chart);
  }
 }
 
 m_onDestroy__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_.remove(chart.m_getId__());
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onDestroy__org_pepstock_charba_client_IsChart(chart);
  }
 }
 
 m_onInstall__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onInstall__org_pepstock_charba_client_IsChart(chart);
  }
 }
 
 m_onStart__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onStart__org_pepstock_charba_client_IsChart(chart);
  }
 }
 
 m_onStop__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onDestroy__org_pepstock_charba_client_IsChart(chart);
  }
 }
 
 m_onBeforeDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginScaleArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(chart, argument);
  }
 }
 
 m_onAfterDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginScaleArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(chart, argument);
  }
 }
 
 m_onBeforeBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginScaleArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onBeforeBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(chart, argument);
  }
 }
 
 m_onAfterBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart, /** PluginScaleArgument */ argument) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onAfterBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(chart, argument);
  }
 }
 
 m_onUninstall__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_delegation__org_pepstock_charba_client_plugins_WrapperPlugin_.m_onUninstall__org_pepstock_charba_client_IsChart(chart);
  }
 }
 /** @return {boolean} */
 m_checkAndGetBeforeContinue__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_plugins_WrapperPlugin(/** IsChart */ chart, /** boolean */ returnedValue) {
  if (!returnedValue && this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_.containsKey(chart.m_getId__())) {
   let counter = /**@type {AtomicInteger}*/ ($Casts.$to(this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_.get(chart.m_getId__()), AtomicInteger));
   if (counter.m_intValue__() > 0) {
    counter.m_decrementAndGet__();
   }
  }
  return returnedValue;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_plugins_WrapperPlugin() {
  this.f_beforeInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterInitCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterDatasetsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterDatasetUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeElementsUpdateCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterLayoutCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterRenderCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterDatasetsDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterDatasetDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterEventCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterTooltipDrawCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_resetCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_resizeCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_destroyCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_installCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_startCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_stopCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_uninstallCallbackProxy__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {CharbaCallbackProxy<?function(Object, Chart, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_drawingStatus__org_pepstock_charba_client_plugins_WrapperPlugin_ = /**@type {!HashMap<?string, AtomicInteger>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  WrapperPlugin.$clinit = () =>{};
  WrapperPlugin.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WrapperPlugin;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  Chart_$Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  PluginDatasetArgument = goog.module.get('org.pepstock.charba.client.items.PluginDatasetArgument$impl');
  PluginEventArgument = goog.module.get('org.pepstock.charba.client.items.PluginEventArgument$impl');
  PluginResizeArgument = goog.module.get('org.pepstock.charba.client.items.PluginResizeArgument$impl');
  PluginScaleArgument = goog.module.get('org.pepstock.charba.client.items.PluginScaleArgument$impl');
  PluginTooltipArgument = goog.module.get('org.pepstock.charba.client.items.PluginTooltipArgument$impl');
  PluginUpdateArgument = goog.module.get('org.pepstock.charba.client.items.PluginUpdateArgument$impl');
  PluginsEnvelop = goog.module.get('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.plugins.WrapperPlugin.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(WrapperPlugin, "org.pepstock.charba.client.plugins.WrapperPlugin");

exports = WrapperPlugin;

//# sourceMappingURL=WrapperPlugin.js.map
