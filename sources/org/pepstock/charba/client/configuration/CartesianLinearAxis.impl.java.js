goog.module('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianAxis = goog.require('org.pepstock.charba.client.configuration.CartesianAxis$impl');
const IsLinearAxis = goog.require('org.pepstock.charba.client.configuration.IsLinearAxis$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearTick$impl');
let IsNumericAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.IsNumericAxis$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');

/**
 * @extends {CartesianAxis<CartesianLinearTick>}
 * @implements {IsLinearAxis}
 */
class CartesianLinearAxis extends CartesianAxis {
 /** @protected */
 constructor() {
  super();
  /**@type {CartesianLinearTick}*/
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianLinearAxis_;
 }
 //Factory method corresponding to constructor 'CartesianLinearAxis(IsChart)'.
 /** @return {!CartesianLinearAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  CartesianLinearAxis.$clinit();
  let $instance = new CartesianLinearAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'CartesianLinearAxis(IsChart)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(chart, AxisType.f_LINEAR__org_pepstock_charba_client_enums_AxisType.m_getDefaultScaleId__());
 }
 //Factory method corresponding to constructor 'CartesianLinearAxis(IsChart, String)'.
 /** @return {!CartesianLinearAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  CartesianLinearAxis.$clinit();
  let $instance = new CartesianLinearAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__java_lang_String(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianLinearAxis(IsChart, String)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(chart, IsScaleId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'CartesianLinearAxis(IsChart, IsScaleId)'.
 /** @return {!CartesianLinearAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(/** IsChart */ chart, /** IsScaleId */ id) {
  CartesianLinearAxis.$clinit();
  let $instance = new CartesianLinearAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianLinearAxis(IsChart, IsScaleId)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId(/** IsChart */ chart, /** IsScaleId */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, null);
 }
 //Factory method corresponding to constructor 'CartesianLinearAxis(IsChart, AxisKind)'.
 /** @return {!CartesianLinearAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  CartesianLinearAxis.$clinit();
  let $instance = new CartesianLinearAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(chart, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianLinearAxis(IsChart, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, DefaultScaleId.m_getByAxisKind__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_enums_DefaultScaleId(kind, AxisType.f_LINEAR__org_pepstock_charba_client_enums_AxisType.m_getDefaultScaleId__()), kind);
 }
 //Factory method corresponding to constructor 'CartesianLinearAxis(IsChart, String, AxisKind)'.
 /** @return {!CartesianLinearAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  CartesianLinearAxis.$clinit();
  let $instance = new CartesianLinearAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianLinearAxis(IsChart, String, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, IsScaleId.m_create__java_lang_String(id), kind);
 }
 //Factory method corresponding to constructor 'CartesianLinearAxis(IsChart, IsScaleId, AxisKind)'.
 /** @return {!CartesianLinearAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** IsScaleId */ id, /** AxisKind */ kind) {
  CartesianLinearAxis.$clinit();
  let $instance = new CartesianLinearAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianLinearAxis(IsChart, IsScaleId, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLinearAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** IsScaleId */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, AxisType.f_LINEAR__org_pepstock_charba_client_enums_AxisType, Key.m_isValid__org_pepstock_charba_client_commons_Key(kind) ? kind : DefaultScaleId.m_getAxisKindByScaleId__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_enums_AxisKind(id, AxisKind.f_Y__org_pepstock_charba_client_enums_AxisKind));
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianLinearAxis_ = CartesianLinearTick.$create__org_pepstock_charba_client_configuration_Axis(this);
 }
 /** @override @return {Axis} */
 m_getAxisElement__() {
  return this;
 }
 /** @override @return {CartesianLinearTick} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_configuration_CartesianLinearAxis_;
 }
 
 m_setGrace__int(/** number */ grace) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setGrace__int(grace);
 }
 /** @return {number} */
 m_getGrace__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrace__();
 }
 
 m_setGraceAsPercentage__java_lang_String(/** ?string */ grace) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setGraceAsPercentage__java_lang_String(grace);
 }
 /** @return {?string} */
 m_getGraceAsPercentage__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGraceAsPercentage__();
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
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isBeginAtZero__() {
  return IsLinearAxis.m_isBeginAtZero__$default__org_pepstock_charba_client_configuration_IsLinearAxis(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBeginAtZero__boolean(/** boolean */ arg0) {
  IsLinearAxis.m_setBeginAtZero__$default__org_pepstock_charba_client_configuration_IsLinearAxis__boolean(this, arg0);
 }
 
 static $clinit() {
  CartesianLinearAxis.$clinit = () =>{};
  CartesianLinearAxis.$loadModules();
  CartesianAxis.$clinit();
  IsLinearAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianLinearAxis;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  CartesianLinearTick = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearTick$impl');
  IsNumericAxis = goog.module.get('org.pepstock.charba.client.configuration.IsNumericAxis$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.enums.AxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
 }
}
IsLinearAxis.$markImplementor(CartesianLinearAxis);
$Util.$setClassMetadata(CartesianLinearAxis, "org.pepstock.charba.client.configuration.CartesianLinearAxis");

exports = CartesianLinearAxis;

//# sourceMappingURL=CartesianLinearAxis.js.map
