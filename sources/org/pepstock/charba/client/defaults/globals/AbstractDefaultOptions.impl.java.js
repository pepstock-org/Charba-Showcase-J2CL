goog.module('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let IsDefaultDatasets = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDatasets$impl');
let IsDefaultDecimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDecimation$impl');
let IsDefaultElements = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultElements$impl');
let IsDefaultFiller = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFiller$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultInteraction = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');
let IsDefaultLayout = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLayout$impl');
let IsDefaultLegend = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegend$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let IsDefaultTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');
let IsDefaultTooltips = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTooltips$impl');
let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');
let DefaultChartAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartAnimation$impl');
let DefaultChartAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartAnimations$impl');
let DefaultChartDatasets = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartDatasets$impl');
let DefaultChartDecimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartDecimation$impl');
let DefaultChartElements = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartElements$impl');
let DefaultChartFiller = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartFiller$impl');
let DefaultChartFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartFont$impl');
let DefaultChartHover = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartHover$impl');
let DefaultChartInteraction = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartInteraction$impl');
let DefaultChartLayout = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartLayout$impl');
let DefaultChartLegend = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartLegend$impl');
let DefaultChartPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartPlugins$impl');
let DefaultChartTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartTitle$impl');
let DefaultChartTooltips = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartTooltips$impl');
let DefaultChartTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartTransitions$impl');
let DefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
let DefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');
let DefaultDatasets = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultDatasets$impl');
let DefaultDecimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultDecimation$impl');
let DefaultElements = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultElements$impl');
let DefaultFiller = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultFiller$impl');
let DefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultFont$impl');
let DefaultHover = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultHover$impl');
let DefaultInteraction = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultInteraction$impl');
let DefaultLayout = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultLayout$impl');
let DefaultLegend = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultLegend$impl');
let DefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPlugins$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let DefaultTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTitle$impl');
let DefaultTooltips = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips$impl');
let DefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');

/**
 * @abstract
 * @implements {IsDefaultOptions}
 */
class AbstractDefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimation}*/
  this.f_animation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultAnimations}*/
  this.f_animations__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultTransitions}*/
  this.f_transitions__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultInteraction}*/
  this.f_hover__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultInteraction}*/
  this.f_interaction__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultElements}*/
  this.f_elements__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultLayout}*/
  this.f_layout__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultTitle}*/
  this.f_title__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultLegend}*/
  this.f_legend__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultTooltips}*/
  this.f_tooltips__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultPlugins}*/
  this.f_plugins__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultDatasets}*/
  this.f_datasets__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultDecimation}*/
  this.f_decimation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
  /**@type {IsDefaultFiller}*/
  this.f_filler__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 //Initialization from constructor 'AbstractDefaultOptions()'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions__() {
  this.$ctor__java_lang_Object__();
  this.f_animation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultAnimation.$create__();
  this.f_animations__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultAnimations.$create__();
  this.f_transitions__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultTransitions.$create__();
  this.f_hover__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultHover.$create__();
  this.f_interaction__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultInteraction.$create__();
  this.f_elements__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultElements.$create__();
  this.f_layout__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultLayout.$create__();
  this.f_title__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultTitle.$create__();
  this.f_legend__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultLegend.$create__();
  this.f_tooltips__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultTooltips.$create__();
  this.f_plugins__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultPlugins.$create__();
  this.f_datasets__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultDatasets.$create__();
  this.f_font__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultFont.$create__();
  this.f_decimation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultDecimation.$create__();
  this.f_filler__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultFiller.$create__();
 }
 //Initialization from constructor 'AbstractDefaultOptions(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ options) {
  this.$ctor__java_lang_Object__();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(options, "Default options argument");
  this.f_animation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartAnimation.$create__org_pepstock_charba_client_defaults_IsDefaultAnimation(options.m_getAnimation__());
  this.f_animations__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartAnimations.$create__org_pepstock_charba_client_defaults_IsDefaultAnimations(options.m_getAnimations__());
  this.f_transitions__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartTransitions.$create__org_pepstock_charba_client_defaults_IsDefaultTransitions(options.m_getTransitions__());
  this.f_hover__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartHover.$create__org_pepstock_charba_client_defaults_IsDefaultInteraction(options.m_getHover__());
  this.f_interaction__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartInteraction.$create__org_pepstock_charba_client_defaults_IsDefaultInteraction(options.m_getInteraction__());
  this.f_elements__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartElements.$create__org_pepstock_charba_client_defaults_IsDefaultElements(options.m_getElements__());
  this.f_layout__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartLayout.$create__org_pepstock_charba_client_defaults_IsDefaultLayout(options.m_getLayout__());
  this.f_title__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartTitle.$create__org_pepstock_charba_client_defaults_IsDefaultTitle(options.m_getTitle__());
  this.f_legend__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartLegend.$create__org_pepstock_charba_client_defaults_IsDefaultLegend(options.m_getLegend__());
  this.f_tooltips__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartTooltips.$create__org_pepstock_charba_client_defaults_IsDefaultTooltips(options.m_getTooltips__());
  this.f_plugins__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartPlugins.$create__org_pepstock_charba_client_defaults_IsDefaultPlugins(options.m_getPlugins__());
  this.f_datasets__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartDatasets.$create__org_pepstock_charba_client_defaults_IsDefaultDatasets(options.m_getDatasets__());
  this.f_font__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartFont.$create__org_pepstock_charba_client_defaults_IsDefaultFont(DefaultRoutedFont.$create__());
  this.f_decimation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartDecimation.$create__org_pepstock_charba_client_defaults_IsDefaultDecimation(options.m_getDecimation__());
  this.f_filler__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_ = DefaultChartFiller.$create__org_pepstock_charba_client_defaults_IsDefaultFiller(options.m_getFiller__());
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return this.f_animation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultTransitions} */
 m_getTransitions__() {
  return this.f_transitions__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return this.f_animations__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultLayout} */
 m_getLayout__() {
  return this.f_layout__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultElements} */
 m_getElements__() {
  return this.f_elements__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultInteraction} */
 m_getHover__() {
  return this.f_hover__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultInteraction} */
 m_getInteraction__() {
  return this.f_interaction__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultLegend} */
 m_getLegend__() {
  return this.f_legend__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultTooltips} */
 m_getTooltips__() {
  return this.f_tooltips__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultPlugins} */
 m_getPlugins__() {
  return this.f_plugins__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultDatasets} */
 m_getDatasets__() {
  return this.f_datasets__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultDecimation} */
 m_getDecimation__() {
  return this.f_decimation__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 /** @override @return {IsDefaultFiller} */
 m_getFiller__() {
  return this.f_filler__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions_;
 }
 
 static $clinit() {
  AbstractDefaultOptions.$clinit = () =>{};
  AbstractDefaultOptions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultOptions;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DefaultChartAnimation = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartAnimation$impl');
  DefaultChartAnimations = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartAnimations$impl');
  DefaultChartDatasets = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartDatasets$impl');
  DefaultChartDecimation = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartDecimation$impl');
  DefaultChartElements = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartElements$impl');
  DefaultChartFiller = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartFiller$impl');
  DefaultChartFont = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartFont$impl');
  DefaultChartHover = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartHover$impl');
  DefaultChartInteraction = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartInteraction$impl');
  DefaultChartLayout = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartLayout$impl');
  DefaultChartLegend = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartLegend$impl');
  DefaultChartPlugins = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartPlugins$impl');
  DefaultChartTitle = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartTitle$impl');
  DefaultChartTooltips = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartTooltips$impl');
  DefaultChartTransitions = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartTransitions$impl');
  DefaultAnimation = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
  DefaultAnimations = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');
  DefaultDatasets = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultDatasets$impl');
  DefaultDecimation = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultDecimation$impl');
  DefaultElements = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultElements$impl');
  DefaultFiller = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultFiller$impl');
  DefaultFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultFont$impl');
  DefaultHover = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultHover$impl');
  DefaultInteraction = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultInteraction$impl');
  DefaultLayout = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultLayout$impl');
  DefaultLegend = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultLegend$impl');
  DefaultPlugins = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPlugins$impl');
  DefaultRoutedFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
  DefaultTitle = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTitle$impl');
  DefaultTooltips = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips$impl');
  DefaultTransitions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');
 }
}
IsDefaultOptions.$markImplementor(AbstractDefaultOptions);
$Util.$setClassMetadata(AbstractDefaultOptions, "org.pepstock.charba.client.defaults.globals.AbstractDefaultOptions");

exports = AbstractDefaultOptions;

//# sourceMappingURL=AbstractDefaultOptions.js.map
