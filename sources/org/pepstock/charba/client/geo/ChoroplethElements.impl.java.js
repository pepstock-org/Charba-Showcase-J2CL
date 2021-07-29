goog.module('org.pepstock.charba.client.geo.ChoroplethElements$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Elements = goog.require('org.pepstock.charba.client.configuration.Elements$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ChoroplethBar = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethBar$impl');
let ChoroplethOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChoroplethElements extends Elements {
 /** @protected */
 constructor() {
  super();
  /**@type {ChoroplethOptions}*/
  this.f_options__org_pepstock_charba_client_geo_ChoroplethElements_;
 }
 /** @return {!ChoroplethElements} */
 static $create__org_pepstock_charba_client_geo_ChoroplethOptions(/** ChoroplethOptions */ options) {
  ChoroplethElements.$clinit();
  let $instance = new ChoroplethElements();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethElements__org_pepstock_charba_client_geo_ChoroplethOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethElements__org_pepstock_charba_client_geo_ChoroplethOptions(/** ChoroplethOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_Elements__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.f_options__org_pepstock_charba_client_geo_ChoroplethElements_ = /**@type {ChoroplethOptions}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(options, "Choropleth options argument"), ChoroplethOptions));
 }
 /** @return {ChoroplethBar} */
 m_getChoroplethBar__() {
  return this.f_options__org_pepstock_charba_client_geo_ChoroplethElements_.m_getMapper___$pp_org_pepstock_charba_client_geo().m_getElements___$pp_org_pepstock_charba_client_geo().m_getChoroplethBar___$pp_org_pepstock_charba_client_geo();
 }
 
 static $clinit() {
  ChoroplethElements.$clinit = () =>{};
  ChoroplethElements.$loadModules();
  Elements.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethElements;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ChoroplethOptions = goog.module.get('org.pepstock.charba.client.geo.ChoroplethOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChoroplethElements, "org.pepstock.charba.client.geo.ChoroplethElements");

exports = ChoroplethElements;

//# sourceMappingURL=ChoroplethElements.js.map
