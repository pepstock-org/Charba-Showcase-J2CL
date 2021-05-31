goog.module('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDefaultOptions = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');

/**
 * @abstract
 */
class AbstractDefaultChartOptions extends AbstractDefaultOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultOptions}*/
  this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultOptions);
  this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_ = defaultOptions;
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getEvents__();
 }
 /** @override @return {CLocale} */
 m_getLocale__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getLocale__();
 }
 /** @override @return {boolean} */
 m_isResponsive__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_isResponsive__();
 }
 /** @override @return {boolean} */
 m_isMaintainAspectRatio__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_isMaintainAspectRatio__();
 }
 /** @override @return {number} */
 m_getAspectRatio__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getAspectRatio__();
 }
 /** @override @return {number} */
 m_getResizeDelay__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getResizeDelay__();
 }
 /** @override @return {number} */
 m_getDevicePixelRatio__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getDevicePixelRatio__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getColorAsString__();
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getBorderColorAsString__();
 }
 /** @override @return {boolean} */
 m_isShowLine__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_isShowLine__();
 }
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_isSpanGaps__();
 }
 /** @override @return {number} */
 m_getCutout__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getCutout__();
 }
 /** @override @return {?string} */
 m_getCutoutPercentage__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getCutoutPercentage__();
 }
 /** @override @return {number} */
 m_getRadius__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getRadius__();
 }
 /** @override @return {?string} */
 m_getRadiusPercentage__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getRadiusPercentage__();
 }
 /** @override @return {number} */
 m_getRotation__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getRotation__();
 }
 /** @override @return {number} */
 m_getCircumference__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getCircumference__();
 }
 /** @override @return {boolean} */
 m_isDrawOnAttach__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_isDrawOnAttach__();
 }
 /** @override @return {boolean} */
 m_isDestroyOnDetach__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_isDestroyOnDetach__();
 }
 /** @override @return {boolean} */
 m_isSkipNull__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_isSkipNull__();
 }
 /** @override @return {IndexAxis} */
 m_getIndexAxis__() {
  return this.f_options__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartOptions_.m_getIndexAxis__();
 }
 
 static $clinit() {
  AbstractDefaultChartOptions.$clinit = () =>{};
  AbstractDefaultChartOptions.$loadModules();
  AbstractDefaultOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultChartOptions;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(AbstractDefaultChartOptions, "org.pepstock.charba.client.defaults.chart.AbstractDefaultChartOptions");

exports = AbstractDefaultChartOptions;

//# sourceMappingURL=AbstractDefaultChartOptions.js.map
