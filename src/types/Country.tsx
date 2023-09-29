export interface Country {
  flags: {
    png: string;
  }
  name: {
    common: string;
  }
  population: number;
  region: string;
  capital: string;
  cca3: string;
  altSpellings: string[];
  subregion: string;
  tld: string[]
  currencies: any
  languages: any
  borders: string[]
}