import zh from '../locales/zh.yml'
import en from '../locales/en.yml'
import get from 'lodash/get'
import { PandaConfig } from '../config.js'
const { defaultLocale } = PandaConfig

const useLocalePath = (lang: string) => {
    lang ??= defaultLocale
    const start = lang === 'en' ? '/en' : ''
    return (path: string) => {
        let url = start + path
        if (!url.endsWith('/')) url += '/'
        return url
    }
}

const useTranslation = (lang: string) => {
    if (!lang) lang = defaultLocale
    return (key: string) => {
        const data = lang === 'zh' ? [zh, en] : [en, zh]
        const r = get(data[0], key)
        if (!r) {
            console.warn(`Translation for "${key}" not found`)
            return key.split('.').pop()
        }
        return r
    }
}

export const useLocale = (url: URL) => {
    // 根据 URL 路径判断当前语言
    const locale = url.pathname.startsWith('/en') ? 'en' : defaultLocale
    return {
        path: useLocalePath(locale),
        t: useTranslation(locale),
        locale
    }
}
