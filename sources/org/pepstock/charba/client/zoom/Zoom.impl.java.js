goog.module('org.pepstock.charba.client.zoom.Zoom$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationItem = goog.require('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');
const IsDefaultZoom = goog.require('org.pepstock.charba.client.zoom.IsDefaultZoom$impl');

let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Drag = goog.forwardDeclare('org.pepstock.charba.client.zoom.Drag$impl');
let IsDefaultConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
let Pinch = goog.forwardDeclare('org.pepstock.charba.client.zoom.Pinch$impl');
let Wheel = goog.forwardDeclare('org.pepstock.charba.client.zoom.Wheel$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.Zoom.Property$impl');
let CompletedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
let ProgressCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
let RejectedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
let StartCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultZoom}
 */
class Zoom extends AbstractConfigurationItem {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultZoom}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_;
  /**@type {Wheel}*/
  this.f_wheel__org_pepstock_charba_client_zoom_Zoom_;
  /**@type {Drag}*/
  this.f_drag__org_pepstock_charba_client_zoom_Zoom_;
  /**@type {Pinch}*/
  this.f_pinch__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @return {!Zoom} */
 static $create__org_pepstock_charba_client_zoom_IsDefaultZoom__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultZoom */ defaultOptions, /** ? */ nativeObject) {
  Zoom.$clinit();
  let $instance = new Zoom();
  $instance.$ctor__org_pepstock_charba_client_zoom_Zoom__org_pepstock_charba_client_zoom_IsDefaultZoom__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_Zoom__org_pepstock_charba_client_zoom_IsDefaultZoom__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultZoom */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_zoom_AbstractConfigurationItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_ = /**@type {IsDefaultZoom}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultZoom));
  this.f_wheel__org_pepstock_charba_client_zoom_Zoom_ = Wheel.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultWheel__org_pepstock_charba_client_commons_NativeObject(this, Property.f_WHEEL__org_pepstock_charba_client_zoom_Zoom_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_.m_getWheel__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_WHEEL__org_pepstock_charba_client_zoom_Zoom_Property));
  this.f_drag__org_pepstock_charba_client_zoom_Zoom_ = Drag.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultDrag__org_pepstock_charba_client_commons_NativeObject(this, Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_.m_getDrag__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property));
  this.f_pinch__org_pepstock_charba_client_zoom_Zoom_ = Pinch.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultPinch__org_pepstock_charba_client_commons_NativeObject(this, Property.f_PINCH__org_pepstock_charba_client_zoom_Zoom_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_.m_getPinch__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_PINCH__org_pepstock_charba_client_zoom_Zoom_Property));
 }
 /** @override @return {IsDefaultConfigurationItem} */
 m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom() {
  return this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @override @return {CallbackPropertyHandler<ProgressCallback>} */
 m_getProgessPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Zoom.f_ZOOM_PROGRESS_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @override @return {CallbackPropertyHandler<CompletedCallback>} */
 m_getCompletedPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Zoom.f_ZOOM_COMPLETED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @override @return {CallbackPropertyHandler<RejectedCallback>} */
 m_getRejectedPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Zoom.f_ZOOM_REJECTED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @override @return {CallbackPropertyHandler<StartCallback>} */
 m_getStartPropertyHandler___$pp_org_pepstock_charba_client_zoom() {
  return Zoom.f_ZOOM_START_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @override @return {Wheel} */
 m_getWheel__() {
  return this.f_wheel__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @override @return {Drag} */
 m_getDrag__() {
  return this.f_drag__org_pepstock_charba_client_zoom_Zoom_;
 }
 /** @override @return {Pinch} */
 m_getPinch__() {
  return this.f_pinch__org_pepstock_charba_client_zoom_Zoom_;
 }
 
 static $clinit() {
  Zoom.$clinit = () =>{};
  Zoom.$loadModules();
  AbstractConfigurationItem.$clinit();
  IsDefaultConfigurationItem.$clinit();
  Zoom.f_ZOOM_PROGRESS_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_ = /**@type {!CallbackPropertyHandler<ProgressCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_ZOOM__org_pepstock_charba_client_zoom_Zoom_Property));
  Zoom.f_ZOOM_COMPLETED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_ = /**@type {!CallbackPropertyHandler<CompletedCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_ZOOM_COMPLETED__org_pepstock_charba_client_zoom_Zoom_Property));
  Zoom.f_ZOOM_REJECTED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_ = /**@type {!CallbackPropertyHandler<RejectedCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_ZOOM_REJECTED__org_pepstock_charba_client_zoom_Zoom_Property));
  Zoom.f_ZOOM_START_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_ = /**@type {!CallbackPropertyHandler<StartCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ON_ZOOM_START__org_pepstock_charba_client_zoom_Zoom_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Zoom;
 }
 
 static $loadModules() {
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Drag = goog.module.get('org.pepstock.charba.client.zoom.Drag$impl');
  IsDefaultConfigurationItem = goog.module.get('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
  Pinch = goog.module.get('org.pepstock.charba.client.zoom.Pinch$impl');
  Wheel = goog.module.get('org.pepstock.charba.client.zoom.Wheel$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.Zoom.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyHandler<ProgressCallback>}*/
Zoom.f_ZOOM_PROGRESS_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
/**@type {CallbackPropertyHandler<CompletedCallback>}*/
Zoom.f_ZOOM_COMPLETED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
/**@type {CallbackPropertyHandler<RejectedCallback>}*/
Zoom.f_ZOOM_REJECTED_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
/**@type {CallbackPropertyHandler<StartCallback>}*/
Zoom.f_ZOOM_START_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_Zoom_;
IsDefaultZoom.$markImplementor(Zoom);
$Util.$setClassMetadata(Zoom, "org.pepstock.charba.client.zoom.Zoom");

exports = Zoom;

//# sourceMappingURL=Zoom.js.map
