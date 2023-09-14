document.addEventListener("DOMContentLoaded", () => {
    const persegi = document.getElementById("persegi");
    const persegiPanjang = document.getElementById("persegiPanjang");
    const output_KP = document.getElementById("output_KP");
    const output_LP = document.getElementById("output_LP");
    const output_KPP = document.getElementById("output_KPP");
    const output_LPP = document.getElementById("output_LPP");

    persegi.style.display='none';
    persegiPanjang.style.display='none';
    output_KP.style.display='none';
    output_KPP.style.display='none';
    output_LP.style.display='none';
    output_LPP.style.display='none';

    
    
    
    
    
    const btn = document.getElementById("link_persegi");
    btn.onclick = function () {
      if (persegi.style.display !== "none") {
        persegi.style.display = "none";
      } else {
        persegi.style.display = "block";
        persegiPanjang.style.display = "none";
      }
    };

    const btnn = document.getElementById("link_persegiPanjang");
    btnn.onclick = function () {
      if (persegiPanjang.style.display !== "none") {
        persegiPanjang.style.display = "none";
      } else {
        persegiPanjang.style.display = "block";
        persegi.style.display = "none";
      }
    };

    const btn_K_Kotak = document.getElementById("hitungKeliling_Kotak");
    btn_K_Kotak.onclick = function () {
        var K_Kotak = document.getElementById("K_Kotak").value;
      if (output_KP.style.display !== "none") {
        output_KP.style.display = "none";
      } else {
        output_KP.style.display = "block";
        var hitung = 4*parseInt(K_Kotak);
        output_KP.innerHTML = "<label>Keliling = 4 x Sisi</label><br><label>Keliling = 4 x "+ K_Kotak +"</label><br><label>Keliling = "+hitung+"</label><br><br>";
      }
    };

    const btn_L_Kotak = document.getElementById("hitungLuas_Kotak");
    btn_L_Kotak.onclick = function () {
        var L_Kotak = document.getElementById("L_Kotak").value;
      if (output_LP.style.display !== "none") {
        output_LP.style.display = "none";
      } else {
        output_LP.style.display = "block";
        var hitung = parseInt(L_Kotak)*parseInt(L_Kotak);
        output_LP.innerHTML = "<label>Luas = Sisi x Sisi</label><br> <label>Luas = "+ L_Kotak +" x "+ L_Kotak +"</label><br> <label>Luas = "+hitung+"</label><br><br>";
      }
    };

    const btn_K_PersegiPanjang = document.getElementById("hitungKeliling_PP");
    btn_K_PersegiPanjang.onclick = function () {
        var K_panjang = document.getElementById("K_panjang").value;
    var K_lebar = document.getElementById("K_lebar").value;
      if (output_KPP.style.display !== "none") {
        output_KPP.style.display = "none";
      } else {
        output_KPP.style.display = "block";
        var hitung = (2*parseInt(K_panjang))+(2*parseInt(K_lebar));
        output_KPP.innerHTML = "<label>Keliling = 2.Panjang x 2.Lebar</label><br><label>Keliling = 2."+ K_panjang +" + 2."+ K_lebar +"</label><br><label>Keliling = "+hitung+"</label><br><br>";
      }
    };

    const btn_L_PersegiPanjang = document.getElementById("hitungLuas_PP");
    btn_L_PersegiPanjang.onclick = function () {
        var L_panjang = document.getElementById("L_panjang").value;
        var L_lebar = document.getElementById("L_lebar").value;
      if (output_LPP.style.display !== "none") {
        output_LPP.style.display = "none";
      } else {
        output_LPP.style.display = "block";
        var hitung = parseInt(L_panjang)*parseInt(L_lebar);
        output_LPP.innerHTML = "<label>Luas = Panjang x Lebar</label><br> <label>Luas = "+ L_panjang +" x "+ L_lebar +"</label><br> <label>Luas = "+hitung+"</label><br><br>";
      }
    };
        
});

//     $('.card') .hide()
// $('a[href^="#"]').on('click', function(event) {
// $('.resume') .hide()
//     var target = $(this).attr('href');

//     $('.resume'+target).toggle();

// });