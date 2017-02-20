<?php
// islem.php

$errors         = array();      // doğrulama hatalarını tutmak için dizi
$data           = array();      // geriye gönderdiğimiz veri için dizi

// değişkenlerimizi kontrol edelim ======================================================
    // Eğer boş bir input alanımız varsa  $errors dizisine mesajımızı ekleyelim

    if (empty($_POST['name']))
        $errors['name'] = 'İsim alanı gereklidir.';

    if (empty($_POST['email']))
        $errors['email'] = 'Email alanı gereklidir.';


// geriye cevap döndürelim ===========================================================

    // eğer errors dizisinde herangi bir hata varsa geriye false döndüreceğiz
    if ( ! empty($errors)) {

        // eğer errors dizisinde mevcut bir eleman varsa aynı şekilde bunu da data dizimize aktarıyoruz
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {

        // eğer errors dizisinde herhangi bir eleman yoksa (boşsa) geriye mesaj döndürelim.

        // Doğrulamamız true döndüğünde , yani işlemlerimizde hata olmadığında gerekli istediğiniz işlemleri yapabilirsiniz.Veritabanına kayıt vb.

        // data dizimize mesajımızı başarılı olarak yazalım ve true döndürelim.
        $data['success'] = true;
        $data['message'] = 'Başarılı!';
    }

    // ve son olarak tüm veriyi JSON formatında geriye döndürelim
    echo json_encode($data);
