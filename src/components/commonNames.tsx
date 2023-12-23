import React, { useState, ChangeEvent } from "react";

interface CommonNames {
  [language: string]: string[];
}

const fullForms: { [key: string]: string } = {
  eng: "English",
  dan: "Danish",
  deu: "German",
  nor: "Norwegian",
  nob: "Norwegian Bokmål",
  nno: "Norwegian Nynorsk",
  por: "Portuguese",
  cat: "Catalan",
  ita: "Italian",
  fra: "French",
  spa: "Spanish",
  fin: "Finnish",
  swe: "Swedish",
  nld: "Dutch",
  sme: "Northern Sami",
  cym: "Welsh",
  af: "Afrikaans",
  ar: "Arabic",
  hy: "Armenian",
  az: "Azerbaijani",
  ba: "Bashkir",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bg: "Bulgarian",
  ca: "Catalan",
  zh: "Chinese (Simplified)",
  kw: "Cornish",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  et: "Estonian",
  fi: "Finnish",
  fr: "French",
  gl: "Galician",
  ka: "Georgian",
  de: "German",
  el: "Greek",
  he: "Hebrew",
  hu: "Hungarian",
  is: "Icelandic",
  ga: "Irish",
  it: "Italian",
  ky: "Kyrgyz",
  ko: "Korean",
  lv: "Latvian",
  lt: "Lithuanian",
  mk: "Macedonian",
  nv: "Navajo",
  se: "Northern Sami",
  no: "Norwegian",
  nb: "Norwegian Bokmål",
  nn: "Norwegian Nynorsk",
  os: "Ossetian",
  fa: "Persian",
  pl: "Polish",
  pt: "Portuguese",
  ru: "Russian",
  sr: "Serbian",
  sk: "Slovak",
  es: "Spanish",
  sv: "Swedish",
  "zh-tw": "Chinese (Traditional)",
  tt: "Tatar",
  "zh-hant": "Chinese (Traditional)",
  tr: "Turkish",
  uk: "Ukrainian",
  cy: "Welsh",
};

const CommonNamesComponent: React.FC<{ commonNames: CommonNames }> = ({
  commonNames,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("eng");

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select
        id="languageSelect"
        className="outline-none border border-black"
        onChange={(e) => handleChangeLanguage(e)}
      >
        {Object.keys(commonNames).map((lang) => (
          <option key={lang} value={lang}>
            {fullForms[lang] || lang}
          </option>
        ))}
      </select>

      <ul>
        {commonNames[selectedLanguage].map((name: string, index: number) => (
          <li key={index}>{`${index + 1}. ${name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommonNamesComponent;
