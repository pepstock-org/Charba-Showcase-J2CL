goog.module('org.pepstock.charba.client.Plugin$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.Plugin.$LambdaAdaptor$impl');
let PluginDatasetArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginDatasetArgument$impl');
let PluginEventArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginEventArgument$impl');
let PluginResizeArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginResizeArgument$impl');
let PluginScaleArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginScaleArgument$impl');
let PluginTooltipArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginTooltipArgument$impl');
let PluginUpdateArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginUpdateArgument$impl');

/**
 * @interface
 */
class Plugin {
 /** @abstract @return {?string} */
 m_getId__() {}
 /** @abstract */
 m_onConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onBeginDrawing__org_pepstock_charba_client_IsChart__boolean(/** IsChart */ chart, /** boolean */ overridePreviousUpdate) {}
 /** @abstract */
 m_onEndDrawing__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onBeforeInit__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterInit__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart(/** IsChart */ chart, /** Chart */ nativeChart) {}
 /** @abstract @return {boolean} */
 m_onBeforeUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {}
 /** @abstract */
 m_onAfterUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {}
 /** @abstract */
 m_onBeforeElementsUpdate__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract @return {boolean} */
 m_onBeforeLayout__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterLayout__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract @return {boolean} */
 m_onBeforeDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {}
 /** @abstract */
 m_onAfterDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {}
 /** @abstract @return {boolean} */
 m_onBeforeDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ chart, /** PluginDatasetArgument */ item) {}
 /** @abstract */
 m_onAfterDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ chart, /** PluginDatasetArgument */ item) {}
 /** @abstract @return {boolean} */
 m_onBeforeRender__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterRender__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract @return {boolean} */
 m_onBeforeDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract @return {boolean} */
 m_onBeforeDatasetsDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract @return {boolean} */
 m_onBeforeDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ chart, /** PluginDatasetArgument */ item) {}
 /** @abstract */
 m_onAfterDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ chart, /** PluginDatasetArgument */ item) {}
 /** @abstract @return {boolean} */
 m_onBeforeTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(/** IsChart */ chart, /** PluginTooltipArgument */ item) {}
 /** @abstract */
 m_onAfterTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(/** IsChart */ chart, /** PluginTooltipArgument */ item) {}
 /** @abstract @return {boolean} */
 m_onBeforeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** IsChart */ chart, /** PluginEventArgument */ argument) {}
 /** @abstract */
 m_onAfterEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** IsChart */ chart, /** PluginEventArgument */ argument) {}
 /** @abstract */
 m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(/** IsChart */ chart, /** PluginResizeArgument */ argument) {}
 /** @abstract */
 m_onReset__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onInstall__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onStart__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onStop__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onUninstall__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onBeforeDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ chart, /** PluginScaleArgument */ argument) {}
 /** @abstract */
 m_onAfterDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ chart, /** PluginScaleArgument */ argument) {}
 /** @abstract */
 m_onBeforeBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ chart, /** PluginScaleArgument */ argument) {}
 /** @abstract */
 m_onAfterBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ chart, /** PluginScaleArgument */ argument) {}
 /** @return {Plugin} */
 static $adapt(/** ?function():?string */ fn) {
  Plugin.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_onConfigure__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onBeginDrawing__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__boolean(/** !Plugin */ $thisArg, /** IsChart */ chart, /** boolean */ overridePreviousUpdate) {
  Plugin.$clinit();
 }
 
 static m_onEndDrawing__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onBeforeInit__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onAfterInit__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart(/** !Plugin */ $thisArg, /** IsChart */ chart, /** Chart */ nativeChart) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  Plugin.$clinit();
 }
 
 static m_onBeforeElementsUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeLayout__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterLayout__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeDatasetsUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterDatasetsUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeDatasetUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginDatasetArgument */ item) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterDatasetUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginDatasetArgument */ item) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeRender__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterRender__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeDatasetsDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterDatasetsDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeDatasetDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginDatasetArgument */ item) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterDatasetDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginDatasetArgument */ item) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeTooltipDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginTooltipArgument */ item) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterTooltipDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginTooltipArgument */ item) {
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static m_onBeforeEvent__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginEventArgument */ argument) {
  Plugin.$clinit();
  return true;
 }
 
 static m_onAfterEvent__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginEventArgument */ argument) {
  Plugin.$clinit();
 }
 
 static m_onResize__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginResizeArgument */ argument) {
  Plugin.$clinit();
 }
 
 static m_onReset__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onDestroy__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onInstall__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onStart__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onStop__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onUninstall__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(/** !Plugin */ $thisArg, /** IsChart */ chart) {
  Plugin.$clinit();
 }
 
 static m_onBeforeDataLimits__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginScaleArgument */ argument) {
  Plugin.$clinit();
 }
 
 static m_onAfterDataLimits__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginScaleArgument */ argument) {
  Plugin.$clinit();
 }
 
 static m_onBeforeBuildTicks__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginScaleArgument */ argument) {
  Plugin.$clinit();
 }
 
 static m_onAfterBuildTicks__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** !Plugin */ $thisArg, /** IsChart */ chart, /** PluginScaleArgument */ argument) {
  Plugin.$clinit();
 }
 
 static $clinit() {
  Plugin.$clinit = () =>{};
  Plugin.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_Plugin = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_Plugin;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.Plugin.$LambdaAdaptor$impl');
 }
}
Plugin.$markImplementor(/**@type {Function}*/ (Plugin));
$Util.$setClassMetadataForInterface(Plugin, "org.pepstock.charba.client.Plugin");

exports = Plugin;

//# sourceMappingURL=Plugin.js.map
