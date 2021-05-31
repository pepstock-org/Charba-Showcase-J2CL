goog.module('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.BackgroundColorHandler.Property$impl');
let IsDefaultsBackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PropertyHandler<IsDefaultsBackgroundColorHandler>}
 */
class BackgroundColorHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_annotation_BackgroundColorHandler_;
  /**@type {?string}*/
  this.f_defaultBackgroundColor__org_pepstock_charba_client_annotation_BackgroundColorHandler_;
 }
 //Factory method corresponding to constructor 'BackgroundColorHandler(AbstractAnnotation, IsDefaultsBackgroundColorHandler, NativeObject)'.
 /** @return {!BackgroundColorHandler} */
 static $create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractAnnotation */ parent, /** IsDefaultsBackgroundColorHandler */ defaultValues, /** ? */ nativeObject) {
  BackgroundColorHandler.$clinit();
  let $instance = new BackgroundColorHandler();
  $instance.$ctor__org_pepstock_charba_client_annotation_BackgroundColorHandler__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'BackgroundColorHandler(AbstractAnnotation, IsDefaultsBackgroundColorHandler, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_annotation_BackgroundColorHandler__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractAnnotation */ parent, /** IsDefaultsBackgroundColorHandler */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_annotation_BackgroundColorHandler__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, defaultValues, nativeObject, Defaults.m_get__().m_getGlobal__().m_getColorAsString__());
 }
 //Factory method corresponding to constructor 'BackgroundColorHandler(AbstractAnnotation, IsDefaultsBackgroundColorHandler, NativeObject, String)'.
 /** @return {!BackgroundColorHandler} */
 static $create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractAnnotation */ parent, /** IsDefaultsBackgroundColorHandler */ defaultValues, /** ? */ nativeObject, /** ?string */ defaultBackgroundColor) {
  BackgroundColorHandler.$clinit();
  let $instance = new BackgroundColorHandler();
  $instance.$ctor__org_pepstock_charba_client_annotation_BackgroundColorHandler__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, defaultValues, nativeObject, defaultBackgroundColor);
  return $instance;
 }
 //Initialization from constructor 'BackgroundColorHandler(AbstractAnnotation, IsDefaultsBackgroundColorHandler, NativeObject, String)'.
 
 $ctor__org_pepstock_charba_client_annotation_BackgroundColorHandler__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractAnnotation */ parent, /** IsDefaultsBackgroundColorHandler */ defaultValues, /** ? */ nativeObject, /** ?string */ defaultBackgroundColor) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  this.$init___$p_org_pepstock_charba_client_annotation_BackgroundColorHandler();
  this.f_defaultBackgroundColor__org_pepstock_charba_client_annotation_BackgroundColorHandler_ = defaultBackgroundColor;
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_annotation_BackgroundColorHandler_.callback = (/** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(parent, context), this.m_getBackgroundColorCallback___$pp_org_pepstock_charba_client_annotation(), defaultBackgroundColor);
  };
 }
 
 m_setBackgroundColor__java_lang_String_$pp_org_pepstock_charba_client_annotation(/** ?string */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback_$pp_org_pepstock_charba_client_annotation(/**@type {ColorCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_BackgroundColorHandler_Property, backgroundColor);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString___$pp_org_pepstock_charba_client_annotation() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_BackgroundColorHandler_Property, this.f_defaultBackgroundColor__org_pepstock_charba_client_annotation_BackgroundColorHandler_);
 }
 /** @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback___$pp_org_pepstock_charba_client_annotation() {
  return /**@type {ColorCallback<AnnotationContext>}*/ ($Casts.$to(BackgroundColorHandler.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BackgroundColorHandler_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, /**@type {IsDefaultsBackgroundColorHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultsBackgroundColorHandler)).m_getBackgroundColorCallback__()), ColorCallback));
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback_$pp_org_pepstock_charba_client_annotation(/** ColorCallback<AnnotationContext> */ backgroundColorCallback) {
  BackgroundColorHandler.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BackgroundColorHandler_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this.m_getParent__(), AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, backgroundColorCallback, this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_annotation_BackgroundColorHandler_.proxy);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_annotation(/** Function */ backgroundColorCallback) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback_$pp_org_pepstock_charba_client_annotation(/**@type {ColorCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_BackgroundColorHandler_Property, backgroundColorCallback);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_BackgroundColorHandler() {
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_annotation_BackgroundColorHandler_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  BackgroundColorHandler.$clinit = () =>{};
  BackgroundColorHandler.$loadModules();
  PropertyHandler.$clinit();
  BackgroundColorHandler.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BackgroundColorHandler_ = /**@type {!CallbackPropertyHandler<ColorCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_BackgroundColorHandler_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BackgroundColorHandler;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.BackgroundColorHandler.Property$impl');
  IsDefaultsBackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
  ColorCallback = goog.module.get('org.pepstock.charba.client.callbacks.ColorCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyHandler<ColorCallback<AnnotationContext>>}*/
BackgroundColorHandler.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BackgroundColorHandler_;
$Util.$setClassMetadata(BackgroundColorHandler, "org.pepstock.charba.client.annotation.BackgroundColorHandler");

exports = BackgroundColorHandler;

//# sourceMappingURL=BackgroundColorHandler.js.map
