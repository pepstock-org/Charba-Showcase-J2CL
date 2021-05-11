goog.module('org.pepstock.charba.client.configuration.RadarOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasLineOptions = goog.require('org.pepstock.charba.client.configuration.HasLineOptions$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

/**
 * @implements {HasLineOptions}
 */
class RadarOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!RadarOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  RadarOptions.$clinit();
  let $instance = new RadarOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_RadarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_RadarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 /** @override @return {ConfigurationOptions} */
 m_getOptions__() {
  return this;
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowLine__() {
  return HasLineOptions.m_isShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return HasLineOptions.m_isSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowLine__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  RadarOptions.$clinit = () =>{};
  RadarOptions.$loadModules();
  ScalesOptions.$clinit();
  HasLineOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadarOptions;
 }
 
 static $loadModules() {}
}
HasLineOptions.$markImplementor(RadarOptions);
$Util.$setClassMetadata(RadarOptions, "org.pepstock.charba.client.configuration.RadarOptions");

exports = RadarOptions;

//# sourceMappingURL=RadarOptions.js.map
