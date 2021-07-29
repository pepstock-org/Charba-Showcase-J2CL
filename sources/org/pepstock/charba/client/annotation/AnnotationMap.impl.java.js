goog.module('org.pepstock.charba.client.annotation.AnnotationMap$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation.Property$impl');
let AnnotationHelper = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
let AnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let BoxAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.BoxAnnotation$impl');
let EllipseAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.EllipseAnnotation$impl');
let LineAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation$impl');
let PointAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.PointAnnotation$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class AnnotationMap extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'AnnotationMap()'.
 /** @return {!AnnotationMap} */
 static $create__() {
  AnnotationMap.$clinit();
  let $instance = new AnnotationMap();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationMap__();
  return $instance;
 }
 //Initialization from constructor 'AnnotationMap()'.
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationMap__() {
  this.$ctor__org_pepstock_charba_client_annotation_AnnotationMap__org_pepstock_charba_client_commons_NativeObject(null);
 }
 //Factory method corresponding to constructor 'AnnotationMap(NativeObject)'.
 /** @return {!AnnotationMap} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  AnnotationMap.$clinit();
  let $instance = new AnnotationMap();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationMap__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'AnnotationMap(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationMap__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_resetDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(/** DrawTime */ drawTime) {
  if (!this.m_empty__()) {
   for (let $iterator = this.m_getAnnotations___$pp_org_pepstock_charba_client_annotation().m_iterator__(); $iterator.m_hasNext__(); ) {
    let annotation = /**@type {AbstractAnnotation}*/ ($Casts.$to($iterator.m_next__(), AbstractAnnotation));
    {
     annotation.m_setParentDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(drawTime);
    }
   }
  }
 }
 /** @return {boolean} */
 m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(/** AnnotationId */ id) {
  AnnotationId.m_checkIfValid__org_pepstock_charba_client_annotation_AnnotationId(id);
  return this.m_has__org_pepstock_charba_client_commons_Key(id);
 }
 
 m_removeAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(/** AnnotationId */ id) {
  AnnotationId.m_checkIfValid__org_pepstock_charba_client_annotation_AnnotationId(id);
  this.m_remove__org_pepstock_charba_client_commons_Key(id);
 }
 
 m_addAnnotations__org_pepstock_charba_client_annotation_enums_DrawTime__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(/** DrawTime */ drawTime, /** Array<AbstractAnnotation> */ annotations) {
  if (!$Equality.$same(annotations, null) && annotations.length > 0) {
   for (let $array = annotations, $index = 0; $index < $array.length; $index++) {
    let annotation = $array[$index];
    {
     annotation.m_setParentDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(drawTime);
     let id = annotation.m_getId__();
     this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(id, annotation);
    }
   }
  }
 }
 
 m_setAnnotations__org_pepstock_charba_client_annotation_enums_DrawTime__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(/** DrawTime */ drawTime, /** Array<AbstractAnnotation> */ annotations) {
  this.m_clear___$pp_org_pepstock_charba_client_annotation();
  this.m_addAnnotations__org_pepstock_charba_client_annotation_enums_DrawTime__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(drawTime, annotations);
 }
 
 m_clear___$pp_org_pepstock_charba_client_annotation() {
  for (let $iterator = this.m_keys__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
   {
    this.m_remove__org_pepstock_charba_client_commons_Key(key);
   }
  }
 }
 /** @return {List<AbstractAnnotation>} */
 m_getAnnotations___$pp_org_pepstock_charba_client_annotation() {
  let result = /**@type {!ArrayList<AbstractAnnotation>}*/ (ArrayList.$create__());
  for (let $iterator = this.m_keys__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
   {
    if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(key, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
     let annotation = this.m_getAndCreateAnnotation__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_annotation(key);
     if (!$Equality.$same(annotation, null)) {
      result.add(annotation);
     }
    }
   }
  }
  return /**@type {List<AbstractAnnotation>}*/ (Collections.m_unmodifiableList__java_util_List(result));
 }
 /** @return {AbstractAnnotation} */
 m_getAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(/** AnnotationId */ id) {
  AnnotationId.m_checkIfValid__org_pepstock_charba_client_annotation_AnnotationId(id);
  if (this.m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(id) && this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(id, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getAndCreateAnnotation__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_annotation(id);
  }
  return null;
 }
 /** @return {AbstractAnnotation} */
 m_getAndCreateAnnotation__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_annotation(/** Key */ id) {
  let nativeObject = this.m_getValue__org_pepstock_charba_client_commons_Key(id);
  let typeAsString = Id.m_getStringProperty__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(Property.f_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, nativeObject);
  let type = /**@type {AnnotationType}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(AnnotationType.m_values__(), typeAsString), AnnotationType));
  let annotationId = Id.m_getIntegerProperty__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(Property.f_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, nativeObject);
  let defaultOptions = AnnotationHelper.m_get__().m_getAnnotation__int_$pp_org_pepstock_charba_client_annotation(annotationId);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType, type) && BoxAnnotation.$isInstance(defaultOptions)) {
   return BoxAnnotation.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultOptions);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType, type) && LineAnnotation.$isInstance(defaultOptions)) {
   return LineAnnotation.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultOptions);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType, type) && EllipseAnnotation.$isInstance(defaultOptions)) {
   return EllipseAnnotation.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultOptions);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType, type) && PointAnnotation.$isInstance(defaultOptions)) {
   return PointAnnotation.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultOptions);
  }
  return null;
 }
 
 static $clinit() {
  AnnotationMap.$clinit = () =>{};
  AnnotationMap.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationMap;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation.Property$impl');
  AnnotationHelper = goog.module.get('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
  AnnotationId = goog.module.get('org.pepstock.charba.client.annotation.AnnotationId$impl');
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  BoxAnnotation = goog.module.get('org.pepstock.charba.client.annotation.BoxAnnotation$impl');
  EllipseAnnotation = goog.module.get('org.pepstock.charba.client.annotation.EllipseAnnotation$impl');
  LineAnnotation = goog.module.get('org.pepstock.charba.client.annotation.LineAnnotation$impl');
  PointAnnotation = goog.module.get('org.pepstock.charba.client.annotation.PointAnnotation$impl');
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(AnnotationMap, "org.pepstock.charba.client.annotation.AnnotationMap");

exports = AnnotationMap;

//# sourceMappingURL=AnnotationMap.js.map
