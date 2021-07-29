goog.module('org.pepstock.charba.client.geo.Feature$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let FeatureFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature.FeatureFactory$impl');
let Properties = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature.Properties$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class Feature extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Properties}*/
  this.f_properties__org_pepstock_charba_client_geo_Feature_;
 }
 /** @return {!Feature} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Feature.$clinit();
  let $instance = new Feature();
  $instance.$ctor__org_pepstock_charba_client_geo_Feature__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_Feature__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_properties__org_pepstock_charba_client_geo_Feature_ = Properties.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_PROPERTIES__org_pepstock_charba_client_geo_Feature_Property));
 }
 /** @return {boolean} */
 m_hasGeometry__() {
  return this.m_has__org_pepstock_charba_client_commons_Key(Property.f_GEOMETRY__org_pepstock_charba_client_geo_Feature_Property) && !$Equality.$same(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_GEOMETRY__org_pepstock_charba_client_geo_Feature_Property), null);
 }
 /** @return {?string} */
 m_getType__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TYPE__org_pepstock_charba_client_geo_Feature_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_hasProperty__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  return this.f_properties__org_pepstock_charba_client_geo_Feature_.m_hasProperty__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_geo_Feature_Properties(key);
 }
 /** @return {boolean} */
 m_hasProperty__java_lang_String(/** ?string */ key) {
  return this.m_hasProperty__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String(key));
 }
 /** @return {List<Key>} */
 m_getPropertiesKeys__() {
  return this.f_properties__org_pepstock_charba_client_geo_Feature_.m_getPropertiesKeys___$p_org_pepstock_charba_client_geo_Feature_Properties();
 }
 /** @return {ObjectType} */
 m_getPropertyType__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  return this.f_properties__org_pepstock_charba_client_geo_Feature_.m_getPropertyType__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_geo_Feature_Properties(key);
 }
 /** @return {ObjectType} */
 m_getPropertyType__java_lang_String(/** ?string */ key) {
  return this.m_getPropertyType__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String(key));
 }
 /** @return {number} */
 m_getPropertyValue__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ defaultValue) {
  return this.f_properties__org_pepstock_charba_client_geo_Feature_.m_getPropertyValue__org_pepstock_charba_client_commons_Key__double_$p_org_pepstock_charba_client_geo_Feature_Properties(key, defaultValue);
 }
 /** @return {number} */
 m_getPropertyValue__java_lang_String__double(/** ?string */ key, /** number */ defaultValue) {
  return this.m_getPropertyValue__org_pepstock_charba_client_commons_Key__double(Key.m_create__java_lang_String(key), defaultValue);
 }
 /** @return {number} */
 m_getNumberProperty__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  return this.m_getPropertyValue__org_pepstock_charba_client_commons_Key__double(key, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getNumberProperty__java_lang_String(/** ?string */ key) {
  return this.m_getNumberProperty__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String(key));
 }
 /** @return {?string} */
 m_getPropertyValue__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ defaultValue) {
  return this.f_properties__org_pepstock_charba_client_geo_Feature_.m_getPropertyValue__org_pepstock_charba_client_commons_Key__java_lang_String_$p_org_pepstock_charba_client_geo_Feature_Properties(key, defaultValue);
 }
 /** @return {?string} */
 m_getPropertyValue__java_lang_String__java_lang_String(/** ?string */ key, /** ?string */ defaultValue) {
  return this.m_getPropertyValue__org_pepstock_charba_client_commons_Key__java_lang_String(Key.m_create__java_lang_String(key), defaultValue);
 }
 /** @return {?string} */
 m_getStringProperty__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  return this.m_getPropertyValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getStringProperty__java_lang_String(/** ?string */ key) {
  return this.m_getStringProperty__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String(key));
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_geo() {
  return this.m_getNativeObject__();
 }
 /** @return {FeatureFactory} */
 static get f_FACTORY__org_pepstock_charba_client_geo_Feature() {
  return (Feature.$clinit(), Feature.$static_FACTORY__org_pepstock_charba_client_geo_Feature);
 }
 
 static $clinit() {
  Feature.$clinit = () =>{};
  Feature.$loadModules();
  NativeObjectContainer.$clinit();
  Feature.$static_FACTORY__org_pepstock_charba_client_geo_Feature = FeatureFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Feature;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  FeatureFactory = goog.module.get('org.pepstock.charba.client.geo.Feature.FeatureFactory$impl');
  Properties = goog.module.get('org.pepstock.charba.client.geo.Feature.Properties$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.Feature.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {FeatureFactory}*/
Feature.$static_FACTORY__org_pepstock_charba_client_geo_Feature;
$Util.$setClassMetadata(Feature, "org.pepstock.charba.client.geo.Feature");

exports = Feature;

//# sourceMappingURL=Feature.js.map
