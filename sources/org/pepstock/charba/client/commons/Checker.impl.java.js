goog.module('org.pepstock.charba.client.commons.Checker$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Checker extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Checker} */
 static $create__() {
  let $instance = new Checker();
  $instance.$ctor__org_pepstock_charba_client_commons_Checker__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_Checker__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_assertCheck__boolean(/** boolean */ value) {
  Checker.$clinit();
  Checker.m_assertCheck__boolean__java_lang_String(value, Checker.f_ASSERT_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_Checker_);
 }
 
 static m_assertCheck__boolean__java_lang_String(/** boolean */ value, /** ?string */ what) {
  Checker.$clinit();
  if (!value) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String($Equality.$same(what, null) ? Checker.f_ASSERT_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_Checker_ : what));
  }
 }
 /** @return {number} */
 static m_positiveOrZero__int(/** number */ value) {
  Checker.$clinit();
  return Checker.m_positiveOrDefault__int__int(value, 0);
 }
 /** @return {number} */
 static m_positiveOrDefault__int__int(/** number */ value, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isPositive__int(value) ? value : defaultValue;
 }
 /** @return {number} */
 static m_negativeOrZero__int(/** number */ value) {
  Checker.$clinit();
  return Checker.m_isNegative__int(value) ? value : 0;
 }
 /** @return {number} */
 static m_negativeOrDefault__int__int(/** number */ value, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isNegative__int(value) ? value : defaultValue;
 }
 /** @return {number} */
 static m_greaterThanOrZero__int__int(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_greaterThanOrDefault__int__int__int(value, threshold, 0);
 }
 /** @return {number} */
 static m_greaterThanOrThreshold__int__int(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_greaterThanOrDefault__int__int__int(value, threshold, threshold);
 }
 /** @return {number} */
 static m_greaterThanOrDefault__int__int__int(/** number */ value, /** number */ threshold, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isGreaterThan__int__int(value, threshold) ? value : defaultValue;
 }
 /** @return {number} */
 static m_lessThanOrZero__int__int(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_lessThanOrDefault__int__int__int(value, threshold, 0);
 }
 /** @return {number} */
 static m_lessThanOrThreshold__int__int(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_lessThanOrDefault__int__int__int(value, threshold, threshold);
 }
 /** @return {number} */
 static m_lessThanOrDefault__int__int__int(/** number */ value, /** number */ threshold, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isLessThan__int__int(value, threshold) ? value : defaultValue;
 }
 /** @return {number} */
 static m_betweenOrMaximum__int__int__int(/** number */ value, /** number */ minimum, /** number */ maximum) {
  Checker.$clinit();
  return Checker.m_isBetween__int__int__int(value, minimum, maximum) ? value : maximum;
 }
 /** @return {number} */
 static m_betweenOrMinimum__int__int__int(/** number */ value, /** number */ minimum, /** number */ maximum) {
  Checker.$clinit();
  return Checker.m_isBetween__int__int__int(value, minimum, maximum) ? value : minimum;
 }
 /** @return {number} */
 static m_betweenOrDefault__int__int__int__int(/** number */ value, /** number */ minimum, /** number */ maximum, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isBetween__int__int__int(value, minimum, maximum) ? value : defaultValue;
 }
 /** @return {number} */
 static m_positiveOrZero__double(/** number */ value) {
  Checker.$clinit();
  return Checker.m_positiveOrDefault__double__double(value, 0);
 }
 /** @return {number} */
 static m_positiveOrDefault__double__double(/** number */ value, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isPositive__double(value) ? value : defaultValue;
 }
 /** @return {number} */
 static m_negativeOrZero__double(/** number */ value) {
  Checker.$clinit();
  return Checker.m_isNegative__double(value) ? value : 0;
 }
 /** @return {number} */
 static m_negativeOrDefault__double__double(/** number */ value, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isNegative__double(value) ? value : defaultValue;
 }
 /** @return {number} */
 static m_greaterThanOrZero__double__double(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_greaterThanOrDefault__double__double__double(value, threshold, 0);
 }
 /** @return {number} */
 static m_greaterThanOrThreshold__double__double(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_greaterThanOrDefault__double__double__double(value, threshold, threshold);
 }
 /** @return {number} */
 static m_greaterThanOrDefault__double__double__double(/** number */ value, /** number */ threshold, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isGreaterThan__double__double(value, threshold) ? value : defaultValue;
 }
 /** @return {number} */
 static m_lessThanOrZero__double__double(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_lessThanOrDefault__double__double__double(value, threshold, 0);
 }
 /** @return {number} */
 static m_lessThanOrThreshold__double__double(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Checker.m_lessThanOrDefault__double__double__double(value, threshold, threshold);
 }
 /** @return {number} */
 static m_lessThanOrDefault__double__double__double(/** number */ value, /** number */ threshold, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isLessThan__double__double(value, threshold) ? value : defaultValue;
 }
 /** @return {number} */
 static m_betweenOrMaximum__double__double__double(/** number */ value, /** number */ minimum, /** number */ maximum) {
  Checker.$clinit();
  return Checker.m_isBetween__double__double__double(value, minimum, maximum) ? value : maximum;
 }
 /** @return {number} */
 static m_betweenOrMinimum__double__double__double(/** number */ value, /** number */ minimum, /** number */ maximum) {
  Checker.$clinit();
  return Checker.m_isBetween__double__double__double(value, minimum, maximum) ? value : minimum;
 }
 /** @return {number} */
 static m_betweenOrDefault__double__double__double__double(/** number */ value, /** number */ minimum, /** number */ maximum, /** number */ defaultValue) {
  Checker.$clinit();
  return Checker.m_isBetween__double__double__double(value, minimum, maximum) ? value : defaultValue;
 }
 
 static m_checkIfValid__int__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  if (Undefined.m_is__int(value)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_UNDEFINED_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value)]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfValid__int__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfValid__int__java_lang_String(value, what);
  return value;
 }
 /** @return {boolean} */
 static m_isPositive__int(/** number */ value) {
  Checker.$clinit();
  return value >= 0;
 }
 
 static m_checkIfPositive__int__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isPositive__int(value)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_POSITIVE_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value)]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfPositive__int__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfPositive__int__java_lang_String(value, what);
  return value;
 }
 /** @return {boolean} */
 static m_isNegative__int(/** number */ value) {
  Checker.$clinit();
  return value < 0;
 }
 
 static m_checkIfNegative__int__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isNegative__int(value)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_NEGATIVE_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value)]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfNegative__int__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfNegative__int__java_lang_String(value, what);
  return value;
 }
 /** @return {boolean} */
 static m_isNotEqualTo__int__int(/** number */ value, /** number */ target) {
  Checker.$clinit();
  return value != target;
 }
 
 static m_checkIfNotEqualTo__int__int__java_lang_String(/** number */ value, /** number */ target, /** ?string */ what) {
  Checker.$clinit();
  if (Checker.m_isEqualTo__int__int(value, target)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_NOT_EQUALS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value)]);
  }
 }
 /** @return {boolean} */
 static m_isEqualTo__int__int(/** number */ value, /** number */ target) {
  Checker.$clinit();
  return value == target;
 }
 
 static m_checkIfEqualTo__int__int__java_lang_String(/** number */ value, /** number */ target, /** ?string */ what) {
  Checker.$clinit();
  if (Checker.m_isNotEqualTo__int__int(value, target)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_EQUALS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value), Integer.m_valueOf__int(target)]);
  }
 }
 /** @return {boolean} */
 static m_isGreaterThan__int__int(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return value >= threshold;
 }
 
 static m_checkIfGreaterThan__int__int__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isGreaterThan__int__int(value, threshold)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_GREATER_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value), Integer.m_valueOf__int(threshold)]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfGreaterThan__int__int__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfGreaterThan__int__int__java_lang_String(value, threshold, what);
  return value;
 }
 /** @return {boolean} */
 static m_isLessThan__int__int(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return value <= threshold;
 }
 
 static m_checkIfLessThan__int__int__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isLessThan__int__int(value, threshold)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_LESS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value), Integer.m_valueOf__int(threshold)]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfLessThan__int__int__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfLessThan__int__int__java_lang_String(value, threshold, what);
  return value;
 }
 /** @return {boolean} */
 static m_isBetween__int__int__int(/** number */ value, /** number */ minimum, /** number */ maximum) {
  Checker.$clinit();
  return value >= minimum && value <= maximum;
 }
 
 static m_checkIfBetween__int__int__int__java_lang_String(/** number */ value, /** number */ minimum, /** number */ maximum, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isBetween__int__int__int(value, minimum, maximum)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_BETWEEN_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Integer.m_valueOf__int(value), Integer.m_valueOf__int(minimum), Integer.m_valueOf__int(maximum)]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfBetween__int__int__int__java_lang_String(/** number */ value, /** number */ minimum, /** number */ maximum, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfBetween__int__int__int__java_lang_String(value, minimum, maximum, what);
  return value;
 }
 
 static m_checkIfValid__double__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  if (Undefined.m_is__double(value)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_UNDEFINED_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfValid__double__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfValid__double__java_lang_String(value, what);
  return value;
 }
 /** @return {boolean} */
 static m_isPositive__double(/** number */ value) {
  Checker.$clinit();
  return Undefined.m_isNot__double(value) && value >= 0;
 }
 
 static m_checkIfPositive__double__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isPositive__double(value)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_POSITIVE_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfPositive__double__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfPositive__double__java_lang_String(value, what);
  return value;
 }
 /** @return {boolean} */
 static m_isNegative__double(/** number */ value) {
  Checker.$clinit();
  return Undefined.m_isNot__double(value) && value < 0;
 }
 
 static m_checkIfNegative__double__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isNegative__double(value)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_NEGATIVE_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfNegative__double__java_lang_String(/** number */ value, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfNegative__double__java_lang_String(value, what);
  return value;
 }
 /** @return {boolean} */
 static m_isNotEqualTo__double__double(/** number */ value, /** number */ target) {
  Checker.$clinit();
  return Undefined.m_isNot__double(value) && Undefined.m_isNot__double(target) && Double.m_compare__double__double(value, target) != 0;
 }
 
 static m_checkIfNotEqualTo__double__double__java_lang_String(/** number */ value, /** number */ target, /** ?string */ what) {
  Checker.$clinit();
  if (Checker.m_isEqualTo__double__double(value, target)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_NOT_EQUALS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value]);
  }
 }
 /** @return {boolean} */
 static m_isEqualTo__double__double(/** number */ value, /** number */ target) {
  Checker.$clinit();
  return Undefined.m_isNot__double(value) && Undefined.m_isNot__double(target) && Double.m_compare__double__double(value, target) == 0;
 }
 
 static m_checkIfEqualTo__double__double__java_lang_String(/** number */ value, /** number */ target, /** ?string */ what) {
  Checker.$clinit();
  if (Checker.m_isNotEqualTo__double__double(value, target)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_EQUALS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value, target]);
  }
 }
 /** @return {boolean} */
 static m_isGreaterThan__double__double(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Undefined.m_isNot__double(value) && Undefined.m_isNot__double(threshold) && value >= threshold;
 }
 
 static m_checkIfGreaterThan__double__double__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isGreaterThan__double__double(value, threshold)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_GREATER_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value, threshold]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfGreaterThan__double__double__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfGreaterThan__double__double__java_lang_String(value, threshold, what);
  return value;
 }
 /** @return {boolean} */
 static m_isLessThan__double__double(/** number */ value, /** number */ threshold) {
  Checker.$clinit();
  return Undefined.m_isNot__double(value) && Undefined.m_isNot__double(threshold) && value <= threshold;
 }
 
 static m_checkIfLessThan__double__double__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isLessThan__double__double(value, threshold)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_LESS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value, threshold]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfLessThan__double__double__java_lang_String(/** number */ value, /** number */ threshold, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfLessThan__double__double__java_lang_String(value, threshold, what);
  return value;
 }
 /** @return {boolean} */
 static m_isBetween__double__double__double(/** number */ value, /** number */ minimum, /** number */ maximum) {
  Checker.$clinit();
  return Undefined.m_isNot__double(value) && Undefined.m_isNot__double(minimum) && Undefined.m_isNot__double(maximum) && value >= minimum && value <= maximum;
 }
 
 static m_checkIfBetween__double__double__double__java_lang_String(/** number */ value, /** number */ minimum, /** number */ maximum, /** ?string */ what) {
  Checker.$clinit();
  if (!Checker.m_isBetween__double__double__double(value, minimum, maximum)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_BETWEEN_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, value, minimum, maximum]);
  }
 }
 /** @return {number} */
 static m_checkAndGetIfBetween__double__double__double__java_lang_String(/** number */ value, /** number */ minimum, /** number */ maximum, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfBetween__double__double__double__java_lang_String(value, minimum, maximum, what);
  return value;
 }
 
 static m_checkIfValid__java_lang_Object__java_lang_String(/** * */ value, /** ?string */ what) {
  Checker.$clinit();
  if ($Equality.$same(value, null)) {
   Checker.m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(Checker.f_UNDEFINED_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_, [what, Constants.f_NULL_STRING__org_pepstock_charba_client_commons_Constants]);
  }
 }
 /** @template T @return {T} */
 static m_checkAndGetIfValid__java_lang_Object__java_lang_String(/** T */ value, /** ?string */ what) {
  Checker.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(value, what);
  return value;
 }
 
 static m_throwIllegalArgumentException__java_lang_String__arrayOf_java_lang_Object(/** ?string */ template, /** Array<*> */ objects) {
  throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(template, objects)));
 }
 
 static $clinit() {
  Checker.$clinit = () =>{};
  Checker.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Checker;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {?string}*/
Checker.f_ASSERT_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_Checker_ = "The value is not true";
/**@const {?string}*/
Checker.f_UNDEFINED_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is not valid: {1}";
/**@const {?string}*/
Checker.f_POSITIVE_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is not positive: {1}";
/**@const {?string}*/
Checker.f_NEGATIVE_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is not negative: {1}";
/**@const {?string}*/
Checker.f_NOT_EQUALS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is equals to {1}";
/**@const {?string}*/
Checker.f_EQUALS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is not equals to {2} but is {1}";
/**@const {?string}*/
Checker.f_GREATER_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is not greater than {2} but is {1}";
/**@const {?string}*/
Checker.f_LESS_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is not less than {2} but is {1}";
/**@const {?string}*/
Checker.f_BETWEEN_EXCEPTION_MESSAGE_TEMPLATE__org_pepstock_charba_client_commons_Checker_ = "{0} is not between {2} and {3} but is {1}";
$Util.$setClassMetadata(Checker, "org.pepstock.charba.client.commons.Checker");

exports = Checker;

//# sourceMappingURL=Checker.js.map
