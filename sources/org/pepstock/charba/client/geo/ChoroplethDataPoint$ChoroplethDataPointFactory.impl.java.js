goog.module('org.pepstock.charba.client.geo.ChoroplethDataPoint.ChoroplethDataPointFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let ChoroplethDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<ChoroplethDataPoint>}
 */
class ChoroplethDataPointFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChoroplethDataPointFactory} */
 static $create__() {
  ChoroplethDataPointFactory.$clinit();
  let $instance = new ChoroplethDataPointFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint_ChoroplethDataPointFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataPoint_ChoroplethDataPointFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {ChoroplethDataPoint} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return ChoroplethDataPoint.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {ChoroplethDataPoint} */
 m_create__() {
  return /**@type {ChoroplethDataPoint}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), ChoroplethDataPoint));
 }
 
 static $clinit() {
  ChoroplethDataPointFactory.$clinit = () =>{};
  ChoroplethDataPointFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethDataPointFactory;
 }
 
 static $loadModules() {
  ChoroplethDataPoint = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(ChoroplethDataPointFactory);
$Util.$setClassMetadata(ChoroplethDataPointFactory, "org.pepstock.charba.client.geo.ChoroplethDataPoint$ChoroplethDataPointFactory");

exports = ChoroplethDataPointFactory;

//# sourceMappingURL=ChoroplethDataPoint$ChoroplethDataPointFactory.js.map
