goog.module('org.pepstock.charba.client.configuration.RadialAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Axis = goog.require('org.pepstock.charba.client.configuration.Axis$impl');
const IsLinearAxis = goog.require('org.pepstock.charba.client.configuration.IsLinearAxis$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Grid = goog.forwardDeclare('org.pepstock.charba.client.configuration.Grid$impl');
let IsNumericAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.IsNumericAxis$impl');
let RadialAngleLines = goog.forwardDeclare('org.pepstock.charba.client.configuration.RadialAngleLines$impl');
let RadialLinearTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.RadialLinearTick$impl');
let RadialPointLabels = goog.forwardDeclare('org.pepstock.charba.client.configuration.RadialPointLabels$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsLinearAxis}
 */
class RadialAxis extends Axis {
 /** @protected */
 constructor() {
  super();
  /**@type {Grid}*/
  this.f_grid__org_pepstock_charba_client_configuration_RadialAxis_;
  /**@type {RadialLinearTick}*/
  this.f_ticks__org_pepstock_charba_client_configuration_RadialAxis_;
  /**@type {RadialAngleLines}*/
  this.f_angleLines__org_pepstock_charba_client_configuration_RadialAxis_;
  /**@type {RadialPointLabels}*/
  this.f_pointLabels__org_pepstock_charba_client_configuration_RadialAxis_;
 }
 /** @return {!RadialAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  RadialAxis.$clinit();
  let $instance = new RadialAxis();
  $instance.$ctor__org_pepstock_charba_client_configuration_RadialAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_RadialAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, DefaultScaleId.f_R__org_pepstock_charba_client_enums_DefaultScaleId, AxisType.f_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType, AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind);
  this.f_pointLabels__org_pepstock_charba_client_configuration_RadialAxis_ = RadialPointLabels.$create__org_pepstock_charba_client_configuration_Axis(this);
  this.f_grid__org_pepstock_charba_client_configuration_RadialAxis_ = Grid.$create__org_pepstock_charba_client_configuration_Axis(this);
  this.f_ticks__org_pepstock_charba_client_configuration_RadialAxis_ = RadialLinearTick.$create__org_pepstock_charba_client_configuration_Axis(this);
  this.f_angleLines__org_pepstock_charba_client_configuration_RadialAxis_ = RadialAngleLines.$create__org_pepstock_charba_client_configuration_Axis(this);
 }
 /** @override @return {Axis} */
 m_getAxisElement__() {
  return this;
 }
 /** @return {RadialLinearTick} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_configuration_RadialAxis_;
 }
 /** @return {Grid} */
 m_getGrid__() {
  return this.f_grid__org_pepstock_charba_client_configuration_RadialAxis_;
 }
 /** @return {RadialAngleLines} */
 m_getAngleLines__() {
  return this.f_angleLines__org_pepstock_charba_client_configuration_RadialAxis_;
 }
 /** @return {RadialPointLabels} */
 m_getPointLabels__() {
  return this.f_pointLabels__org_pepstock_charba_client_configuration_RadialAxis_;
 }
 
 m_setAnimate__boolean(/** boolean */ animate) {
  /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_setAnimate__boolean(animate);
 }
 /** @return {boolean} */
 m_isAnimate__() {
  return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_isAnimate__();
 }
 
 m_setStartAngle__double(/** number */ startAngle) {
  /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_setStartAngle__double(startAngle);
 }
 /** @return {number} */
 m_getStartAngle__() {
  return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getStartAngle__();
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
  RadialAxis.$clinit = () =>{};
  RadialAxis.$loadModules();
  Axis.$clinit();
  IsLinearAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadialAxis;
 }
 
 static $loadModules() {
  Grid = goog.module.get('org.pepstock.charba.client.configuration.Grid$impl');
  IsNumericAxis = goog.module.get('org.pepstock.charba.client.configuration.IsNumericAxis$impl');
  RadialAngleLines = goog.module.get('org.pepstock.charba.client.configuration.RadialAngleLines$impl');
  RadialLinearTick = goog.module.get('org.pepstock.charba.client.configuration.RadialLinearTick$impl');
  RadialPointLabels = goog.module.get('org.pepstock.charba.client.configuration.RadialPointLabels$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.enums.AxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsLinearAxis.$markImplementor(RadialAxis);
$Util.$setClassMetadata(RadialAxis, "org.pepstock.charba.client.configuration.RadialAxis");

exports = RadialAxis;

//# sourceMappingURL=RadialAxis.js.map
