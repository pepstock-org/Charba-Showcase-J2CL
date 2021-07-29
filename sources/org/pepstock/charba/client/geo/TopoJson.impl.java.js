goog.module('org.pepstock.charba.client.geo.TopoJson$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Objects = goog.forwardDeclare('org.pepstock.charba.client.geo.TopoJson.Objects$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.TopoJson.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TopoJson extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Objects}*/
  this.f_objects__org_pepstock_charba_client_geo_TopoJson_;
  /**@type {StringBuilder}*/
  this.f_propertiesAsString__org_pepstock_charba_client_geo_TopoJson_;
 }
 /** @return {!TopoJson} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TopoJson.$clinit();
  let $instance = new TopoJson();
  $instance.$ctor__org_pepstock_charba_client_geo_TopoJson__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_TopoJson__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_geo_TopoJson();
  this.f_objects__org_pepstock_charba_client_geo_TopoJson_ = Objects.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_OBJECTS__org_pepstock_charba_client_geo_TopoJson_Property));
 }
 /** @return {List<Key>} */
 m_objectsKeys__() {
  return this.f_objects__org_pepstock_charba_client_geo_TopoJson_.m_propertiesKeys___$p_org_pepstock_charba_client_geo_TopoJson_Objects();
 }
 /** @return {?string} */
 m_objectsKeysAsString___$pp_org_pepstock_charba_client_geo() {
  if (this.f_propertiesAsString__org_pepstock_charba_client_geo_TopoJson_.m_length__() == 0) {
   for (let $iterator = this.m_objectsKeys__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let property = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
    {
     if (this.f_propertiesAsString__org_pepstock_charba_client_geo_TopoJson_.m_length__() > 0) {
      this.f_propertiesAsString__org_pepstock_charba_client_geo_TopoJson_.m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants);
     }
     this.f_propertiesAsString__org_pepstock_charba_client_geo_TopoJson_.m_append__java_lang_String(Constants.f_APOSTROPHE__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(property.m_value__()).m_append__java_lang_String(Constants.f_APOSTROPHE__org_pepstock_charba_client_commons_Constants);
    }
   }
  }
  return this.f_propertiesAsString__org_pepstock_charba_client_geo_TopoJson_.toString();
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_geo() {
  return this.m_getNativeObject__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_geo_TopoJson() {
  this.f_propertiesAsString__org_pepstock_charba_client_geo_TopoJson_ = StringBuilder.$create__();
 }
 
 static $clinit() {
  TopoJson.$clinit = () =>{};
  TopoJson.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TopoJson;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Objects = goog.module.get('org.pepstock.charba.client.geo.TopoJson.Objects$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.TopoJson.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TopoJson, "org.pepstock.charba.client.geo.TopoJson");

exports = TopoJson;

//# sourceMappingURL=TopoJson.js.map
