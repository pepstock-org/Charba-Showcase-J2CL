goog.module('org.pepstock.charba.client.zoom.Pinch$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsDefaultPinch = goog.require('org.pepstock.charba.client.zoom.IsDefaultPinch$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.Pinch.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultPinch}
 */
class Pinch extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultPinch}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Pinch_;
 }
 /** @return {!Pinch} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultPinch__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultPinch */ defaultOptions, /** ? */ nativeObject) {
  Pinch.$clinit();
  let $instance = new Pinch();
  $instance.$ctor__org_pepstock_charba_client_zoom_Pinch__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultPinch__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_Pinch__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultPinch__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultPinch */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Pinch_ = /**@type {IsDefaultPinch}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultPinch));
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_Pinch_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_Pinch_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Pinch_.m_isEnabled__());
 }
 
 static $clinit() {
  Pinch.$clinit = () =>{};
  Pinch.$loadModules();
  AbstractNode.$clinit();
  IsDefaultPinch.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Pinch;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.zoom.Pinch.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {boolean}*/
Pinch.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_Pinch = false;
IsDefaultPinch.$markImplementor(Pinch);
$Util.$setClassMetadata(Pinch, "org.pepstock.charba.client.zoom.Pinch");

exports = Pinch;

//# sourceMappingURL=Pinch.js.map
