goog.module('org.pepstock.charba.client.zoom.Zoom$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationItem = goog.require('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');
const IsDefaultZoom = goog.require('org.pepstock.charba.client.zoom.IsDefaultZoom$impl');

let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let Drag = goog.forwardDeclare('org.pepstock.charba.client.zoom.Drag$impl');
let IsDefaultConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
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
 
 m_setDrag__boolean(/** boolean */ drag) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property, drag);
 }
 
 m_setDrag__org_pepstock_charba_client_zoom_Drag(/** Drag */ drag) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property, drag);
 }
 /** @override @return {boolean} */
 m_isDrag__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return true;
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_.m_isDrag__());
 }
 /** @override @return {Drag} */
 m_getDrag__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Drag.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_zoom_IsDefaultDrag(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_DRAG__org_pepstock_charba_client_zoom_Zoom_Property), this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_.m_getDrag__());
  }
  return null;
 }
 
 m_setSpeed__double(/** number */ speed) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_SPEED__org_pepstock_charba_client_zoom_Zoom_Property, Checker.m_checkAndGetIfBetween__double__double__double__java_lang_String(speed, 0, 1, "Speed value"));
 }
 /** @override @return {number} */
 m_getSpeed__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_SPEED__org_pepstock_charba_client_zoom_Zoom_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_.m_getSpeed__());
 }
 
 m_setWheelModifierKey__org_pepstock_charba_client_enums_ModifierKey(/** ModifierKey */ modifierKey) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_WHEEL_MODIFIER_KEY__org_pepstock_charba_client_zoom_Zoom_Property, modifierKey);
 }
 /** @override @return {ModifierKey} */
 m_getWheelModifierKey__() {
  return /**@type {ModifierKey}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_WHEEL_MODIFIER_KEY__org_pepstock_charba_client_zoom_Zoom_Property, ModifierKey.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_zoom_Zoom_.m_getWheelModifierKey__()), ModifierKey));
 }
 
 static $clinit() {
  Zoom.$clinit = () =>{};
  Zoom.$loadModules();
  AbstractConfigurationItem.$clinit();
  IsDefaultZoom.$clinit();
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
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ModifierKey = goog.module.get('org.pepstock.charba.client.enums.ModifierKey$impl');
  Drag = goog.module.get('org.pepstock.charba.client.zoom.Drag$impl');
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
/**@const {number}*/
Zoom.f_DEFAULT_SPEED__org_pepstock_charba_client_zoom_Zoom = 0.1;
/**@const {boolean}*/
Zoom.f_DEFAULT_DRAG__org_pepstock_charba_client_zoom_Zoom = false;
/**@const {number}*/
Zoom.f_DEFAULT_THRESHOLD__org_pepstock_charba_client_zoom_Zoom = 0;
IsDefaultZoom.$markImplementor(Zoom);
$Util.$setClassMetadata(Zoom, "org.pepstock.charba.client.zoom.Zoom");

exports = Zoom;

//# sourceMappingURL=Zoom.js.map
