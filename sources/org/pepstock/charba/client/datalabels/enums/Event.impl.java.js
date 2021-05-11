goog.module('org.pepstock.charba.client.datalabels.enums.Event$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Event>}
 * @implements {Key}
 */
class Event extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_datalabels_enums_Event_;
 }
 /** @return {!Event} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Event();
  $instance.$ctor__org_pepstock_charba_client_datalabels_enums_Event__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_enums_Event__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_datalabels_enums_Event_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_datalabels_enums_Event_;
 }
 /** @return {!Event} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Event.$clinit();
  if ($Equality.$same(Event.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Event_, null)) {
   Event.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Event_ = $Enums.createMapFromValues(Event.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Event.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Event_);
 }
 /** @return {!Array<!Event>} */
 static m_values__() {
  Event.$clinit();
  return /**@type {!Array<Event>}*/ ($Arrays.$init([Event.$static_ENTER__org_pepstock_charba_client_datalabels_enums_Event, Event.$static_LEAVE__org_pepstock_charba_client_datalabels_enums_Event, Event.$static_CLICK__org_pepstock_charba_client_datalabels_enums_Event], Event));
 }
 /** @return {!Event} */
 static get f_ENTER__org_pepstock_charba_client_datalabels_enums_Event() {
  return (Event.$clinit(), Event.$static_ENTER__org_pepstock_charba_client_datalabels_enums_Event);
 }
 /** @return {!Event} */
 static get f_LEAVE__org_pepstock_charba_client_datalabels_enums_Event() {
  return (Event.$clinit(), Event.$static_LEAVE__org_pepstock_charba_client_datalabels_enums_Event);
 }
 /** @return {!Event} */
 static get f_CLICK__org_pepstock_charba_client_datalabels_enums_Event() {
  return (Event.$clinit(), Event.$static_CLICK__org_pepstock_charba_client_datalabels_enums_Event);
 }
 
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
  Enum.$clinit();
  Event.$static_ENTER__org_pepstock_charba_client_datalabels_enums_Event = Event.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENTER"), Event.$ordinal_ENTER__org_pepstock_charba_client_datalabels_enums_Event, "enter");
  Event.$static_LEAVE__org_pepstock_charba_client_datalabels_enums_Event = Event.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEAVE"), Event.$ordinal_LEAVE__org_pepstock_charba_client_datalabels_enums_Event, "leave");
  Event.$static_CLICK__org_pepstock_charba_client_datalabels_enums_Event = Event.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CLICK"), Event.$ordinal_CLICK__org_pepstock_charba_client_datalabels_enums_Event, "click");
  Event.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Event_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Event;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Event}*/
Event.$static_ENTER__org_pepstock_charba_client_datalabels_enums_Event;
/**@private {!Event}*/
Event.$static_LEAVE__org_pepstock_charba_client_datalabels_enums_Event;
/**@private {!Event}*/
Event.$static_CLICK__org_pepstock_charba_client_datalabels_enums_Event;
/**@type {Map<?string, !Event>}*/
Event.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Event_;
/**@const {number}*/
Event.$ordinal_ENTER__org_pepstock_charba_client_datalabels_enums_Event = 0;
/**@const {number}*/
Event.$ordinal_LEAVE__org_pepstock_charba_client_datalabels_enums_Event = 1;
/**@const {number}*/
Event.$ordinal_CLICK__org_pepstock_charba_client_datalabels_enums_Event = 2;
Key.$markImplementor(Event);
$Util.$setClassMetadataForEnum(Event, "org.pepstock.charba.client.datalabels.enums.Event");

exports = Event;

//# sourceMappingURL=Event.js.map
