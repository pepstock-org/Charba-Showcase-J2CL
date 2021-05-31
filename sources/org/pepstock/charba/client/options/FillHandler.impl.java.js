goog.module('org.pepstock.charba.client.options.FillHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let AbsoluteDatasetIndexFill = goog.forwardDeclare('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let FillingMode = goog.forwardDeclare('org.pepstock.charba.client.enums.FillingMode$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let RelativeDatasetIndexFill = goog.forwardDeclare('org.pepstock.charba.client.enums.RelativeDatasetIndexFill$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.FillHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {PropertyHandler<IsFill>}
 */
class FillHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'FillHandler(AbstractNode, IsFill, DataEnvelop)'.
 /** @return {!FillHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_data_DataEnvelop(/** AbstractNode */ parent, /** IsFill */ defaultValues, /** DataEnvelop<?> */ envelop) {
  FillHandler.$clinit();
  let $instance = new FillHandler();
  $instance.$ctor__org_pepstock_charba_client_options_FillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_data_DataEnvelop(parent, defaultValues, envelop);
  return $instance;
 }
 //Initialization from constructor 'FillHandler(AbstractNode, IsFill, DataEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_FillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_data_DataEnvelop(/** AbstractNode */ parent, /** IsFill */ defaultValues, /** DataEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_FillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, /**@type {?}*/ (/**@type {DataEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), DataEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'FillHandler(AbstractNode, IsFill, NativeObject)'.
 /** @return {!FillHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsFill */ defaultValues, /** ? */ nativeObject) {
  FillHandler.$clinit();
  let $instance = new FillHandler();
  $instance.$ctor__org_pepstock_charba_client_options_FillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'FillHandler(AbstractNode, IsFill, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_FillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsFill */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  Checker.m_assertCheck__boolean__java_lang_String(IsFill.m_isValid__org_pepstock_charba_client_enums_IsFill(/**@type {IsFill}*/ ($Casts.$to(this.m_getDefaultValues__(), IsFill))), "Default fill argument is null or not consistent");
 }
 
 m_setFill__boolean(/** boolean */ fill) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, fill);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property, FillingMode.f_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode);
 }
 
 m_setFill__int_$pp_org_pepstock_charba_client_options(/** number */ index) {
  this.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.m_getFill__int(index));
 }
 
 m_setFill__java_lang_String_$pp_org_pepstock_charba_client_options(/** ?string */ index) {
  this.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.m_getFill__java_lang_String(index));
 }
 
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  if (IsFill.m_isValid__org_pepstock_charba_client_enums_IsFill(fill)) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill, fill)) {
    this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, false);
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property, FillingMode.f_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode);
   } else if (Fill.m_isPredefined__org_pepstock_charba_client_enums_IsFill(fill)) {
    this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, fill);
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property, fill.m_getMode__());
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, fill.m_getMode__())) {
    this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, fill.m_getValueAsInt__());
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property, FillingMode.f_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode);
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, fill.m_getMode__())) {
    this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, fill.m_getValue__());
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property, FillingMode.f_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode);
   }
  }
 }
 /** @return {IsFill} */
 m_getFill__() {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property)) {
   let mode = /**@type {FillingMode}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property, FillingMode.m_values__(), FillingMode.f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode), FillingMode));
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_PREDEFINED_BOOLEAN__org_pepstock_charba_client_enums_FillingMode, mode)) {
    return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, false) ? Fill.f_ORIGIN__org_pepstock_charba_client_enums_Fill : Fill.f_FALSE__org_pepstock_charba_client_enums_Fill;
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_PREDEFINED__org_pepstock_charba_client_enums_FillingMode, mode)) {
    let fill = /**@type {Fill}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, Fill.m_values__(), null), Fill));
    return $Equality.$same(fill, null) ? /**@type {IsFill}*/ ($Casts.$to(this.m_getDefaultValues__(), IsFill)) : fill;
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, mode)) {
    return Fill.m_getFill__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, AbsoluteDatasetIndexFill.f_DEFAULT_VALUE_AS_INT__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill));
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, mode)) {
    return Fill.m_getFill__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, RelativeDatasetIndexFill.f_DEFAULT_VALUE__org_pepstock_charba_client_enums_RelativeDatasetIndexFill));
   }
  }
  return /**@type {IsFill}*/ ($Casts.$to(this.m_getDefaultValues__(), IsFill));
 }
 
 static $clinit() {
  FillHandler.$clinit = () =>{};
  FillHandler.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FillHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  AbsoluteDatasetIndexFill = goog.module.get('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  FillingMode = goog.module.get('org.pepstock.charba.client.enums.FillingMode$impl');
  IsFill = goog.module.get('org.pepstock.charba.client.enums.IsFill$impl');
  RelativeDatasetIndexFill = goog.module.get('org.pepstock.charba.client.enums.RelativeDatasetIndexFill$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.FillHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(FillHandler, "org.pepstock.charba.client.options.FillHandler");

exports = FillHandler;

//# sourceMappingURL=FillHandler.js.map
