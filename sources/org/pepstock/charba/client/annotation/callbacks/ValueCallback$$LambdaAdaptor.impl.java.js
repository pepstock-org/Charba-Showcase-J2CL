goog.module('org.pepstock.charba.client.annotation.callbacks.ValueCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueCallback = goog.require('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ValueCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(AnnotationContext):* */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(AnnotationContext):*}*/
  this.f_fn__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$LambdaAdaptor__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$LambdaAdaptor__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$JsFunction(/** ?function(AnnotationContext):* */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$LambdaAdaptor = fn;
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_annotation_AnnotationContext(/** AnnotationContext */ arg0) {
  let /** ?function(AnnotationContext):* */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** AnnotationContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_annotation_AnnotationContext(/**@type {AnnotationContext}*/ ($Casts.$to(arg0, AnnotationContext)));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ValueCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.annotation.callbacks.ValueCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ValueCallback$$LambdaAdaptor.js.map
