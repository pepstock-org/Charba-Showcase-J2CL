goog.module('org.pepstock.charba.client.zoom.ZoomContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContext = goog.require('org.pepstock.charba.client.callbacks.ChartContext$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let AbstractConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');
let EventPoint = goog.forwardDeclare('org.pepstock.charba.client.zoom.EventPoint$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ZoomContext extends ChartContext {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractConfigurationItem}*/
  this.f_zoomElement__org_pepstock_charba_client_zoom_ZoomContext_;
  /**@type {EventPoint}*/
  this.f_point__org_pepstock_charba_client_zoom_ZoomContext_;
 }
 /** @return {!ZoomContext} */
 static $create__org_pepstock_charba_client_zoom_AbstractConfigurationItem__org_pepstock_charba_client_commons_NativeObject(/** AbstractConfigurationItem */ zoomElement, /** ? */ nativeObject) {
  ZoomContext.$clinit();
  let $instance = new ZoomContext();
  $instance.$ctor__org_pepstock_charba_client_zoom_ZoomContext__org_pepstock_charba_client_zoom_AbstractConfigurationItem__org_pepstock_charba_client_commons_NativeObject(zoomElement, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_ZoomContext__org_pepstock_charba_client_zoom_AbstractConfigurationItem__org_pepstock_charba_client_commons_NativeObject(/** AbstractConfigurationItem */ zoomElement, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_zoomElement__org_pepstock_charba_client_zoom_ZoomContext_ = /**@type {AbstractConfigurationItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(zoomElement, "Zoom options argument"), AbstractConfigurationItem));
  this.f_point__org_pepstock_charba_client_zoom_ZoomContext_ = EventPoint.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_POINT__org_pepstock_charba_client_zoom_ZoomContext_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_zoom_ZoomContext_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_zoom_ZoomContext_Property, ContextType.f_ZOOM__org_pepstock_charba_client_enums_ContextType);
  }
 }
 /** @return {AbstractConfigurationItem} */
 m_getElement__() {
  return this.f_zoomElement__org_pepstock_charba_client_zoom_ZoomContext_;
 }
 /** @return {EventPoint} */
 m_getPoint__() {
  return this.f_point__org_pepstock_charba_client_zoom_ZoomContext_;
 }
 /** @override @return {boolean} */
 m_isConsistent__() {
  return $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_CHART__org_pepstock_charba_client_enums_ContextType, this.m_getType__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_ZOOM__org_pepstock_charba_client_enums_ContextType, this.m_getType__());
 }
 
 static $clinit() {
  ZoomContext.$clinit = () =>{};
  ZoomContext.$loadModules();
  ChartContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomContext;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  AbstractConfigurationItem = goog.module.get('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');
  EventPoint = goog.module.get('org.pepstock.charba.client.zoom.EventPoint$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.ZoomContext.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(ZoomContext, "org.pepstock.charba.client.zoom.ZoomContext");

exports = ZoomContext;

//# sourceMappingURL=ZoomContext.js.map
