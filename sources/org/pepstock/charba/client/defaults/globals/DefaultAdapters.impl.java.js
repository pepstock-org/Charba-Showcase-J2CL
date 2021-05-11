goog.module('org.pepstock.charba.client.defaults.globals.DefaultAdapters$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAdapters = goog.require('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');

let IsDefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');
let DefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions$impl');

/**
 * @implements {IsDefaultAdapters}
 */
class DefaultAdapters extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultAdapters} */
 static $create__() {
  DefaultAdapters.$clinit();
  let $instance = new DefaultAdapters();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAdapters__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultAdapters__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {IsDefaultDateAdapterOptions} */
 m_getDate__() {
  return DefaultDateAdapterOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions;
 }
 
 static $clinit() {
  DefaultAdapters.$clinit = () =>{};
  DefaultAdapters.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAdapters;
 }
 
 static $loadModules() {
  DefaultDateAdapterOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions$impl');
 }
}
IsDefaultAdapters.$markImplementor(DefaultAdapters);
$Util.$setClassMetadata(DefaultAdapters, "org.pepstock.charba.client.defaults.globals.DefaultAdapters");

exports = DefaultAdapters;

//# sourceMappingURL=DefaultAdapters.js.map
