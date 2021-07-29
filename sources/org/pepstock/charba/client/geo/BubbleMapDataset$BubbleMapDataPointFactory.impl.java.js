goog.module('org.pepstock.charba.client.geo.BubbleMapDataset.BubbleMapDataPointFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let BubbleMapDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<BubbleMapDataPoint>}
 */
class BubbleMapDataPointFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BubbleMapDataPointFactory} */
 static $create__() {
  BubbleMapDataPointFactory.$clinit();
  let $instance = new BubbleMapDataPointFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataset_BubbleMapDataPointFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataset_BubbleMapDataPointFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BubbleMapDataPoint} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return BubbleMapDataPoint.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {BubbleMapDataPoint} */
 m_create__() {
  return /**@type {BubbleMapDataPoint}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), BubbleMapDataPoint));
 }
 
 static $clinit() {
  BubbleMapDataPointFactory.$clinit = () =>{};
  BubbleMapDataPointFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapDataPointFactory;
 }
 
 static $loadModules() {
  BubbleMapDataPoint = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(BubbleMapDataPointFactory);
$Util.$setClassMetadata(BubbleMapDataPointFactory, "org.pepstock.charba.client.geo.BubbleMapDataset$BubbleMapDataPointFactory");

exports = BubbleMapDataPointFactory;

//# sourceMappingURL=BubbleMapDataset$BubbleMapDataPointFactory.js.map
