goog.module('org.pepstock.charba.client.geo.GeoUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let JsGeoHelper = goog.forwardDeclare('org.pepstock.charba.client.geo.JsGeoHelper$impl');
let TopoJson = goog.forwardDeclare('org.pepstock.charba.client.geo.TopoJson$impl');
let FeatureFilterCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback$impl');
let FeatureFindCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback$impl');
let FeatureLabelCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback$impl');
let AbstractInjectableResource = goog.forwardDeclare('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GeoUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GeoUtils} */
 static $create__() {
  let $instance = new GeoUtils();
  $instance.$ctor__org_pepstock_charba_client_geo_GeoUtils__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_GeoUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TopoJson} */
 static m_createTopoJson__org_pepstock_charba_client_resources_AbstractInjectableResource(/** AbstractInjectableResource */ topojson) {
  GeoUtils.$clinit();
  if (!$Equality.$same(topojson, null)) {
   return GeoUtils.m_createTopoJson__java_lang_String(topojson.m_getContent__());
  }
  return TopoJson.$create__org_pepstock_charba_client_commons_NativeObject(null);
 }
 /** @return {TopoJson} */
 static m_createTopoJson__java_lang_String(/** ?string */ topojson) {
  GeoUtils.$clinit();
  if (GeoUtils.m_isConsistent__java_lang_String(topojson)) {
   return TopoJson.$create__org_pepstock_charba_client_commons_NativeObject(JSON.parse(topojson));
  }
  return TopoJson.$create__org_pepstock_charba_client_commons_NativeObject(null);
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String(/** AbstractInjectableResource */ topojson, /** ?string */ featureProperty) {
  GeoUtils.$clinit();
  return GeoUtils.m_features__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty, null);
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key(/** AbstractInjectableResource */ topojson, /** Key */ featureProperty) {
  GeoUtils.$clinit();
  return GeoUtils.m_features__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty, null);
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(/** AbstractInjectableResource */ topojson, /** ?string */ featureProperty, /** FeatureFilterCallback */ filterCallback) {
  GeoUtils.$clinit();
  if (!$Equality.$same(topojson, null)) {
   return GeoUtils.m_features__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson.m_getContent__(), featureProperty, filterCallback);
  }
  return /**@type {List<Feature>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(/** AbstractInjectableResource */ topojson, /** Key */ featureProperty, /** FeatureFilterCallback */ filterCallback) {
  GeoUtils.$clinit();
  if (!$Equality.$same(topojson, null) && Key.m_isValid__org_pepstock_charba_client_commons_Key(featureProperty)) {
   return GeoUtils.m_features__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson.m_getContent__(), featureProperty.m_value__(), filterCallback);
  }
  return /**@type {List<Feature>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<Feature>} */
 static m_features__java_lang_String__org_pepstock_charba_client_commons_Key(/** ?string */ topojson, /** Key */ featureProperty) {
  GeoUtils.$clinit();
  return GeoUtils.m_features__java_lang_String__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty, null);
 }
 /** @return {List<Feature>} */
 static m_features__java_lang_String__java_lang_String(/** ?string */ topojson, /** ?string */ featureProperty) {
  GeoUtils.$clinit();
  return GeoUtils.m_features__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty, null);
 }
 /** @return {List<Feature>} */
 static m_features__java_lang_String__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(/** ?string */ topojson, /** Key */ featureProperty, /** FeatureFilterCallback */ filterCallback) {
  GeoUtils.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(featureProperty)) {
   return GeoUtils.m_features__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty.m_value__(), filterCallback);
  }
  return /**@type {List<Feature>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<Feature>} */
 static m_features__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(/** ?string */ topojson, /** ?string */ featureProperty, /** FeatureFilterCallback */ filterCallback) {
  GeoUtils.$clinit();
  if (GeoUtils.m_isConsistent__java_lang_String(topojson)) {
   return GeoUtils.m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(TopoJson.$create__org_pepstock_charba_client_commons_NativeObject(JSON.parse(topojson)), featureProperty, filterCallback);
  }
  return /**@type {List<Feature>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_geo_TopoJson__org_pepstock_charba_client_commons_Key(/** TopoJson */ topojson, /** Key */ featureProperty) {
  GeoUtils.$clinit();
  return GeoUtils.m_features__org_pepstock_charba_client_geo_TopoJson__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty, null);
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String(/** TopoJson */ topojson, /** ?string */ featureProperty) {
  GeoUtils.$clinit();
  return GeoUtils.m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty, null);
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_geo_TopoJson__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(/** TopoJson */ topojson, /** Key */ featureProperty, /** FeatureFilterCallback */ filterCallback) {
  GeoUtils.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(featureProperty)) {
   return GeoUtils.m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(topojson, featureProperty.m_value__(), filterCallback);
  }
  return /**@type {List<Feature>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<Feature>} */
 static m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(/** TopoJson */ topojson, /** ?string */ featureProperty, /** FeatureFilterCallback */ filterCallback) {
  GeoUtils.$clinit();
  if (!$Equality.$same(topojson, null) && GeoUtils.m_isConsistent__java_lang_String(featureProperty)) {
   Checker.m_assertCheck__boolean__java_lang_String(Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(/**@type {Array<Key>}*/ ($Arrays.$castTo(topojson.m_objectsKeys__().m_toArray__arrayOf_java_lang_Object(/**@type {!Array<Key>}*/ ($Arrays.$create([0], Key))), Key, 1)), featureProperty), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(GeoUtils.f_INVALID_FEATURE_PROPERTY__org_pepstock_charba_client_geo_GeoUtils_, [featureProperty, topojson.m_objectsKeysAsString___$pp_org_pepstock_charba_client_geo()]));
   let array = JsGeoHelper.m_get__().m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String_$pp_org_pepstock_charba_client_geo(topojson, featureProperty);
   if (!$Equality.$same(array, null)) {
    if (!$Equality.$same(filterCallback, null)) {
     return /**@type {List<Feature>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array.filter((/** ? */ element, /** number */ index) =>{
      return filterCallback.m_filter__org_pepstock_charba_client_geo_Feature__int(Feature.$create__org_pepstock_charba_client_commons_NativeObject(element), index);
     }), Feature.f_FACTORY__org_pepstock_charba_client_geo_Feature));
    } else {
     return /**@type {List<Feature>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, Feature.f_FACTORY__org_pepstock_charba_client_geo_Feature));
    }
   }
  }
  return /**@type {List<Feature>}*/ (Collections.m_emptyList__());
 }
 /** @return {Feature} */
 static m_feature__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(/** AbstractInjectableResource */ topojson, /** ?string */ featureProperty, /** FeatureFindCallback */ findCallback) {
  GeoUtils.$clinit();
  if (!$Equality.$same(topojson, null)) {
   return GeoUtils.m_feature__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(topojson.m_getContent__(), featureProperty, findCallback);
  }
  return null;
 }
 /** @return {Feature} */
 static m_feature__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(/** AbstractInjectableResource */ topojson, /** Key */ featureProperty, /** FeatureFindCallback */ findCallback) {
  GeoUtils.$clinit();
  if (!$Equality.$same(topojson, null) && Key.m_isValid__org_pepstock_charba_client_commons_Key(featureProperty)) {
   return GeoUtils.m_feature__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(topojson.m_getContent__(), featureProperty.m_value__(), findCallback);
  }
  return null;
 }
 /** @return {Feature} */
 static m_feature__java_lang_String__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(/** ?string */ topojson, /** Key */ featureProperty, /** FeatureFindCallback */ findCallback) {
  GeoUtils.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(featureProperty)) {
   return GeoUtils.m_feature__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(topojson, featureProperty.m_value__(), findCallback);
  }
  return null;
 }
 /** @return {Feature} */
 static m_feature__java_lang_String__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(/** ?string */ topojson, /** ?string */ featureProperty, /** FeatureFindCallback */ findCallback) {
  GeoUtils.$clinit();
  if (GeoUtils.m_isConsistent__java_lang_String(topojson)) {
   return GeoUtils.m_feature__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(TopoJson.$create__org_pepstock_charba_client_commons_NativeObject(JSON.parse(topojson)), featureProperty, findCallback);
  }
  return null;
 }
 /** @return {Feature} */
 static m_feature__org_pepstock_charba_client_geo_TopoJson__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(/** TopoJson */ topojson, /** Key */ featureProperty, /** FeatureFindCallback */ findCallback) {
  GeoUtils.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(featureProperty)) {
   return GeoUtils.m_feature__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(topojson, featureProperty.m_value__(), findCallback);
  }
  return null;
 }
 /** @return {Feature} */
 static m_feature__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(/** TopoJson */ topojson, /** ?string */ featureProperty, /** FeatureFindCallback */ findCallback) {
  GeoUtils.$clinit();
  if (!$Equality.$same(topojson, null) && GeoUtils.m_isConsistent__java_lang_String(featureProperty) && !$Equality.$same(findCallback, null)) {
   Checker.m_assertCheck__boolean__java_lang_String(Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(/**@type {Array<Key>}*/ ($Arrays.$castTo(topojson.m_objectsKeys__().m_toArray__arrayOf_java_lang_Object(/**@type {!Array<Key>}*/ ($Arrays.$create([0], Key))), Key, 1)), featureProperty), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(GeoUtils.f_INVALID_FEATURE_PROPERTY__org_pepstock_charba_client_geo_GeoUtils_, [featureProperty, topojson.m_objectsKeysAsString___$pp_org_pepstock_charba_client_geo()]));
   let array = JsGeoHelper.m_get__().m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String_$pp_org_pepstock_charba_client_geo(topojson, featureProperty);
   let foundObject = array.find((/** ? */ element, /** number */ index) =>{
    return findCallback.m_find__org_pepstock_charba_client_geo_Feature__int(Feature.$create__org_pepstock_charba_client_commons_NativeObject(element), index);
   });
   if (!$Equality.$same(foundObject, null)) {
    return Feature.$create__org_pepstock_charba_client_commons_NativeObject(foundObject);
   }
  }
  return null;
 }
 /** @return {Labels} */
 static m_loadLabels__java_util_List__org_pepstock_charba_client_commons_Key(/** List<Feature> */ features, /** Key */ property) {
  GeoUtils.$clinit();
  return GeoUtils.m_loadLabels__java_util_List__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback__org_pepstock_charba_client_commons_Key(features, null, property);
 }
 /** @return {Labels} */
 static m_loadLabels__java_util_List__java_lang_String(/** List<Feature> */ features, /** ?string */ property) {
  GeoUtils.$clinit();
  if (GeoUtils.m_isConsistent__java_lang_String(property)) {
   return GeoUtils.m_loadLabels__java_util_List__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback__org_pepstock_charba_client_commons_Key(features, null, Key.m_create__java_lang_String(property));
  }
  return Labels.m_build__();
 }
 /** @return {Labels} */
 static m_loadLabels__java_util_List__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback(/** List<Feature> */ features, /** FeatureLabelCallback */ labelCallback) {
  GeoUtils.$clinit();
  return GeoUtils.m_loadLabels__java_util_List__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback__org_pepstock_charba_client_commons_Key(features, labelCallback, null);
 }
 /** @return {Labels} */
 static m_loadLabels__java_util_List__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback__org_pepstock_charba_client_commons_Key(/** List<Feature> */ features, /** FeatureLabelCallback */ labelCallback, /** Key */ property) {
  let labels = Labels.m_build__();
  if (!$Equality.$same(features, null) && !features.isEmpty()) {
   for (let $iterator = features.m_iterator__(); $iterator.m_hasNext__(); ) {
    let feature = /**@type {Feature}*/ ($Casts.$to($iterator.m_next__(), Feature));
    {
     let /** ?string */ result;
     if (!$Equality.$same(labelCallback, null)) {
      result = labelCallback.m_label__org_pepstock_charba_client_geo_Feature(feature);
     } else if (Key.m_isValid__org_pepstock_charba_client_commons_Key(property)) {
      result = feature.m_getStringProperty__org_pepstock_charba_client_commons_Key(property);
     } else {
      result = null;
     }
     labels.m_add__java_lang_String(result);
    }
   }
  }
  return labels;
 }
 /** @return {boolean} */
 static m_isConsistent__java_lang_String(/** ?string */ value) {
  return !$Equality.$same(value, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(value)) > 0;
 }
 
 static $clinit() {
  GeoUtils.$clinit = () =>{};
  GeoUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoUtils;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Labels = goog.module.get('org.pepstock.charba.client.data.Labels$impl');
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
  JsGeoHelper = goog.module.get('org.pepstock.charba.client.geo.JsGeoHelper$impl');
  TopoJson = goog.module.get('org.pepstock.charba.client.geo.TopoJson$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
GeoUtils.f_INVALID_FEATURE_PROPERTY__org_pepstock_charba_client_geo_GeoUtils_ = "Features '{0}' property is undefined.\nAvailble properties: {1}.";
$Util.$setClassMetadata(GeoUtils, "org.pepstock.charba.client.geo.GeoUtils");

exports = GeoUtils;

//# sourceMappingURL=GeoUtils.js.map
