goog.module('org.pepstock.charba.client.data.TimeSeriesItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TimeSeriesItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TimeSeriesItem(Date)'.
 /** @return {!TimeSeriesItem} */
 static $create__java_util_Date(/** Date */ time) {
  TimeSeriesItem.$clinit();
  let $instance = new TimeSeriesItem();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesItem__java_util_Date(time);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesItem(Date)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesItem__java_util_Date(/** Date */ time) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesItem__java_util_Date__double(time, DataPoint.f_DEFAULT_Y__org_pepstock_charba_client_data_DataPoint);
 }
 //Factory method corresponding to constructor 'TimeSeriesItem(Date, double)'.
 /** @return {!TimeSeriesItem} */
 static $create__java_util_Date__double(/** Date */ time, /** number */ value) {
  TimeSeriesItem.$clinit();
  let $instance = new TimeSeriesItem();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesItem__java_util_Date__double(time, value);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesItem(Date, double)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesItem__java_util_Date__double(/** Date */ time, /** number */ value) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(null);
  this.m_setTime__java_util_Date_$p_org_pepstock_charba_client_data_TimeSeriesItem(/**@type {Date}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(time, "Time argument"), Date)));
  this.m_setValue__double(value);
 }
 //Factory method corresponding to constructor 'TimeSeriesItem(NativeObject)'.
 /** @return {!TimeSeriesItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TimeSeriesItem.$clinit();
  let $instance = new TimeSeriesItem();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesItem(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setValue__double(/** number */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_data_DataPoint_Property, value);
 }
 /** @return {number} */
 m_getValue__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_data_DataPoint_Property, DataPoint.f_DEFAULT_Y__org_pepstock_charba_client_data_DataPoint);
 }
 
 m_setTime__java_util_Date_$p_org_pepstock_charba_client_data_TimeSeriesItem(/** Date */ time) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, time);
 }
 /** @return {Date} */
 m_getTime__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, /**@type {Date}*/ (null));
 }
 
 static $clinit() {
  TimeSeriesItem.$clinit = () =>{};
  TimeSeriesItem.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesItem;
 }
 
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.DataPoint.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TimeSeriesItem, "org.pepstock.charba.client.data.TimeSeriesItem");

exports = TimeSeriesItem;

//# sourceMappingURL=TimeSeriesItem.js.map
