goog.module('org.pepstock.charba.client.options.Major$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultMajor = goog.require('org.pepstock.charba.client.defaults.IsDefaultMajor$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Major.Property$impl');
let Ticks = goog.forwardDeclare('org.pepstock.charba.client.options.Ticks$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Ticks, IsDefaultMajor>}
 * @implements {IsDefaultMajor}
 */
class Major extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Major} */
 static $create__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultMajor__org_pepstock_charba_client_commons_NativeObject(/** Ticks */ ticks, /** Key */ childKey, /** IsDefaultMajor */ defaultValues, /** ? */ nativeObject) {
  Major.$clinit();
  let $instance = new Major();
  $instance.$ctor__org_pepstock_charba_client_options_Major__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultMajor__org_pepstock_charba_client_commons_NativeObject(ticks, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Major__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultMajor__org_pepstock_charba_client_commons_NativeObject(/** Ticks */ ticks, /** Key */ childKey, /** IsDefaultMajor */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(ticks, childKey, defaultValues, nativeObject);
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_options_Major_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_options_Major_Property, /**@type {IsDefaultMajor}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultMajor)).m_isEnabled__());
 }
 
 static $clinit() {
  Major.$clinit = () =>{};
  Major.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Major;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.options.Major.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultMajor.$markImplementor(Major);
$Util.$setClassMetadata(Major, "org.pepstock.charba.client.options.Major");

exports = Major;

//# sourceMappingURL=Major.js.map
