goog.module('org.pepstock.charba.client.options.Datasets$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDatasets = goog.require('org.pepstock.charba.client.defaults.IsDefaultDatasets$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let TypedDataset = goog.forwardDeclare('org.pepstock.charba.client.options.TypedDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Options, IsDefaultDatasets>}
 * @implements {IsDefaultDatasets}
 */
class Datasets extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Datasets} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDatasets__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultDatasets */ defaultValues, /** ? */ nativeObject) {
  Datasets.$clinit();
  let $instance = new Datasets();
  $instance.$ctor__org_pepstock_charba_client_options_Datasets__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDatasets__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Datasets__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDatasets__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultDatasets */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 /** @override @return {TypedDataset} */
 m_get__org_pepstock_charba_client_Type(/** Type */ type) {
  Type.m_checkIfValid__org_pepstock_charba_client_Type(type);
  if (ControllerType.$isInstance(type)) {
   let controllerType = /**@type {ControllerType}*/ ($Casts.$to(type, ControllerType));
   controllerType.m_register__();
  }
  return TypedDataset.$create__org_pepstock_charba_client_options_Datasets__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this, type, /**@type {IsDefaultDatasets}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDatasets)).m_get__org_pepstock_charba_client_Type(type), this.m_getDatasets__org_pepstock_charba_client_Type_$p_org_pepstock_charba_client_options_Datasets(type), /**@type {Options}*/ ($Casts.$to(this.m_getParent__(), Options)).m_getScope__());
 }
 /** @return {?} */
 m_getDatasets__org_pepstock_charba_client_Type_$p_org_pepstock_charba_client_options_Datasets(/** Type */ type) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(type, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key(/**@type {Type}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(type), Type)));
  }
  return null;
 }
 
 static $clinit() {
  Datasets.$clinit = () =>{};
  Datasets.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Datasets;
 }
 
 static $loadModules() {
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  Options = goog.module.get('org.pepstock.charba.client.options.Options$impl');
  TypedDataset = goog.module.get('org.pepstock.charba.client.options.TypedDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultDatasets.$markImplementor(Datasets);
$Util.$setClassMetadata(Datasets, "org.pepstock.charba.client.options.Datasets");

exports = Datasets;

//# sourceMappingURL=Datasets.js.map
