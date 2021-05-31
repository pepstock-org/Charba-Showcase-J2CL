goog.module('org.pepstock.charba.client.annotation.HasBackgroundColor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsBackgroundColorHandler = goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let BackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.HasBackgroundColor.$LambdaAdaptor$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');

/**
 * @interface
 * @extends {IsDefaultsBackgroundColorHandler}
 */
class HasBackgroundColor {
 /** @abstract @return {BackgroundColorHandler} */
 m_getBackgroundColorHandler__() {}
 /** @abstract */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {}
 /** @abstract */
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {}
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 /** @abstract @return {IsColor} */
 m_getBackgroundColor__() {}
 /** @abstract @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {}
 /** @abstract */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<AnnotationContext> */ backgroundColorCallback) {}
 /** @abstract */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ backgroundColorCallback) {}
 /** @return {HasBackgroundColor} */
 static $adapt(/** ?function():BackgroundColorHandler */ fn) {
  HasBackgroundColor.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** !HasBackgroundColor */ $thisArg, /** IsColor */ backgroundColor) {
  HasBackgroundColor.$clinit();
  $thisArg.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 static m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__java_lang_String(/** !HasBackgroundColor */ $thisArg, /** ?string */ backgroundColor) {
  HasBackgroundColor.$clinit();
  if (!$Equality.$same($thisArg.m_getBackgroundColorHandler__(), null)) {
   $thisArg.m_getBackgroundColorHandler__().m_setBackgroundColor__java_lang_String_$pp_org_pepstock_charba_client_annotation(backgroundColor);
  }
 }
 /** @return {?string} */
 static m_getBackgroundColorAsString__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(/** !HasBackgroundColor */ $thisArg) {
  HasBackgroundColor.$clinit();
  if (!$Equality.$same($thisArg.m_getBackgroundColorHandler__(), null)) {
   return $thisArg.m_getBackgroundColorHandler__().m_getBackgroundColorAsString___$pp_org_pepstock_charba_client_annotation();
  }
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @return {IsColor} */
 static m_getBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(/** !HasBackgroundColor */ $thisArg) {
  HasBackgroundColor.$clinit();
  return ColorBuilder.m_parse__java_lang_String($thisArg.m_getBackgroundColorAsString__());
 }
 /** @return {ColorCallback<AnnotationContext>} */
 static m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(/** !HasBackgroundColor */ $thisArg) {
  HasBackgroundColor.$clinit();
  if (!$Equality.$same($thisArg.m_getBackgroundColorHandler__(), null)) {
   return $thisArg.m_getBackgroundColorHandler__().m_getBackgroundColorCallback___$pp_org_pepstock_charba_client_annotation();
  }
  return IsDefaultsBackgroundColorHandler.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler($thisArg);
 }
 
 static m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** !HasBackgroundColor */ $thisArg, /** ColorCallback<AnnotationContext> */ backgroundColorCallback) {
  HasBackgroundColor.$clinit();
  if (!$Equality.$same($thisArg.m_getBackgroundColorHandler__(), null)) {
   $thisArg.m_getBackgroundColorHandler__().m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback_$pp_org_pepstock_charba_client_annotation(backgroundColorCallback);
  }
 }
 
 static m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** !HasBackgroundColor */ $thisArg, /** Function */ backgroundColorCallback) {
  HasBackgroundColor.$clinit();
  if (!$Equality.$same($thisArg.m_getBackgroundColorHandler__(), null)) {
   $thisArg.m_getBackgroundColorHandler__().m_setBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_annotation(backgroundColorCallback);
  }
 }
 
 static $clinit() {
  HasBackgroundColor.$clinit = () =>{};
  HasBackgroundColor.$loadModules();
  IsDefaultsBackgroundColorHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultsBackgroundColorHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_HasBackgroundColor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_HasBackgroundColor;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.HasBackgroundColor.$LambdaAdaptor$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
 }
}
HasBackgroundColor.$markImplementor(/**@type {Function}*/ (HasBackgroundColor));
$Util.$setClassMetadataForInterface(HasBackgroundColor, "org.pepstock.charba.client.annotation.HasBackgroundColor");

exports = HasBackgroundColor;

//# sourceMappingURL=HasBackgroundColor.js.map
