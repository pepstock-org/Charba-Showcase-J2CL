goog.module('org.pepstock.charba.client.geo.BubbleMapOptionsMapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseGeoOptionsMapper = goog.require('org.pepstock.charba.client.geo.BaseGeoOptionsMapper$impl');

let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');

class BubbleMapOptionsMapper extends BaseGeoOptionsMapper {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BubbleMapOptionsMapper} */
 static $create__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(/** ExtendedOptions */ options, /** ? */ nativeObject) {
  BubbleMapOptionsMapper.$clinit();
  let $instance = new BubbleMapOptionsMapper();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapOptionsMapper__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(options, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapOptionsMapper__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(/** ExtendedOptions */ options, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_geo_BaseGeoOptionsMapper__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(options, nativeObject);
 }
 /** @override @return {ClipMap} */
 m_getDefaultClipMap___$pp_org_pepstock_charba_client_geo() {
  return BubbleMapOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_BubbleMapOptionsMapper;
 }
 /** @return {ClipMap} */
 static get f_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_BubbleMapOptionsMapper() {
  return (BubbleMapOptionsMapper.$clinit(), BubbleMapOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_BubbleMapOptionsMapper);
 }
 
 static $clinit() {
  BubbleMapOptionsMapper.$clinit = () =>{};
  BubbleMapOptionsMapper.$loadModules();
  BaseGeoOptionsMapper.$clinit();
  BubbleMapOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_BubbleMapOptionsMapper = ClipMap.f_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapOptionsMapper;
 }
 
 static $loadModules() {
  ClipMap = goog.module.get('org.pepstock.charba.client.geo.enums.ClipMap$impl');
 }
}
/**@private {ClipMap}*/
BubbleMapOptionsMapper.$static_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_BubbleMapOptionsMapper;
$Util.$setClassMetadata(BubbleMapOptionsMapper, "org.pepstock.charba.client.geo.BubbleMapOptionsMapper");

exports = BubbleMapOptionsMapper;

//# sourceMappingURL=BubbleMapOptionsMapper.js.map
