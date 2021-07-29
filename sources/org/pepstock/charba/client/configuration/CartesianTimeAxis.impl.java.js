goog.module('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianAxis = goog.require('org.pepstock.charba.client.configuration.CartesianAxis$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Adapters = goog.forwardDeclare('org.pepstock.charba.client.configuration.Adapters$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let CartesianTimeTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeTick$impl');
let Time = goog.forwardDeclare('org.pepstock.charba.client.configuration.Time$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ChartAxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartAxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @extends {CartesianAxis<CartesianTimeTick>}
 */
class CartesianTimeAxis extends CartesianAxis {
 /** @protected */
 constructor() {
  super();
  /**@type {CartesianTimeTick}*/
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianTimeAxis_;
  /**@type {Time}*/
  this.f_time__org_pepstock_charba_client_configuration_CartesianTimeAxis_;
  /**@type {Adapters}*/
  this.f_adapters__org_pepstock_charba_client_configuration_CartesianTimeAxis_;
 }
 //Factory method corresponding to constructor 'CartesianTimeAxis(IsChart)'.
 /** @return {!CartesianTimeAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  CartesianTimeAxis.$clinit();
  let $instance = new CartesianTimeAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeAxis(IsChart)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, ChartAxisType.f_TIME__org_pepstock_charba_client_enums_ChartAxisType.m_getDefaultScaleId__());
 }
 //Factory method corresponding to constructor 'CartesianTimeAxis(IsChart, String)'.
 /** @return {!CartesianTimeAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  CartesianTimeAxis.$clinit();
  let $instance = new CartesianTimeAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__java_lang_String(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeAxis(IsChart, String)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, ScaleId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'CartesianTimeAxis(IsChart, ScaleId)'.
 /** @return {!CartesianTimeAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(/** IsChart */ chart, /** ScaleId */ id) {
  CartesianTimeAxis.$clinit();
  let $instance = new CartesianTimeAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeAxis(IsChart, ScaleId)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(/** IsChart */ chart, /** ScaleId */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, null);
 }
 //Factory method corresponding to constructor 'CartesianTimeAxis(IsChart, AxisKind)'.
 /** @return {!CartesianTimeAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  CartesianTimeAxis.$clinit();
  let $instance = new CartesianTimeAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(chart, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeAxis(IsChart, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, DefaultScaleId.m_getByAxisKind__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_options_ScaleId(kind, ChartAxisType.f_TIME__org_pepstock_charba_client_enums_ChartAxisType.m_getDefaultScaleId__()), kind);
 }
 //Factory method corresponding to constructor 'CartesianTimeAxis(IsChart, String, AxisKind)'.
 /** @return {!CartesianTimeAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  CartesianTimeAxis.$clinit();
  let $instance = new CartesianTimeAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeAxis(IsChart, String, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, ScaleId.m_create__java_lang_String(id), kind);
 }
 //Factory method corresponding to constructor 'CartesianTimeAxis(IsChart, ScaleId, AxisKind)'.
 /** @return {!CartesianTimeAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisKind */ kind) {
  CartesianTimeAxis.$clinit();
  let $instance = new CartesianTimeAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeAxis(IsChart, ScaleId, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, ChartAxisType.f_TIME__org_pepstock_charba_client_enums_ChartAxisType, Key.m_isValid__org_pepstock_charba_client_commons_Key(kind) ? kind : DefaultScaleId.m_getAxisKindByScaleId__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_enums_AxisKind(id, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind));
 }
 //Factory method corresponding to constructor 'CartesianTimeAxis(IsChart, ScaleId, AxisType, AxisKind)'.
 /** @return {!CartesianTimeAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  CartesianTimeAxis.$clinit();
  let $instance = new CartesianTimeAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, type, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianTimeAxis(IsChart, ScaleId, AxisType, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, type, kind);
  this.f_time__org_pepstock_charba_client_configuration_CartesianTimeAxis_ = Time.$create__org_pepstock_charba_client_configuration_Axis(this);
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianTimeAxis_ = CartesianTimeTick.$create__org_pepstock_charba_client_configuration_Axis(this);
  this.f_adapters__org_pepstock_charba_client_configuration_CartesianTimeAxis_ = Adapters.$create__org_pepstock_charba_client_configuration_Axis(this);
 }
 /** @override @return {CartesianTimeTick} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_configuration_CartesianTimeAxis_;
 }
 /** @return {Time} */
 m_getTime__() {
  return this.f_time__org_pepstock_charba_client_configuration_CartesianTimeAxis_;
 }
 /** @return {Adapters} */
 m_getAdapters__() {
  return this.f_adapters__org_pepstock_charba_client_configuration_CartesianTimeAxis_;
 }
 
 m_setMax__java_util_Date(/** Date */ max) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMax__java_util_Date(max);
 }
 /** @return {Date} */
 m_getMax__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMaxAsDate__();
 }
 
 m_setMin__java_util_Date(/** Date */ min) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMin__java_util_Date(min);
 }
 /** @return {Date} */
 m_getMin__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMinAsDate__();
 }
 
 static $clinit() {
  CartesianTimeAxis.$clinit = () =>{};
  CartesianTimeAxis.$loadModules();
  CartesianAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianTimeAxis;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Adapters = goog.module.get('org.pepstock.charba.client.configuration.Adapters$impl');
  CartesianTimeTick = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeTick$impl');
  Time = goog.module.get('org.pepstock.charba.client.configuration.Time$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  ChartAxisType = goog.module.get('org.pepstock.charba.client.enums.ChartAxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
 }
}
$Util.$setClassMetadata(CartesianTimeAxis, "org.pepstock.charba.client.configuration.CartesianTimeAxis");

exports = CartesianTimeAxis;

//# sourceMappingURL=CartesianTimeAxis.js.map
