goog.module('org.pepstock.charba.client.Defaults.WrapperDefaults$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.Defaults.WrapperDefaults.Property$impl');

class WrapperDefaults extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!WrapperDefaults} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  WrapperDefaults.$clinit();
  let $instance = new WrapperDefaults();
  $instance.$ctor__org_pepstock_charba_client_Defaults_WrapperDefaults__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Defaults_WrapperDefaults__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?} */
 m_getScale___$pp_org_pepstock_charba_client() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SCALE__org_pepstock_charba_client_Defaults_WrapperDefaults_Property);
 }
 /** @return {?} */
 m_getScales___$pp_org_pepstock_charba_client() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SCALES__org_pepstock_charba_client_Defaults_WrapperDefaults_Property);
 }
 
 static $clinit() {
  WrapperDefaults.$clinit = () =>{};
  WrapperDefaults.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WrapperDefaults;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.Defaults.WrapperDefaults.Property$impl');
 }
}
$Util.$setClassMetadata(WrapperDefaults, "org.pepstock.charba.client.Defaults$WrapperDefaults");

exports = WrapperDefaults;

//# sourceMappingURL=Defaults$WrapperDefaults.js.map
