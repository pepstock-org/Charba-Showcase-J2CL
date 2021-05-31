goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaledOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
const AbstractDefaultChartOptions = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartOptions$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let ChartOptions = goog.forwardDeclare('org.pepstock.charba.client.ChartOptions$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let IsDefaultScales = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScales$impl');
let DefaultChartScales = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartScales$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let ScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ScaledOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultScaledOptions}
 */
class DefaultChartOptions extends AbstractDefaultChartOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultScales}*/
  this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartOptions_;
 }
 //Factory method corresponding to constructor 'DefaultChartOptions(ChartEnvelop)'.
 /** @return {!DefaultChartOptions} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<ExtendedOptions> */ envelop) {
  DefaultChartOptions.$clinit();
  let $instance = new DefaultChartOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DefaultChartOptions(ChartEnvelop)'.
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<ExtendedOptions> */ envelop) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_options_ScaledOptions__org_pepstock_charba_client_Type(/**@type {ExtendedOptions}*/ ($Casts.$to(/**@type {ChartEnvelop<ExtendedOptions>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), ExtendedOptions)), /**@type {ExtendedOptions}*/ ($Casts.$to(/**@type {ChartEnvelop<ExtendedOptions>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), ExtendedOptions)).m_getChart__().m_getType__());
 }
 //Factory method corresponding to constructor 'DefaultChartOptions(ChartOptions)'.
 /** @return {!DefaultChartOptions} */
 static $create__org_pepstock_charba_client_ChartOptions(/** ChartOptions */ chartOptions) {
  DefaultChartOptions.$clinit();
  let $instance = new DefaultChartOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_ChartOptions(chartOptions);
  return $instance;
 }
 //Initialization from constructor 'DefaultChartOptions(ChartOptions)'.
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_ChartOptions(/** ChartOptions */ chartOptions) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_options_ScaledOptions__org_pepstock_charba_client_Type(chartOptions, chartOptions.m_getType__());
 }
 //Factory method corresponding to constructor 'DefaultChartOptions(ScaledOptions, Type)'.
 /** @return {!DefaultChartOptions} */
 static $create__org_pepstock_charba_client_options_ScaledOptions__org_pepstock_charba_client_Type(/** ScaledOptions */ chartOptions, /** Type */ type) {
  let $instance = new DefaultChartOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_options_ScaledOptions__org_pepstock_charba_client_Type(chartOptions, type);
  return $instance;
 }
 //Initialization from constructor 'DefaultChartOptions(ScaledOptions, Type)'.
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartOptions__org_pepstock_charba_client_options_ScaledOptions__org_pepstock_charba_client_Type(/** ScaledOptions */ chartOptions, /** Type */ type) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions__org_pepstock_charba_client_defaults_IsDefaultOptions(chartOptions);
  Type.m_checkIfValid__org_pepstock_charba_client_Type(type);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_NONE__org_pepstock_charba_client_ScaleType, type.m_scaleType__())) {
   this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartOptions_ = DefaultsBuilder.m_get__().m_getScaledOptions__().m_getScales__();
  } else {
   this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartOptions_ = DefaultChartScales.$create__org_pepstock_charba_client_options_Scales(chartOptions.m_getScales__());
  }
 }
 /** @override @return {IsDefaultScales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_defaults_chart_DefaultChartOptions_;
 }
 
 static $clinit() {
  DefaultChartOptions.$clinit = () =>{};
  DefaultChartOptions.$loadModules();
  AbstractDefaultChartOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartOptions;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  DefaultChartScales = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartScales$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsDefaultScaledOptions.$markImplementor(DefaultChartOptions);
$Util.$setClassMetadata(DefaultChartOptions, "org.pepstock.charba.client.defaults.chart.DefaultChartOptions");

exports = DefaultChartOptions;

//# sourceMappingURL=DefaultChartOptions.js.map
