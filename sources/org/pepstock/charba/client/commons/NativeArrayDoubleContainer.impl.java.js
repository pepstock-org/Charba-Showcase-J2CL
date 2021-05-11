goog.module('org.pepstock.charba.client.commons.NativeArrayDoubleContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeArrayContainer = goog.require('org.pepstock.charba.client.commons.NativeArrayContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @extends {NativeArrayContainer<Array>}
 */
class NativeArrayDoubleContainer extends NativeArrayContainer {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_commons_NativeArrayDoubleContainer__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ nativeArray) {
  this.$ctor__org_pepstock_charba_client_commons_NativeArrayContainer__org_pepstock_charba_client_commons_Array($Equality.$same(nativeArray, null) ? new Array() : nativeArray);
 }
 
 m_clear__() {
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayDouble(/**@type {Array}*/ ($Casts.$to(this.m_getNativeArray__(), $Overlay)));
 }
 
 m_push__arrayOf_double(/** Array<number> */ items) {
  if (!$Equality.$same(items, null) && items.length > 0) {
   for (let $array = items, $index = 0; $index < $array.length; $index++) {
    let item = $array[$index];
    {
     /**@type {Array}*/ ($Casts.$to(this.m_getNativeArray__(), $Overlay)).push(item);
    }
   }
  }
 }
 
 static $clinit() {
  NativeArrayDoubleContainer.$clinit = () =>{};
  NativeArrayDoubleContainer.$loadModules();
  NativeArrayContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeArrayDoubleContainer;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NativeArrayDoubleContainer, "org.pepstock.charba.client.commons.NativeArrayDoubleContainer");

exports = NativeArrayDoubleContainer;

//# sourceMappingURL=NativeArrayDoubleContainer.js.map
