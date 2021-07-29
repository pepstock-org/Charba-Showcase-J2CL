goog.module('org.pepstock.charba.client.geo.HasCommonOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CommonOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let Graticule = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.HasCommonOptions.$LambdaAdaptor$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @interface
 */
class HasCommonOptions {
 /** @abstract @return {CommonOptionsHandler} */
 m_getHandler__() {}
 /** @abstract */
 m_setOutline__arrayOf_org_pepstock_charba_client_geo_Feature(/** Array<Feature> */ outline) {}
 /** @abstract */
 m_setOutline__java_util_List(/** List<Feature> */ outline) {}
 /** @abstract @return {List<Feature>} */
 m_getOutline__() {}
 /** @abstract */
 m_setShowOutline__boolean(/** boolean */ showOutline) {}
 /** @abstract @return {boolean} */
 m_isShowOutline__() {}
 /** @abstract */
 m_setShowGraticule__boolean(/** boolean */ showGraticule) {}
 /** @abstract */
 m_setShowGraticule__org_pepstock_charba_client_geo_Graticule(/** Graticule */ showGraticule) {}
 /** @abstract @return {boolean} */
 m_isShowGraticule__() {}
 /** @abstract @return {Graticule} */
 m_getShowGraticule__() {}
 /** @abstract */
 m_setClipMap__org_pepstock_charba_client_geo_enums_ClipMap(/** ClipMap */ clipMap) {}
 /** @abstract @return {ClipMap} */
 m_getClipMap__() {}
 /** @abstract */
 m_setClipMap__boolean(/** boolean */ clipMap) {}
 /** @abstract @return {boolean} */
 m_isClipMap__() {}
 /** @return {HasCommonOptions} */
 static $adapt(/** ?function():CommonOptionsHandler */ fn) {
  HasCommonOptions.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__arrayOf_org_pepstock_charba_client_geo_Feature(/** !HasCommonOptions */ $thisArg, /** Array<Feature> */ outline) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setOutline__arrayOf_org_pepstock_charba_client_geo_Feature_$pp_org_pepstock_charba_client_geo(outline);
  }
 }
 
 static m_setOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__java_util_List(/** !HasCommonOptions */ $thisArg, /** List<Feature> */ outline) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setOutline__java_util_List_$pp_org_pepstock_charba_client_geo(outline);
  }
 }
 /** @return {List<Feature>} */
 static m_getOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions(/** !HasCommonOptions */ $thisArg) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   return $thisArg.m_getHandler__().m_getOutline___$pp_org_pepstock_charba_client_geo();
  }
  return /**@type {List<Feature>}*/ (Collections.m_emptyList__());
 }
 
 static m_setShowOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(/** !HasCommonOptions */ $thisArg, /** boolean */ showOutline) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setShowOutline__boolean_$pp_org_pepstock_charba_client_geo(showOutline);
  }
 }
 /** @return {boolean} */
 static m_isShowOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions(/** !HasCommonOptions */ $thisArg) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   return $thisArg.m_getHandler__().m_isShowOutline___$pp_org_pepstock_charba_client_geo();
  }
  return CommonOptionsHandler.f_DEFAULT_SHOW_LINE__org_pepstock_charba_client_geo_CommonOptionsHandler;
 }
 
 static m_setShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(/** !HasCommonOptions */ $thisArg, /** boolean */ showGraticule) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setShowGraticule__boolean_$pp_org_pepstock_charba_client_geo(showGraticule);
  }
 }
 
 static m_setShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions__org_pepstock_charba_client_geo_Graticule(/** !HasCommonOptions */ $thisArg, /** Graticule */ showGraticule) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setShowGraticule__org_pepstock_charba_client_geo_Graticule_$pp_org_pepstock_charba_client_geo(showGraticule);
  }
 }
 /** @return {boolean} */
 static m_isShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions(/** !HasCommonOptions */ $thisArg) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   return $thisArg.m_getHandler__().m_isShowGraticule___$pp_org_pepstock_charba_client_geo();
  }
  return false;
 }
 /** @return {Graticule} */
 static m_getShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions(/** !HasCommonOptions */ $thisArg) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   return $thisArg.m_getHandler__().m_getShowGraticule___$pp_org_pepstock_charba_client_geo();
  }
  return null;
 }
 
 static m_setClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions__org_pepstock_charba_client_geo_enums_ClipMap(/** !HasCommonOptions */ $thisArg, /** ClipMap */ clipMap) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setClipMap__org_pepstock_charba_client_geo_enums_ClipMap_$pp_org_pepstock_charba_client_geo(clipMap);
  }
 }
 /** @return {ClipMap} */
 static m_getClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions(/** !HasCommonOptions */ $thisArg) {
  HasCommonOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   return $thisArg.m_getHandler__().m_getClipMap___$pp_org_pepstock_charba_client_geo();
  }
  return null;
 }
 
 static m_setClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(/** !HasCommonOptions */ $thisArg, /** boolean */ clipMap) {
  HasCommonOptions.$clinit();
  $thisArg.m_setClipMap__org_pepstock_charba_client_geo_enums_ClipMap(clipMap ? ClipMap.f_TRUE__org_pepstock_charba_client_geo_enums_ClipMap : ClipMap.f_FALSE__org_pepstock_charba_client_geo_enums_ClipMap);
 }
 /** @return {boolean} */
 static m_isClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions(/** !HasCommonOptions */ $thisArg) {
  HasCommonOptions.$clinit();
  return !$Objects.m_equals__java_lang_Object__java_lang_Object(ClipMap.f_FALSE__org_pepstock_charba_client_geo_enums_ClipMap, $thisArg.m_getClipMap__());
 }
 
 static $clinit() {
  HasCommonOptions.$clinit = () =>{};
  HasCommonOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_geo_HasCommonOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_HasCommonOptions;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CommonOptionsHandler = goog.module.get('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.HasCommonOptions.$LambdaAdaptor$impl');
  ClipMap = goog.module.get('org.pepstock.charba.client.geo.enums.ClipMap$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
HasCommonOptions.$markImplementor(/**@type {Function}*/ (HasCommonOptions));
$Util.$setClassMetadataForInterface(HasCommonOptions, "org.pepstock.charba.client.geo.HasCommonOptions");

exports = HasCommonOptions;

//# sourceMappingURL=HasCommonOptions.js.map
