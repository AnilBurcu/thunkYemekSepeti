# Redux Thunnk

Reduxt thunk, redux kullanılan projelerde asenkron işlemleri kolaylaştırmak bileşen ieçrisindeki karışılığı azaltmak ve kompleks yapıyı bileşnin dışarısna taşımamıza olanak sağlar.

Redux temel yapısı aksiyonların senkron olması üzerine kuruludur. Yani bir eylem dispatch ile tetiklendiğinde bekleme süresi olmadan reducer'a ulaşmalı.

Aasenkron işlemlerle uğraşmak istediğimizde, redux thunk devreye girer. Thunk, action oluşturan fonksiyonların basit bir nesne döndürmesi yerine fonksiyon döndrümesine izin verir. Bu sayede aksiyon oluşturan bu fonksiyonların içerisinde api istekleri atılabilir.
