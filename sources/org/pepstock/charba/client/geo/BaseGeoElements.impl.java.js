goog.module('org.pepstock.charba.client.geo.BaseGeoElements$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoElements.CommonProperty$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoElements.Property$impl');
let BaseGeoOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoOptionsMapper$impl');
let BubbleMapPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapPoint$impl');
let ChoroplethBar = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethBar$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');

class BaseGeoElements extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {ChoroplethBar}*/
  this.f_choroplethBar__org_pepstock_charba_client_geo_BaseGeoElements_;
  /**@type {BubbleMapPoint}*/
  this.f_bubbleMapPoint__org_pepstock_charba_client_geo_BaseGeoElements_;
 }
 /** @return {!BaseGeoElements} */
 static $create__org_pepstock_charba_client_geo_BaseGeoOptionsMapper__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_options_Elements(/** BaseGeoOptionsMapper */ mapper, /** ? */ nativeObject, /** Elements */ elements) {
  BaseGeoElements.$clinit();
  let $instance = new BaseGeoElements();
  $instance.$ctor__org_pepstock_charba_client_geo_BaseGeoElements__org_pepstock_charba_client_geo_BaseGeoOptionsMapper__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_options_Elements(mapper, nativeObject, elements);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BaseGeoElements__org_pepstock_charba_client_geo_BaseGeoOptionsMapper__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_options_Elements(/** BaseGeoOptionsMapper */ mapper, /** ? */ nativeObject, /** Elements */ elements) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(mapper, CommonProperty.f_ELEMENTS__org_pepstock_charba_client_geo_BaseGeoElements_CommonProperty, nativeObject);
  this.f_choroplethBar__org_pepstock_charba_client_geo_BaseGeoElements_ = ChoroplethBar.$create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(elements, Property.f_GEO_FEATURE__org_pepstock_charba_client_geo_BaseGeoElements_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_GEO_FEATURE__org_pepstock_charba_client_geo_BaseGeoElements_Property));
  this.f_bubbleMapPoint__org_pepstock_charba_client_geo_BaseGeoElements_ = BubbleMapPoint.$create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_commons_NativeObject(elements, Property.f_POINT__org_pepstock_charba_client_geo_BaseGeoElements_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_POINT__org_pepstock_charba_client_geo_BaseGeoElements_Property));
 }
 /** @return {ChoroplethBar} */
 m_getChoroplethBar___$pp_org_pepstock_charba_client_geo() {
  return this.f_choroplethBar__org_pepstock_charba_client_geo_BaseGeoElements_;
 }
 /** @return {BubbleMapPoint} */
 m_getBubbleMapPoint___$pp_org_pepstock_charba_client_geo() {
  return this.f_bubbleMapPoint__org_pepstock_charba_client_geo_BaseGeoElements_;
 }
 
 static $clinit() {
  BaseGeoElements.$clinit = () =>{};
  BaseGeoElements.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseGeoElements;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.geo.BaseGeoElements.CommonProperty$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.BaseGeoElements.Property$impl');
  BubbleMapPoint = goog.module.get('org.pepstock.charba.client.geo.BubbleMapPoint$impl');
  ChoroplethBar = goog.module.get('org.pepstock.charba.client.geo.ChoroplethBar$impl');
 }
}
$Util.$setClassMetadata(BaseGeoElements, "org.pepstock.charba.client.geo.BaseGeoElements");

exports = BaseGeoElements;

//# sourceMappingURL=BaseGeoElements.js.map
