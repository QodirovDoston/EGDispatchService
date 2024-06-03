// export async function generateMetadata({ params },parent){
//     const t = await getTranslations();
  
//     const previousImages = (await parent).openGraph?.images || []
  
//     return {
//       title: t('about.text'),
//       keywords: t('keywords'),
//       description: t('about.description'),
//       metadataBase: new URL(`https://egdispatch.services/${params.locale}/partners`),
//       icons: [logo_image.src, logo_icon.src],
//       robots: {
//         index: true,
//         follow: true,
//         "max-image-preview": "large",
//       },
//       alternates: {
//         languages: {
//           uz: 'https://egdispatch.services/partners',
//           en: 'https://egdispatch.services/partners',
//           ru: "https://egdispatch.services/partners",
//         },
//       },
//       openGraph: {
//         images: [logo_image.src, logo_icon.src, ...previousImages],
//         url: `https://egdispatch.services/${params.locale}/partners`,
//         title: t('about.text'),
//         description: t('about.description'),
//         locale: params.locale,
//       }
//     };
//   }
  