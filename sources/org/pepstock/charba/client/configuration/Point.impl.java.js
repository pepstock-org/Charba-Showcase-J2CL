goog.module('org.pepstock.charba.client.configuration.Point$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Point.Property$impl');
let IsDefaultPoint = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultPoint>}
 */
class Point extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_radiusCallbackProxy__org_pepstock_charba_client_configuration_Point_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_rotationCallbackProxy__org_pepstock_charba_client_configuration_Point_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Point_;
  /**@type {PointStyleCallback}*/
  this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Point_;
  /**@type {RotationCallback<DatasetContext>}*/
  this.f_rotationCallback__org_pepstock_charba_client_configuration_Point_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_hoverRadiusCallback__org_pepstock_charba_client_configuration_Point_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_hitRadiusCallback__org_pepstock_charba_client_configuration_Point_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_radiusCallback__org_pepstock_charba_client_configuration_Point_;
 }
 /** @return {!Point} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_pepstock_charba_client_configuration_Point__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Point__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Point();
  this.f_radiusCallbackProxy__org_pepstock_charba_client_configuration_Point_.callback = (/** ? */ context) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getRadiusCallback__(), this.m_getDefaultElement__().m_getRadius__()), Double)));
  };
  this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_.callback = (/** ? */ context_1) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getHitRadiusCallback__(), this.m_getDefaultElement__().m_getHitRadius__()), Double)));
  };
  this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_.callback = (/** ? */ context_2) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getHoverRadiusCallback__(), this.m_getDefaultElement__().m_getHoverRadius__()), Double)));
  };
  this.f_rotationCallbackProxy__org_pepstock_charba_client_configuration_Point_.callback = (/** ? */ context_3) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getRotationCallback__(), this.m_getDefaultElement__().m_getRotation__()), Double)));
  };
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Point_.callback = (/** ? */ context_4) =>{
   return this.m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_PointStyleCallback__org_pepstock_charba_client_enums_PointStyle_$pp_org_pepstock_charba_client_configuration(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4), this.m_getPointStyleCallback__(), this.m_getDefaultElement__().m_getPointStyle__());
  };
 }
 /** @override @return {AbstractElement<IsDefaultPoint>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__();
 }
 /** @override @return {IsDefaultPoint} */
 m_getDefaultElement__() {
  return this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getPoint__();
 }
 
 m_setRadius__double(/** number */ radius) {
  this.m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setRadius__double(radius);
 }
 /** @return {number} */
 m_getRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getRadius__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(pointStyle);
 }
 /** @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getPointStyleAsCanvas__();
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getPointStyle__();
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getPointStyleAsImage__();
 }
 
 m_setHitRadius__double(/** number */ hitRadius) {
  this.m_setHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setHitRadius__double(hitRadius);
 }
 /** @return {number} */
 m_getHitRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getHitRadius__();
 }
 
 m_setHoverRadius__double(/** number */ hoverRadius) {
  this.m_setHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setHoverRadius__double(hoverRadius);
 }
 /** @return {number} */
 m_getHoverRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getHoverRadius__();
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setRotation__double(rotation);
 }
 /** @return {number} */
 m_getRotation__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getRotation__();
 }
 /** @return {PointStyleCallback} */
 m_getPointStyleCallback__() {
  return this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Point_;
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** PointStyleCallback */ pointStyleCallback) {
  this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Point_ = pointStyleCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_POINT_STYLE__org_pepstock_charba_client_configuration_Point_Property, pointStyleCallback, this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Point_);
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointStyleCallback) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_POINT_STYLE__org_pepstock_charba_client_configuration_Point_Property, pointStyleCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getRadiusCallback__() {
  return this.f_radiusCallback__org_pepstock_charba_client_configuration_Point_;
 }
 
 m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ radiusCallback) {
  this.f_radiusCallback__org_pepstock_charba_client_configuration_Point_ = radiusCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_RADIUS__org_pepstock_charba_client_configuration_Point_Property, radiusCallback, this.f_radiusCallbackProxy__org_pepstock_charba_client_configuration_Point_);
 }
 
 m_setRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ radiusCallback) {
  this.m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_RADIUS__org_pepstock_charba_client_configuration_Point_Property, radiusCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getHitRadiusCallback__() {
  return this.f_hitRadiusCallback__org_pepstock_charba_client_configuration_Point_;
 }
 
 m_setHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ hitRadiusCallback) {
  this.f_hitRadiusCallback__org_pepstock_charba_client_configuration_Point_ = hitRadiusCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HIT_RADIUS__org_pepstock_charba_client_configuration_Point_Property, hitRadiusCallback, this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_);
 }
 
 m_setHitRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hitRadiusCallback) {
  this.m_setHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HIT_RADIUS__org_pepstock_charba_client_configuration_Point_Property, hitRadiusCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getHoverRadiusCallback__() {
  return this.f_hoverRadiusCallback__org_pepstock_charba_client_configuration_Point_;
 }
 
 m_setHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ hoverRadiusCallback) {
  this.f_hoverRadiusCallback__org_pepstock_charba_client_configuration_Point_ = hoverRadiusCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_RADIUS__org_pepstock_charba_client_configuration_Point_Property, hoverRadiusCallback, this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_);
 }
 
 m_setHoverRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverRadiusCallback) {
  this.m_setHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_RADIUS__org_pepstock_charba_client_configuration_Point_Property, hoverRadiusCallback);
 }
 /** @return {RotationCallback<DatasetContext>} */
 m_getRotationCallback__() {
  return this.f_rotationCallback__org_pepstock_charba_client_configuration_Point_;
 }
 
 m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/** RotationCallback<DatasetContext> */ rotationCallback) {
  this.f_rotationCallback__org_pepstock_charba_client_configuration_Point_ = rotationCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_ROTATION__org_pepstock_charba_client_configuration_Point_Property, rotationCallback, this.f_rotationCallbackProxy__org_pepstock_charba_client_configuration_Point_);
 }
 
 m_setRotation__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ rotationCallback) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_ROTATION__org_pepstock_charba_client_configuration_Point_Property, rotationCallback);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Point() {
  this.f_radiusCallbackProxy__org_pepstock_charba_client_configuration_Point_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_configuration_Point_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_rotationCallbackProxy__org_pepstock_charba_client_configuration_Point_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Point_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Point_ = null;
  this.f_rotationCallback__org_pepstock_charba_client_configuration_Point_ = null;
  this.f_hoverRadiusCallback__org_pepstock_charba_client_configuration_Point_ = null;
  this.f_hitRadiusCallback__org_pepstock_charba_client_configuration_Point_ = null;
  this.f_radiusCallback__org_pepstock_charba_client_configuration_Point_ = null;
 }
 
 static $clinit() {
  Point.$clinit = () =>{};
  Point.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Point;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Point.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Point, "org.pepstock.charba.client.configuration.Point");

exports = Point;

//# sourceMappingURL=Point.js.map
