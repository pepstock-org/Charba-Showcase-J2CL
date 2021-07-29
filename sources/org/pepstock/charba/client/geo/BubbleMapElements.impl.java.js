goog.module('org.pepstock.charba.client.geo.BubbleMapElements$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Elements = goog.require('org.pepstock.charba.client.configuration.Elements$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let BubbleMapOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapOptions$impl');
let BubbleMapPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapPoint$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BubbleMapElements extends Elements {
 /** @protected */
 constructor() {
  super();
  /**@type {BubbleMapOptions}*/
  this.f_options__org_pepstock_charba_client_geo_BubbleMapElements_;
 }
 /** @return {!BubbleMapElements} */
 static $create__org_pepstock_charba_client_geo_BubbleMapOptions(/** BubbleMapOptions */ options) {
  BubbleMapElements.$clinit();
  let $instance = new BubbleMapElements();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapElements__org_pepstock_charba_client_geo_BubbleMapOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapElements__org_pepstock_charba_client_geo_BubbleMapOptions(/** BubbleMapOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_Elements__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.f_options__org_pepstock_charba_client_geo_BubbleMapElements_ = /**@type {BubbleMapOptions}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(options, "Bubble map options argument"), BubbleMapOptions));
 }
 /** @return {BubbleMapPoint} */
 m_getBubbleMapPoint__() {
  return this.f_options__org_pepstock_charba_client_geo_BubbleMapElements_.m_getMapper___$pp_org_pepstock_charba_client_geo().m_getElements___$pp_org_pepstock_charba_client_geo().m_getBubbleMapPoint___$pp_org_pepstock_charba_client_geo();
 }
 
 static $clinit() {
  BubbleMapElements.$clinit = () =>{};
  BubbleMapElements.$loadModules();
  Elements.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapElements;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  BubbleMapOptions = goog.module.get('org.pepstock.charba.client.geo.BubbleMapOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BubbleMapElements, "org.pepstock.charba.client.geo.BubbleMapElements");

exports = BubbleMapElements;

//# sourceMappingURL=BubbleMapElements.js.map
