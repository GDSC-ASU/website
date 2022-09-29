import en from "$lib/strings/en";
import ar from "$lib/strings/ar";
import config from "$lib/config";
import type {ComponentType} from "svelte";

interface Map {
    [keys: string]: string
}

const locales: Map[] = [
    {
        ...en,
        symbol: "en",
        name: "English",
        layoutDir: "ltr"
    },
    {
        ...ar,
        symbol: "ar",
        name: "العربية",
        layoutDir: "rtl"
    }
];

let activeLocale = locales.find(locale => locale.symbol === config.defaultLocale) ?? locales[0];

export const setLocale = (localeSymbol: string) => {
    activeLocale = locales.find(locale => locale.symbol === localeSymbol) as Map;
    if (!activeLocale) {
        activeLocale = locales.find(locale => locale.symbol === config.defaultLocale) as Map;
    }
}

export const translate = (textKey: string): string => {
    let text = activeLocale[textKey]
    if (!text) {
        return "";
    }
    return text;
}

export const getLocales = (): any => {
    return locales.map(locale => {
        return {
            symbol: locale.symbol, name: locale.name
        }
    });
}
