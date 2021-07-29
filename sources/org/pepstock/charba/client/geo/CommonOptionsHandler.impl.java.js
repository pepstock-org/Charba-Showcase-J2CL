goog.module('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let BaseGeoOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoOptionsMapper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsHandler.Property$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let Graticule = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class CommonOptionsHandler extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {ClipMap}*/
  this.f_defaultClipMap__org_pepstock_charba_client_geo_CommonOptionsHandler_;
 }
 //Factory method corresponding to constructor 'CommonOptionsHandler(BaseGeoOptionsMapper)'.
 /** @return {!CommonOptionsHandler} */
 static $create__org_pepstock_charba_client_geo_BaseGeoOptionsMapper(/** BaseGeoOptionsMapper */ mapper) {
  CommonOptionsHandler.$clinit();
  let $instance = new CommonOptionsHandler();
  $instance.$ctor__org_pepstock_charba_client_geo_CommonOptionsHandler__org_pepstock_charba_client_geo_BaseGeoOptionsMapper(mapper);
  return $instance;
 }
 //Initialization from constructor 'CommonOptionsHandler(BaseGeoOptionsMapper)'.
 
 $ctor__org_pepstock_charba_client_geo_CommonOptionsHandler__org_pepstock_charba_client_geo_BaseGeoOptionsMapper(/** BaseGeoOptionsMapper */ mapper) {
  this.$ctor__org_pepstock_charba_client_geo_CommonOptionsHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap(mapper.m_nativeObject___$pp_org_pepstock_charba_client_geo(), mapper.m_getDefaultClipMap___$pp_org_pepstock_charba_client_geo());
 }
 //Factory method corresponding to constructor 'CommonOptionsHandler(NativeObject, ClipMap)'.
 /** @return {!CommonOptionsHandler} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap(/** ? */ nativeObject, /** ClipMap */ defaultClipMap) {
  CommonOptionsHandler.$clinit();
  let $instance = new CommonOptionsHandler();
  $instance.$ctor__org_pepstock_charba_client_geo_CommonOptionsHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap(nativeObject, defaultClipMap);
  return $instance;
 }
 //Initialization from constructor 'CommonOptionsHandler(NativeObject, ClipMap)'.
 
 $ctor__org_pepstock_charba_client_geo_CommonOptionsHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap(/** ? */ nativeObject, /** ClipMap */ defaultClipMap) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultClipMap__org_pepstock_charba_client_geo_CommonOptionsHandler_ = defaultClipMap;
 }
 
 m_setOutline__arrayOf_org_pepstock_charba_client_geo_Feature_$pp_org_pepstock_charba_client_geo(/** Array<Feature> */ outline) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_OUTLINE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, outline);
 }
 
 m_setOutline__java_util_List_$pp_org_pepstock_charba_client_geo(/** List<Feature> */ outline) {
  if (!$Equality.$same(outline, null)) {
   let features = /**@type {!Array<Feature>}*/ ($Arrays.$create([outline.size()], Feature));
   for (let i = 0; i < outline.size(); i = i + 1 | 0) {
    $Arrays.$set(features, i, /**@type {Feature}*/ ($Casts.$to(outline.getAtIndex(i), Feature)));
   }
   this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_OUTLINE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, features);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_OUTLINE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property);
  }
 }
 /** @return {List<Feature>} */
 m_getOutline___$pp_org_pepstock_charba_client_geo() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_OUTLINE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property), ArrayObject_$Overlay));
  return /**@type {ArrayObjectContainerList<Feature>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, Feature.f_FACTORY__org_pepstock_charba_client_geo_Feature));
 }
 
 m_setShowOutline__boolean_$pp_org_pepstock_charba_client_geo(/** boolean */ showOutline) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_OUTLINE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, showOutline);
 }
 /** @return {boolean} */
 m_isShowOutline___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_OUTLINE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, CommonOptionsHandler.f_DEFAULT_SHOW_LINE__org_pepstock_charba_client_geo_CommonOptionsHandler);
 }
 
 m_setShowGraticule__boolean_$pp_org_pepstock_charba_client_geo(/** boolean */ showGraticule) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_GRATICULE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, showGraticule);
 }
 
 m_setShowGraticule__org_pepstock_charba_client_geo_Graticule_$pp_org_pepstock_charba_client_geo(/** Graticule */ showGraticule) {
  if (!$Equality.$same(showGraticule, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_SHOW_GRATICULE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, showGraticule);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_SHOW_GRATICULE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property);
  }
 }
 /** @return {boolean} */
 m_isShowGraticule___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_GRATICULE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, this.m_has__org_pepstock_charba_client_commons_Key(Property.f_SHOW_GRATICULE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property));
 }
 /** @return {Graticule} */
 m_getShowGraticule___$pp_org_pepstock_charba_client_geo() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_SHOW_GRATICULE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Graticule.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SHOW_GRATICULE__org_pepstock_charba_client_geo_CommonOptionsHandler_Property));
  }
  return null;
 }
 
 m_setClipMap__org_pepstock_charba_client_geo_enums_ClipMap_$pp_org_pepstock_charba_client_geo(/** ClipMap */ clipMap) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(clipMap)) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(ClipMap.f_TRUE__org_pepstock_charba_client_geo_enums_ClipMap, clipMap)) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, true);
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ClipMap.f_FALSE__org_pepstock_charba_client_geo_enums_ClipMap, clipMap)) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, false);
   } else {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, clipMap);
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property);
  }
 }
 /** @return {ClipMap} */
 m_getClipMap___$pp_org_pepstock_charba_client_geo() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return /**@type {ClipMap}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(ClipMap.m_values__(), this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, this.f_defaultClipMap__org_pepstock_charba_client_geo_CommonOptionsHandler_)), ClipMap));
  } else if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   if (this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CLIP_MAP__org_pepstock_charba_client_geo_CommonOptionsHandler_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined)) {
    return ClipMap.f_TRUE__org_pepstock_charba_client_geo_enums_ClipMap;
   }
   return ClipMap.f_FALSE__org_pepstock_charba_client_geo_enums_ClipMap;
  }
  return this.f_defaultClipMap__org_pepstock_charba_client_geo_CommonOptionsHandler_;
 }
 
 static $clinit() {
  CommonOptionsHandler.$clinit = () =>{};
  CommonOptionsHandler.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CommonOptionsHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.CommonOptionsHandler.Property$impl');
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
  Graticule = goog.module.get('org.pepstock.charba.client.geo.Graticule$impl');
  ClipMap = goog.module.get('org.pepstock.charba.client.geo.enums.ClipMap$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {boolean}*/
CommonOptionsHandler.f_DEFAULT_SHOW_LINE__org_pepstock_charba_client_geo_CommonOptionsHandler = false;
$Util.$setClassMetadata(CommonOptionsHandler, "org.pepstock.charba.client.geo.CommonOptionsHandler");

exports = CommonOptionsHandler;

//# sourceMappingURL=CommonOptionsHandler.js.map
