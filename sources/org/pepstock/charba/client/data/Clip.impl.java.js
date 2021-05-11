goog.module('org.pepstock.charba.client.data.Clip$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Clip extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Clip()'.
 /** @return {!Clip} */
 static $create__() {
  Clip.$clinit();
  let $instance = new Clip();
  $instance.$ctor__org_pepstock_charba_client_data_Clip__();
  return $instance;
 }
 //Initialization from constructor 'Clip()'.
 
 $ctor__org_pepstock_charba_client_data_Clip__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
 }
 //Factory method corresponding to constructor 'Clip(double)'.
 /** @return {!Clip} */
 static $create__double(/** number */ clip) {
  Clip.$clinit();
  let $instance = new Clip();
  $instance.$ctor__org_pepstock_charba_client_data_Clip__double(clip);
  return $instance;
 }
 //Initialization from constructor 'Clip(double)'.
 
 $ctor__org_pepstock_charba_client_data_Clip__double(/** number */ clip) {
  this.$ctor__org_pepstock_charba_client_data_Clip__();
  this.m_set__double(clip);
 }
 //Factory method corresponding to constructor 'Clip(NativeObject)'.
 /** @return {!Clip} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Clip.$clinit();
  let $instance = new Clip();
  $instance.$ctor__org_pepstock_charba_client_data_Clip__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Clip(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_Clip__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_set__double(/** number */ clip) {
  this.m_setTop__double(clip);
  this.m_setBottom__double(clip);
  this.m_setLeft__double(clip);
  this.m_setRight__double(clip);
 }
 
 m_setLeft__double(/** number */ clip) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Position.f_LEFT__org_pepstock_charba_client_enums_Position, clip);
 }
 
 m_setLeft__boolean(/** boolean */ clip) {
  this.m_setInternalValue__org_pepstock_charba_client_enums_Position__boolean_$p_org_pepstock_charba_client_data_Clip(Position.f_LEFT__org_pepstock_charba_client_enums_Position, clip);
 }
 /** @return {number} */
 m_getLeft__() {
  return this.m_getInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_LEFT__org_pepstock_charba_client_enums_Position);
 }
 /** @return {boolean} */
 m_isLeft__() {
  return this.m_isInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_LEFT__org_pepstock_charba_client_enums_Position);
 }
 
 m_setRight__double(/** number */ clip) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, clip);
 }
 
 m_setRight__boolean(/** boolean */ clip) {
  this.m_setInternalValue__org_pepstock_charba_client_enums_Position__boolean_$p_org_pepstock_charba_client_data_Clip(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, clip);
 }
 /** @return {number} */
 m_getRight__() {
  return this.m_getInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_RIGHT__org_pepstock_charba_client_enums_Position);
 }
 /** @return {boolean} */
 m_isRight__() {
  return this.m_isInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_RIGHT__org_pepstock_charba_client_enums_Position);
 }
 
 m_setTop__double(/** number */ clip) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Position.f_TOP__org_pepstock_charba_client_enums_Position, clip);
 }
 
 m_setTop__boolean(/** boolean */ clip) {
  this.m_setInternalValue__org_pepstock_charba_client_enums_Position__boolean_$p_org_pepstock_charba_client_data_Clip(Position.f_TOP__org_pepstock_charba_client_enums_Position, clip);
 }
 /** @return {number} */
 m_getTop__() {
  return this.m_getInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_TOP__org_pepstock_charba_client_enums_Position);
 }
 /** @return {boolean} */
 m_isTop__() {
  return this.m_isInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_TOP__org_pepstock_charba_client_enums_Position);
 }
 
 m_setBottom__double(/** number */ clip) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, clip);
 }
 
 m_setBottom__boolean(/** boolean */ clip) {
  this.m_setInternalValue__org_pepstock_charba_client_enums_Position__boolean_$p_org_pepstock_charba_client_data_Clip(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, clip);
 }
 /** @return {number} */
 m_getBottom__() {
  return this.m_getInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position);
 }
 /** @return {boolean} */
 m_isBottom__() {
  return this.m_isInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position);
 }
 /** @return {boolean} */
 m_isInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(/** Position */ position) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(position, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return true;
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(position, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getInternalValue__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_data_Clip(/** Position */ position) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(position, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(position, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderWidth__() / 2);
 }
 
 m_setInternalValue__org_pepstock_charba_client_enums_Position__boolean_$p_org_pepstock_charba_client_data_Clip(/** Position */ position, /** boolean */ value) {
  if (value) {
   let type = this.m_type__org_pepstock_charba_client_commons_Key(position);
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType, type)) {
    this.m_remove__org_pepstock_charba_client_commons_Key(position);
   }
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(position, false);
  }
 }
 
 static $clinit() {
  Clip.$clinit = () =>{};
  Clip.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Clip;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Clip, "org.pepstock.charba.client.data.Clip");

exports = Clip;

//# sourceMappingURL=Clip.js.map
