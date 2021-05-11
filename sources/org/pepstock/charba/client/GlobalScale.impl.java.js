goog.module('org.pepstock.charba.client.GlobalScale$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScale = goog.require('org.pepstock.charba.client.options.AbstractScale$impl');

let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');

class GlobalScale extends AbstractScale {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GlobalScale} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  GlobalScale.$clinit();
  let $instance = new GlobalScale();
  $instance.$ctor__org_pepstock_charba_client_GlobalScale__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_GlobalScale__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(DefaultsBuilder.m_get__().m_getScale__(), nativeObject);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  GlobalScale.$clinit = () =>{};
  GlobalScale.$loadModules();
  AbstractScale.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GlobalScale;
 }
 
 static $loadModules() {
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
 }
}
$Util.$setClassMetadata(GlobalScale, "org.pepstock.charba.client.GlobalScale");

exports = GlobalScale;

//# sourceMappingURL=GlobalScale.js.map
