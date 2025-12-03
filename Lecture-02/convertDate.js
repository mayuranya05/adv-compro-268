const registerDate = new Date('2023-09-17T10:30:00Z');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formattedDate = registerDate.toLocaleDateString('th-TH', options);
console.log(`Formatted Date: ${formattedDate}`);