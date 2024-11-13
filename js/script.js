document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller
    
    // Toastr bildirimini göster
    toastr.success("Mesajınız gönderildi!");
  });
  
  toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-full-width", // Bildirimi üst kısımda tam genişlikte gösterir
    "timeOut": "3000" // Bildirimin 3 saniye sonra kaybolması
  };