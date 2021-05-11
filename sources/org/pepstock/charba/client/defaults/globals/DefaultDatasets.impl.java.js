goog.module('org.pepstock.charba.client.defaults.globals.DefaultDatasets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDatasets = goog.require('org.pepstock.charba.client.defaults.IsDefaultDatasets$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let IsDefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');
let DefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTypedDataset$impl');

/**
 * @implements {IsDefaultDatasets}
 */
class DefaultDatasets extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultTypedDataset}*/
  this.f_dataset__org_pepstock_charba_client_defaults_globals_DefaultDatasets_;
 }
 /** @return {!DefaultDatasets} */
 static $create__() {
  DefaultDatasets.$clinit();
  let $instance = new DefaultDatasets();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultDatasets__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultDatasets__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultDatasets();
 }
 /** @override @return {IsDefaultTypedDataset} */
 m_get__org_pepstock_charba_client_Type(/** Type */ type) {
  return this.f_dataset__org_pepstock_charba_client_defaults_globals_DefaultDatasets_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultDatasets() {
  this.f_dataset__org_pepstock_charba_client_defaults_globals_DefaultDatasets_ = DefaultTypedDataset.$create__();
 }
 
 static $clinit() {
  DefaultDatasets.$clinit = () =>{};
  DefaultDatasets.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultDatasets;
 }
 
 static $loadModules() {
  DefaultTypedDataset = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTypedDataset$impl');
 }
}
IsDefaultDatasets.$markImplementor(DefaultDatasets);
$Util.$setClassMetadata(DefaultDatasets, "org.pepstock.charba.client.defaults.globals.DefaultDatasets");

exports = DefaultDatasets;

//# sourceMappingURL=DefaultDatasets.js.map
