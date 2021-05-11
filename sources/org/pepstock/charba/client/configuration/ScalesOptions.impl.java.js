goog.module('org.pepstock.charba.client.configuration.ScalesOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptions = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Scales = goog.forwardDeclare('org.pepstock.charba.client.configuration.Scales$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class ScalesOptions extends ConfigurationOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {Scales}*/
  this.f_scales__org_pepstock_charba_client_configuration_ScalesOptions_;
 }
 //Initialization from constructor 'ScalesOptions(IsChart, IsDefaultScaledOptions)'.
 
 $ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(chart, defaultValues, true);
 }
 //Initialization from constructor 'ScalesOptions(IsChart, IsDefaultScaledOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** boolean */ createScale) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  this.$init___$p_org_pepstock_charba_client_configuration_ScalesOptions();
  if (createScale) {
   this.f_scales__org_pepstock_charba_client_configuration_ScalesOptions_ = Scales.$create__org_pepstock_charba_client_configuration_ScalesOptions(this);
  }
 }
 /** @return {Scales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_configuration_ScalesOptions_;
 }
 /** @override @return {Axis} */
 m_getAxisById__int_$pp_org_pepstock_charba_client_configuration(/** number */ id) {
  let xAxes = this.m_getScales__().m_getAxes__();
  if (!xAxes.isEmpty()) {
   for (let $iterator = xAxes.m_iterator__(); $iterator.m_hasNext__(); ) {
    let axis = /**@type {Axis}*/ ($Casts.$to($iterator.m_next__(), Axis));
    {
     if (axis.m_getCharbaId__() == id) {
      return axis;
     }
    }
   }
  }
  return null;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_ScalesOptions() {
  this.f_scales__org_pepstock_charba_client_configuration_ScalesOptions_ = null;
 }
 
 static $clinit() {
  ScalesOptions.$clinit = () =>{};
  ScalesOptions.$loadModules();
  ConfigurationOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScalesOptions;
 }
 
 static $loadModules() {
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  Scales = goog.module.get('org.pepstock.charba.client.configuration.Scales$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ScalesOptions, "org.pepstock.charba.client.configuration.ScalesOptions");

exports = ScalesOptions;

//# sourceMappingURL=ScalesOptions.js.map
