const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cekEkspresiAritmatika(ekspresi) {
  const regexAngka = /^[0-9]+$/;
  const regexOperator = /[+\-*/().]/;
  if (!regexAngka.test(ekspresi) && regexOperator.test(ekspresi)) {
    return true;
  } else {
   return false;
  }
}

function main () {
  console.clear();
  rl.question('Cek String (oleh Faturrohman Fairuz Zaki) \nMasukkan operasi aritmatika: ', (input) => {
  if (cekEkspresiAritmatika(input) == true) {
    const hasilHitung = eval(input);
    console.log(`Hasil: ${hasilHitung}`);
  } else {
    console.log('Error: Ekspresi tidak valid atau mengandung spasi.');
  }
  rl.question('Mau menghitung lagi? Y/N ', (lanjut) => {
    if (lanjut == "Y") {
      main();
    } else if (lanjut == "N") {
      rl.close();
    } else {
      console.log('Input tidak valid. Program diakhiri.');
      rl.close();
    }
  });
});
};

main();