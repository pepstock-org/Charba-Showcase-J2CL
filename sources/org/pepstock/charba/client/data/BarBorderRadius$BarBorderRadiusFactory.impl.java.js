goog.module('org.pepstock.charba.client.data.BarBorderRadius.BarBorderRadiusFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let BarBorderRadius = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderRadius$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<BarBorderRadius>}
 */
class BarBorderRadiusFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BarBorderRadiusFactory} */
 static $create__() {
  BarBorderRadiusFactory.$clinit();
  let $instance = new BarBorderRadiusFactory();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderRadius_BarBorderRadiusFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_BarBorderRadius_BarBorderRadiusFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BarBorderRadius} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return BarBorderRadius.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {BarBorderRadius} */
 m_create__() {
  return /**@type {BarBorderRadius}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), BarBorderRadius));
 }
 
 static $clinit() {
  BarBorderRadiusFactory.$clinit = () =>{};
  BarBorderRadiusFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarBorderRadiusFactory;
 }
 
 static $loadModules() {
  BarBorderRadius = goog.module.get('org.pepstock.charba.client.data.BarBorderRadius$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(BarBorderRadiusFactory);
$Util.$setClassMetadata(BarBorderRadiusFactory, "org.pepstock.charba.client.data.BarBorderRadius$BarBorderRadiusFactory");

exports = BarBorderRadiusFactory;

//# sourceMappingURL=BarBorderRadius$BarBorderRadiusFactory.js.map
