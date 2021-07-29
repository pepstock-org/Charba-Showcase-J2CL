goog.module('org.pepstock.charba.client.configuration.CartesianLogarithmicAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianAxis = goog.require('org.pepstock.charba.client.configuration.CartesianAxis$impl');
const IsNumericAxis = goog.require('org.pepstock.charba.client.configuration.IsNumericAxis$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let CartesianLogarithmicTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLogarithmicTick$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ChartAxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartAxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @extends {CartesianAxis<CartesianLogarithmicTick>}
 * @implements {IsNumericAxis}
 */
class CartesianLogarithmicAxis extends CartesianAxis {
 /** @protected */
 constructor() {
  super();
  /**@type {CartesianLogarithmicTick}*/
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis_;
 }
 //Factory method corresponding to constructor 'CartesianLogarithmicAxis(IsChart)'.
 /** @return {!CartesianLogarithmicAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  CartesianLogarithmicAxis.$clinit();
  let $instance = new CartesianLogarithmicAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'CartesianLogarithmicAxis(IsChart)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, ChartAxisType.f_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType.m_getDefaultScaleId__());
 }
 //Factory method corresponding to constructor 'CartesianLogarithmicAxis(IsChart, String)'.
 /** @return {!CartesianLogarithmicAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  CartesianLogarithmicAxis.$clinit();
  let $instance = new CartesianLogarithmicAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__java_lang_String(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianLogarithmicAxis(IsChart, String)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, ScaleId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'CartesianLogarithmicAxis(IsChart, ScaleId)'.
 /** @return {!CartesianLogarithmicAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(/** IsChart */ chart, /** ScaleId */ id) {
  CartesianLogarithmicAxis.$clinit();
  let $instance = new CartesianLogarithmicAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianLogarithmicAxis(IsChart, ScaleId)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(/** IsChart */ chart, /** ScaleId */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, null);
 }
 //Factory method corresponding to constructor 'CartesianLogarithmicAxis(IsChart, AxisKind)'.
 /** @return {!CartesianLogarithmicAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  CartesianLogarithmicAxis.$clinit();
  let $instance = new CartesianLogarithmicAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(chart, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianLogarithmicAxis(IsChart, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, DefaultScaleId.m_getByAxisKind__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_options_ScaleId(kind, ChartAxisType.f_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType.m_getDefaultScaleId__()), kind);
 }
 //Factory method corresponding to constructor 'CartesianLogarithmicAxis(IsChart, String, AxisKind)'.
 /** @return {!CartesianLogarithmicAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  CartesianLogarithmicAxis.$clinit();
  let $instance = new CartesianLogarithmicAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianLogarithmicAxis(IsChart, String, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, ScaleId.m_create__java_lang_String(id), kind);
 }
 //Factory method corresponding to constructor 'CartesianLogarithmicAxis(IsChart, ScaleId, AxisKind)'.
 /** @return {!CartesianLogarithmicAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisKind */ kind) {
  CartesianLogarithmicAxis.$clinit();
  let $instance = new CartesianLogarithmicAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianLogarithmicAxis(IsChart, ScaleId, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, ChartAxisType.f_LOGARITHMIC__org_pepstock_charba_client_enums_ChartAxisType, Key.m_isValid__org_pepstock_charba_client_commons_Key(kind) ? kind : DefaultScaleId.m_getAxisKindByScaleId__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_enums_AxisKind(id, AxisKind.f_Y__org_pepstock_charba_client_enums_AxisKind));
 }
 //Factory method corresponding to constructor 'CartesianLogarithmicAxis(IsChart, ScaleId, AxisType, AxisKind)'.
 /** @return {!CartesianLogarithmicAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  CartesianLogarithmicAxis.$clinit();
  let $instance = new CartesianLogarithmicAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, type, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianLogarithmicAxis(IsChart, ScaleId, AxisType, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, type, kind);
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis_ = CartesianLogarithmicTick.$create__org_pepstock_charba_client_configuration_Axis(this);
 }
 /** @override @return {CartesianLogarithmicTick} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_configuration_CartesianLogarithmicAxis_;
 }
 /** @override @return {Axis} */
 m_getAxisElement__() {
  return this;
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMax__() {
  return IsNumericAxis.m_getMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMin__() {
  return IsNumericAxis.m_getMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSuggestedMax__() {
  return IsNumericAxis.m_getSuggestedMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSuggestedMin__() {
  return IsNumericAxis.m_getSuggestedMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMax__double(/** number */ arg0) {
  IsNumericAxis.m_setMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMin__double(/** number */ arg0) {
  IsNumericAxis.m_setMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSuggestedMax__double(/** number */ arg0) {
  IsNumericAxis.m_setSuggestedMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSuggestedMin__double(/** number */ arg0) {
  IsNumericAxis.m_setSuggestedMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(this, arg0);
 }
 
 static $clinit() {
  CartesianLogarithmicAxis.$clinit = () =>{};
  CartesianLogarithmicAxis.$loadModules();
  CartesianAxis.$clinit();
  IsNumericAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianLogarithmicAxis;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  CartesianLogarithmicTick = goog.module.get('org.pepstock.charba.client.configuration.CartesianLogarithmicTick$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  ChartAxisType = goog.module.get('org.pepstock.charba.client.enums.ChartAxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
 }
}
IsNumericAxis.$markImplementor(CartesianLogarithmicAxis);
$Util.$setClassMetadata(CartesianLogarithmicAxis, "org.pepstock.charba.client.configuration.CartesianLogarithmicAxis");

exports = CartesianLogarithmicAxis;

//# sourceMappingURL=CartesianLogarithmicAxis.js.map
