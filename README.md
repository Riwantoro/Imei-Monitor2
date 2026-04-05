# Monitor IMEI Kerobokan

Web app ringan tanpa framework untuk:

- cari IMEI staf
- tambah IMEI baru lewat mode admin
- catat HP sitaan beserta petugas, waktu sita, lokasi, dan penyimpanan
- tandai konflik jika IMEI staf muncul di daftar sitaan aktif
- export/import backup JSON

## Operasional

1. Buka `index.html`.
2. Gunakan pencarian untuk cek IMEI staf.
3. Isi form `Register HP Sitaan` saat ada penyitaan.
4. Klik `Masuk admin` untuk membuka panel admin.

## Admin

- PIN awal: `123456`
- Segera ganti PIN di panel admin
- Data tersimpan di `localStorage` browser perangkat yang dipakai

## Backup

- `Export data` menghasilkan file JSON cadangan
- `Import data` memulihkan data dari file JSON
- Untuk operasional lapangan, lakukan export rutin ke media aman
