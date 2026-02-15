import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const getVariant = (lng: string) => {
        // Simple check for now, can be improved for locales like 'uz-UZ'
        return i18n.language.startsWith(lng) ? 'outline' : 'ghost';
    };

    return (
        <div className="flex items-center gap-1">
            <Button
                variant={getVariant('uz')}
                size="sm"
                onClick={() => changeLanguage('uz')}
                className="px-2 min-w-[unset] h-8 text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-sm"
            >
                UZ
            </Button>
            <Button
                variant={getVariant('ru')}
                size="sm"
                onClick={() => changeLanguage('ru')}
                className="px-2 min-w-[unset] h-8 text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-sm"
            >
                RU
            </Button>
        </div>
    );
}
