goog.module('org.pepstock.charba.client.items.Undefined$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');

class Undefined extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Undefined} */
 static $create__() {
  let $instance = new Undefined();
  $instance.$ctor__org_pepstock_charba_client_items_Undefined__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_Undefined__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static m_is__int(/** number */ value) {
  Undefined.$clinit();
  return !Undefined.m_isNot__int(value);
 }
 /** @return {boolean} */
 static m_is__double(/** number */ value) {
  Undefined.$clinit();
  return !Undefined.m_isNot__double(value);
 }
 /** @return {boolean} */
 static m_isNot__int(/** number */ value) {
  Undefined.$clinit();
  return value != Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {boolean} */
 static m_isNot__double(/** number */ value) {
  Undefined.$clinit();
  return !isNaN(value) && !Double.m_isInfinite__double(value);
 }
 /** @return {?string} */
 static get f_STRING__org_pepstock_charba_client_items_Undefined() {
  return (Undefined.$clinit(), Undefined.$static_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 static get f_BOOLEAN__org_pepstock_charba_client_items_Undefined() {
  return (Undefined.$clinit(), Undefined.$static_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {HTMLImageElement} */
 static get f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined() {
  return (Undefined.$clinit(), Undefined.$static_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  Undefined.$clinit = () =>{};
  Undefined.$loadModules();
  j_l_Object.$clinit();
  Undefined.$static_STRING__org_pepstock_charba_client_items_Undefined = null;
  Undefined.$static_BOOLEAN__org_pepstock_charba_client_items_Undefined = Boolean.m_booleanValue__java_lang_Boolean(Boolean.f_FALSE__java_lang_Boolean);
  Undefined.$static_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Undefined;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
 }
}
/**@const {number}*/
Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined = -2147483648;
/**@const {number}*/
Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined = NaN;
/**@private {?string}*/
Undefined.$static_STRING__org_pepstock_charba_client_items_Undefined;
/**@private {boolean}*/
Undefined.$static_BOOLEAN__org_pepstock_charba_client_items_Undefined = false;
/**@private {HTMLImageElement}*/
Undefined.$static_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
$Util.$setClassMetadata(Undefined, "org.pepstock.charba.client.items.Undefined");

exports = Undefined;

//# sourceMappingURL=Undefined.js.map
