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
  /**Navbar - Kimdir? - Öğrendiklerim */
  document.querySelector('a[href="#learning"]').addEventListener('click', function(e) {
    e.preventDefault(); // Varsayılan davranışı engelle.
    
    // Öğrendiklerim kısmına kaydırma
    const target = document.querySelector('#learning');
    const offset = 100; // Navbar yüksekliğine göre ayarlayın (örneğin 100px)
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;
    
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
/**Navbar - İletişim */
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
  e.preventDefault(); // Varsayılan davranışı engelle.
  
  // Öğrendiklerim kısmına kaydırma
  const target = document.querySelector('#contact');
  const offset = 80; // Navbar yüksekliğine göre ayarlayın (örneğin 100px)
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition - offset;
  
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
});