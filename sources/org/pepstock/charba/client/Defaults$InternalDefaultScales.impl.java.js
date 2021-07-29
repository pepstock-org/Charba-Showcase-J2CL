goog.module('org.pepstock.charba.client.Defaults.InternalDefaultScales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class InternalDefaultScales extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalDefaultScales} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  InternalDefaultScales.$clinit();
  let $instance = new InternalDefaultScales();
  $instance.$ctor__org_pepstock_charba_client_Defaults_InternalDefaultScales__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Defaults_InternalDefaultScales__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?} */
 m_getScale__org_pepstock_charba_client_configuration_AxisType_$pp_org_pepstock_charba_client(/** AxisType */ type) {
  return this.m_getValue__org_pepstock_charba_client_commons_Key(/**@type {AxisType}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(type), AxisType)));
 }
 
 static $clinit() {
  InternalDefaultScales.$clinit = () =>{};
  InternalDefaultScales.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalDefaultScales;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.configuration.AxisType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(InternalDefaultScales, "org.pepstock.charba.client.Defaults$InternalDefaultScales");

exports = InternalDefaultScales;

//# sourceMappingURL=Defaults$InternalDefaultScales.js.map
