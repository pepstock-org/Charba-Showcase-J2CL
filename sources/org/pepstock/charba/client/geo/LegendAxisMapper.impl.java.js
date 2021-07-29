goog.module('org.pepstock.charba.client.geo.LegendAxisMapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.LegendAxisMapper.Property$impl');

/**
 * @abstract
 */
class LegendAxisMapper extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Legend}*/
  this.f_legend__org_pepstock_charba_client_geo_LegendAxisMapper_;
 }
 
 $ctor__org_pepstock_charba_client_geo_LegendAxisMapper__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_PROPERTY__org_pepstock_charba_client_geo_LegendAxisMapper_Property, LegendAxisMapper.f_PROPERTY_VALUE__org_pepstock_charba_client_geo_LegendAxisMapper_);
  this.f_legend__org_pepstock_charba_client_geo_LegendAxisMapper_ = Legend.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LEGEND__org_pepstock_charba_client_geo_LegendAxisMapper_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_LEGEND__org_pepstock_charba_client_geo_LegendAxisMapper_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_LEGEND__org_pepstock_charba_client_geo_LegendAxisMapper_Property, this.f_legend__org_pepstock_charba_client_geo_LegendAxisMapper_);
  }
 }
 /** @return {Legend} */
 m_getLegend___$pp_org_pepstock_charba_client_geo() {
  return this.f_legend__org_pepstock_charba_client_geo_LegendAxisMapper_;
 }
 
 static $clinit() {
  LegendAxisMapper.$clinit = () =>{};
  LegendAxisMapper.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendAxisMapper;
 }
 
 static $loadModules() {
  Legend = goog.module.get('org.pepstock.charba.client.geo.Legend$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.LegendAxisMapper.Property$impl');
 }
}
/**@const {?string}*/
LegendAxisMapper.f_PROPERTY_VALUE__org_pepstock_charba_client_geo_LegendAxisMapper_ = "value";
$Util.$setClassMetadata(LegendAxisMapper, "org.pepstock.charba.client.geo.LegendAxisMapper");

exports = LegendAxisMapper;

//# sourceMappingURL=LegendAxisMapper.js.map
