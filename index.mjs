import isHex from './lib/isHex.mjs';
import generateTable from './lib/generateTable.mjs';
import _ from 'lodash';

if (!process.argv[2] || !process.argv[3]) {
  console.log("Usage: generate_table.js <a-z start hex> <A-Z start hex>");
  process.exit(0);
}

const hexLowercaseStart = process.argv[2];
const hexUppercaseStart = process.argv[3];
if (!isHex(hexLowercaseStart) || !isHex(hexUppercaseStart)) {
  console.log("hex error");
  process.exit(0);
}

const lowercaseTable = generateTable("a", hexLowercaseStart);
const uppercaseTable = generateTable("A", hexUppercaseStart);

const intersectionResult = _.intersection(lowercaseTable.map(x => x[1]), uppercaseTable.map(x => x[1]));

if (intersectionResult.length) {
  console.log(intersectionResult)
  console.error("The tables overlap!")
}