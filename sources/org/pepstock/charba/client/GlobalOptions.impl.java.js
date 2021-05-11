goog.module('org.pepstock.charba.client.GlobalOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Options = goog.require('org.pepstock.charba.client.options.Options$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let GlobalPlugins = goog.forwardDeclare('org.pepstock.charba.client.GlobalOptions.GlobalPlugins$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let DefaultGlobalOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultGlobalOptions$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.options.Options.CommonProperty$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');

class GlobalOptions extends Options {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultScaledOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_GlobalOptions_;
  /**@type {GlobalPlugins}*/
  this.f_plugins__org_pepstock_charba_client_GlobalOptions_;
 }
 /** @return {!GlobalOptions} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  GlobalOptions.$clinit();
  let $instance = new GlobalOptions();
  $instance.$ctor__org_pepstock_charba_client_GlobalOptions__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_GlobalOptions__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_Options__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_SCOPE__org_pepstock_charba_client_defaults_globals_DefaultOptions, DefaultsBuilder.m_get__().m_getOptions__(), nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_GlobalOptions_ = DefaultGlobalOptions.$create__org_pepstock_charba_client_GlobalOptions(this);
  if (!this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_LOCALE__org_pepstock_charba_client_options_Options_CommonProperty)) {
   this.m_setLocale__org_pepstock_charba_client_intl_CLocale(CLocale.m_getDefault__());
  }
  this.f_plugins__org_pepstock_charba_client_GlobalOptions_ = GlobalPlugins.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<Plugins>}*/ (ChartEnvelop.$create__java_lang_Object(super.m_getPlugins__())));
 }
 /** @return {IsDefaultScaledOptions} */
 m_asDefault__() {
  return this.f_defaultOptions__org_pepstock_charba_client_GlobalOptions_;
 }
 /** @override @return {Plugins} */
 m_getPlugins__() {
  return this.f_plugins__org_pepstock_charba_client_GlobalOptions_;
 }
 
 static $clinit() {
  GlobalOptions.$clinit = () =>{};
  GlobalOptions.$loadModules();
  Options.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GlobalOptions;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  GlobalPlugins = goog.module.get('org.pepstock.charba.client.GlobalOptions.GlobalPlugins$impl');
  DefaultGlobalOptions = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultGlobalOptions$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  CLocale = goog.module.get('org.pepstock.charba.client.intl.CLocale$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.options.Options.CommonProperty$impl');
 }
}
$Util.$setClassMetadata(GlobalOptions, "org.pepstock.charba.client.GlobalOptions");

exports = GlobalOptions;

//# sourceMappingURL=GlobalOptions.js.map
