import { useTranslations } from "next-intl";
import lemon from '../../../../public/lemon.jpg'
import Image from "next/image";


export default function RutaceaePage() {
  const t = useTranslations('rutaceae');

  return (
    <div>
      <h1 className="text-4xl uppercase font-bold text-center py-4">{t('title')}</h1>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <article>
            <p>{t('intro')}</p>
            <div>
                <h2 className="text-2xl py-2">{t('subtitle-description')}</h2>
                <ul>
                    <li>{t('description.origin')}</li>
                    <li>{t('description.characteristics')}</li>
                    <li>{t('description.plant')}</li>
                </ul>
            </div>
            <ul>
                <h2 className="text-2xl py-2">{t('subtitle-importance')}</h2>
                <li>{t('importance.nutritional')}</li>
                <li>{t('importance.medicinal')}</li>
                <li>{t('importance.culinary')}</li>
            </ul>
        </article>
        <article className="flex justify-center">
            <Image
                alt="Lemon"
                src={lemon}
                height={500}
                width={500}
                className="object-cover h-[70vh]"
                />
        </article>
      </section>
    </div>
  );
}