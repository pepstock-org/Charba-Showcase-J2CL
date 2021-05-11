goog.module('org.pepstock.charba.client.controllers.ControllerDatasetElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetElement = goog.require('org.pepstock.charba.client.items.DatasetElement$impl');

let ControllersEnvelop = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllersEnvelop$impl');

class ControllerDatasetElement extends DatasetElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ControllerDatasetElement} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ControllerDatasetElement.$clinit();
  let $instance = new ControllerDatasetElement();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllerDatasetElement__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_controllers_ControllerDatasetElement__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_DatasetElement__org_pepstock_charba_client_controllers_ControllersEnvelop(/**@type {!ControllersEnvelop<?>}*/ (ControllersEnvelop.$create__java_lang_Object__boolean(nativeObject, true)));
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_controllers() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  ControllerDatasetElement.$clinit = () =>{};
  ControllerDatasetElement.$loadModules();
  DatasetElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ControllerDatasetElement;
 }
 
 static $loadModules() {
  ControllersEnvelop = goog.module.get('org.pepstock.charba.client.controllers.ControllersEnvelop$impl');
 }
}
$Util.$setClassMetadata(ControllerDatasetElement, "org.pepstock.charba.client.controllers.ControllerDatasetElement");

exports = ControllerDatasetElement;

//# sourceMappingURL=ControllerDatasetElement.js.map
