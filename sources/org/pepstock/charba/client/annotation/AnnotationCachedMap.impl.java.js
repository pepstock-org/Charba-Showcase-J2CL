goog.module('org.pepstock.charba.client.annotation.AnnotationCachedMap$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnnotationMap = goog.require('org.pepstock.charba.client.annotation.AnnotationMap$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AnnotationCachedMap extends AnnotationMap {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, AbstractAnnotation>}*/
  this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_;
 }
 /** @return {!AnnotationCachedMap} */
 static $create__() {
  AnnotationCachedMap.$clinit();
  let $instance = new AnnotationCachedMap();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationCachedMap__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationCachedMap__() {
  this.$ctor__org_pepstock_charba_client_annotation_AnnotationMap__();
  this.$init___$p_org_pepstock_charba_client_annotation_AnnotationCachedMap();
 }
 /** @override */
 m_resetDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(/** DrawTime */ drawTime) {
  super.m_resetDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(drawTime);
  if (!this.m_empty__()) {
   for (let $iterator = this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_.values().m_iterator__(); $iterator.m_hasNext__(); ) {
    let annotation = /**@type {AbstractAnnotation}*/ ($Casts.$to($iterator.m_next__(), AbstractAnnotation));
    {
     annotation.m_setParentDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(drawTime);
    }
   }
  }
 }
 /** @override @return {boolean} */
 m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(/** AnnotationId */ id) {
  return super.m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(id) && this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_.containsKey(id.m_value__());
 }
 /** @override */
 m_removeAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(/** AnnotationId */ id) {
  super.m_removeAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(id);
  this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_.remove(id.m_value__());
 }
 /** @override */
 m_addAnnotations__org_pepstock_charba_client_annotation_enums_DrawTime__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(/** DrawTime */ drawTime, /** Array<AbstractAnnotation> */ annotations) {
  super.m_addAnnotations__org_pepstock_charba_client_annotation_enums_DrawTime__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(drawTime, annotations);
  if (!$Equality.$same(annotations, null) && annotations.length > 0) {
   for (let $array = annotations, $index = 0; $index < $array.length; $index++) {
    let annotation = $array[$index];
    {
     let id = annotation.m_getId__();
     this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_.put(id.m_value__(), annotation);
    }
   }
  }
 }
 /** @override */
 m_clear___$pp_org_pepstock_charba_client_annotation() {
  super.m_clear___$pp_org_pepstock_charba_client_annotation();
  this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_.clear();
 }
 /** @override @return {AbstractAnnotation} */
 m_getAndCreateAnnotation__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_annotation(/** Key */ id) {
  return /**@type {AbstractAnnotation}*/ ($Casts.$to(this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_.get(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(id).m_value__()), AbstractAnnotation));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_AnnotationCachedMap() {
  this.f_annotationsCache__org_pepstock_charba_client_annotation_AnnotationCachedMap_ = /**@type {!HashMap<?string, AbstractAnnotation>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  AnnotationCachedMap.$clinit = () =>{};
  AnnotationCachedMap.$loadModules();
  AnnotationMap.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationCachedMap;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AnnotationCachedMap, "org.pepstock.charba.client.annotation.AnnotationCachedMap");

exports = AnnotationCachedMap;

//# sourceMappingURL=AnnotationCachedMap.js.map
