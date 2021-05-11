goog.module('org.pepstock.charba.client.items.TooltipModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let CallbacksEnvelop = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let TooltipAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipAlign$impl');
let TooltipBodyItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipBodyItem$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let TooltipLabelPointStyle = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TooltipModel extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TooltipModel(ConfigurationEnvelop)'.
 /** @return {!TooltipModel} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  TooltipModel.$clinit();
  let $instance = new TooltipModel();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_configuration_ConfigurationEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'TooltipModel(ConfigurationEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'TooltipModel(CallbacksEnvelop)'.
 /** @return {!TooltipModel} */
 static $create__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  TooltipModel.$clinit();
  let $instance = new TooltipModel();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_callbacks_CallbacksEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'TooltipModel(CallbacksEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {CallbacksEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), CallbacksEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'TooltipModel(NativeObject)'.
 /** @return {!TooltipModel} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TooltipModel.$clinit();
  let $instance = new TooltipModel();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'TooltipModel(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_TooltipModel__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {List<TooltipItem>} */
 m_getDataPoints__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property), ArrayObject_$Overlay));
  return /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem));
 }
 /** @return {TooltipAlign} */
 m_getXAlign__() {
  return /**@type {TooltipAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property, TooltipAlign.m_values__(), TooltipAlign.f_AUTO__org_pepstock_charba_client_enums_TooltipAlign), TooltipAlign));
 }
 /** @return {TooltipAlign} */
 m_getYAlign__() {
  return /**@type {TooltipAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property, TooltipAlign.m_values__(), TooltipAlign.f_AUTO__org_pepstock_charba_client_enums_TooltipAlign), TooltipAlign));
 }
 /** @return {number} */
 m_getX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_X__org_pepstock_charba_client_items_TooltipModel_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_Y__org_pepstock_charba_client_items_TooltipModel_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getHeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getCaretX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getCaretY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {List<TooltipBodyItem>} */
 m_getBody__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BODY__org_pepstock_charba_client_items_TooltipModel_Property), ArrayObject_$Overlay));
  return /**@type {List<TooltipBodyItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, TooltipBodyItem.f_FACTORY__org_pepstock_charba_client_items_TooltipBodyItem));
 }
 /** @return {List<?string>} */
 m_getBeforeBody__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property), ArrayString_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(array);
 }
 /** @return {List<?string>} */
 m_getAfterBody__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property), ArrayString_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(array);
 }
 /** @return {List<?string>} */
 m_getTitle__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_TITLE__org_pepstock_charba_client_items_TooltipModel_Property), ArrayString_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(array);
 }
 /** @return {List<?string>} */
 m_getFooter__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property), ArrayString_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(array);
 }
 /** @return {List<TooltipLabelColor>} */
 m_getLabelColors__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property), ArrayObject_$Overlay));
  return /**@type {List<TooltipLabelColor>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, TooltipLabelColor.f_FACTORY__org_pepstock_charba_client_items_TooltipLabelColor));
 }
 /** @return {List<TooltipLabelPointStyle>} */
 m_getLabelPointStyles__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property), ArrayObject_$Overlay));
  return /**@type {List<TooltipLabelPointStyle>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, TooltipLabelPointStyle.f_FACTORY__org_pepstock_charba_client_items_TooltipLabelPointStyle));
 }
 /** @return {List<TooltipLabelColor>} */
 m_getTextLabelColors__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property), ArrayObject_$Overlay));
  return /**@type {List<TooltipLabelColor>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, TooltipLabelColor.f_FACTORY__org_pepstock_charba_client_items_TooltipLabelColor));
 }
 /** @return {number} */
 m_getOpacity__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  TooltipModel.$clinit = () =>{};
  TooltipModel.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipModel;
 }
 
 static $loadModules() {
  CallbacksEnvelop = goog.module.get('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  TooltipAlign = goog.module.get('org.pepstock.charba.client.enums.TooltipAlign$impl');
  TooltipBodyItem = goog.module.get('org.pepstock.charba.client.items.TooltipBodyItem$impl');
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  TooltipLabelColor = goog.module.get('org.pepstock.charba.client.items.TooltipLabelColor$impl');
  TooltipLabelPointStyle = goog.module.get('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.TooltipModel.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TooltipModel, "org.pepstock.charba.client.items.TooltipModel");

exports = TooltipModel;

//# sourceMappingURL=TooltipModel.js.map
