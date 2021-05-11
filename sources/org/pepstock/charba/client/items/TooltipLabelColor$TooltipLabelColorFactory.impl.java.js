goog.module('org.pepstock.charba.client.items.TooltipLabelColor.TooltipLabelColorFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<TooltipLabelColor>}
 */
class TooltipLabelColorFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TooltipLabelColorFactory} */
 static $create__() {
  TooltipLabelColorFactory.$clinit();
  let $instance = new TooltipLabelColorFactory();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipLabelColor_TooltipLabelColorFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipLabelColor_TooltipLabelColorFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {TooltipLabelColor} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return TooltipLabelColor.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {TooltipLabelColor} */
 m_create__() {
  return /**@type {TooltipLabelColor}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), TooltipLabelColor));
 }
 
 static $clinit() {
  TooltipLabelColorFactory.$clinit = () =>{};
  TooltipLabelColorFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipLabelColorFactory;
 }
 
 static $loadModules() {
  TooltipLabelColor = goog.module.get('org.pepstock.charba.client.items.TooltipLabelColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(TooltipLabelColorFactory);
$Util.$setClassMetadata(TooltipLabelColorFactory, "org.pepstock.charba.client.items.TooltipLabelColor$TooltipLabelColorFactory");

exports = TooltipLabelColorFactory;

//# sourceMappingURL=TooltipLabelColor$TooltipLabelColorFactory.js.map
