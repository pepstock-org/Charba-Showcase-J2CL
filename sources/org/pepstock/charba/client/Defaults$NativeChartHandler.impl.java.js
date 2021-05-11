goog.module('org.pepstock.charba.client.Defaults.NativeChartHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianTimeAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
let Scales = goog.forwardDeclare('org.pepstock.charba.client.configuration.Scales$impl');
let ScalesOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ScalesOptions$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class NativeChartHandler extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeChartHandler} */
 static $create__() {
  NativeChartHandler.$clinit();
  let $instance = new NativeChartHandler();
  $instance.$ctor__org_pepstock_charba_client_Defaults_NativeChartHandler__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Defaults_NativeChartHandler__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(Defaults.f_ID__org_pepstock_charba_client_Defaults);
 }
 /** @override */
 m_onConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && $Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_MULTI__org_pepstock_charba_client_ScaleType, chart.m_getType__().m_scaleType__()) && ScalesOptions.$isInstance(chart.m_getOptions__())) {
   let options = /**@type {ScalesOptions}*/ ($Casts.$to(chart.m_getOptions__(), ScalesOptions));
   let locale = chart.m_getOptions__().m_getLocale__();
   if (!$Equality.$same(locale, null)) {
    this.m_applyLocaleToTimeScales__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_intl_CLocale_$p_org_pepstock_charba_client_Defaults_NativeChartHandler(options.m_getScales__(), locale);
   }
  }
 }
 
 m_applyLocaleToTimeScales__org_pepstock_charba_client_configuration_Scales__org_pepstock_charba_client_intl_CLocale_$p_org_pepstock_charba_client_Defaults_NativeChartHandler(/** Scales */ scales, /** CLocale */ locale) {
  for (let $iterator = scales.m_getAxes__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let axis = /**@type {Axis}*/ ($Casts.$to($iterator.m_next__(), Axis));
   {
    if (CartesianTimeAxis.$isInstance(axis)) {
     let timeAxis = /**@type {CartesianTimeAxis}*/ ($Casts.$to(axis, CartesianTimeAxis));
     let dateAdapterOptionsLocale = timeAxis.m_getAdapters__().m_getDate__().m_getLocale__();
     if ($Equality.$same(dateAdapterOptionsLocale, null)) {
      timeAxis.m_getAdapters__().m_getDate__().m_setLocale__org_pepstock_charba_client_intl_CLocale(locale);
     }
    }
   }
  }
 }
 /** @override */
 m_onAfterInit__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Chart(/** IsChart */ chart, /** Chart */ nativeChart) {
  Charts.m_addNative__org_pepstock_charba_client_Chart(nativeChart);
 }
 
 static $clinit() {
  NativeChartHandler.$clinit = () =>{};
  NativeChartHandler.$loadModules();
  AbstractPlugin.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeChartHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianTimeAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
  ScalesOptions = goog.module.get('org.pepstock.charba.client.configuration.ScalesOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(NativeChartHandler, "org.pepstock.charba.client.Defaults$NativeChartHandler");

exports = NativeChartHandler;

//# sourceMappingURL=Defaults$NativeChartHandler.js.map
