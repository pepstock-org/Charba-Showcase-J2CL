goog.module('org.pepstock.charba.client.defaults.globals.DefaultLayout$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLayout = goog.require('org.pepstock.charba.client.defaults.IsDefaultLayout$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');

/**
 * @implements {IsDefaultLayout}
 */
class DefaultLayout extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultLayout_;
 }
 /** @return {!DefaultLayout} */
 static $create__() {
  DefaultLayout.$clinit();
  let $instance = new DefaultLayout();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultLayout__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultLayout__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultLayout();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultLayout_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultLayout() {
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultLayout_ = DefaultPadding.$create__int(DefaultLayout.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultLayout_);
 }
 
 static $clinit() {
  DefaultLayout.$clinit = () =>{};
  DefaultLayout.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLayout;
 }
 
 static $loadModules() {
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
 }
}
/**@const {number}*/
DefaultLayout.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultLayout_ = 0;
IsDefaultLayout.$markImplementor(DefaultLayout);
$Util.$setClassMetadata(DefaultLayout, "org.pepstock.charba.client.defaults.globals.DefaultLayout");

exports = DefaultLayout;

//# sourceMappingURL=DefaultLayout.js.map
