goog.module('org.pepstock.charba.client.data.AbstractBarBorderItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let BigDecimal = goog.forwardDeclare('java.math.BigDecimal$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 */
class AbstractBarBorderItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Initialization from constructor 'AbstractBarBorderItem(int)'.
 
 $ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__int(/** number */ size) {
  this.$ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__org_pepstock_charba_client_commons_NativeObject(null);
  this.m_set__int(size);
 }
 //Initialization from constructor 'AbstractBarBorderItem(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @abstract @return {List<Key>} */
 m_getKeys___$pp_org_pepstock_charba_client_data() {}
 /** @abstract */
 m_set__int(/** number */ size) {}
 /** @return {boolean} */
 m_areValuesEquals__() {
  let keys = this.m_getKeys___$pp_org_pepstock_charba_client_data();
  if (!$Equality.$same(keys, null) && !keys.isEmpty()) {
   let preValue = Integer.f_MIN_VALUE__java_lang_Integer;
   for (let $iterator = keys.m_iterator__(); $iterator.m_hasNext__(); ) {
    let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
    {
     let value = this.m_getValue__org_pepstock_charba_client_commons_Key__int(key, 0);
     if (preValue == Integer.f_MIN_VALUE__java_lang_Integer) {
      preValue = value;
     } else if (preValue != value) {
      return false;
     }
    }
   }
  }
  return true;
 }
 /** @return {number} */
 m_average__() {
  let result = 0;
  let keys = this.m_getKeys___$pp_org_pepstock_charba_client_data();
  if (!$Equality.$same(keys, null) && !keys.isEmpty()) {
   let count = keys.size();
   let sum = 0;
   for (let $iterator = keys.m_iterator__(); $iterator.m_hasNext__(); ) {
    let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
    {
     sum = sum + this.m_getValue__org_pepstock_charba_client_commons_Key__int(key, 0) | 0;
    }
   }
   let average = BigDecimal.$create__int($Primitives.$coerceDivision(sum / count));
   result = average.m_intValue__();
  }
  return result;
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_data() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  AbstractBarBorderItem.$clinit = () =>{};
  AbstractBarBorderItem.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractBarBorderItem;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  BigDecimal = goog.module.get('java.math.BigDecimal$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(AbstractBarBorderItem, "org.pepstock.charba.client.data.AbstractBarBorderItem");

exports = AbstractBarBorderItem;

//# sourceMappingURL=AbstractBarBorderItem.js.map
