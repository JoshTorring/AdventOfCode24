# Solution

1. sort rules and manuals into arrays

2. for each manual, check it's validity

3. for each number in a manual:

  1. loop through the rules, add them to an array of rules

  2. for each rule for each number in the array:

    1. check if the second number is in the manual

    2. if not present, remove the rule from the array.

4. for each number in the manual:

  1. for each rule in the matching rules array:

    1. check if the second rule number is first or last.

    2. check each number in the manual after the checked number for the second rule number.

    3. if present, depending on if second rule number is first or last, mark `isManualValid` as false.

5. if loop completes with `isManualValid` true; add manual to `validManuals` array.

6. For each manual in `validManuals`:

  1. find middle number, add to `middleNumbers` array.

  2. sum `middleNumbers` array for answer.
