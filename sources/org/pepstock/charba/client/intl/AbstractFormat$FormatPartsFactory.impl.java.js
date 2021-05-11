goog.module('org.pepstock.charba.client.intl.AbstractFormat.FormatPartsFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let FormatPart = goog.forwardDeclare('org.pepstock.charba.client.intl.FormatPart$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<FormatPart>}
 */
class FormatPartsFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!FormatPartsFactory} */
 static $create__() {
  FormatPartsFactory.$clinit();
  let $instance = new FormatPartsFactory();
  $instance.$ctor__org_pepstock_charba_client_intl_AbstractFormat_FormatPartsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_AbstractFormat_FormatPartsFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {FormatPart} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return FormatPart.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {FormatPart} */
 m_create__() {
  return /**@type {FormatPart}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), FormatPart));
 }
 
 static $clinit() {
  FormatPartsFactory.$clinit = () =>{};
  FormatPartsFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormatPartsFactory;
 }
 
 static $loadModules() {
  FormatPart = goog.module.get('org.pepstock.charba.client.intl.FormatPart$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(FormatPartsFactory);
$Util.$setClassMetadata(FormatPartsFactory, "org.pepstock.charba.client.intl.AbstractFormat$FormatPartsFactory");

exports = FormatPartsFactory;

//# sourceMappingURL=AbstractFormat$FormatPartsFactory.js.map
