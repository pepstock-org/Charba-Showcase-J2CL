goog.module('org.pepstock.charba.client.data.BarBorderWidth.BarBorderWidthFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let BarBorderWidth = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderWidth$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<BarBorderWidth>}
 */
class BarBorderWidthFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BarBorderWidthFactory} */
 static $create__() {
  BarBorderWidthFactory.$clinit();
  let $instance = new BarBorderWidthFactory();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderWidth_BarBorderWidthFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_BarBorderWidth_BarBorderWidthFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BarBorderWidth} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return BarBorderWidth.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {BarBorderWidth} */
 m_create__() {
  return /**@type {BarBorderWidth}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), BarBorderWidth));
 }
 
 static $clinit() {
  BarBorderWidthFactory.$clinit = () =>{};
  BarBorderWidthFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarBorderWidthFactory;
 }
 
 static $loadModules() {
  BarBorderWidth = goog.module.get('org.pepstock.charba.client.data.BarBorderWidth$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(BarBorderWidthFactory);
$Util.$setClassMetadata(BarBorderWidthFactory, "org.pepstock.charba.client.data.BarBorderWidth$BarBorderWidthFactory");

exports = BarBorderWidthFactory;

//# sourceMappingURL=BarBorderWidth$BarBorderWidthFactory.js.map
