import Wrapper from '@/components/ui/wrapper';
import React from 'react';

const PrivacyPolicy = () => {
  const cookies = [
    {
      name: '_ga, _gat, _gid, _gtag',
      description:
        'Google Analytics analizuje ruch na stronie internetowej, skąd pochodzi',
      operator: 'Google LLC',
      type: 'Stałe - Analityczne',
    },
    {
      name: 'NID',
      description:
        'Google zapamiętuje Twoje preferencje takie jak język, miejsce, wielkość tekstu, liczbę wyników na stronie oraz informację o ew. włączeniu filtru Google Safe Search.',
      operator: 'Google LLC',
      type: 'Sesyjne - Techniczne',
    },
    {
      name: '__hstc, _fbp, _ga, _gcl_au, _gid, ajs_anonymous_id, ajs_group_id, ajs_user_id, hubspotutk, intercom-sessionxxx',
      description:
        'Hotjar pozwala na analizowanie zachowań użytkowników poprzez śledzenie ich aktywności na stronie',
      operator: 'Hotjar Ltd.',
      type: 'Stałe - Analiza zachowania użytkowników',
    },
  ];
  return (
    <div className='flex gap-2 mt-7'>
      <Wrapper style='flex-col  items-start left-1/2 -translate-x-1/2  max-w-[1080px] gap-3 py-10'>
        <h2 className='font-bold text-xl xl:text-3xl text-center w-full py-10'>
          Polityka Prywatności
        </h2>
        <p>
          Podczas przeglądania naszej strony internetowej osk-neocar.pl, rozmowy
          telefonicznej z nami, kontaktu mailowego oraz wypełniając formularz
          kontaktowy, powierzasz nam przetwarzanie swoich danych osobowych.
          Poniżej zawarliśmy informacje na ten temat.
        </p>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            1. Administrator danych osobowych
          </h3>
          <p>
            Administratorem Twoich danych osobowych jest firma: Ośrodek
            Szkolenia Kierowców NEOCAR Klaudia Wyskiel-Szymańska, ul. Strażacka
            25C, 35-312 Rzeszów NIP: 813 389 44 43. W razie pytań i wniosków
            dotyczących Twoich danych, możesz napisać na e-mail:
            oskneocar@gmail.com l lub listownie na adres firmy. Administrator
            zapewnia ochronę powierzanych mu danych, zgodnie z przepisami
            obowiązującego prawa.{' '}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>2. Przetwarzane dane</h3>
          <p>Przetwarzamy następujące dane osobowe:</p>
        </div>
        <ul className='list-disc pl-5'>
          <li>Imię</li>
          <li>Nazwisko</li>
          <li>Adres poczty elektronicznej</li>
          <li>Nr telefonu kontaktowego</li>
        </ul>
        <p>
          Administrator przetwarza również zanonimizowane dane eksploatacyjne
          związane z korzystaniem ze strony do generowania statystyk pomocnych w
          administrowaniu. Dane te mają charakter zbiorczy i anonimowy, tj. nie
          zawierają cech identyfikujących osoby odwiedzające stronę:
        </p>
        <ul className='list-disc pl-5'>
          <li>Adres IP komputera i serwera</li>
          <li>
            Nazwę stacji klienta - identyfikacja realizowana przez protokół HTTP
          </li>
          <li>Nazwa użytkownika podawana w procesie autoryzacji</li>
          <li>Czas nadejścia zapytania</li>
          <li>Pierwszy wiersz żądania HTTP</li>
          <li>Kod odpowiedzi HTTP</li>
          <li>Liczbę wysłanych przez serwer bajtów</li>
          <li>
            Adres URL strony poprzednio odwiedzanej przez użytkownika (referer
            link) - w przypadku, gdy przejście do strony Urzędu nastąpiło przez
            odnośnik
          </li>
          <li>Informacje o przeglądarce użytkownika</li>
          <li>
            Informacje o błędach, jakie nastąpiły przy realizacji transakcji
            HTTP
          </li>
        </ul>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            3. Cele i podstawy prawne przetwarzania danych osobowych
          </h3>
          <p>
            Przekazane przez Ciebie dane osobowe, przetwarzane są w celu
            wykonania umowy lub podjęcia działań przed jej finalizacją (np.
            rezerwacji) oraz celach statystycznych i marketingowych, jak również
            dla zabezpieczenia ewentualnych roszczeń, w tym organów publicznych.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            4. Obowiązek podania danych osobowych
          </h3>
          <p>
            Podanie przez Ciebie danych osobowych jest dobrowolne, jest jednak
            niezbędne do zawarcia umowy.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>5. Czas przetwarzania danych</h3>
          <p>
            Twoje dane osobowe będą przetwarzane i przechowywane przez okres do
            10 lat od dnia realizacji umowy lub do czasu złożenia żądania
            ograniczenia ich przetwarzania, chyba, że przepisy prawa stanowią
            inaczej.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>6. Odbiorcy danych osobowych</h3>
          <p>
            Firmami przetwarzającymi Twoje dane osobowe mogą być Google LLC,
            serwerownia, biuro rachunkowe oraz firmy świadczące usługi:
            transportowe, komputerowe, finansowe i prawne na rzecz
            administratora danych, jak również pozostałym podmiotom, których
            administrator jest właścicielem, jeżeli jest to konieczne do
            realizacji celu.
          </p>
          <p>
            Nasza skrzynka mailowa mieści się na serwerach Google LLC-
            www.gmail.com, przed wysłaniem do nas wiadomości zapoznaj się z ich
            polityką prywatności: https://policies.google.com/privacy?hl=pl
          </p>
          <p>
            W przypadku zlecenia przez Administratora podmiotom zewnętrznym
            świadczenia usług, Ośrodek Szkolenia Kierowców NEOCAR Klaudia
            Wyskiel wymaga zapewnienia zgodności działania tych podmiotów z
            wysokimi standardami ochrony danych osobowych.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            7. Prawa osoby, której dane dotyczą
          </h3>
          <p>Masz prawo do:</p>
          <ul className='list-disc pl-5'>
            <li>żądania dostępu do swoich danych osobowych</li>
            <li>żądania sprostowania swoich danych osobowych</li>
            <li>żądania usunięcia swoich danych osobowych</li>
            <li>żądania ograniczenia przetwarzania danych osobowych</li>
            <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych</li>
            <li>żądania przenoszenia danych osobowych</li>
            <li>wniesienia skargi do organu nadzorczego</li>
            <li>odwołania zgody na przetwarzanie danych osobowych</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>8. Prawo do cofnięcia zgody</h3>
          <p>
            Możesz cofnąć udzieloną zgodę na przetwarzanie swoich danych
            osobowych w dowolnym momencie, jednak nie ma to wpływu na
            przetwarzanie, którego dokonano przed jej cofnięciem.{' '}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3>9. Skarga do organu nadzorczego</h3>
          <p>
            Masz prawo do wniesienia skargi do organu nadzorczego, tj.
            Generalnego Inspektora Ochrony Danych Osobowych.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            10. Przekazywanie danych osobowych do państwa trzeciego lub
            organizacji międzynarodowej
          </h3>
          <p>
            Zbierane przez nas dane statystyczne znajdują się na serwerach
            Google LLC, które mieszczą się na terenie Stanów Zjednoczonych.
            Firma ta przystąpiła do programu Privacy Shield i w ten sposób
            gwarantują odpowiedni poziom ochrony danych osobowych wymagany przez
            przepisy europejskie.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            11. Zmiany w polityce prywatności
          </h3>
          <p>
            Administrator zastrzega sobie prawo zmiany powyższej polityki
            prywatności w każdej chwili, jednocześnie zobowiązując się do
            niezwłocznego opublikowania nowej wersji na stronie
            https://osk-neocar.pl/polityka-prywatnosci/
          </p>
        </div>
        <h2 className='font-bold text-xl xl:text-3xl text-center w-full py-10'>
          Polityka plików cookies
        </h2>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>1. Administrator</h3>
          <p>wykorzystuje mechanizm tzw. cookies (ciasteczka).</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            2. Pliki cookies (tzw. „ciasteczka”)
          </h3>
          <p>
            stanowią dane informatyczne, w szczególności pliki tekstowe, które
            przechowywane są w Twoim urządzeniu i przeznaczone są do korzystania
            ze stron internetowych Administratora. Cookies zazwyczaj zawierają
            nazwę strony internetowej, z której pochodzą, czas przechowywania
            ich na Twoim urządzeniu oraz unikalny numer. Informacje zgromadzone
            na podstawie plików cookies wykorzystywane są w celu właściwej
            optymalizacji działania strony internetowej.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>3. Podmiotem zamieszczającym</h3>
          <p>
            na Twoim urządzeniu plików cookies oraz uzyskującym do nich dostęp
            jest Administrator.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            4. Mechanizm cookies odpowiada za:
          </h3>
          <ul className='list-disc pl-5'>
            <li>
              tworzenie statystyk, które pomagają zrozumieć, w jaki sposób
              korzystasz ze stron internetowych, co umożliwia ulepszanie ich
              struktury i zawartości,
            </li>

            <li>
              dostosowanie zawartości stron internetowych Administratora do
              Twoich preferencji oraz optymalizację korzystania ze stron
              internetowych. W szczególności pliki te pozwalają rozpoznać Twoje
              urządzenie i odpowiednio wyświetlić stronę internetową,
              dostosowując ją do jego indywidualnych potrzeb.
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            5. W ramach korzystania z tej strony internetowej, możemy stosować
            dwa zasadnicze rodzaje plików cookies:
          </h3>
          <p>
            „sesyjne” (session cookies) oraz „stałe” (persistent cookies).
            Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w
            Twoim urządzeniu do czasu wylogowania, opuszczenia strony
            internetowej lub wyłączenia oprogramowania (przeglądarki
            internetowej). „Stałe” pliki cookies przechowywane są w Twoim
            urządzeniu przez czas określony w parametrach plików cookies lub do
            czasu ich usunięcia przez Administratora.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            6. Administrator stosuje następujące rodzaje plików cookies:
          </h3>
          <ul className='list-disc pl-5'>
            <li>
              „Niezbędne” pliki cookies, umożliwiające korzystanie z usług
              udostępnionych przez Administratora np. pliki cookies
              wykorzystywane do usług wymagających uwierzytelniania w ramach
              strony osk-neocar.pl oraz niezbędne do zapewnienia bezpieczeństwa
              (np. wykorzystywane do wykrywania nadużyć w zakresie
              uwierzytelniania).
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>
            7. Szczegółowe informacje o używanych przez nas plikach cookies:
          </h3>

          <ul className='flex flex-col gap-2'>
            {cookies.map((cookie, index) => (
              <li key={index}>
                <strong>Nazwa pliku cookie:</strong> {cookie.name}
                <br />
                <strong>Opis pliku:</strong> {cookie.description}
                <br />
                <strong>Operator:</strong> {cookie.operator}
                <br />
                <strong>Rodzaj i cel:</strong> {cookie.type}
                <br />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>8. W wielu przypadkach</h3>
          <p>
            oprogramowanie służące do przeglądania stron internetowych
            (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików
            cookies w Twoim urządzeniu.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default PrivacyPolicy;
