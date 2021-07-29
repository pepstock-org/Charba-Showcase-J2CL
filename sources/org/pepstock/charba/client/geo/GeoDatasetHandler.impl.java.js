goog.module('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CommonOptionsHandler = goog.require('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let GeoDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDataPoint$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDatasetHandler.Property$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 */
class GeoDatasetHandler extends CommonOptionsHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {NativeObjectContainerFactory<T>}*/
  this.f_factory__org_pepstock_charba_client_geo_GeoDatasetHandler_;
 }
 /** @template T @return {!GeoDatasetHandler<T>} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** ? */ nativeObject, /** ClipMap */ defaultClipMap, /** NativeObjectContainerFactory<T> */ factory) {
  GeoDatasetHandler.$clinit();
  let $instance = new GeoDatasetHandler();
  $instance.$ctor__org_pepstock_charba_client_geo_GeoDatasetHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap__org_pepstock_charba_client_commons_NativeObjectContainerFactory(nativeObject, defaultClipMap, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_GeoDatasetHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** ? */ nativeObject, /** ClipMap */ defaultClipMap, /** NativeObjectContainerFactory<T> */ factory) {
  this.$ctor__org_pepstock_charba_client_geo_CommonOptionsHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap(nativeObject, defaultClipMap);
  this.f_factory__org_pepstock_charba_client_geo_GeoDatasetHandler_ = factory;
 }
 
 m_setValues__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint_$pp_org_pepstock_charba_client_geo(/** Array<T> */ values) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_DATA__org_pepstock_charba_client_geo_GeoDatasetHandler_Property, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(values));
 }
 
 m_setValues__java_util_List_$pp_org_pepstock_charba_client_geo(/** List<T> */ values) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_DATA__org_pepstock_charba_client_geo_GeoDatasetHandler_Property, ArrayObject_$Overlay.m_fromOrNull__java_util_List(values));
 }
 /** @return {List<T>} */
 m_getValues__boolean_$pp_org_pepstock_charba_client_geo(/** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_DATA__org_pepstock_charba_client_geo_GeoDatasetHandler_Property)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_DATA__org_pepstock_charba_client_geo_GeoDatasetHandler_Property), ArrayObject_$Overlay));
   return /**@type {ArrayObjectContainerList<T>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, this.f_factory__org_pepstock_charba_client_geo_GeoDatasetHandler_));
  }
  if (binding) {
   let result = /**@type {!ArrayObjectContainerList<T>}*/ (ArrayObjectContainerList.$create__());
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_DATA__org_pepstock_charba_client_geo_GeoDatasetHandler_Property, ArrayObject_$Overlay.m_fromOrEmpty__java_util_List(result));
   return result;
  }
  return /**@type {List<T>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  GeoDatasetHandler.$clinit = () =>{};
  GeoDatasetHandler.$loadModules();
  CommonOptionsHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoDatasetHandler;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  ArrayObjectContainerList = goog.module.get('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.GeoDatasetHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
GeoDatasetHandler.f_INVALID_SET_DATA_CALL__org_pepstock_charba_client_geo_GeoDatasetHandler = "'setData' method is not invokable by a GEO chart. Use 'setValues' method";
/**@const {?string}*/
GeoDatasetHandler.f_INVALID_GET_DATA_CALL__org_pepstock_charba_client_geo_GeoDatasetHandler = "'getData' method is not invokable by a GEO chart. Use 'getValues' method";
$Util.$setClassMetadata(GeoDatasetHandler, "org.pepstock.charba.client.geo.GeoDatasetHandler");

exports = GeoDatasetHandler;

//# sourceMappingURL=GeoDatasetHandler.js.map
