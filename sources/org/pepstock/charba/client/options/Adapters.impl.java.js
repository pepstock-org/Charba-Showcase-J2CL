goog.module('org.pepstock.charba.client.options.Adapters$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAdapters = goog.require('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Adapters.Property$impl');
let ScaleDateAdapter = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleDateAdapter$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<AbstractScale, IsDefaultAdapters>}
 * @implements {IsDefaultAdapters}
 */
class Adapters extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleDateAdapter}*/
  this.f_dateOptions__org_pepstock_charba_client_options_Adapters_;
 }
 /** @return {!Adapters} */
 static $create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAdapters__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultAdapters */ defaultValues, /** ? */ nativeObject) {
  Adapters.$clinit();
  let $instance = new Adapters();
  $instance.$ctor__org_pepstock_charba_client_options_Adapters__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAdapters__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Adapters__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAdapters__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultAdapters */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  this.f_dateOptions__org_pepstock_charba_client_options_Adapters_ = ScaleDateAdapter.$create__org_pepstock_charba_client_options_Adapters__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions__org_pepstock_charba_client_commons_NativeObject(this, Property.f_DATE__org_pepstock_charba_client_options_Adapters_Property, /**@type {IsDefaultAdapters}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAdapters)).m_getDate__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_DATE__org_pepstock_charba_client_options_Adapters_Property));
 }
 /** @override @return {ScaleDateAdapter} */
 m_getDate__() {
  return this.f_dateOptions__org_pepstock_charba_client_options_Adapters_;
 }
 
 static $clinit() {
  Adapters.$clinit = () =>{};
  Adapters.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Adapters;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.options.Adapters.Property$impl');
  ScaleDateAdapter = goog.module.get('org.pepstock.charba.client.options.ScaleDateAdapter$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultAdapters.$markImplementor(Adapters);
$Util.$setClassMetadata(Adapters, "org.pepstock.charba.client.options.Adapters");

exports = Adapters;

//# sourceMappingURL=Adapters.js.map
