goog.module('org.pepstock.charba.client.configuration.CategoryTickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTickHandler = goog.require('org.pepstock.charba.client.configuration.AbstractTickHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CategoryTickCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CategoryTickCallback$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryTick$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractTickHandler<CartesianCategoryTick, CategoryTickCallback>}
 */
class CategoryTickHandler extends AbstractTickHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?string, number, Array):?string>}*/
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_CategoryTickHandler_;
 }
 /** @return {!CategoryTickHandler} */
 static $create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianCategoryTick(/** Axis */ axis, /** CartesianCategoryTick */ configuration) {
  CategoryTickHandler.$clinit();
  let $instance = new CategoryTickHandler();
  $instance.$ctor__org_pepstock_charba_client_configuration_CategoryTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianCategoryTick(axis, configuration);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CategoryTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianCategoryTick(/** Axis */ axis, /** CartesianCategoryTick */ configuration) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, configuration);
  this.$init___$p_org_pepstock_charba_client_configuration_CategoryTickHandler();
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_CategoryTickHandler_.callback = (/** Object */ context, /** ?string */ value, /** number */ index, /** Array */ values) =>{
   if (!$Equality.$same(this.m_getCallback___$pp_org_pepstock_charba_client_configuration(), null)) {
    return /**@type {CategoryTickCallback}*/ ($Casts.$to(this.m_getCallback___$pp_org_pepstock_charba_client_configuration(), CategoryTickCallback)).m_onCallback__org_pepstock_charba_client_configuration_Axis__java_lang_String__int__java_util_List(this.m_getAxis__(), value, index, ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(values));
   }
   return value;
  };
 }
 /** @override @return {?function():void} */
 m_getProxy___$pp_org_pepstock_charba_client_configuration() {
  return this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_CategoryTickHandler_.proxy;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_CategoryTickHandler() {
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_CategoryTickHandler_ = /**@type {CharbaCallbackProxy<?function(Object, ?string, number, Array):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  CategoryTickHandler.$clinit = () =>{};
  CategoryTickHandler.$loadModules();
  AbstractTickHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CategoryTickHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CategoryTickCallback = goog.module.get('org.pepstock.charba.client.callbacks.CategoryTickCallback$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CategoryTickHandler, "org.pepstock.charba.client.configuration.CategoryTickHandler");

exports = CategoryTickHandler;

//# sourceMappingURL=CategoryTickHandler.js.map
