# Nodejs Rest API
Membuat rest api menggunakan nodejs, expressjs dan mysql untuk memanage info dan deskripsi singkat anime.

# Testing
Jalankan program ini dengan Postman.<br>

### Get Method
- ``` /list ``` Untuk Menampilkan seluruh list dan deskripsi
- ``` /list?id=(id) ``` Menampilkan list lewat id yang dicari
- ``` /list?title=(nama anime) ``` Menampilkan list melalui nama Animenya
- ``` /list?rating=8.22 ``` Menampilkan list dengan rating 8.22 dan dibawahnya

### Post Method
- ``` /list?add=list-anime ``` Membuat list
- ``` /list?add=desc-anime ``` Membuat deskripsi singkat

### Put Method
- ``` /list?update=list-anime ``` Update list
- ``` /list?update=desc-anime ``` Update deskripsi
<br>

### Delete Method
- ``` /list?delete=(id) ``` Hapus list dan deskripsi