goog.module('org.pepstock.charba.client.events.EventType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.events.Event$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {Key}
 */
class EventType extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_events_EventType_;
 }
 /** @template T @return {EventType} */
 static m_create__java_lang_Class(/** Class<T> */ clazz) {
  EventType.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(clazz, "Class, to create the event type,");
  return EventType.$create__java_lang_String(clazz.m_getName__());
 }
 /** @return {!EventType} */
 static $create__java_lang_String(/** ?string */ value) {
  EventType.$clinit();
  let $instance = new EventType();
  $instance.$ctor__org_pepstock_charba_client_events_EventType__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_EventType__java_lang_String(/** ?string */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_events_EventType_ = value;
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(this);
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_events_EventType_;
 }
 /** @override @return {number} */
 hashCode() {
  let prime = 31;
  let result = 1;
  result = Math.imul(prime, result) + j_l_String.m_hashCode__java_lang_String(this.f_value__org_pepstock_charba_client_events_EventType_) | 0;
  return result;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(this, obj)) {
   return true;
  }
  if ($Equality.$same(obj, null)) {
   return false;
  }
  if (!$Equality.$same(this.m_getClass__(), $Objects.m_getClass__java_lang_Object(obj))) {
   return false;
  }
  let other = /**@type {EventType}*/ ($Casts.$to(obj, EventType));
  return j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_value__org_pepstock_charba_client_events_EventType_, other.f_value__org_pepstock_charba_client_events_EventType_);
 }
 
 static $clinit() {
  EventType.$clinit = () =>{};
  EventType.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventType;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Key.$markImplementor(EventType);
$Util.$setClassMetadata(EventType, "org.pepstock.charba.client.events.EventType");

exports = EventType;

//# sourceMappingURL=EventType.js.map
