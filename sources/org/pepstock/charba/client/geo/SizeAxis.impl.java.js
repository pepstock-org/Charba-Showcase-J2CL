goog.module('org.pepstock.charba.client.geo.SizeAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianLinearAxis = goog.require('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
const IsSizeAxis = goog.require('org.pepstock.charba.client.geo.IsSizeAxis$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let BubbleMapChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapChart$impl');
let IsLegendAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.IsLegendAxis$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let SizeAxisRemappedOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxis.SizeAxisRemappedOptionsFactory$impl');
let SizeAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxisMapper$impl');
let Mode = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Mode$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsSizeAxis}
 */
class SizeAxis extends CartesianLinearAxis {
 /** @protected */
 constructor() {
  super();
  /**@type {SizeAxisRemappedOptionsFactory}*/
  this.f_factory__org_pepstock_charba_client_geo_SizeAxis;
  /**@type {SizeAxisMapper}*/
  this.f_mapper__org_pepstock_charba_client_geo_SizeAxis_;
 }
 /** @return {!SizeAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  SizeAxis.$clinit();
  let $instance = new SizeAxis();
  $instance.$ctor__org_pepstock_charba_client_geo_SizeAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_SizeAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, SizeAxis.$static_ID__org_pepstock_charba_client_geo_SizeAxis, SizeAxis.$static_TYPE__org_pepstock_charba_client_geo_SizeAxis, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  Checker.m_assertCheck__boolean__java_lang_String(BubbleMapChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart.equals(chart.m_getType__()), "Size axis must be used ONLY by bubble map chart");
  this.f_factory__org_pepstock_charba_client_geo_SizeAxis = SizeAxisRemappedOptionsFactory.$create__();
  this.m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo();
 }
 
 m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo() {
  this.f_mapper__org_pepstock_charba_client_geo_SizeAxis_ = /**@type {SizeAxisMapper}*/ ($Casts.$to(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getRemappedOptions__org_pepstock_charba_client_controllers_ControllerMapperFactory(this.f_factory__org_pepstock_charba_client_geo_SizeAxis), SizeAxisMapper));
 }
 /** @override @return {SizeAxisMapper} */
 m_getMapper__() {
  return this.f_mapper__org_pepstock_charba_client_geo_SizeAxis_;
 }
 //Default method forwarding stub.
 /** @override @return {Legend} */
 m_getLegend__() {
  return IsLegendAxis.m_getLegend__$default__org_pepstock_charba_client_geo_IsLegendAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMissingRadius__() {
  return IsSizeAxis.m_getMissingRadius__$default__org_pepstock_charba_client_geo_IsSizeAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {Mode} */
 m_getMode__() {
  return IsSizeAxis.m_getMode__$default__org_pepstock_charba_client_geo_IsSizeAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<Integer>} */
 m_getRange__() {
  return IsSizeAxis.m_getRange__$default__org_pepstock_charba_client_geo_IsSizeAxis(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMissingRadius__double(/** number */ arg0) {
  IsSizeAxis.m_setMissingRadius__$default__org_pepstock_charba_client_geo_IsSizeAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMode__org_pepstock_charba_client_geo_enums_Mode(/** Mode */ arg0) {
  IsSizeAxis.m_setMode__$default__org_pepstock_charba_client_geo_IsSizeAxis__org_pepstock_charba_client_geo_enums_Mode(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setRange__int__int(/** number */ arg0, /** number */ arg1) {
  IsSizeAxis.m_setRange__$default__org_pepstock_charba_client_geo_IsSizeAxis__int__int(this, arg0, arg1);
 }
 /** @return {ScaleId} */
 static get f_ID__org_pepstock_charba_client_geo_SizeAxis() {
  return (SizeAxis.$clinit(), SizeAxis.$static_ID__org_pepstock_charba_client_geo_SizeAxis);
 }
 /** @return {AxisType} */
 static get f_TYPE__org_pepstock_charba_client_geo_SizeAxis() {
  return (SizeAxis.$clinit(), SizeAxis.$static_TYPE__org_pepstock_charba_client_geo_SizeAxis);
 }
 
 static $clinit() {
  SizeAxis.$clinit = () =>{};
  SizeAxis.$loadModules();
  CartesianLinearAxis.$clinit();
  IsSizeAxis.$clinit();
  SizeAxis.$static_ID__org_pepstock_charba_client_geo_SizeAxis = ScaleId.m_create__java_lang_String("r");
  SizeAxis.$static_TYPE__org_pepstock_charba_client_geo_SizeAxis = AxisType.m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType("size", null, SizeAxis.$static_ID__org_pepstock_charba_client_geo_SizeAxis, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SizeAxis;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.configuration.AxisType$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  BubbleMapChart = goog.module.get('org.pepstock.charba.client.geo.BubbleMapChart$impl');
  IsLegendAxis = goog.module.get('org.pepstock.charba.client.geo.IsLegendAxis$impl');
  SizeAxisRemappedOptionsFactory = goog.module.get('org.pepstock.charba.client.geo.SizeAxis.SizeAxisRemappedOptionsFactory$impl');
  SizeAxisMapper = goog.module.get('org.pepstock.charba.client.geo.SizeAxisMapper$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
SizeAxis.f_DEFAULT_MISSING_RADIUS__org_pepstock_charba_client_geo_SizeAxis = 1;
/**@const {number}*/
SizeAxis.f_DEFAULT_MINIMUM_RANGE__org_pepstock_charba_client_geo_SizeAxis = 2;
/**@const {number}*/
SizeAxis.f_DEFAULT_MAXIMUM_RANGE__org_pepstock_charba_client_geo_SizeAxis = 20;
/**@private {ScaleId}*/
SizeAxis.$static_ID__org_pepstock_charba_client_geo_SizeAxis;
/**@private {AxisType}*/
SizeAxis.$static_TYPE__org_pepstock_charba_client_geo_SizeAxis;
IsSizeAxis.$markImplementor(SizeAxis);
$Util.$setClassMetadata(SizeAxis, "org.pepstock.charba.client.geo.SizeAxis");

exports = SizeAxis;

//# sourceMappingURL=SizeAxis.js.map
