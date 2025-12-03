const fullname = "Mayuranya  Tabsawat  ";

const cleanedName = fullname.trim();
console.log(`Trimmed Name: '${cleanedName}'`);

const nameParts = cleanedName.split(" ");
console.log("Name Parts:", nameParts);

const finalParts = nameParts.filter(Boolean);
console.log("Fiitered Name Parts:", finalParts);

const firstName = finalParts[0];
console.log(`Hello  '${firstName}'`);