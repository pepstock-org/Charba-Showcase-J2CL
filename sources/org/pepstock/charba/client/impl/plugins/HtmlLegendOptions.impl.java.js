goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCursorPointerOptions = goog.require('org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions$impl');
const IsHtmlLegendDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsHtmlLegendDefaultOptions$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let HtmlLegendItemCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');
let HtmlLegendTitleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let HtmlLegend = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsHtmlLegendDefaultOptions}
 */
class HtmlLegendOptions extends AbstractCursorPointerOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_itemCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_titleCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_;
  /**@type {IsHtmlLegendDefaultOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_;
 }
 //Factory method corresponding to constructor 'HtmlLegendOptions()'.
 /** @return {!HtmlLegendOptions} */
 static $create__() {
  HtmlLegendOptions.$clinit();
  let $instance = new HtmlLegendOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__();
  return $instance;
 }
 //Initialization from constructor 'HtmlLegendOptions()'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__() {
  this.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'HtmlLegendOptions(IsChart)'.
 /** @return {!HtmlLegendOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  HtmlLegendOptions.$clinit();
  let $instance = new HtmlLegendOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'HtmlLegendOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {HtmlLegendOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend, HtmlLegend.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend), HtmlLegendOptions)) : null);
 }
 //Factory method corresponding to constructor 'HtmlLegendOptions(IsHtmlLegendDefaultOptions)'.
 /** @return {!HtmlLegendOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(/** IsHtmlLegendDefaultOptions */ defaultOptions) {
  HtmlLegendOptions.$clinit();
  let $instance = new HtmlLegendOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'HtmlLegendOptions(IsHtmlLegendDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(/** IsHtmlLegendDefaultOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, null);
 }
 //Factory method corresponding to constructor 'HtmlLegendOptions(IsHtmlLegendDefaultOptions, NativeObject)'.
 /** @return {!HtmlLegendOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsHtmlLegendDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  HtmlLegendOptions.$clinit();
  let $instance = new HtmlLegendOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'HtmlLegendOptions(IsHtmlLegendDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsHtmlLegendDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend, nativeObject);
  this.$init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendOptions();
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_ = /**@type {HtmlLegendOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(HtmlLegend.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend), HtmlLegendOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_ = defaultOptions;
  }
  this.m_setNewIncrementalId__();
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_isDisplay__());
 }
 /** @return {HtmlLegendItemCallback} */
 m_getLegendItemCallback__() {
  return /**@type {HtmlLegendItemCallback}*/ ($Casts.$to(HtmlLegendOptions.f_ITEM_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_getLegendTextCallback__()), HtmlLegendItemCallback));
 }
 
 m_setLegendItemCallback__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback(/** HtmlLegendItemCallback */ legendTextCallback) {
  HtmlLegendOptions.f_ITEM_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.m_getId__(), legendTextCallback, this.f_itemCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.proxy);
 }
 /** @override @return {HtmlLegendTitleCallback} */
 m_getLegendTitleCallback__() {
  return /**@type {HtmlLegendTitleCallback}*/ ($Casts.$to(HtmlLegendOptions.f_TITLE_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_getLegendTitleCallback__()), HtmlLegendTitleCallback));
 }
 
 m_setLegendTitleCallback__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback(/** HtmlLegendTitleCallback */ legendTitleCallback) {
  HtmlLegendOptions.f_TITLE_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.m_getId__(), legendTitleCallback, this.f_titleCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.proxy);
 }
 
 m_setMaximumLegendColumns__int(/** number */ maxColumns) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAXIMUM_LEGEND_COLUMNS__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_Property, Checker.m_greaterThanOrDefault__int__int__int(maxColumns, 1, HtmlLegendOptions.f_DEFAULT_MAXIMUM_LEGEND_COLUMNS__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions));
 }
 /** @override @return {number} */
 m_getMaximumLegendColumns__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAXIMUM_LEGEND_COLUMNS__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_.m_getMaximumLegendColumns__());
 }
 //Default method forwarding stub.
 /** @override @return {HtmlLegendItemCallback} */
 m_getLegendTextCallback__() {
  return IsHtmlLegendDefaultOptions.m_getLegendTextCallback__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendOptions() {
  this.f_itemCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_titleCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  HtmlLegendOptions.$clinit = () =>{};
  HtmlLegendOptions.$loadModules();
  AbstractCursorPointerOptions.$clinit();
  IsHtmlLegendDefaultOptions.$clinit();
  HtmlLegendOptions.f_ITEM_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_ = /**@type {!CallbackPropertyHandler<HtmlLegendItemCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_ITEM_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_Property));
  HtmlLegendOptions.f_TITLE_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_ = /**@type {!CallbackPropertyHandler<HtmlLegendTitleCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_TITLE_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  HtmlLegendItemCallback = goog.module.get('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');
  HtmlLegendTitleCallback = goog.module.get('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  HtmlLegend = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
HtmlLegendOptions.f_DEFAULT_MAXIMUM_LEGEND_COLUMNS__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions = 2147483647;
/**@const {boolean}*/
HtmlLegendOptions.f_DEFAULT_DISPLAY__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions = true;
/**@type {CallbackPropertyHandler<HtmlLegendItemCallback>}*/
HtmlLegendOptions.f_ITEM_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_;
/**@type {CallbackPropertyHandler<HtmlLegendTitleCallback>}*/
HtmlLegendOptions.f_TITLE_CALLBACK__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_;
IsHtmlLegendDefaultOptions.$markImplementor(HtmlLegendOptions);
$Util.$setClassMetadata(HtmlLegendOptions, "org.pepstock.charba.client.impl.plugins.HtmlLegendOptions");

exports = HtmlLegendOptions;

//# sourceMappingURL=HtmlLegendOptions.js.map
