goog.module('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianTimeAxis = goog.require('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');

class CartesianTimeSeriesAxis extends CartesianTimeAxis {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'CartesianTimeSeriesAxis(IsChart)'.
 /** @return {!CartesianTimeSeriesAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  CartesianTimeSeriesAxis.$clinit();
  let $instance = new CartesianTimeSeriesAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeSeriesAxis(IsChart)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(chart, AxisType.f_TIMESERIES__org_pepstock_charba_client_enums_AxisType.m_getDefaultScaleId__());
 }
 //Factory method corresponding to constructor 'CartesianTimeSeriesAxis(IsChart, String)'.
 /** @return {!CartesianTimeSeriesAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  CartesianTimeSeriesAxis.$clinit();
  let $instance = new CartesianTimeSeriesAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__java_lang_String(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeSeriesAxis(IsChart, String)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(chart, IsScaleId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'CartesianTimeSeriesAxis(IsChart, IsScaleId)'.
 /** @return {!CartesianTimeSeriesAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(/** IsChart */ chart, /** IsScaleId */ id) {
  CartesianTimeSeriesAxis.$clinit();
  let $instance = new CartesianTimeSeriesAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeSeriesAxis(IsChart, IsScaleId)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(/** IsChart */ chart, /** IsScaleId */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, null);
 }
 //Factory method corresponding to constructor 'CartesianTimeSeriesAxis(IsChart, AxisKind)'.
 /** @return {!CartesianTimeSeriesAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  CartesianTimeSeriesAxis.$clinit();
  let $instance = new CartesianTimeSeriesAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(chart, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeSeriesAxis(IsChart, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, DefaultScaleId.m_getByAxisKind__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_enums_DefaultScaleId(kind, AxisType.f_TIMESERIES__org_pepstock_charba_client_enums_AxisType.m_getDefaultScaleId__()), kind);
 }
 //Factory method corresponding to constructor 'CartesianTimeSeriesAxis(IsChart, String, AxisKind)'.
 /** @return {!CartesianTimeSeriesAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  CartesianTimeSeriesAxis.$clinit();
  let $instance = new CartesianTimeSeriesAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeSeriesAxis(IsChart, String, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, IsScaleId.m_create__java_lang_String(id), kind);
 }
 //Factory method corresponding to constructor 'CartesianTimeSeriesAxis(IsChart, IsScaleId, AxisKind)'.
 /** @return {!CartesianTimeSeriesAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** IsScaleId */ id, /** AxisKind */ kind) {
  CartesianTimeSeriesAxis.$clinit();
  let $instance = new CartesianTimeSeriesAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeSeriesAxis(IsChart, IsScaleId, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** IsScaleId */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, AxisType.f_TIMESERIES__org_pepstock_charba_client_enums_AxisType, Key.m_isValid__org_pepstock_charba_client_commons_Key(kind) ? kind : DefaultScaleId.m_getAxisKindByScaleId__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_enums_AxisKind(id, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind));
 }
 
 static $clinit() {
  CartesianTimeSeriesAxis.$clinit = () =>{};
  CartesianTimeSeriesAxis.$loadModules();
  CartesianTimeAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianTimeSeriesAxis;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.enums.AxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
 }
}
$Util.$setClassMetadata(CartesianTimeSeriesAxis, "org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis");

exports = CartesianTimeSeriesAxis;

//# sourceMappingURL=CartesianTimeSeriesAxis.js.map
