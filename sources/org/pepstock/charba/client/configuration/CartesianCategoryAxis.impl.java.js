goog.module('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianAxis = goog.require('org.pepstock.charba.client.configuration.CartesianAxis$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let CartesianCategoryTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryTick$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ChartAxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartAxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CartesianAxis<CartesianCategoryTick>}
 */
class CartesianCategoryAxis extends CartesianAxis {
 /** @protected */
 constructor() {
  super();
  /**@type {CartesianCategoryTick}*/
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianCategoryAxis_;
 }
 //Factory method corresponding to constructor 'CartesianCategoryAxis(IsChart)'.
 /** @return {!CartesianCategoryAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  CartesianCategoryAxis.$clinit();
  let $instance = new CartesianCategoryAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'CartesianCategoryAxis(IsChart)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, ChartAxisType.f_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType.m_getDefaultScaleId__());
 }
 //Factory method corresponding to constructor 'CartesianCategoryAxis(IsChart, String)'.
 /** @return {!CartesianCategoryAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  CartesianCategoryAxis.$clinit();
  let $instance = new CartesianCategoryAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__java_lang_String(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianCategoryAxis(IsChart, String)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__java_lang_String(/** IsChart */ chart, /** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, ScaleId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'CartesianCategoryAxis(IsChart, ScaleId)'.
 /** @return {!CartesianCategoryAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(/** IsChart */ chart, /** ScaleId */ id) {
  CartesianCategoryAxis.$clinit();
  let $instance = new CartesianCategoryAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(chart, id);
  return $instance;
 }
 //Initialization from constructor 'CartesianCategoryAxis(IsChart, ScaleId)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId(/** IsChart */ chart, /** ScaleId */ id) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, null);
 }
 //Factory method corresponding to constructor 'CartesianCategoryAxis(IsChart, AxisKind)'.
 /** @return {!CartesianCategoryAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  CartesianCategoryAxis.$clinit();
  let $instance = new CartesianCategoryAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(chart, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianCategoryAxis(IsChart, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, DefaultScaleId.m_getByAxisKind__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_options_ScaleId(kind, ChartAxisType.f_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType.m_getDefaultScaleId__()), kind);
 }
 //Factory method corresponding to constructor 'CartesianCategoryAxis(IsChart, String, AxisKind)'.
 /** @return {!CartesianCategoryAxis} */
 static $create__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  CartesianCategoryAxis.$clinit();
  let $instance = new CartesianCategoryAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianCategoryAxis(IsChart, String, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ?string */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, ScaleId.m_create__java_lang_String(id), kind);
 }
 //Factory method corresponding to constructor 'CartesianCategoryAxis(IsChart, ScaleId, AxisKind)'.
 /** @return {!CartesianCategoryAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisKind */ kind) {
  CartesianCategoryAxis.$clinit();
  let $instance = new CartesianCategoryAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(chart, id, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianCategoryAxis(IsChart, ScaleId, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, ChartAxisType.f_CATEGORY__org_pepstock_charba_client_enums_ChartAxisType, Key.m_isValid__org_pepstock_charba_client_commons_Key(kind) ? kind : DefaultScaleId.m_getAxisKindByScaleId__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_enums_AxisKind(id, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind));
 }
 //Factory method corresponding to constructor 'CartesianCategoryAxis(IsChart, ScaleId, AxisType, AxisKind)'.
 /** @return {!CartesianCategoryAxis} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  CartesianCategoryAxis.$clinit();
  let $instance = new CartesianCategoryAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, type, kind);
  return $instance;
 }
 //Initialization from constructor 'CartesianCategoryAxis(IsChart, ScaleId, AxisType, AxisKind)'.
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** ScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianAxis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, id, type, kind);
  this.f_ticks__org_pepstock_charba_client_configuration_CartesianCategoryAxis_ = CartesianCategoryTick.$create__org_pepstock_charba_client_configuration_Axis(this);
 }
 /** @override @return {CartesianCategoryTick} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_configuration_CartesianCategoryAxis_;
 }
 
 m_setLabels__arrayOf_java_lang_String(/** Array<?string> */ labels) {
  /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_setLabels__arrayOf_java_lang_String(labels);
 }
 
 m_setLabels__java_util_List(/** List<?string> */ labels) {
  /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_setLabels__java_util_List(labels);
 }
 
 m_setLabels__org_pepstock_charba_client_data_Labels(/** Labels */ labels) {
  /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_setLabels__org_pepstock_charba_client_data_Labels(labels);
 }
 /** @return {Labels} */
 m_getLabels__() {
  return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getLabels__();
 }
 /** @return {Labels} */
 m_getLabels__boolean(/** boolean */ binding) {
  return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getLabels__boolean(binding);
 }
 
 m_setMin__java_lang_String(/** ?string */ min) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMin__java_lang_String(min);
 }
 /** @return {?string} */
 m_getMin__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMinAsString__();
 }
 /** @return {number} */
 m_getMinIndex__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMinIndex__();
 }
 
 m_setMinIndex__int(/** number */ min) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMinIndex__int(min);
 }
 
 m_setMax__java_lang_String(/** ?string */ max) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMax__java_lang_String(max);
 }
 /** @return {?string} */
 m_getMax__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMaxAsString__();
 }
 
 m_setMaxIndex__int(/** number */ max) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMaxIndex__int(max);
 }
 /** @return {number} */
 m_getMaxIndex__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMaxIndex__();
 }
 
 static $clinit() {
  CartesianCategoryAxis.$clinit = () =>{};
  CartesianCategoryAxis.$loadModules();
  CartesianAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianCategoryAxis;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  CartesianCategoryTick = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryTick$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  ChartAxisType = goog.module.get('org.pepstock.charba.client.enums.ChartAxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CartesianCategoryAxis, "org.pepstock.charba.client.configuration.CartesianCategoryAxis");

exports = CartesianCategoryAxis;

//# sourceMappingURL=CartesianCategoryAxis.js.map
