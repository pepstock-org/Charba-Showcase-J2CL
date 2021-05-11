goog.module('org.pepstock.charba.client.commons.IncrementalIdHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.commons.IncrementalIdHandler.Property$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class IncrementalIdHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, AtomicInteger>}*/
  this.f_counters__org_pepstock_charba_client_commons_IncrementalIdHandler_;
 }
 /** @return {!IncrementalIdHandler} */
 static $create__() {
  let $instance = new IncrementalIdHandler();
  $instance.$ctor__org_pepstock_charba_client_commons_IncrementalIdHandler__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_IncrementalIdHandler__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_commons_IncrementalIdHandler();
 }
 /** @return {IncrementalIdHandler} */
 static m_get__() {
  IncrementalIdHandler.$clinit();
  return IncrementalIdHandler.f_INSTANCE__org_pepstock_charba_client_commons_IncrementalIdHandler_;
 }
 
 m_checkAndSetId__org_pepstock_charba_client_commons_NativeObjectContainer_$pp_org_pepstock_charba_client_commons(/** NativeObjectContainer */ container) {
  this.m_checkAndSetId__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String_$pp_org_pepstock_charba_client_commons(container, IncrementalIdHandler.f_DEFAULT_INTERNAL_PREFIX_ID__org_pepstock_charba_client_commons_IncrementalIdHandler_);
 }
 
 m_checkAndSetId__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String_$pp_org_pepstock_charba_client_commons(/** NativeObjectContainer */ container, /** ?string */ prefix) {
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(container, "Container argument");
  if (!container.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_INTERNAL_INTERNAL_ID__org_pepstock_charba_client_commons_IncrementalIdHandler_Property)) {
   this.m_setNewId__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String_$p_org_pepstock_charba_client_commons_IncrementalIdHandler(container, !$Equality.$same(prefix, null) && !j_l_String.m_isEmpty__java_lang_String(j_l_String.m_trim__java_lang_String(prefix)) ? prefix : IncrementalIdHandler.f_DEFAULT_INTERNAL_PREFIX_ID__org_pepstock_charba_client_commons_IncrementalIdHandler_);
  }
 }
 /** @return {?string} */
 m_getId__org_pepstock_charba_client_commons_NativeObjectContainer_$pp_org_pepstock_charba_client_commons(/** NativeObjectContainer */ container) {
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(container, "Container argument");
  Checker.m_assertCheck__boolean__java_lang_String(container.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_INTERNAL_INTERNAL_ID__org_pepstock_charba_client_commons_IncrementalIdHandler_Property), "The incremental id has not been stored. Invoke 'checkAndSetId' before calling 'getId'");
  return container.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_INTERNAL_INTERNAL_ID__org_pepstock_charba_client_commons_IncrementalIdHandler_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setNewId__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String_$p_org_pepstock_charba_client_commons_IncrementalIdHandler(/** NativeObjectContainer */ container, /** ?string */ prefix) {
  let counter = /**@type {AtomicInteger}*/ ($Casts.$to(this.f_counters__org_pepstock_charba_client_commons_IncrementalIdHandler_.m_computeIfAbsent__java_lang_Object__java_util_function_Function($Objects.m_getClass__java_lang_Object(container).m_getName__(), j_u_function_Function.$adapt((mapKey) =>{
   let mapKey_1 = /**@type {?string}*/ ($Casts.$to(mapKey, j_l_String));
   return AtomicInteger.$create__int(0);
  })), AtomicInteger));
  container.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_INTERNAL_INTERNAL_ID__org_pepstock_charba_client_commons_IncrementalIdHandler_Property, j_l_String.m_valueOf__java_lang_Object(prefix) + counter.m_getAndIncrement__());
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_IncrementalIdHandler() {
  this.f_counters__org_pepstock_charba_client_commons_IncrementalIdHandler_ = /**@type {!HashMap<?string, AtomicInteger>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  IncrementalIdHandler.$clinit = () =>{};
  IncrementalIdHandler.$loadModules();
  j_l_Object.$clinit();
  IncrementalIdHandler.f_INSTANCE__org_pepstock_charba_client_commons_IncrementalIdHandler_ = IncrementalIdHandler.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IncrementalIdHandler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Property = goog.module.get('org.pepstock.charba.client.commons.IncrementalIdHandler.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {IncrementalIdHandler}*/
IncrementalIdHandler.f_INSTANCE__org_pepstock_charba_client_commons_IncrementalIdHandler_;
/**@const {?string}*/
IncrementalIdHandler.f_DEFAULT_INTERNAL_PREFIX_ID__org_pepstock_charba_client_commons_IncrementalIdHandler_ = "charba-internal-id-";
$Util.$setClassMetadata(IncrementalIdHandler, "org.pepstock.charba.client.commons.IncrementalIdHandler");

exports = IncrementalIdHandler;

//# sourceMappingURL=IncrementalIdHandler.js.map
