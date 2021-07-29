goog.module('org.pepstock.charba.client.geo.BaseGeoOptionsMapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let BaseGeoElements = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoElements$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoElements.CommonProperty$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');

/**
 * @abstract
 */
class BaseGeoOptionsMapper extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {ExtendedOptions}*/
  this.f_options__org_pepstock_charba_client_geo_BaseGeoOptionsMapper_;
  /**@type {BaseGeoElements}*/
  this.f_elements__org_pepstock_charba_client_geo_BaseGeoOptionsMapper_;
 }
 
 $ctor__org_pepstock_charba_client_geo_BaseGeoOptionsMapper__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(/** ExtendedOptions */ options, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_options__org_pepstock_charba_client_geo_BaseGeoOptionsMapper_ = options;
  this.f_elements__org_pepstock_charba_client_geo_BaseGeoOptionsMapper_ = BaseGeoElements.$create__org_pepstock_charba_client_geo_BaseGeoOptionsMapper__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_options_Elements(this, this.m_getValue__org_pepstock_charba_client_commons_Key(CommonProperty.f_ELEMENTS__org_pepstock_charba_client_geo_BaseGeoElements_CommonProperty), this.m_getConfiguration___$pp_org_pepstock_charba_client_geo().m_getElements__());
 }
 /** @abstract @return {ClipMap} */
 m_getDefaultClipMap___$pp_org_pepstock_charba_client_geo() {}
 /** @return {ExtendedOptions} */
 m_getConfiguration___$pp_org_pepstock_charba_client_geo() {
  return this.f_options__org_pepstock_charba_client_geo_BaseGeoOptionsMapper_;
 }
 /** @return {BaseGeoElements} */
 m_getElements___$pp_org_pepstock_charba_client_geo() {
  return this.f_elements__org_pepstock_charba_client_geo_BaseGeoOptionsMapper_;
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_geo() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  BaseGeoOptionsMapper.$clinit = () =>{};
  BaseGeoOptionsMapper.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseGeoOptionsMapper;
 }
 
 static $loadModules() {
  BaseGeoElements = goog.module.get('org.pepstock.charba.client.geo.BaseGeoElements$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.geo.BaseGeoElements.CommonProperty$impl');
 }
}
$Util.$setClassMetadata(BaseGeoOptionsMapper, "org.pepstock.charba.client.geo.BaseGeoOptionsMapper");

exports = BaseGeoOptionsMapper;

//# sourceMappingURL=BaseGeoOptionsMapper.js.map
