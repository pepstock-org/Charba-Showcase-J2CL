goog.module('org.pepstock.charba.client.zoom.Limits$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsDefaultLimits = goog.require('org.pepstock.charba.client.zoom.IsDefaultLimits$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.Limits.Property$impl');
let ScaleLimit = goog.forwardDeclare('org.pepstock.charba.client.zoom.ScaleLimit$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultLimits}
 */
class Limits extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultLimits}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Limits_;
  /**@type {ScaleLimit}*/
  this.f_xScaleLimit__org_pepstock_charba_client_zoom_Limits_;
  /**@type {ScaleLimit}*/
  this.f_yScaleLimit__org_pepstock_charba_client_zoom_Limits_;
 }
 /** @return {!Limits} */
 static $create__org_pepstock_charba_client_zoom_IsDefaultLimits__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultLimits */ defaultOptions, /** ? */ nativeObject) {
  Limits.$clinit();
  let $instance = new Limits();
  $instance.$ctor__org_pepstock_charba_client_zoom_Limits__org_pepstock_charba_client_zoom_IsDefaultLimits__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_Limits__org_pepstock_charba_client_zoom_IsDefaultLimits__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultLimits */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Limits_ = /**@type {IsDefaultLimits}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultLimits));
  this.f_xScaleLimit__org_pepstock_charba_client_zoom_Limits_ = ScaleLimit.$create__org_pepstock_charba_client_zoom_IsDefaultScaleLimit__org_pepstock_charba_client_commons_NativeObject(this.f_defaultOptions__org_pepstock_charba_client_zoom_Limits_.m_getX__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_X__org_pepstock_charba_client_zoom_Limits_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_X__org_pepstock_charba_client_zoom_Limits_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_X__org_pepstock_charba_client_zoom_Limits_Property, this.f_xScaleLimit__org_pepstock_charba_client_zoom_Limits_);
  }
  this.f_yScaleLimit__org_pepstock_charba_client_zoom_Limits_ = ScaleLimit.$create__org_pepstock_charba_client_zoom_IsDefaultScaleLimit__org_pepstock_charba_client_commons_NativeObject(this.f_defaultOptions__org_pepstock_charba_client_zoom_Limits_.m_getY__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_Y__org_pepstock_charba_client_zoom_Limits_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_Y__org_pepstock_charba_client_zoom_Limits_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_Y__org_pepstock_charba_client_zoom_Limits_Property, this.f_yScaleLimit__org_pepstock_charba_client_zoom_Limits_);
  }
 }
 /** @override @return {ScaleLimit} */
 m_getX__() {
  return this.f_xScaleLimit__org_pepstock_charba_client_zoom_Limits_;
 }
 /** @override @return {ScaleLimit} */
 m_getY__() {
  return this.f_yScaleLimit__org_pepstock_charba_client_zoom_Limits_;
 }
 
 static $clinit() {
  Limits.$clinit = () =>{};
  Limits.$loadModules();
  NativeObjectContainer.$clinit();
  IsDefaultLimits.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Limits;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.zoom.Limits.Property$impl');
  ScaleLimit = goog.module.get('org.pepstock.charba.client.zoom.ScaleLimit$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultLimits.$markImplementor(Limits);
$Util.$setClassMetadata(Limits, "org.pepstock.charba.client.zoom.Limits");

exports = Limits;

//# sourceMappingURL=Limits.js.map
