goog.module('org.pepstock.charba.client.annotation.AnnotationContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContext = goog.require('org.pepstock.charba.client.callbacks.ChartContext$impl');

let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class AnnotationContext extends ChartContext {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractAnnotation}*/
  this.f_annotation__org_pepstock_charba_client_annotation_AnnotationContext_;
 }
 /** @return {!AnnotationContext} */
 static $create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(/** AbstractAnnotation */ annotation, /** ? */ nativeObject) {
  AnnotationContext.$clinit();
  let $instance = new AnnotationContext();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(annotation, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(/** AbstractAnnotation */ annotation, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_annotation__org_pepstock_charba_client_annotation_AnnotationContext_ = /**@type {AbstractAnnotation}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(annotation, "Annotation argument"), AbstractAnnotation));
 }
 /** @return {AbstractAnnotation} */
 m_getAnnotation__() {
  return this.f_annotation__org_pepstock_charba_client_annotation_AnnotationContext_;
 }
 /** @override @return {boolean} */
 m_isConsistent__() {
  return $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_CHART__org_pepstock_charba_client_enums_ContextType, this.m_getType__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_ANNOTATION__org_pepstock_charba_client_enums_ContextType, this.m_getType__());
 }
 
 static $clinit() {
  AnnotationContext.$clinit = () =>{};
  AnnotationContext.$loadModules();
  ChartContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationContext;
 }
 
 static $loadModules() {
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(AnnotationContext, "org.pepstock.charba.client.annotation.AnnotationContext");

exports = AnnotationContext;

//# sourceMappingURL=AnnotationContext.js.map
