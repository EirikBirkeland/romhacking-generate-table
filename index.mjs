import isHex from './lib/isHex.mjs';
import generateTable from './lib/generateTable.mjs';
import _ from 'lodash';
import colors from 'colors';

colors.setTheme({
  warn: 'red',
  emphasize: 'bold',
})

const log = console.log;

if (!process.argv[2] || !process.argv[3]) {
  log("Usage: generate_table.js <a-z start hex> <A-Z start hex>".emphasize);
  process.exit(0);
}

const hexLowercaseStart = process.argv[2];
const hexUppercaseStart = process.argv[3];
if (!isHex(hexLowercaseStart) || !isHex(hexUppercaseStart)) {
  log("hex error");
  process.exit(0);
}

const lowercaseTable = generateTable("a", hexLowercaseStart);
const uppercaseTable = generateTable("A", hexUppercaseStart);

const intersectionResult = _.intersection(lowercaseTable.map(x => x[1]), uppercaseTable.map(x => x[1]));

if (intersectionResult.length) {
  console.warn("The tables overlap!".warn);
  process.exit(0);
}

// Pretty-print results
lowercaseTable.forEach((x, i) => {
  log(`${x[0]}\t${x[1]}`);
});
log('');
uppercaseTable.forEach((x, i) => {
  log(`${x[0]}\t${x[1]}`);
});

