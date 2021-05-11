goog.module('org.pepstock.charba.client.annotation.HasBackgroundColor.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasBackgroundColor = goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let BackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');

/**
 * @implements {HasBackgroundColor}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():BackgroundColorHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():BackgroundColorHandler}*/
  this.f_fn__org_pepstock_charba_client_annotation_HasBackgroundColor_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_annotation_HasBackgroundColor_$LambdaAdaptor__org_pepstock_charba_client_annotation_HasBackgroundColor_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_annotation_HasBackgroundColor_$LambdaAdaptor__org_pepstock_charba_client_annotation_HasBackgroundColor_$JsFunction(/** ?function():BackgroundColorHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_annotation_HasBackgroundColor_$LambdaAdaptor = fn;
 }
 /** @override @return {BackgroundColorHandler} */
 m_getBackgroundColorHandler__() {
  let /** ?function():BackgroundColorHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_annotation_HasBackgroundColor_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {
  return HasBackgroundColor.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getBackgroundColor__() {
  return HasBackgroundColor.m_getBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return HasBackgroundColor.m_getBackgroundColorAsString__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__java_lang_String(/** ?string */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<AnnotationContext> */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasBackgroundColor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasBackgroundColor.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.annotation.HasBackgroundColor$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasBackgroundColor$$LambdaAdaptor.js.map
