export type AcfDataType = {
  acf: {
    cena_za_jazdy_dodatkowe_kursantow: number;
    cena_za_kurs_podstawowy: number;
    cena_za_kurs_przyspieszony: number;
    cena_zajazdy_dodatkowe_pozostali: number;
    dwie_godziny_na_placu_egzaminacyjnym: number;
    termin_nastepnego_kursu: string;
  };
};
export type DataState = {
  pageData: AcfDataType[];
  loading: boolean;
};
