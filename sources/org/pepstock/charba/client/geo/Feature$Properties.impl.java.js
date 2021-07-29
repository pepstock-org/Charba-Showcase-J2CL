goog.module('org.pepstock.charba.client.geo.Feature.Properties$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');

class Properties extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Properties} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Properties.$clinit();
  let $instance = new Properties();
  $instance.$ctor__org_pepstock_charba_client_geo_Feature_Properties__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_Feature_Properties__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {boolean} */
 m_hasProperty__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_geo_Feature_Properties(/** Key */ key) {
  return this.m_has__org_pepstock_charba_client_commons_Key(key);
 }
 /** @return {List<Key>} */
 m_getPropertiesKeys___$p_org_pepstock_charba_client_geo_Feature_Properties() {
  return this.m_keys__();
 }
 /** @return {ObjectType} */
 m_getPropertyType__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_geo_Feature_Properties(/** Key */ key) {
  return this.m_type__org_pepstock_charba_client_commons_Key(key);
 }
 /** @return {number} */
 m_getPropertyValue__org_pepstock_charba_client_commons_Key__double_$p_org_pepstock_charba_client_geo_Feature_Properties(/** Key */ key, /** number */ defaultValue) {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(key, defaultValue);
 }
 /** @return {?string} */
 m_getPropertyValue__org_pepstock_charba_client_commons_Key__java_lang_String_$p_org_pepstock_charba_client_geo_Feature_Properties(/** Key */ key, /** ?string */ defaultValue) {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, defaultValue);
 }
 
 static $clinit() {
  Properties.$clinit = () =>{};
  Properties.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Properties;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Properties, "org.pepstock.charba.client.geo.Feature$Properties");

exports = Properties;

//# sourceMappingURL=Feature$Properties.js.map
