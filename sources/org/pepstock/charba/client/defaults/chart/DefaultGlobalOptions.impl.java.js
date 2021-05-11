goog.module('org.pepstock.charba.client.defaults.chart.DefaultGlobalOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaledOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
const AbstractDefaultChartOptions = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartOptions$impl');

let GlobalOptions = goog.forwardDeclare('org.pepstock.charba.client.GlobalOptions$impl');
let IsDefaultScales = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScales$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');

/**
 * @implements {IsDefaultScaledOptions}
 */
class DefaultGlobalOptions extends AbstractDefaultChartOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultScaledOptions}*/
  this.f_scalesOptions__org_pepstock_charba_client_defaults_chart_DefaultGlobalOptions_;
 }
 /** @return {!DefaultGlobalOptions} */
 static $create__org_pepstock_charba_client_GlobalOptions(/** GlobalOptions */ globalOptions) {
  DefaultGlobalOptions.$clinit();
  let $instance = new DefaultGlobalOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultGlobalOptions__org_pepstock_charba_client_GlobalOptions(globalOptions);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultGlobalOptions__org_pepstock_charba_client_GlobalOptions(/** GlobalOptions */ globalOptions) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions__org_pepstock_charba_client_defaults_IsDefaultOptions(globalOptions);
  this.f_scalesOptions__org_pepstock_charba_client_defaults_chart_DefaultGlobalOptions_ = DefaultsBuilder.m_get__().m_getScaledOptions__();
 }
 /** @override @return {IsDefaultScales} */
 m_getScales__() {
  return this.f_scalesOptions__org_pepstock_charba_client_defaults_chart_DefaultGlobalOptions_.m_getScales__();
 }
 
 static $clinit() {
  DefaultGlobalOptions.$clinit = () =>{};
  DefaultGlobalOptions.$loadModules();
  AbstractDefaultChartOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultGlobalOptions;
 }
 
 static $loadModules() {
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
 }
}
IsDefaultScaledOptions.$markImplementor(DefaultGlobalOptions);
$Util.$setClassMetadata(DefaultGlobalOptions, "org.pepstock.charba.client.defaults.chart.DefaultGlobalOptions");

exports = DefaultGlobalOptions;

//# sourceMappingURL=DefaultGlobalOptions.js.map
