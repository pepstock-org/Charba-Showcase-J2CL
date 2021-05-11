goog.module('org.pepstock.charba.client.items.TooltipLabelPointStyle.TooltipLabelPointStyleFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let TooltipLabelPointStyle = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<TooltipLabelPointStyle>}
 */
class TooltipLabelPointStyleFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TooltipLabelPointStyleFactory} */
 static $create__() {
  TooltipLabelPointStyleFactory.$clinit();
  let $instance = new TooltipLabelPointStyleFactory();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipLabelPointStyle_TooltipLabelPointStyleFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipLabelPointStyle_TooltipLabelPointStyleFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {TooltipLabelPointStyle} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return TooltipLabelPointStyle.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {TooltipLabelPointStyle} */
 m_create__() {
  return /**@type {TooltipLabelPointStyle}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), TooltipLabelPointStyle));
 }
 
 static $clinit() {
  TooltipLabelPointStyleFactory.$clinit = () =>{};
  TooltipLabelPointStyleFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipLabelPointStyleFactory;
 }
 
 static $loadModules() {
  TooltipLabelPointStyle = goog.module.get('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(TooltipLabelPointStyleFactory);
$Util.$setClassMetadata(TooltipLabelPointStyleFactory, "org.pepstock.charba.client.items.TooltipLabelPointStyle$TooltipLabelPointStyleFactory");

exports = TooltipLabelPointStyleFactory;

//# sourceMappingURL=TooltipLabelPointStyle$TooltipLabelPointStyleFactory.js.map
