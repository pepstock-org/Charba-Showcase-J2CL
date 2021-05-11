goog.module('org.pepstock.charba.client.events.EventBus$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.events.Event$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class EventBus extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ = 0;
  /**@type {List<Runnable>}*/
  this.f_deferredHandlerActions__org_pepstock_charba_client_events_EventBus_;
  /**@type {Map<EventType, List<EventHandler>>}*/
  this.f_handlers__org_pepstock_charba_client_events_EventBus_;
 }
 /** @return {!EventBus} */
 static $create__() {
  EventBus.$clinit();
  let $instance = new EventBus();
  $instance.$ctor__org_pepstock_charba_client_events_EventBus__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_events_EventBus__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_events_EventBus();
 }
 
 m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(/** EventHandler */ handler, /** EventType */ type) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(handler, "Event handler");
  if (this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ > 0) {
   this.f_deferredHandlerActions__org_pepstock_charba_client_events_EventBus_.add(Runnable.$adapt(() =>{
    this.m_doAddNow__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$p_org_pepstock_charba_client_events_EventBus(handler, type);
   }));
  } else {
   this.m_doAddNow__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$p_org_pepstock_charba_client_events_EventBus(handler, type);
  }
 }
 
 m_removeHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(/** EventHandler */ handler, /** EventType */ type) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(handler, "Event handler");
  if (this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ > 0) {
   this.f_deferredHandlerActions__org_pepstock_charba_client_events_EventBus_.add(Runnable.$adapt(() =>{
    this.m_doRemoveNow__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$p_org_pepstock_charba_client_events_EventBus(handler, type);
   }));
  } else {
   this.m_doRemoveNow__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$p_org_pepstock_charba_client_events_EventBus(handler, type);
  }
 }
 
 m_fireEvent__org_pepstock_charba_client_events_Event_$pp_org_pepstock_charba_client_events(/** Event */ event) {
  this.m_doFire__org_pepstock_charba_client_events_Event_$p_org_pepstock_charba_client_events_EventBus(event);
 }
 /** @return {number} */
 m_getHandlerCount__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(/** EventType */ type) {
  if (this.m_isEventHandled__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(type)) {
   return /**@type {List<EventHandler>}*/ ($Casts.$to(this.f_handlers__org_pepstock_charba_client_events_EventBus_.get(type), List)).size();
  }
  return 0;
 }
 /** @return {boolean} */
 m_isEventHandled__org_pepstock_charba_client_events_EventType_$pp_org_pepstock_charba_client_events(/** EventType */ type) {
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(type) && this.f_handlers__org_pepstock_charba_client_events_EventBus_.containsKey(type);
 }
 
 m_doAddNow__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$p_org_pepstock_charba_client_events_EventBus(/** EventHandler */ handler, /** EventType */ type) {
  /**@type {List<EventHandler>}*/ ($Casts.$to(this.f_handlers__org_pepstock_charba_client_events_EventBus_.m_computeIfAbsent__java_lang_Object__java_util_function_Function(type, j_u_function_Function.$adapt((key) =>{
   let key_1 = /**@type {EventType}*/ ($Casts.$to(key, EventType));
   return /**@type {!LinkedList<EventHandler>}*/ (LinkedList.$create__());
  })), List)).add(handler);
 }
 
 m_doRemoveNow__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType_$p_org_pepstock_charba_client_events_EventBus(/** EventHandler */ handler, /** EventType */ type) {
  if (this.f_handlers__org_pepstock_charba_client_events_EventBus_.containsKey(type)) {
   let list = /**@type {List<EventHandler>}*/ ($Casts.$to(this.f_handlers__org_pepstock_charba_client_events_EventBus_.get(type), List));
   if (list.remove(handler) && list.isEmpty()) {
    this.f_handlers__org_pepstock_charba_client_events_EventBus_.remove(type);
   }
  }
 }
 
 m_doFire__org_pepstock_charba_client_events_Event_$p_org_pepstock_charba_client_events_EventBus(/** Event */ event) {
  if (!$Equality.$same(event, null) && Key.m_isValid__org_pepstock_charba_client_commons_Key(event.m_getType__())) {
   try {
    let type = event.m_getType__();
    this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ = this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ + 1 | 0;
    if (this.f_handlers__org_pepstock_charba_client_events_EventBus_.containsKey(type)) {
     let storedHandlers = /**@type {List<EventHandler>}*/ ($Casts.$to(this.f_handlers__org_pepstock_charba_client_events_EventBus_.get(type), List));
     for (let $iterator = storedHandlers.m_iterator__(); $iterator.m_hasNext__(); ) {
      let handler = /**@type {EventHandler}*/ ($Casts.$to($iterator.m_next__(), EventHandler));
      {
       event.m_dispatch__org_pepstock_charba_client_events_EventHandler(handler);
      }
     }
    }
   } finally {
    this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ = this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ - 1 | 0;
    if (this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ == 0) {
     this.m_handleDeferredHandlerActions___$p_org_pepstock_charba_client_events_EventBus();
    }
   }
  }
 }
 
 m_handleDeferredHandlerActions___$p_org_pepstock_charba_client_events_EventBus() {
  if (!this.f_deferredHandlerActions__org_pepstock_charba_client_events_EventBus_.isEmpty()) {
   let iterator = this.f_deferredHandlerActions__org_pepstock_charba_client_events_EventBus_.m_iterator__();
   while (iterator.m_hasNext__()) {
    let action = /**@type {Runnable}*/ ($Casts.$to(iterator.m_next__(), Runnable));
    action.m_run__();
    iterator.m_remove__();
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_events_EventBus() {
  this.f_eventsFiringQueue__org_pepstock_charba_client_events_EventBus_ = 0;
  this.f_deferredHandlerActions__org_pepstock_charba_client_events_EventBus_ = /**@type {!LinkedList<Runnable>}*/ (LinkedList.$create__());
  this.f_handlers__org_pepstock_charba_client_events_EventBus_ = /**@type {!HashMap<EventType, List<EventHandler>>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  EventBus.$clinit = () =>{};
  EventBus.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventBus;
 }
 
 static $loadModules() {
  Runnable = goog.module.get('java.lang.Runnable$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  List = goog.module.get('java.util.List$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  EventHandler = goog.module.get('org.pepstock.charba.client.events.EventHandler$impl');
  EventType = goog.module.get('org.pepstock.charba.client.events.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(EventBus, "org.pepstock.charba.client.events.EventBus");

exports = EventBus;

//# sourceMappingURL=EventBus.js.map
