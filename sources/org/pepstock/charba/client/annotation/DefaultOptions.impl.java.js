goog.module('org.pepstock.charba.client.annotation.DefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsAnnotationOptions = goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotationOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');

/**
 * @implements {IsDefaultsAnnotationOptions}
 */
class DefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultOptions} */
 static $create__() {
  let $instance = new DefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_annotation_DefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_DefaultOptions__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {AbstractAnnotation} */
 m_getAnnotation__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ arg0) {
  return IsDefaultsAnnotationOptions.m_getAnnotation__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_annotation_AnnotationId(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {List<AbstractAnnotation>} */
 m_getAnnotations__() {
  return IsDefaultsAnnotationOptions.m_getAnnotations__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getDoubleClickSpeed__() {
  return IsDefaultsAnnotationOptions.m_getDoubleClickSpeed__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return IsDefaultsAnnotationOptions.m_getDrawTime__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ arg0) {
  return IsDefaultsAnnotationOptions.m_hasAnnotation__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_annotation_AnnotationId(this, arg0);
 }
 /** @return {DefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_annotation_DefaultOptions() {
  return (DefaultOptions.$clinit(), DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultOptions);
 }
 
 static $clinit() {
  DefaultOptions.$clinit = () =>{};
  DefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsDefaultsAnnotationOptions.$clinit();
  DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultOptions = DefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultOptions;
 }
 
 static $loadModules() {}
}
/**@private {DefaultOptions}*/
DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultOptions;
IsDefaultsAnnotationOptions.$markImplementor(DefaultOptions);
$Util.$setClassMetadata(DefaultOptions, "org.pepstock.charba.client.annotation.DefaultOptions");

exports = DefaultOptions;

//# sourceMappingURL=DefaultOptions.js.map
