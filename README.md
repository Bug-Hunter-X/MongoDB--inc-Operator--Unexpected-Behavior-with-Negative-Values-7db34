# MongoDB $inc Operator Bug

This repository demonstrates an uncommon bug related to the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numeric field, but it can produce errors if used incorrectly.  This specific issue highlights a potential problem when attempting to decrement a numeric field to a value below zero.

## Bug Description
The primary issue lies in how the `$inc` operator handles negative values and non-numeric fields. When using a negative increment with a field that already has a value of zero or if the field is non-numeric, unexpected behavior might occur. This may lead to data integrity issues and unpredictable results.

## Solution
The solution involves adding validation to ensure the field exists and is numeric before applying the `$inc` operator.  We can also add a check to prevent decrementing the field below zero.