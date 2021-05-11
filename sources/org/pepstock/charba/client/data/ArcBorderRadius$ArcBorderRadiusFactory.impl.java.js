goog.module('org.pepstock.charba.client.data.ArcBorderRadius.ArcBorderRadiusFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let ArcBorderRadius = goog.forwardDeclare('org.pepstock.charba.client.data.ArcBorderRadius$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<ArcBorderRadius>}
 */
class ArcBorderRadiusFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ArcBorderRadiusFactory} */
 static $create__() {
  ArcBorderRadiusFactory.$clinit();
  let $instance = new ArcBorderRadiusFactory();
  $instance.$ctor__org_pepstock_charba_client_data_ArcBorderRadius_ArcBorderRadiusFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_ArcBorderRadius_ArcBorderRadiusFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {ArcBorderRadius} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return ArcBorderRadius.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {ArcBorderRadius} */
 m_create__() {
  return /**@type {ArcBorderRadius}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), ArcBorderRadius));
 }
 
 static $clinit() {
  ArcBorderRadiusFactory.$clinit = () =>{};
  ArcBorderRadiusFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArcBorderRadiusFactory;
 }
 
 static $loadModules() {
  ArcBorderRadius = goog.module.get('org.pepstock.charba.client.data.ArcBorderRadius$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(ArcBorderRadiusFactory);
$Util.$setClassMetadata(ArcBorderRadiusFactory, "org.pepstock.charba.client.data.ArcBorderRadius$ArcBorderRadiusFactory");

exports = ArcBorderRadiusFactory;

//# sourceMappingURL=ArcBorderRadius$ArcBorderRadiusFactory.js.map
