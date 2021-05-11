goog.module('org.pepstock.charba.client.zoom.ZoomOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
const IsDefaultOptions = goog.require('org.pepstock.charba.client.zoom.IsDefaultOptions$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Limits = goog.forwardDeclare('org.pepstock.charba.client.zoom.Limits$impl');
let Pan = goog.forwardDeclare('org.pepstock.charba.client.zoom.Pan$impl');
let Zoom = goog.forwardDeclare('org.pepstock.charba.client.zoom.Zoom$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions.Property$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultOptions}
 */
class ZoomOptions extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_ZoomOptions_;
  /**@type {Pan}*/
  this.f_pan__org_pepstock_charba_client_zoom_ZoomOptions_;
  /**@type {Zoom}*/
  this.f_zoom__org_pepstock_charba_client_zoom_ZoomOptions_;
  /**@type {Limits}*/
  this.f_limits__org_pepstock_charba_client_zoom_ZoomOptions_;
 }
 //Factory method corresponding to constructor 'ZoomOptions()'.
 /** @return {!ZoomOptions} */
 static $create__() {
  ZoomOptions.$clinit();
  let $instance = new ZoomOptions();
  $instance.$ctor__org_pepstock_charba_client_zoom_ZoomOptions__();
  return $instance;
 }
 //Initialization from constructor 'ZoomOptions()'.
 
 $ctor__org_pepstock_charba_client_zoom_ZoomOptions__() {
  this.$ctor__org_pepstock_charba_client_zoom_ZoomOptions__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'ZoomOptions(IsChart)'.
 /** @return {!ZoomOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ZoomOptions.$clinit();
  let $instance = new ZoomOptions();
  $instance.$ctor__org_pepstock_charba_client_zoom_ZoomOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'ZoomOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_zoom_ZoomOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_zoom_ZoomOptions__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {ZoomOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, ZoomPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions)) : null, null);
 }
 //Factory method corresponding to constructor 'ZoomOptions(IsDefaultOptions, NativeObject)'.
 /** @return {!ZoomOptions} */
 static $create__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  ZoomOptions.$clinit();
  let $instance = new ZoomOptions();
  $instance.$ctor__org_pepstock_charba_client_zoom_ZoomOptions__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ZoomOptions(IsDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_zoom_ZoomOptions__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, nativeObject);
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_zoom_ZoomOptions_ = /**@type {ZoomOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_zoom_ZoomOptions_ = defaultOptions;
  }
  this.f_pan__org_pepstock_charba_client_zoom_ZoomOptions_ = Pan.$create__org_pepstock_charba_client_zoom_IsDefaultPan__org_pepstock_charba_client_commons_NativeObject(this.f_defaultOptions__org_pepstock_charba_client_zoom_ZoomOptions_.m_getPan__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_PAN__org_pepstock_charba_client_zoom_ZoomOptions_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_PAN__org_pepstock_charba_client_zoom_ZoomOptions_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_PAN__org_pepstock_charba_client_zoom_ZoomOptions_Property, this.f_pan__org_pepstock_charba_client_zoom_ZoomOptions_);
  }
  this.f_zoom__org_pepstock_charba_client_zoom_ZoomOptions_ = Zoom.$create__org_pepstock_charba_client_zoom_IsDefaultZoom__org_pepstock_charba_client_commons_NativeObject(this.f_defaultOptions__org_pepstock_charba_client_zoom_ZoomOptions_.m_getZoom__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ZOOM__org_pepstock_charba_client_zoom_ZoomOptions_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_ZOOM__org_pepstock_charba_client_zoom_ZoomOptions_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_ZOOM__org_pepstock_charba_client_zoom_ZoomOptions_Property, this.f_zoom__org_pepstock_charba_client_zoom_ZoomOptions_);
  }
  this.f_limits__org_pepstock_charba_client_zoom_ZoomOptions_ = Limits.$create__org_pepstock_charba_client_zoom_IsDefaultLimits__org_pepstock_charba_client_commons_NativeObject(this.f_defaultOptions__org_pepstock_charba_client_zoom_ZoomOptions_.m_getLimits__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LIMITS__org_pepstock_charba_client_zoom_ZoomOptions_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_LIMITS__org_pepstock_charba_client_zoom_ZoomOptions_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_LIMITS__org_pepstock_charba_client_zoom_ZoomOptions_Property, this.f_limits__org_pepstock_charba_client_zoom_ZoomOptions_);
  }
 }
 /** @override */
 m_applyingDefaults__() {
  ZoomPlugin.m_get__().m_mergeDefaults__org_pepstock_charba_client_zoom_ZoomOptions_$pp_org_pepstock_charba_client_zoom(this);
 }
 /** @override @return {Pan} */
 m_getPan__() {
  return this.f_pan__org_pepstock_charba_client_zoom_ZoomOptions_;
 }
 /** @override @return {Zoom} */
 m_getZoom__() {
  return this.f_zoom__org_pepstock_charba_client_zoom_ZoomOptions_;
 }
 /** @override @return {Limits} */
 m_getLimits__() {
  return this.f_limits__org_pepstock_charba_client_zoom_ZoomOptions_;
 }
 
 static $clinit() {
  ZoomOptions.$clinit = () =>{};
  ZoomOptions.$loadModules();
  AbstractPluginOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Limits = goog.module.get('org.pepstock.charba.client.zoom.Limits$impl');
  Pan = goog.module.get('org.pepstock.charba.client.zoom.Pan$impl');
  Zoom = goog.module.get('org.pepstock.charba.client.zoom.Zoom$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions.Property$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultOptions.$markImplementor(ZoomOptions);
$Util.$setClassMetadata(ZoomOptions, "org.pepstock.charba.client.zoom.ZoomOptions");

exports = ZoomOptions;

//# sourceMappingURL=ZoomOptions.js.map
