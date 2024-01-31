// changed "const" to "let"
let date = 2050;
let status1 = 'student';
let count = 0;
let aprilDate= null
/** added equality operator
 * removed "let" keyword at "count" and added "+=" operator
 */
if (date === 2050) {
  console.log("January", 'New Year’s Day');
  console.log("March", 'Human Rights Day');
  // changed date = 'April'; to let aprilDate = 'April'; for clarity
  aprilDate = 'April';
  console.log(aprilDate, 'Family Day');
  console.log(aprilDate, 'Freedom Day');
  // changed let count = count + 4; to count += 4; for shorthand
  count += 4;

  if (status1 === "student") {
    console.log('June', 'Youth Day');
    // changed let count = count + 1; to count += 1; for shorthand
    count += 1;
  }

  console.log('August', "Women's Day");
  console.log('September', 'Heritage Day');
  // changed date = 'December'; to let decemberDate = 'December'; for clarity
  decemberDate = 'December';
  console.log(decemberDate, 'Day of Reconciliation');
  // changed let count = count + 3; to count += 3; for shorthand
  count += 3;

  if (status1 === "parent") {
    console.log(decemberDate, 'Christmas Day');
    // changed let count = count + 1; to count += 1; for shorthand
    count += 1;
  }

  console.log(decemberDate, 'Day of Goodwill');
  // changed let count = count + 1; to count += 1; for shorthand
  count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
