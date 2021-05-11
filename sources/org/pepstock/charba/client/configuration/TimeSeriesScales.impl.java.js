goog.module('org.pepstock.charba.client.configuration.TimeSeriesScales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scales = goog.require('org.pepstock.charba.client.configuration.Scales$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let ScalesOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ScalesOptions$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class TimeSeriesScales extends Scales {
 /** @protected */
 constructor() {
  super();
  /**@type {CartesianTimeSeriesAxis}*/
  this.f_timeAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_;
  /**@type {CartesianLinearAxis}*/
  this.f_linearAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_;
 }
 /** @return {!TimeSeriesScales} */
 static $create__org_pepstock_charba_client_configuration_ScalesOptions(/** ScalesOptions */ options) {
  TimeSeriesScales.$clinit();
  let $instance = new TimeSeriesScales();
  $instance.$ctor__org_pepstock_charba_client_configuration_TimeSeriesScales__org_pepstock_charba_client_configuration_ScalesOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_TimeSeriesScales__org_pepstock_charba_client_configuration_ScalesOptions(/** ScalesOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_configuration_ScalesOptions(options);
  this.f_timeAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_ = CartesianTimeSeriesAxis.$create__org_pepstock_charba_client_IsChart(this.m_getChart__());
  this.f_linearAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_ = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.m_getChart__());
  super.m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([this.f_timeAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_, this.f_linearAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_], Axis)));
 }
 /** @return {CartesianTimeSeriesAxis} */
 m_getTimeAxis__() {
  return this.f_timeAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_;
 }
 /** @return {CartesianLinearAxis} */
 m_getLinearAxis__() {
  return this.f_linearAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_;
 }
 /** @override */
 m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/** Array<Axis> */ axes) {
  if (!$Equality.$same(axes, null) && axes.length > 0) {
   let toStore = /**@type {!Array<Axis>}*/ ($Arrays.$create([axes.length + 1 | 0], Axis));
   $Arrays.$set(toStore, 0, this.f_timeAxis__org_pepstock_charba_client_configuration_TimeSeriesScales_);
   let index = 1;
   for (let $array = axes, $index = 0; $index < $array.length; $index++) {
    let axis = $array[$index];
    {
     Checker.m_assertCheck__boolean__java_lang_String(!$Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind, axis.m_getAxis__()), "Do not set any X axes because TIME axis is already created. Use getTimeAxis to configure it");
     Checker.m_assertCheck__boolean__java_lang_String(!$Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind, axis.m_getAxis__()), "Do not set any radial linear axis to a time series chart");
     $Arrays.$set(toStore, index, axis);
     index = index + 1 | 0;
    }
   }
   super.m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(toStore);
  }
 }
 
 static $clinit() {
  TimeSeriesScales.$clinit = () =>{};
  TimeSeriesScales.$loadModules();
  Scales.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesScales;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  CartesianTimeSeriesAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(TimeSeriesScales, "org.pepstock.charba.client.configuration.TimeSeriesScales");

exports = TimeSeriesScales;

//# sourceMappingURL=TimeSeriesScales.js.map
