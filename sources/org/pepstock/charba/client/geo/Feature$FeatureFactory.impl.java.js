goog.module('org.pepstock.charba.client.geo.Feature.FeatureFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<Feature>}
 */
class FeatureFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!FeatureFactory} */
 static $create__() {
  FeatureFactory.$clinit();
  let $instance = new FeatureFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_Feature_FeatureFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_Feature_FeatureFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Feature} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return Feature.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {Feature} */
 m_create__() {
  return /**@type {Feature}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), Feature));
 }
 
 static $clinit() {
  FeatureFactory.$clinit = () =>{};
  FeatureFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FeatureFactory;
 }
 
 static $loadModules() {
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(FeatureFactory);
$Util.$setClassMetadata(FeatureFactory, "org.pepstock.charba.client.geo.Feature$FeatureFactory");

exports = FeatureFactory;

//# sourceMappingURL=Feature$FeatureFactory.js.map
