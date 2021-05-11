goog.module('org.pepstock.charba.client.data.GradientsContainer.GradientContainerFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<Gradient>}
 */
class GradientContainerFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GradientContainerFactory} */
 static $create__() {
  GradientContainerFactory.$clinit();
  let $instance = new GradientContainerFactory();
  $instance.$ctor__org_pepstock_charba_client_data_GradientsContainer_GradientContainerFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_GradientsContainer_GradientContainerFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Gradient} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return GradientBuilder.m_build__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_create__() {
  return /**@type {Gradient}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), Gradient));
 }
 
 static $clinit() {
  GradientContainerFactory.$clinit = () =>{};
  GradientContainerFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientContainerFactory;
 }
 
 static $loadModules() {
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(GradientContainerFactory);
$Util.$setClassMetadata(GradientContainerFactory, "org.pepstock.charba.client.data.GradientsContainer$GradientContainerFactory");

exports = GradientContainerFactory;

//# sourceMappingURL=GradientsContainer$GradientContainerFactory.js.map
