goog.module('org.pepstock.charba.client.annotation.AnnotationType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DefaultBox = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultBox$impl');
let DefaultEllipse = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultEllipse$impl');
let DefaultLine = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultLine$impl');
let DefaultPoint = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultPoint$impl');
let IsAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AnnotationType>}
 * @implements {Key}
 */
class AnnotationType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_annotation_AnnotationType_;
  /**@type {AtomicInteger}*/
  this.f_counter__org_pepstock_charba_client_annotation_AnnotationType_;
  /**@type {IsDefaultsAnnotation}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_AnnotationType_;
 }
 /** @return {!AnnotationType} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** IsDefaultsAnnotation */ defaultValues) {
  let $instance = new AnnotationType();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_annotation_IsDefaultsAnnotation($name, $ordinal, value, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationType__java_lang_String__int__java_lang_String__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** IsDefaultsAnnotation */ defaultValues) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.$init___$p_org_pepstock_charba_client_annotation_AnnotationType();
  this.f_value__org_pepstock_charba_client_annotation_AnnotationType_ = value;
  this.f_defaultValues__org_pepstock_charba_client_annotation_AnnotationType_ = defaultValues;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_annotation_AnnotationType_;
 }
 /** @return {IsDefaultsAnnotation} */
 m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation() {
  return this.f_defaultValues__org_pepstock_charba_client_annotation_AnnotationType_;
 }
 /** @return {IsAnnotationId} */
 m_createId__() {
  let builder = StringBuilder.$create__java_lang_String(this.m_value__());
  return IsAnnotationId.m_create__java_lang_String(builder.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants).m_append__int(this.f_counter__org_pepstock_charba_client_annotation_AnnotationType_.m_incrementAndGet__()).toString());
 }
 /** @return {!AnnotationType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AnnotationType.$clinit();
  if ($Equality.$same(AnnotationType.f_namesToValuesMap__org_pepstock_charba_client_annotation_AnnotationType_, null)) {
   AnnotationType.f_namesToValuesMap__org_pepstock_charba_client_annotation_AnnotationType_ = $Enums.createMapFromValues(AnnotationType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AnnotationType.f_namesToValuesMap__org_pepstock_charba_client_annotation_AnnotationType_);
 }
 /** @return {!Array<!AnnotationType>} */
 static m_values__() {
  AnnotationType.$clinit();
  return /**@type {!Array<AnnotationType>}*/ ($Arrays.$init([AnnotationType.$static_LINE__org_pepstock_charba_client_annotation_AnnotationType, AnnotationType.$static_BOX__org_pepstock_charba_client_annotation_AnnotationType, AnnotationType.$static_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType, AnnotationType.$static_POINT__org_pepstock_charba_client_annotation_AnnotationType], AnnotationType));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_AnnotationType() {
  this.f_counter__org_pepstock_charba_client_annotation_AnnotationType_ = AtomicInteger.$create__int(0);
 }
 /** @return {!AnnotationType} */
 static get f_LINE__org_pepstock_charba_client_annotation_AnnotationType() {
  return (AnnotationType.$clinit(), AnnotationType.$static_LINE__org_pepstock_charba_client_annotation_AnnotationType);
 }
 /** @return {!AnnotationType} */
 static get f_BOX__org_pepstock_charba_client_annotation_AnnotationType() {
  return (AnnotationType.$clinit(), AnnotationType.$static_BOX__org_pepstock_charba_client_annotation_AnnotationType);
 }
 /** @return {!AnnotationType} */
 static get f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType() {
  return (AnnotationType.$clinit(), AnnotationType.$static_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType);
 }
 /** @return {!AnnotationType} */
 static get f_POINT__org_pepstock_charba_client_annotation_AnnotationType() {
  return (AnnotationType.$clinit(), AnnotationType.$static_POINT__org_pepstock_charba_client_annotation_AnnotationType);
 }
 
 static $clinit() {
  AnnotationType.$clinit = () =>{};
  AnnotationType.$loadModules();
  Enum.$clinit();
  AnnotationType.$static_LINE__org_pepstock_charba_client_annotation_AnnotationType = AnnotationType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_annotation_IsDefaultsAnnotation($Util.$makeEnumName("LINE"), AnnotationType.$ordinal_LINE__org_pepstock_charba_client_annotation_AnnotationType, "line", DefaultLine.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultLine);
  AnnotationType.$static_BOX__org_pepstock_charba_client_annotation_AnnotationType = AnnotationType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_annotation_IsDefaultsAnnotation($Util.$makeEnumName("BOX"), AnnotationType.$ordinal_BOX__org_pepstock_charba_client_annotation_AnnotationType, "box", DefaultBox.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultBox);
  AnnotationType.$static_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType = AnnotationType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_annotation_IsDefaultsAnnotation($Util.$makeEnumName("ELLIPSE"), AnnotationType.$ordinal_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType, "ellipse", DefaultEllipse.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultEllipse);
  AnnotationType.$static_POINT__org_pepstock_charba_client_annotation_AnnotationType = AnnotationType.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_annotation_IsDefaultsAnnotation($Util.$makeEnumName("POINT"), AnnotationType.$ordinal_POINT__org_pepstock_charba_client_annotation_AnnotationType, "point", DefaultPoint.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultPoint);
  AnnotationType.f_namesToValuesMap__org_pepstock_charba_client_annotation_AnnotationType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationType;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultBox = goog.module.get('org.pepstock.charba.client.annotation.DefaultBox$impl');
  DefaultEllipse = goog.module.get('org.pepstock.charba.client.annotation.DefaultEllipse$impl');
  DefaultLine = goog.module.get('org.pepstock.charba.client.annotation.DefaultLine$impl');
  DefaultPoint = goog.module.get('org.pepstock.charba.client.annotation.DefaultPoint$impl');
  IsAnnotationId = goog.module.get('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AnnotationType}*/
AnnotationType.$static_LINE__org_pepstock_charba_client_annotation_AnnotationType;
/**@private {!AnnotationType}*/
AnnotationType.$static_BOX__org_pepstock_charba_client_annotation_AnnotationType;
/**@private {!AnnotationType}*/
AnnotationType.$static_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType;
/**@private {!AnnotationType}*/
AnnotationType.$static_POINT__org_pepstock_charba_client_annotation_AnnotationType;
/**@type {Map<?string, !AnnotationType>}*/
AnnotationType.f_namesToValuesMap__org_pepstock_charba_client_annotation_AnnotationType_;
/**@const {number}*/
AnnotationType.$ordinal_LINE__org_pepstock_charba_client_annotation_AnnotationType = 0;
/**@const {number}*/
AnnotationType.$ordinal_BOX__org_pepstock_charba_client_annotation_AnnotationType = 1;
/**@const {number}*/
AnnotationType.$ordinal_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType = 2;
/**@const {number}*/
AnnotationType.$ordinal_POINT__org_pepstock_charba_client_annotation_AnnotationType = 3;
Key.$markImplementor(AnnotationType);
$Util.$setClassMetadataForEnum(AnnotationType, "org.pepstock.charba.client.annotation.AnnotationType");

exports = AnnotationType;

//# sourceMappingURL=AnnotationType.js.map
