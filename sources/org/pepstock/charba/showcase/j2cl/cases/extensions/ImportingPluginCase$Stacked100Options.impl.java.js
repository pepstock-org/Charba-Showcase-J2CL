goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ImportingPluginCase.Stacked100Options$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Stacked100Plugin = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.Stacked100Plugin$impl');

class Stacked100Options extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {Key}*/
  this.f_enableKey__org_pepstock_charba_showcase_j2cl_cases_extensions_ImportingPluginCase_Stacked100Options_;
 }
 /** @return {!Stacked100Options} */
 static $create__() {
  Stacked100Options.$clinit();
  let $instance = new Stacked100Options();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ImportingPluginCase_Stacked100Options__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ImportingPluginCase_Stacked100Options__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(Stacked100Plugin.f_ID__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin, null);
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ImportingPluginCase_Stacked100Options();
 }
 
 m_setEnable__boolean_$pp_org_pepstock_charba_showcase_j2cl_cases_extensions(/** boolean */ enable) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(this.f_enableKey__org_pepstock_charba_showcase_j2cl_cases_extensions_ImportingPluginCase_Stacked100Options_, enable);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ImportingPluginCase_Stacked100Options() {
  this.f_enableKey__org_pepstock_charba_showcase_j2cl_cases_extensions_ImportingPluginCase_Stacked100Options_ = Key.m_create__java_lang_String("enable");
 }
 
 static $clinit() {
  Stacked100Options.$clinit = () =>{};
  Stacked100Options.$loadModules();
  AbstractPluginOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Stacked100Options;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Stacked100Plugin = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.Stacked100Plugin$impl');
 }
}
$Util.$setClassMetadata(Stacked100Options, "org.pepstock.charba.showcase.j2cl.cases.extensions.ImportingPluginCase$Stacked100Options");

exports = Stacked100Options;

//# sourceMappingURL=ImportingPluginCase$Stacked100Options.js.map
