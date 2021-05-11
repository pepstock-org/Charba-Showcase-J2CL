goog.module('org.pepstock.charba.client.data.BarBorderWidth$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractBarBorderItem = goog.require('org.pepstock.charba.client.data.AbstractBarBorderItem$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BarBorderWidthFactory = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderWidth.BarBorderWidthFactory$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

class BarBorderWidth extends AbstractBarBorderItem {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'BarBorderWidth()'.
 /** @return {!BarBorderWidth} */
 static $create__() {
  BarBorderWidth.$clinit();
  let $instance = new BarBorderWidth();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderWidth__();
  return $instance;
 }
 //Initialization from constructor 'BarBorderWidth()'.
 
 $ctor__org_pepstock_charba_client_data_BarBorderWidth__() {
  this.$ctor__org_pepstock_charba_client_data_BarBorderWidth__int(DefaultsBuilder.m_get__().m_getOptions__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 //Factory method corresponding to constructor 'BarBorderWidth(int)'.
 /** @return {!BarBorderWidth} */
 static $create__int(/** number */ borderWidth) {
  BarBorderWidth.$clinit();
  let $instance = new BarBorderWidth();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderWidth__int(borderWidth);
  return $instance;
 }
 //Initialization from constructor 'BarBorderWidth(int)'.
 
 $ctor__org_pepstock_charba_client_data_BarBorderWidth__int(/** number */ borderWidth) {
  this.$ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__int(borderWidth);
 }
 //Factory method corresponding to constructor 'BarBorderWidth(NativeObject)'.
 /** @return {!BarBorderWidth} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  BarBorderWidth.$clinit();
  let $instance = new BarBorderWidth();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderWidth__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'BarBorderWidth(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_BarBorderWidth__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @override @return {List<Key>} */
 m_getKeys___$pp_org_pepstock_charba_client_data() {
  return BarBorderWidth.f_KEYS__org_pepstock_charba_client_data_BarBorderWidth_;
 }
 /** @override */
 m_set__int(/** number */ borderWidth) {
  this.m_setTop__int(borderWidth);
  this.m_setBottom__int(borderWidth);
  this.m_setLeft__int(borderWidth);
  this.m_setRight__int(borderWidth);
 }
 
 m_setLeft__int(/** number */ borderWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Position.f_LEFT__org_pepstock_charba_client_enums_Position, borderWidth);
 }
 /** @return {number} */
 m_getLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_LEFT__org_pepstock_charba_client_enums_Position, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderWidth__());
 }
 
 m_setRight__int(/** number */ borderWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, borderWidth);
 }
 /** @return {number} */
 m_getRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderWidth__());
 }
 
 m_setTop__int(/** number */ borderWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Position.f_TOP__org_pepstock_charba_client_enums_Position, borderWidth);
 }
 /** @return {number} */
 m_getTop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_TOP__org_pepstock_charba_client_enums_Position, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderWidth__());
 }
 
 m_setBottom__int(/** number */ borderWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, borderWidth);
 }
 /** @return {number} */
 m_getBottom__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderWidth__());
 }
 /** @return {BarBorderWidthFactory} */
 static get f_FACTORY__org_pepstock_charba_client_data_BarBorderWidth() {
  return (BarBorderWidth.$clinit(), BarBorderWidth.$static_FACTORY__org_pepstock_charba_client_data_BarBorderWidth);
 }
 
 static $clinit() {
  BarBorderWidth.$clinit = () =>{};
  BarBorderWidth.$loadModules();
  AbstractBarBorderItem.$clinit();
  BarBorderWidth.$static_FACTORY__org_pepstock_charba_client_data_BarBorderWidth = BarBorderWidthFactory.$create__();
  BarBorderWidth.f_KEYS__org_pepstock_charba_client_data_BarBorderWidth_ = /**@type {List<Key>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<Position>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(Position.m_values__()))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarBorderWidth;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  BarBorderWidthFactory = goog.module.get('org.pepstock.charba.client.data.BarBorderWidth.BarBorderWidthFactory$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
 }
}
/**@private {BarBorderWidthFactory}*/
BarBorderWidth.$static_FACTORY__org_pepstock_charba_client_data_BarBorderWidth;
/**@type {List<Key>}*/
BarBorderWidth.f_KEYS__org_pepstock_charba_client_data_BarBorderWidth_;
$Util.$setClassMetadata(BarBorderWidth, "org.pepstock.charba.client.data.BarBorderWidth");

exports = BarBorderWidth;

//# sourceMappingURL=BarBorderWidth.js.map
