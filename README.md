# Nodejs Rest API
![nodejs](https://img.shields.io/badge/runtime-nodejs-52b788?style=plastic&logo=node.js&logoColor=white)
![mysql](https://img.shields.io/badge/database-mysql-f77f00?style=plastic&logo=mysql&logoColor=white)
<br>

Membuat rest api menggunakan nodejs, expressjs dan mysql untuk memanage info dan deskripsi singkat anime.

# Testing
Jalankan program ini dengan Postman.<br>

#### GET Method
- ``` /list ``` Menampilkan seluruh list dan deskripsi
- ``` /list?id=(id) ``` Menampilkan list lewat id yang dicari
- ``` /list?title=(nama anime) ``` Menampilkan list melalui nama Animenya
- ``` /list?rating=8.22 ``` Menampilkan list dengan rating 8.22 dan dibawahnya

#### POST Method
- ``` /list?add=list-anime ``` Membuat list
- ``` /list?add=desc-anime ``` Membuat deskripsi singkat

#### PUT Method
- ``` /list?update=list-anime ``` Update list
- ``` /list?update=desc-anime ``` Update deskripsi

#### DELETE Method
- ``` /list?delete=(id) ``` Hapus list dan deskripsi