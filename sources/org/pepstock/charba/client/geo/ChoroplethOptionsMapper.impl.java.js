goog.module('org.pepstock.charba.client.geo.ChoroplethOptionsMapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseGeoOptionsMapper = goog.require('org.pepstock.charba.client.geo.BaseGeoOptionsMapper$impl');

let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');

class ChoroplethOptionsMapper extends BaseGeoOptionsMapper {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChoroplethOptionsMapper} */
 static $create__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(/** ExtendedOptions */ options, /** ? */ nativeObject) {
  ChoroplethOptionsMapper.$clinit();
  let $instance = new ChoroplethOptionsMapper();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethOptionsMapper__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(options, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethOptionsMapper__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(/** ExtendedOptions */ options, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_geo_BaseGeoOptionsMapper__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(options, nativeObject);
 }
 /** @override @return {ClipMap} */
 m_getDefaultClipMap___$pp_org_pepstock_charba_client_geo() {
  return ChoroplethOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_ChoroplethOptionsMapper;
 }
 /** @return {ClipMap} */
 static get f_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_ChoroplethOptionsMapper() {
  return (ChoroplethOptionsMapper.$clinit(), ChoroplethOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_ChoroplethOptionsMapper);
 }
 
 static $clinit() {
  ChoroplethOptionsMapper.$clinit = () =>{};
  ChoroplethOptionsMapper.$loadModules();
  BaseGeoOptionsMapper.$clinit();
  ChoroplethOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_ChoroplethOptionsMapper = ClipMap.f_TRUE__org_pepstock_charba_client_geo_enums_ClipMap;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethOptionsMapper;
 }
 
 static $loadModules() {
  ClipMap = goog.module.get('org.pepstock.charba.client.geo.enums.ClipMap$impl');
 }
}
/**@private {ClipMap}*/
ChoroplethOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_ChoroplethOptionsMapper;
$Util.$setClassMetadata(ChoroplethOptionsMapper, "org.pepstock.charba.client.geo.ChoroplethOptionsMapper");

exports = ChoroplethOptionsMapper;

//# sourceMappingURL=ChoroplethOptionsMapper.js.map
