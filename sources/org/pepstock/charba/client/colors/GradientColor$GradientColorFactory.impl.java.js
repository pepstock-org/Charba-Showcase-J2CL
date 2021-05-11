goog.module('org.pepstock.charba.client.colors.GradientColor.GradientColorFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let GradientColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<GradientColor>}
 */
class GradientColorFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GradientColorFactory} */
 static $create__() {
  GradientColorFactory.$clinit();
  let $instance = new GradientColorFactory();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientColor_GradientColorFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_GradientColor_GradientColorFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {GradientColor} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return GradientColor.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {GradientColor} */
 m_create__() {
  return /**@type {GradientColor}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), GradientColor));
 }
 
 static $clinit() {
  GradientColorFactory.$clinit = () =>{};
  GradientColorFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientColorFactory;
 }
 
 static $loadModules() {
  GradientColor = goog.module.get('org.pepstock.charba.client.colors.GradientColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(GradientColorFactory);
$Util.$setClassMetadata(GradientColorFactory, "org.pepstock.charba.client.colors.GradientColor$GradientColorFactory");

exports = GradientColorFactory;

//# sourceMappingURL=GradientColor$GradientColorFactory.js.map
