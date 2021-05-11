goog.module('org.pepstock.charba.client.colors.CanvasObject.InternalGradient$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');

class InternalGradient extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalGradient} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  InternalGradient.$clinit();
  let $instance = new InternalGradient();
  $instance.$ctor__org_pepstock_charba_client_colors_CanvasObject_InternalGradient__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_CanvasObject_InternalGradient__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {boolean} */
 m_hasId___$pp_org_pepstock_charba_client_colors() {
  return this.m_has__org_pepstock_charba_client_commons_Key(Id.f_CHARBA_ID__org_pepstock_charba_client_commons_Id);
 }
 
 m_setId__java_lang_String_$pp_org_pepstock_charba_client_colors(/** ?string */ id) {
  if (!this.m_hasId___$pp_org_pepstock_charba_client_colors()) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Id.f_CHARBA_ID__org_pepstock_charba_client_commons_Id, id);
  }
 }
 
 static $clinit() {
  InternalGradient.$clinit = () =>{};
  InternalGradient.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalGradient;
 }
 
 static $loadModules() {
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
 }
}
$Util.$setClassMetadata(InternalGradient, "org.pepstock.charba.client.colors.CanvasObject$InternalGradient");

exports = InternalGradient;

//# sourceMappingURL=CanvasObject$InternalGradient.js.map
