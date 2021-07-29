goog.module('org.pepstock.charba.client.geo.ColorAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianLinearAxis = goog.require('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
const IsColorAxis = goog.require('org.pepstock.charba.client.geo.IsColorAxis$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ColorAxisRemappedOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxis.ColorAxisRemappedOptionsFactory$impl');
let ColorAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxisMapper$impl');
let IsLegendAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.IsLegendAxis$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let InterpolateCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.InterpolateCallback$impl');
let Interpolate = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Interpolate$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsColorAxis}
 */
class ColorAxis extends CartesianLinearAxis {
 /** @protected */
 constructor() {
  super();
  /**@type {ColorAxisRemappedOptionsFactory}*/
  this.f_factory__org_pepstock_charba_client_geo_ColorAxis;
  /**@type {ColorAxisMapper}*/
  this.f_mapper__org_pepstock_charba_client_geo_ColorAxis_;
 }
 /** @return {!ColorAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ColorAxis.$clinit();
  let $instance = new ColorAxis();
  $instance.$ctor__org_pepstock_charba_client_geo_ColorAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ColorAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, ColorAxis.$static_ID__org_pepstock_charba_client_geo_ColorAxis, ColorAxis.$static_TYPE__org_pepstock_charba_client_geo_ColorAxis, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  Checker.m_assertCheck__boolean__java_lang_String(ChoroplethChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart.equals(chart.m_getType__()), "Color axis must be used ONLY by choropleth chart");
  this.f_factory__org_pepstock_charba_client_geo_ColorAxis = ColorAxisRemappedOptionsFactory.$create__();
  this.m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo();
 }
 
 m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo() {
  this.f_mapper__org_pepstock_charba_client_geo_ColorAxis_ = /**@type {ColorAxisMapper}*/ ($Casts.$to(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getRemappedOptions__org_pepstock_charba_client_controllers_ControllerMapperFactory(this.f_factory__org_pepstock_charba_client_geo_ColorAxis), ColorAxisMapper));
 }
 /** @override @return {ColorAxisMapper} */
 m_getMapper__() {
  return this.f_mapper__org_pepstock_charba_client_geo_ColorAxis_;
 }
 //Default method forwarding stub.
 /** @override @return {Legend} */
 m_getLegend__() {
  return IsLegendAxis.m_getLegend__$default__org_pepstock_charba_client_geo_IsLegendAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {Interpolate} */
 m_getInterpolate__() {
  return IsColorAxis.m_getInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {InterpolateCallback} */
 m_getInterpolateCallback__() {
  return IsColorAxis.m_getInterpolateCallback__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getMissingColor__() {
  return IsColorAxis.m_getMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getMissingColorAsString__() {
  return IsColorAxis.m_getMissingColorAsString__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getQuantize__() {
  return IsColorAxis.m_getQuantize__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setInterpolate__org_pepstock_charba_client_geo_enums_Interpolate(/** Interpolate */ arg0) {
  IsColorAxis.m_setInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_geo_enums_Interpolate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setInterpolate__org_pepstock_charba_client_geo_callbacks_InterpolateCallback(/** InterpolateCallback */ arg0) {
  IsColorAxis.m_setInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_geo_callbacks_InterpolateCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMissingColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  IsColorAxis.m_setMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMissingColor__java_lang_String(/** ?string */ arg0) {
  IsColorAxis.m_setMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setQuantize__int(/** number */ arg0) {
  IsColorAxis.m_setQuantize__$default__org_pepstock_charba_client_geo_IsColorAxis__int(this, arg0);
 }
 /** @return {?string} */
 static get f_DEFAULT_MISSING_COLOR__org_pepstock_charba_client_geo_ColorAxis() {
  return (ColorAxis.$clinit(), ColorAxis.$static_DEFAULT_MISSING_COLOR__org_pepstock_charba_client_geo_ColorAxis);
 }
 /** @return {ScaleId} */
 static get f_ID__org_pepstock_charba_client_geo_ColorAxis() {
  return (ColorAxis.$clinit(), ColorAxis.$static_ID__org_pepstock_charba_client_geo_ColorAxis);
 }
 /** @return {AxisType} */
 static get f_TYPE__org_pepstock_charba_client_geo_ColorAxis() {
  return (ColorAxis.$clinit(), ColorAxis.$static_TYPE__org_pepstock_charba_client_geo_ColorAxis);
 }
 
 static $clinit() {
  ColorAxis.$clinit = () =>{};
  ColorAxis.$loadModules();
  CartesianLinearAxis.$clinit();
  IsColorAxis.$clinit();
  ColorAxis.$static_DEFAULT_MISSING_COLOR__org_pepstock_charba_client_geo_ColorAxis = HtmlColor.f_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__();
  ColorAxis.$static_ID__org_pepstock_charba_client_geo_ColorAxis = ScaleId.m_create__java_lang_String("color");
  ColorAxis.$static_TYPE__org_pepstock_charba_client_geo_ColorAxis = AxisType.m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType("color", null, ColorAxis.$static_ID__org_pepstock_charba_client_geo_ColorAxis, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorAxis;
 }
 
 static $loadModules() {
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.configuration.AxisType$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ColorAxisRemappedOptionsFactory = goog.module.get('org.pepstock.charba.client.geo.ColorAxis.ColorAxisRemappedOptionsFactory$impl');
  ColorAxisMapper = goog.module.get('org.pepstock.charba.client.geo.ColorAxisMapper$impl');
  IsLegendAxis = goog.module.get('org.pepstock.charba.client.geo.IsLegendAxis$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {?string}*/
ColorAxis.$static_DEFAULT_MISSING_COLOR__org_pepstock_charba_client_geo_ColorAxis;
/**@const {number}*/
ColorAxis.f_DEFAULT_QUANTIZE__org_pepstock_charba_client_geo_ColorAxis = 0;
/**@private {ScaleId}*/
ColorAxis.$static_ID__org_pepstock_charba_client_geo_ColorAxis;
/**@private {AxisType}*/
ColorAxis.$static_TYPE__org_pepstock_charba_client_geo_ColorAxis;
IsColorAxis.$markImplementor(ColorAxis);
$Util.$setClassMetadata(ColorAxis, "org.pepstock.charba.client.geo.ColorAxis");

exports = ColorAxis;

//# sourceMappingURL=ColorAxis.js.map
