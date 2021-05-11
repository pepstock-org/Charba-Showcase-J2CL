goog.module('org.pepstock.charba.client.Plugin.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Plugin = goog.require('org.pepstock.charba.client.Plugin$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let PluginDatasetArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginDatasetArgument$impl');
let PluginEventArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginEventArgument$impl');
let PluginResizeArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginResizeArgument$impl');
let PluginScaleArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginScaleArgument$impl');
let PluginTooltipArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginTooltipArgument$impl');
let PluginUpdateArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginUpdateArgument$impl');

/**
 * @implements {Plugin}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_fn__org_pepstock_charba_client_Plugin_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_Plugin_$LambdaAdaptor__org_pepstock_charba_client_Plugin_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_Plugin_$LambdaAdaptor__org_pepstock_charba_client_Plugin_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_Plugin_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_getId__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_Plugin_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ arg0, /** PluginScaleArgument */ arg1) {
  Plugin.m_onAfterBuildTicks__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ arg0, /** PluginScaleArgument */ arg1) {
  Plugin.m_onAfterDataLimits__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ arg0, /** PluginDatasetArgument */ arg1) {
  Plugin.m_onAfterDatasetDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ arg0, /** PluginDatasetArgument */ arg1) {
  Plugin.m_onAfterDatasetUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onAfterDatasetsDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ arg0, /** PluginUpdateArgument */ arg1) {
  Plugin.m_onAfterDatasetsUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDraw__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onAfterDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** IsChart */ arg0, /** PluginEventArgument */ arg1) {
  Plugin.m_onAfterEvent__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterInit__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart(/** IsChart */ arg0, /** Chart */ arg1) {
  Plugin.m_onAfterInit__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterLayout__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onAfterLayout__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterRender__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onAfterRender__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(/** IsChart */ arg0, /** PluginTooltipArgument */ arg1) {
  Plugin.m_onAfterTooltipDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ arg0, /** PluginUpdateArgument */ arg1) {
  Plugin.m_onAfterUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeBuildTicks__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ arg0, /** PluginScaleArgument */ arg1) {
  Plugin.m_onBeforeBuildTicks__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeDataLimits__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(/** IsChart */ arg0, /** PluginScaleArgument */ arg1) {
  Plugin.m_onBeforeDataLimits__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginScaleArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeDatasetDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ arg0, /** PluginDatasetArgument */ arg1) {
  return Plugin.m_onBeforeDatasetDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeDatasetUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(/** IsChart */ arg0, /** PluginDatasetArgument */ arg1) {
  return Plugin.m_onBeforeDatasetUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginDatasetArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeDatasetsDraw__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  return Plugin.m_onBeforeDatasetsDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeDatasetsUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ arg0, /** PluginUpdateArgument */ arg1) {
  return Plugin.m_onBeforeDatasetsUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeDraw__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  return Plugin.m_onBeforeDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeElementsUpdate__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onBeforeElementsUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(/** IsChart */ arg0, /** PluginEventArgument */ arg1) {
  return Plugin.m_onBeforeEvent__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginEventArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeInit__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onBeforeInit__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeLayout__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  return Plugin.m_onBeforeLayout__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeRender__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  return Plugin.m_onBeforeRender__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeTooltipDraw__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(/** IsChart */ arg0, /** PluginTooltipArgument */ arg1) {
  return Plugin.m_onBeforeTooltipDraw__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginTooltipArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_onBeforeUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ arg0, /** PluginUpdateArgument */ arg1) {
  return Plugin.m_onBeforeUpdate__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeginDrawing__org_pepstock_charba_client_IsChart__boolean(/** IsChart */ arg0, /** boolean */ arg1) {
  Plugin.m_onBeginDrawing__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__boolean(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onConfigure__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onDestroy__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onEndDrawing__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onEndDrawing__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onInstall__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onInstall__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onReset__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onReset__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(/** IsChart */ arg0, /** PluginResizeArgument */ arg1) {
  Plugin.m_onResize__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onStart__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onStart__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onStop__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onStop__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onUninstall__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  Plugin.m_onUninstall__$default__org_pepstock_charba_client_Plugin__org_pepstock_charba_client_IsChart(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Plugin.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
Plugin.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.Plugin$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=Plugin$$LambdaAdaptor.js.map
