document.getElementById("nilaiPerolehanTanahForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var namapenjual = document.getElementById("namapenjual").value;
  var namapembeli = document.getElementById("namapembeli").value;
  var alamat = document.getElementById("alamat").value;
  var alamattanah = document.getElementById("alamattanah").value;
  var nonopsppt = document.getElementById("nonopsppt").value;
  var hitungType = document.querySelector(
    'input[name="hitungType"]:checked'
  ).value;

  // Mendefinisikan variabel numerik lainnya
  var njop = parseFloat(document.getElementById("njop").value);
  var persenNjop =
    parseFloat(document.getElementById("persenNjop").value) / 100;
  var luasTanah = parseFloat(document.getElementById("luasTanah").value);
  var luasBangunan = parseFloat(document.getElementById("luasBangunan").value);
  var njopBangunan = parseFloat(document.getElementById("njopBangunan").value);

  // Menghitung NJOP persen
  var njopPersen = njop * persenNjop;

  // Menghitung harga njop
  var hargaJualnjop = njop * luasTanah;

  // Menghitung harga jual
  var hargaJual = njop + njopPersen;

  // Menghitung total harga jual
  var totalHargaJual = hargaJual * luasTanah;

  // Menghitung harga bangunan
  var hargaBangunan = njopBangunan * luasBangunan;

  // Menghitung nilai perolehan tanah
  var nilaiPerolehanTanah = totalHargaJual + hargaBangunan;

  // Mendeklarasikan variabel untuk hasil perhitungan
  var bphtb,
    pph,
    kasDesa,
    biayaNotaris,
    admin,
    rtrw,
    validasi,
    paralegal,
    sppt,
    segelJualBeli,
    nilaiPerkiraanHarga;

  // Menghitung berdasarkan pilihan hitung
  if (hitungType === "hitung-ajb") {
    // Menghitung bphtb
    bphtb =
      nilaiPerolehanTanah >= 80000000
        ? (nilaiPerolehanTanah - 80000000) * 0.05
        : 0;
    // Menghitung pph
    pph = nilaiPerolehanTanah * 0.025;
    // Menghitung kasdesa
    kasDesa = nilaiPerolehanTanah * 0.05;
    // Menghitung biaya notaris
    biayaNotaris = nilaiPerolehanTanah * 0.03;
    // Menghitung biaya admin
    admin = 300000;
    // Menghitung biaya RT/RW
    rtrw = 500000;
    // Menghitung biaya validasi
    validasi = 250000;
    // Menghitung biaya paralegal
    paralegal = 300000;
    // Menghitung biaya SPPT
    sppt = 750000;
    // Menghitung nilai perkiraan harga
    nilaiPerkiraanHarga =
      bphtb +
      pph +
      kasDesa +
      biayaNotaris +
      admin +
      rtrw +
      validasi +
      paralegal +
      sppt;
  } else if (hitungType === "hitung-segel") {
    // Menghitung kasdesa
    kasDesa = nilaiPerolehanTanah * 0.05;
    // Menghitung biaya admin
    admin = 300000;
    // Menghitung biaya RT/RW
    rtrw = 500000;
    // Menghitung biaya validasi
    validasi = 250000;
    // Menghitung biaya paralegal
    paralegal = 300000;
    // Menghitung biaya SPPT
    sppt = 750000;
    // Menghitung segeljualbeli
    segelJualBeli = kasDesa + admin + rtrw + validasi + paralegal + sppt;
  }

  // Menampilkan hasil sesuai pilihan hitung
  var hasilElem = document.getElementById("hasil");
  hasilElem.innerHTML = `
        <br><br><br><h2>Rencana Anggaran Biaya Pembuatan Surat Tanah</h2><br> 
        <p>Nama Penjual: ${namapenjual}</p>
        <p>Nama Pembeli: ${namapembeli}</p>
        <p>Alamat: ${alamat}</p>
        <p>Alamat Tanah: ${alamattanah}</p>
        <p>Nomor NOP SPPT: ${nonopsppt}</p>
        <p>Luas Tanah: ${luasTanah} m^2</p>
        <p>Luas Bangunan: ${luasBangunan} m^2</p>
        <p>Harga Jual NJOP: ${njop.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</p>
        <p>Total Harga Jual NJOP: ${hargaJualnjop.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</p>
        <p>Harga Jual: ${hargaJual.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</p>
        <p>Total Harga Jual: ${totalHargaJual.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</p>
        <p>Harga Bangunan: ${njopBangunan.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</p>
        <p>Total Harga Bangunan: ${hargaBangunan.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</p>
        <p>Nilai Perolehan Tanah: ${nilaiPerolehanTanah.toLocaleString(
          "id-ID",
          { style: "currency", currency: "IDR" }
        )}</p>
        `;

  if (hitungType === "hitung-ajb") {
    hasilElem.innerHTML += `
            <h3>Uraian :</h3>
            <p>BPHTB: ${bphtb.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>PPH: ${pph.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Kas Desa: ${kasDesa.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya Notaris: ${biayaNotaris.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya Admin: ${admin.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya RT/RW: ${rtrw.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya Validasi: ${validasi.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya Paralegal: ${paralegal.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya SPPT: ${sppt.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <h3>Total Harga :</h3>
            <p>Nilai Perkiraan Harga AJB/APHB/Akta Hibah: ${nilaiPerkiraanHarga.toLocaleString(
              "id-ID",
              { style: "currency", currency: "IDR" }
            )}</p>
            `;
  } else if (hitungType === "hitung-segel") {
    hasilElem.innerHTML += `
            <h3>Uraian :</h3>
            <p>Kas Desa: ${kasDesa.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya Admin: ${admin.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya RT/RW: ${rtrw.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya Validasi: ${validasi.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya Paralegal: ${paralegal.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <p>Biaya SPPT: ${sppt.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
            <h3>Total Harga :</h3>
            <p>Nilai Perkiraan Harga Segel Jual Beli: ${segelJualBeli.toLocaleString(
              "id-ID",
              { style: "currency", currency: "IDR" }
            )}</p>
            `;
  }
});