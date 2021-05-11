goog.module('org.pepstock.charba.client.plugins.PluginsEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class PluginsEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'PluginsEnvelop(Object)'.
 /** @template T @return {!PluginsEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  PluginsEnvelop.$clinit();
  let $instance = new PluginsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_plugins_PluginsEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'PluginsEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_plugins_PluginsEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_plugins_PluginsEnvelop__java_lang_Object__boolean(content, false);
 }
 //Factory method corresponding to constructor 'PluginsEnvelop(Object, boolean)'.
 /** @template T @return {!PluginsEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  PluginsEnvelop.$clinit();
  let $instance = new PluginsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_plugins_PluginsEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'PluginsEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_plugins_PluginsEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 static $clinit() {
  PluginsEnvelop.$clinit = () =>{};
  PluginsEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginsEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PluginsEnvelop, "org.pepstock.charba.client.plugins.PluginsEnvelop");

exports = PluginsEnvelop;

//# sourceMappingURL=PluginsEnvelop.js.map
