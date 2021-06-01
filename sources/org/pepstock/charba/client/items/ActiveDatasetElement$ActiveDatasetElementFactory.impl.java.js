goog.module('org.pepstock.charba.client.items.ActiveDatasetElement.ActiveDatasetElementFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let ActiveDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.ActiveDatasetElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<ActiveDatasetElement>}
 */
class ActiveDatasetElementFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ActiveDatasetElementFactory} */
 static $create__() {
  ActiveDatasetElementFactory.$clinit();
  let $instance = new ActiveDatasetElementFactory();
  $instance.$ctor__org_pepstock_charba_client_items_ActiveDatasetElement_ActiveDatasetElementFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_ActiveDatasetElement_ActiveDatasetElementFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {ActiveDatasetElement} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return ActiveDatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {ActiveDatasetElement} */
 m_create__() {
  return /**@type {ActiveDatasetElement}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), ActiveDatasetElement));
 }
 
 static $clinit() {
  ActiveDatasetElementFactory.$clinit = () =>{};
  ActiveDatasetElementFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActiveDatasetElementFactory;
 }
 
 static $loadModules() {
  ActiveDatasetElement = goog.module.get('org.pepstock.charba.client.items.ActiveDatasetElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(ActiveDatasetElementFactory);
$Util.$setClassMetadata(ActiveDatasetElementFactory, "org.pepstock.charba.client.items.ActiveDatasetElement$ActiveDatasetElementFactory");

exports = ActiveDatasetElementFactory;

//# sourceMappingURL=ActiveDatasetElement$ActiveDatasetElementFactory.js.map
