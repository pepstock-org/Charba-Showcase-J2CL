goog.module('org.pepstock.charba.client.positioner.Positioner$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let CustomTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.positioner.CustomTooltipPosition$impl');
let JsPositionerHelper = goog.forwardDeclare('org.pepstock.charba.client.positioner.JsPositionerHelper$impl');
let Point = goog.forwardDeclare('org.pepstock.charba.client.positioner.Point$impl');
let PositionerContext = goog.forwardDeclare('org.pepstock.charba.client.positioner.PositionerContext$impl');
let TooltipPositioner = goog.forwardDeclare('org.pepstock.charba.client.positioner.TooltipPositioner$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Positioner extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?, Array, ?):?>}*/
  this.f_positionerCallbackProxy__org_pepstock_charba_client_positioner_Positioner_;
  /**@type {Map<?string, TooltipPositioner>}*/
  this.f_positioners__org_pepstock_charba_client_positioner_Positioner_;
 }
 /** @return {!Positioner} */
 static $create__() {
  let $instance = new Positioner();
  $instance.$ctor__org_pepstock_charba_client_positioner_Positioner__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_positioner_Positioner__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_positioner_Positioner();
  this.f_positionerCallbackProxy__org_pepstock_charba_client_positioner_Positioner_.ignoreFunctionContext = false;
  this.f_positionerCallbackProxy__org_pepstock_charba_client_positioner_Positioner_.callback = (/** ? */ arg0, /** Array */ arg1, /** ? */ arg2) =>{
   return this.m_onToolipPosition__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_positioner_Positioner(arg0, arg1, arg2);
  };
 }
 /** @return {Positioner} */
 static m_get__() {
  Positioner.$clinit();
  return Positioner.f_INSTANCE__org_pepstock_charba_client_positioner_Positioner_;
 }
 /** @return {boolean} */
 m_hasTooltipPosition__java_lang_String(/** ?string */ name) {
  if (!$Equality.$same(name, null)) {
   return this.f_positioners__org_pepstock_charba_client_positioner_Positioner_.containsKey(name);
  }
  return false;
 }
 /** @return {IsTooltipPosition} */
 m_getTooltipPosition__java_lang_String(/** ?string */ name) {
  if (this.m_hasTooltipPosition__java_lang_String(name)) {
   return /**@type {TooltipPositioner}*/ ($Casts.$to(this.f_positioners__org_pepstock_charba_client_positioner_Positioner_.get(name), TooltipPositioner)).m_getName__();
  }
  return null;
 }
 
 m_register__org_pepstock_charba_client_positioner_TooltipPositioner(/** TooltipPositioner */ positioner) {
  if (TooltipPositioner.m_isValid__org_pepstock_charba_client_positioner_TooltipPositioner(positioner)) {
   let position = positioner.m_getName__();
   if (!this.f_positioners__org_pepstock_charba_client_positioner_Positioner_.containsKey(position.m_value__())) {
    JsPositionerHelper.m_get__().m_register__org_pepstock_charba_client_enums_IsTooltipPosition__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_positioner(position, this.f_positionerCallbackProxy__org_pepstock_charba_client_positioner_Positioner_.proxy);
   }
   this.f_positioners__org_pepstock_charba_client_positioner_Positioner_.put(position.m_value__(), positioner);
  }
 }
 
 m_unregister__org_pepstock_charba_client_positioner_CustomTooltipPosition(/** CustomTooltipPosition */ position) {
  if (!$Equality.$same(position, null)) {
   JsPositionerHelper.m_get__().m_unregister__org_pepstock_charba_client_enums_IsTooltipPosition_$pp_org_pepstock_charba_client_positioner(position);
   this.f_positioners__org_pepstock_charba_client_positioner_Positioner_.remove(position.m_value__());
  }
 }
 /** @return {?} */
 m_onToolipPosition__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_positioner_Positioner(/** ? */ context, /** Array */ datasetItems, /** ? */ eventPoint) {
  let internalContext = PositionerContext.$create__org_pepstock_charba_client_commons_NativeObject(context);
  let internalPoint = Point.$create__org_pepstock_charba_client_commons_NativeObject(eventPoint);
  let chart = internalContext.m_getChart___$pp_org_pepstock_charba_client_positioner();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   let position = chart.m_getOptions__().m_getTooltips__().m_getPosition__();
   if (this.f_positioners__org_pepstock_charba_client_positioner_Positioner_.containsKey(position.m_value__())) {
    let positioner = /**@type {TooltipPositioner}*/ ($Casts.$to(this.f_positioners__org_pepstock_charba_client_positioner_Positioner_.get(position.m_value__()), TooltipPositioner));
    let items = /**@type {List<DatasetReference>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(datasetItems, DatasetReference.f_FACTORY__org_pepstock_charba_client_items_DatasetReference));
    let result = positioner.m_computePosition__org_pepstock_charba_client_IsChart__java_util_List__org_pepstock_charba_client_positioner_Point(chart, items, internalPoint);
    if (!$Equality.$same(result, null)) {
     return result.m_nativeObject___$pp_org_pepstock_charba_client_positioner();
    }
   }
  }
  let defaultValue = Defaults.m_get__().m_getGlobal__().m_getTooltips__().m_getPosition__();
  let defaultPoint = JsPositionerHelper.m_get__().m_invoke__org_pepstock_charba_client_enums_IsTooltipPosition__org_pepstock_charba_client_positioner_PositionerContext__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_positioner_Point_$pp_org_pepstock_charba_client_positioner(defaultValue, internalContext, datasetItems, internalPoint);
  return !$Equality.$same(defaultPoint, null) ? defaultPoint.m_nativeObject___$pp_org_pepstock_charba_client_positioner() : eventPoint;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_positioner_Positioner() {
  this.f_positionerCallbackProxy__org_pepstock_charba_client_positioner_Positioner_ = /**@type {CharbaCallbackProxy<?function(?, Array, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_positioners__org_pepstock_charba_client_positioner_Positioner_ = /**@type {!HashMap<?string, TooltipPositioner>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  Positioner.$clinit = () =>{};
  Positioner.$loadModules();
  j_l_Object.$clinit();
  Positioner.f_INSTANCE__org_pepstock_charba_client_positioner_Positioner_ = Positioner.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Positioner;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  DatasetReference = goog.module.get('org.pepstock.charba.client.items.DatasetReference$impl');
  JsPositionerHelper = goog.module.get('org.pepstock.charba.client.positioner.JsPositionerHelper$impl');
  Point = goog.module.get('org.pepstock.charba.client.positioner.Point$impl');
  PositionerContext = goog.module.get('org.pepstock.charba.client.positioner.PositionerContext$impl');
  TooltipPositioner = goog.module.get('org.pepstock.charba.client.positioner.TooltipPositioner$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Positioner}*/
Positioner.f_INSTANCE__org_pepstock_charba_client_positioner_Positioner_;
$Util.$setClassMetadata(Positioner, "org.pepstock.charba.client.positioner.Positioner");

exports = Positioner;

//# sourceMappingURL=Positioner.js.map
