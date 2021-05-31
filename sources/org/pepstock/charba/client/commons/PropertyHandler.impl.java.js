goog.module('org.pepstock.charba.client.commons.PropertyHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ArrayDoubleArrayList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleArrayList$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeArrayContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainer$impl');
let DefaultAbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.PropertyHandler.DefaultAbstractNode$impl');

/**
 * @abstract
 * @template D
 */
class PropertyHandler extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {D}*/
  this.f_defaultValues__org_pepstock_charba_client_commons_PropertyHandler_;
  /**@type {AbstractNode}*/
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_;
 }
 
 $ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_commons_PropertyHandler_ = this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_ = !$Equality.$same(parent, null) ? parent : PropertyHandler.f_FAKE_ABSTRACT_NODE__org_pepstock_charba_client_commons_PropertyHandler_;
 }
 /** @return {D} */
 m_getDefaultValues__() {
  return this.f_defaultValues__org_pepstock_charba_client_commons_PropertyHandler_;
 }
 /** @return {AbstractNode} */
 m_getParent__() {
  return this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_;
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(/** Key */ key, /** number */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_int(/** Key */ key, /** Array<number> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_double(/** Key */ key, /** Array<number> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(/** Key */ key, /** boolean */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(/** Key */ key, /** Array<?string> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_util_Date(/** Key */ key, /** Date */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** Key */ key, /** ? */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(/** Key */ key, /** NativeObjectContainer */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(/** Key */ key, /** Array<NativeObjectContainer> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayObjectContainerList(/** Key */ key, /** ArrayObjectContainerList<?> */ container) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayObjectContainerList(key, container);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeArrayContainer(/** Key */ key, /** NativeArrayContainer<?> */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeArrayContainer(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayDoubleArrayList(/** Key */ key, /** ArrayDoubleArrayList<?> */ container) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayDoubleArrayList(key, container);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/** Key */ key, /** ?function():void */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(/** Key */ key, /** Function */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(/** Key */ key, /** HTMLImageElement */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Key */ key, /** Array<HTMLImageElement> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_Img(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** Key */ key, /** CanvasGradient */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** Key */ key, /** Array<CanvasGradient> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_CanvasGradientItem(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** Key */ key, /** CanvasPattern */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** Key */ key, /** Array<CanvasPattern> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_CanvasPatternItem(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 /** @template T */
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(/** Key */ key, /** T */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(/** Key */ key, /** Array<Key> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 /** @template T */
 m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(/** Key */ key, /** T */ value) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Key */ key, /** Array<IsColor> */ values) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(key, values);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart(/** Key */ key, /** Chart */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_BaseNativeEvent(/** Key */ key, /** Object */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_BaseNativeEvent(key, value);
  this.f_parent__org_pepstock_charba_client_commons_PropertyHandler_.m_checkAndAddToParent__();
 }
 
 static $clinit() {
  PropertyHandler.$clinit = () =>{};
  PropertyHandler.$loadModules();
  NativeObjectContainer.$clinit();
  PropertyHandler.f_FAKE_ABSTRACT_NODE__org_pepstock_charba_client_commons_PropertyHandler_ = DefaultAbstractNode.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PropertyHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultAbstractNode = goog.module.get('org.pepstock.charba.client.commons.PropertyHandler.DefaultAbstractNode$impl');
 }
}
/**@type {DefaultAbstractNode}*/
PropertyHandler.f_FAKE_ABSTRACT_NODE__org_pepstock_charba_client_commons_PropertyHandler_;
$Util.$setClassMetadata(PropertyHandler, "org.pepstock.charba.client.commons.PropertyHandler");

exports = PropertyHandler;

//# sourceMappingURL=PropertyHandler.js.map
