goog.module('org.pepstock.charba.client.data.LabelsHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayMixedObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.LabelsHandler.Property$impl');
let OptionsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.options.OptionsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LabelsHandler extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'LabelsHandler(OptionsEnvelop)'.
 /** @return {!LabelsHandler} */
 static $create__org_pepstock_charba_client_options_OptionsEnvelop(/** OptionsEnvelop<?> */ envelop) {
  LabelsHandler.$clinit();
  let $instance = new LabelsHandler();
  $instance.$ctor__org_pepstock_charba_client_data_LabelsHandler__org_pepstock_charba_client_options_OptionsEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'LabelsHandler(OptionsEnvelop)'.
 
 $ctor__org_pepstock_charba_client_data_LabelsHandler__org_pepstock_charba_client_options_OptionsEnvelop(/** OptionsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_data_LabelsHandler__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {OptionsEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), OptionsEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'LabelsHandler(NativeObject)'.
 /** @return {!LabelsHandler} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  LabelsHandler.$clinit();
  let $instance = new LabelsHandler();
  $instance.$ctor__org_pepstock_charba_client_data_LabelsHandler__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'LabelsHandler(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_LabelsHandler__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setLabels__org_pepstock_charba_client_data_Labels_$pp_org_pepstock_charba_client_data(/** Labels */ labels) {
  if (!$Equality.$same(labels, null) && !labels.m_isEmpty__()) {
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_LABELS__org_pepstock_charba_client_data_LabelsHandler_Property, labels.m_getArray___$pp_org_pepstock_charba_client_data());
  }
 }
 /** @return {Labels} */
 m_getLabels__boolean_$pp_org_pepstock_charba_client_data(/** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_LABELS__org_pepstock_charba_client_data_LabelsHandler_Property)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LABELS__org_pepstock_charba_client_data_LabelsHandler_Property), ArrayMixedObject_$Overlay));
   return Labels.m_load__org_pepstock_charba_client_commons_ArrayMixedObject(array);
  }
  let result = Labels.m_build__();
  if (binding) {
   this.m_setLabels__org_pepstock_charba_client_data_Labels_$pp_org_pepstock_charba_client_data(result);
  }
  return result;
 }
 
 static $clinit() {
  LabelsHandler.$clinit = () =>{};
  LabelsHandler.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayMixedObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Labels = goog.module.get('org.pepstock.charba.client.data.Labels$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.LabelsHandler.Property$impl');
  OptionsEnvelop = goog.module.get('org.pepstock.charba.client.options.OptionsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LabelsHandler, "org.pepstock.charba.client.data.LabelsHandler");

exports = LabelsHandler;

//# sourceMappingURL=LabelsHandler.js.map
