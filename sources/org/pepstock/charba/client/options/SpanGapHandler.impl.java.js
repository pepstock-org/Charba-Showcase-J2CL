goog.module('org.pepstock.charba.client.options.SpanGapHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.SpanGapHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PropertyHandler<IsDefaultOptions>}
 */
class SpanGapHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'SpanGapHandler(AbstractNode, IsDefaultOptions, DataEnvelop)'.
 /** @return {!SpanGapHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_data_DataEnvelop(/** AbstractNode */ parent, /** IsDefaultOptions */ defaultValues, /** DataEnvelop<?> */ envelop) {
  SpanGapHandler.$clinit();
  let $instance = new SpanGapHandler();
  $instance.$ctor__org_pepstock_charba_client_options_SpanGapHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_data_DataEnvelop(parent, defaultValues, envelop);
  return $instance;
 }
 //Initialization from constructor 'SpanGapHandler(AbstractNode, IsDefaultOptions, DataEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_SpanGapHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_data_DataEnvelop(/** AbstractNode */ parent, /** IsDefaultOptions */ defaultValues, /** DataEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_SpanGapHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, /**@type {?}*/ (/**@type {DataEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), DataEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'SpanGapHandler(AbstractNode, IsDefaultOptions, NativeObject)'.
 /** @return {!SpanGapHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultOptions */ defaultValues, /** ? */ nativeObject) {
  SpanGapHandler.$clinit();
  let $instance = new SpanGapHandler();
  $instance.$ctor__org_pepstock_charba_client_options_SpanGapHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'SpanGapHandler(AbstractNode, IsDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_SpanGapHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultOptions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
 }
 
 m_setSpanGaps__boolean_$pp_org_pepstock_charba_client_options(/** boolean */ spanGaps) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_SPAN_GAPS__org_pepstock_charba_client_options_SpanGapHandler_Property, spanGaps);
 }
 
 m_setSpanGaps__double_$pp_org_pepstock_charba_client_options(/** number */ spanGaps) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_SPAN_GAPS__org_pepstock_charba_client_options_SpanGapHandler_Property, spanGaps);
 }
 /** @return {boolean} */
 m_isSpanGaps___$pp_org_pepstock_charba_client_options() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_SPAN_GAPS__org_pepstock_charba_client_options_SpanGapHandler_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return true;
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SPAN_GAPS__org_pepstock_charba_client_options_SpanGapHandler_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_isSpanGaps__());
 }
 /** @return {number} */
 m_getSpanGaps___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_SPAN_GAPS__org_pepstock_charba_client_options_SpanGapHandler_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  SpanGapHandler.$clinit = () =>{};
  SpanGapHandler.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SpanGapHandler;
 }
 
 static $loadModules() {
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  IsDefaultOptions = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.SpanGapHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SpanGapHandler, "org.pepstock.charba.client.options.SpanGapHandler");

exports = SpanGapHandler;

//# sourceMappingURL=SpanGapHandler.js.map
