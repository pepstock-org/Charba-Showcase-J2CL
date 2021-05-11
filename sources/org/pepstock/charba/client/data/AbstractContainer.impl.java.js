goog.module('org.pepstock.charba.client.data.AbstractContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CanvasObject = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let AbstractCanvasObjectCallback = goog.forwardDeclare('org.pepstock.charba.client.data.AbstractCanvasObjectCallback$impl');
let CallbackWrapper = goog.forwardDeclare('org.pepstock.charba.client.data.AbstractContainer.CallbackWrapper$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 */
class AbstractContainer extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Dataset}*/
  this.f_dataset__org_pepstock_charba_client_data_AbstractContainer_;
  /**@type {Map<?string, CallbackWrapper>}*/
  this.f_callbackWrappers__org_pepstock_charba_client_data_AbstractContainer_;
  /**@type {boolean}*/
  this.f_changed__org_pepstock_charba_client_data_AbstractContainer_ = false;
 }
 
 $ctor__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_data_Dataset(/** Dataset */ dataset) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.$init___$p_org_pepstock_charba_client_data_AbstractContainer();
  this.f_dataset__org_pepstock_charba_client_data_AbstractContainer_ = dataset;
 }
 /** @return {boolean} */
 m_isChanged___$pp_org_pepstock_charba_client_data() {
  return this.f_changed__org_pepstock_charba_client_data_AbstractContainer_;
 }
 
 m_setChanged__boolean_$pp_org_pepstock_charba_client_data(/** boolean */ changed) {
  this.f_changed__org_pepstock_charba_client_data_AbstractContainer_ = changed;
 }
 /** @abstract @return {NativeObjectContainerFactory<T>} */
 m_getFactory___$pp_org_pepstock_charba_client_data() {}
 /** @abstract @return {AbstractCanvasObjectCallback<T>} */
 m_createCallback__org_pepstock_charba_client_data_Dataset_CanvasObjectKey_$pp_org_pepstock_charba_client_data(/** CanvasObjectKey */ key) {}
 
 m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(/** CanvasObjectKey */ key, /** Array */ objects, /** ?string */ defaultValue) {
  if (!$Equality.$same(objects, null)) {
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, objects);
   if (!this.f_callbackWrappers__org_pepstock_charba_client_data_AbstractContainer_.containsKey(key.m_value__())) {
    this.f_callbackWrappers__org_pepstock_charba_client_data_AbstractContainer_.put(/**@type {CanvasObjectKey}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(key), CanvasObjectKey)).m_value__(), CallbackWrapper.$create__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(this.f_dataset__org_pepstock_charba_client_data_AbstractContainer_, key, this.m_createCallback__org_pepstock_charba_client_data_Dataset_CanvasObjectKey_$pp_org_pepstock_charba_client_data(key), defaultValue));
   }
   this.f_changed__org_pepstock_charba_client_data_AbstractContainer_ = true;
  } else {
   this.m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
  }
 }
 /** @return {List<T>} */
 m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), $Overlay));
  return /**@type {List<T>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, this.m_getFactory___$pp_org_pepstock_charba_client_data()));
 }
 /** @return {boolean} */
 m_hasObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  return this.m_has__org_pepstock_charba_client_commons_Key(key);
 }
 
 m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(key);
  if (this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
   this.f_callbackWrappers__org_pepstock_charba_client_data_AbstractContainer_.remove(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(key).m_value__());
   this.f_changed__org_pepstock_charba_client_data_AbstractContainer_ = true;
  }
 }
 /** @return {boolean} */
 m_isEmpty___$pp_org_pepstock_charba_client_data() {
  return super.m_empty__();
 }
 /** @return {List<Key>} */
 m_getKeys___$pp_org_pepstock_charba_client_data() {
  return /**@type {List<Key>}*/ (Collections.m_unmodifiableList__java_util_List(this.m_keys__()));
 }
 /** @return {?function():void} */
 m_getProxy__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  if (this.f_callbackWrappers__org_pepstock_charba_client_data_AbstractContainer_.containsKey(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(key).m_value__())) {
   return /**@type {CallbackWrapper}*/ ($Casts.$to(this.f_callbackWrappers__org_pepstock_charba_client_data_AbstractContainer_.get(key.m_value__()), CallbackWrapper)).m_getProxy___$pp_org_pepstock_charba_client_data();
  }
  return null;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_AbstractContainer() {
  this.f_callbackWrappers__org_pepstock_charba_client_data_AbstractContainer_ = /**@type {!HashMap<?string, CallbackWrapper>}*/ (HashMap.$create__());
  this.f_changed__org_pepstock_charba_client_data_AbstractContainer_ = false;
 }
 
 static $clinit() {
  AbstractContainer.$clinit = () =>{};
  AbstractContainer.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractContainer;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  CallbackWrapper = goog.module.get('org.pepstock.charba.client.data.AbstractContainer.CallbackWrapper$impl');
  CanvasObjectKey = goog.module.get('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractContainer, "org.pepstock.charba.client.data.AbstractContainer");

exports = AbstractContainer;

//# sourceMappingURL=AbstractContainer.js.map
