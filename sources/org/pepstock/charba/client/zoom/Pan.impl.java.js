goog.module('org.pepstock.charba.client.zoom.Pan$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationItem = goog.require('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');
const IsDefaultPan = goog.require('org.pepstock.charba.client.zoom.IsDefaultPan$impl');

let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let IsDefaultConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.Pan.Property$impl');
let CompletedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
let ProgressCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
let RejectedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
let StartCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultPan}
 */
class Pan extends AbstractConfigurationItem {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultPan}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Pan_;
 }
 /** @return {!Pan} */
 static $create__org_pepstock_charba_client_zoom_IsDefaultPan__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultPan */ defaultOptions, /** ? */ nativeObject) {
  Pan.$clinit();
  let $instance = new Pan();
  $instance.$ctor__org_pepstock_charba_client_zoom_Pan__org_pepstock_charba_client_zoom_IsDefaultPan__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_Pan__org_pepstock_charba_client_zoom_IsDefaultPan__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultPan */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_zoom_AbstractConfigurationItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Pan_ = /**@type {IsDefaultPan}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultPan));
 }
 /** @override @return {IsDefaultConfigurationItem} */
 m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom() {
  return this.f_defaultOptions__org_pepstock_charba_client_zoom_Pan_;
 }
 /** @override @return {CallbackPropertyHandler<ProgressCallback>} */
 m_getProgessPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Pan.f_PAN_PROGRESS_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
 }
 /** @override @return {CallbackPropertyHandler<CompletedCallback>} */
 m_getCompletedPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Pan.f_PAN_COMPLETED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
 }
 /** @override @return {CallbackPropertyHandler<RejectedCallback>} */
 m_getRejectedPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Pan.f_PAN_REJECTED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
 }
 /** @override @return {CallbackPropertyHandler<StartCallback>} */
 m_getStartPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Pan.f_PAN_START_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
 }
 
 m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(/** ModifierKey */ modifierKey) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property, modifierKey);
 }
 /** @override @return {ModifierKey} */
 m_getModifierKey__() {
  return /**@type {ModifierKey}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property, ModifierKey.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_zoom_Pan_.m_getModifierKey__()), ModifierKey));
 }
 
 static $clinit() {
  Pan.$clinit = () =>{};
  Pan.$loadModules();
  AbstractConfigurationItem.$clinit();
  IsDefaultPan.$clinit();
  Pan.f_PAN_PROGRESS_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_ = /**@type {!CallbackPropertyHandler<ProgressCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property));
  Pan.f_PAN_COMPLETED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_ = /**@type {!CallbackPropertyHandler<CompletedCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property));
  Pan.f_PAN_REJECTED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_ = /**@type {!CallbackPropertyHandler<RejectedCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property));
  Pan.f_PAN_START_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_ = /**@type {!CallbackPropertyHandler<StartCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Pan;
 }
 
 static $loadModules() {
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  ModifierKey = goog.module.get('org.pepstock.charba.client.enums.ModifierKey$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.Pan.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyHandler<ProgressCallback>}*/
Pan.f_PAN_PROGRESS_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
/**@type {CallbackPropertyHandler<CompletedCallback>}*/
Pan.f_PAN_COMPLETED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
/**@type {CallbackPropertyHandler<RejectedCallback>}*/
Pan.f_PAN_REJECTED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
/**@type {CallbackPropertyHandler<StartCallback>}*/
Pan.f_PAN_START_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Pan_;
/**@const {number}*/
Pan.f_DEFAULT_THRESHOLD__org_pepstock_charba_client_zoom_Pan = 10;
IsDefaultPan.$markImplementor(Pan);
$Util.$setClassMetadata(Pan, "org.pepstock.charba.client.zoom.Pan");

exports = Pan;

//# sourceMappingURL=Pan.js.map
