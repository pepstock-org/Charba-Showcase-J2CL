goog.module('org.pepstock.charba.client.plugins.GlobalPlugins.InternalPlugins$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');

class InternalPlugins extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalPlugins} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  InternalPlugins.$clinit();
  let $instance = new InternalPlugins();
  $instance.$ctor__org_pepstock_charba_client_plugins_GlobalPlugins_InternalPlugins__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_GlobalPlugins_InternalPlugins__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {List<Key>} */
 m_ids___$pp_org_pepstock_charba_client_plugins() {
  return super.m_keys__();
 }
 /** @return {?} */
 m_plugin__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_plugins(/** Key */ pluginId) {
  return this.m_getValue__org_pepstock_charba_client_commons_Key(pluginId);
 }
 
 static $clinit() {
  InternalPlugins.$clinit = () =>{};
  InternalPlugins.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalPlugins;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(InternalPlugins, "org.pepstock.charba.client.plugins.GlobalPlugins$InternalPlugins");

exports = InternalPlugins;

//# sourceMappingURL=GlobalPlugins$InternalPlugins.js.map
