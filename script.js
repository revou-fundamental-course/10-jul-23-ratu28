function calculateBMI() {
    var gender = document.getElementById('gender').value; //untuk pilih gender
    var age = parseInt(document.getElementById('age').value); //masukkan umur
    var weight = parseFloat(document.getElementById('weight').value); //masukkan berat badan (kg)
    var height = parseFloat(document.getElementById('height').value); //masukkan tinggi badan (cm)
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result-container').classList.remove('show');
      return;
    } //jika memasukkan angka 0 atau angka negatif, kalkulator BMI tidak akan berfungsi
    
    var bmi = weight / Math.pow(height / 100, 2); //Rumus untuk menghitung BMI
    var category = '';
    
    //logika penentu, berat seseorang (kurang/ideal/berlebih)
    if (gender === 'male') {
      if (bmi < 18.5) { 
        category = 'Kekurangan Berat Badan';
      } else if (bmi < 24.9) {
        category = 'Normal (Ideal)';
      } else if (bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
      } else {
        category = 'Obesitas';
      }
    } else if (gender === 'female') {
      if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
      } else if (bmi < 23.9) {
        category = 'Normal (Ideal)';
      } else if (bmi < 28.9) {
        category = 'Kelebihan Berat Badan';
      } else {
        category = 'Obesitas';
      }
    }
    
    //Hasil dari Penentu berat badan
    var result = bmi.toFixed(2) + ' = ' +category; 
    document.getElementById('result').innerHTML = result;
    document.getElementById('result-container').classList.add('show');
  }
  
  //ketika tombol reset diklik, website kembali seperti semula
  function resetForm() { 
    document.getElementById('gender').value = 'male';
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result-container').classList.remove('show');
  }
  