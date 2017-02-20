// islem.js
$(document).ready(function() {

    // formu işleme
    $('form').submit(function(event) {
        $('.form-group').removeClass('has-error'); 
        $('.help-block').remove();
        // form verilerini alalım 
        // form verilerini almanın birkaç yolu var fakat biz bu yolu kullanacağız
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val()
        };

        // formu gönder
        $.ajax({
            type        : 'POST', // Formumuzu göndereceğimiz isteğin tipi.
            url         : 'islem.php', // Post edeceğimiz URL
            data        : formData, // Verilerimiz
            dataType    : 'json', // Sunucu tarafından gelen cevabın türü (JSON olarak ayarlamıştık)
            encode      : true
        })
            // işlemler tamamlandıktan sonra çalışacak fonksiyon
            .done(function(data) {
                // ve burada hata ve uyarı mesajlarını dilediğimiz gibi işleyebiliriz.
                if ( ! data.success) {
            
                      // isim alanı için hata varsa ---------------
                      if (data.errors.name) {
                          $('#name-group').addClass('has-error'); // has-error classını ekliyoruz (bootstrap)
                          $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // ve hatamız için div ve mesajımızı ekliyoruz
                      }

                      // email alanı için hata varsa ---------------
                      if (data.errors.email) {
                          $('#email-group').addClass('has-error'); 
                          $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>');
                      }

                  } else {

                      // Başarılıysa-----------
                      $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                      // Başarılı mesajımızı gösterdik eğer dilersek bu işlemden sonra yönlendirmek için
                      // window.location = '/panel'; // işlemini kullanabiliriz
                      alert('başarılı'); // şuanlık sadece alert ile başarılı mesajını göstereceğiz

                  }
                
            })
            .fail(function(data) {
              console.log(data);
            });


        // Normal yoldan form gönderme işlemini engellemek için (sayfa yenilenmeden göndermek için) ekliyoruz
        event.preventDefault();
    });

});
