goog.module('org.pepstock.charba.client.configuration.StackedOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Scales = goog.forwardDeclare('org.pepstock.charba.client.configuration.Scales$impl');
let StackedScales = goog.forwardDeclare('org.pepstock.charba.client.configuration.StackedScales$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class StackedOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {StackedScales}*/
  this.f_scales__org_pepstock_charba_client_configuration_StackedOptions_;
 }
 //Factory method corresponding to constructor 'StackedOptions(IsChart, IsDefaultScaledOptions, boolean)'.
 /** @return {!StackedOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** boolean */ onlyYScaled) {
  StackedOptions.$clinit();
  let $instance = new StackedOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_StackedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(chart, defaultValues, onlyYScaled);
  return $instance;
 }
 //Initialization from constructor 'StackedOptions(IsChart, IsDefaultScaledOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_configuration_StackedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** boolean */ onlyYScaled) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(chart, defaultValues, false);
  this.f_scales__org_pepstock_charba_client_configuration_StackedOptions_ = StackedScales.$create__org_pepstock_charba_client_configuration_ScalesOptions(this);
  this.f_scales__org_pepstock_charba_client_configuration_StackedOptions_.m_setOnlyYAxis__boolean(onlyYScaled);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(chart);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(chart);
  this.f_scales__org_pepstock_charba_client_configuration_StackedOptions_.m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
 }
 //Factory method corresponding to constructor 'StackedOptions(IsChart, IsDefaultScaledOptions)'.
 /** @return {!StackedOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  StackedOptions.$clinit();
  let $instance = new StackedOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_StackedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'StackedOptions(IsChart, IsDefaultScaledOptions)'.
 
 $ctor__org_pepstock_charba_client_configuration_StackedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_StackedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(chart, defaultValues, false);
 }
 /** @override @return {Scales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_configuration_StackedOptions_;
 }
 
 static $clinit() {
  StackedOptions.$clinit = () =>{};
  StackedOptions.$loadModules();
  ScalesOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackedOptions;
 }
 
 static $loadModules() {
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  StackedScales = goog.module.get('org.pepstock.charba.client.configuration.StackedScales$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(StackedOptions, "org.pepstock.charba.client.configuration.StackedOptions");

exports = StackedOptions;

//# sourceMappingURL=StackedOptions.js.map
