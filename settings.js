/* SETTINGS v3 — Leon Hursanov */
window.SETTINGS = {
  /* תמונות דרייב (IDs) — ודא "כל מי שיש לו קישור: צופה" */
  DRIVE_IDS: {
    hero: '17e0lF5Us8mlqlWumbuossOROJVtkBYpz',
    afarsmon: '1OOfMGhUyUSHkjom__PYJ_HTu_dELyEGA',
    yafeNof: '16dmB6rM3H99EFgm4R0rTD0xRITPkREyF',
    mosheSharet: '1NoAIRqCqrj5B0U8JnYUfNRLJJK9Pt4qc'
  },

  /* נכסים בעמוד הבית */
  LISTINGS: [
    {
      id: 'afarsmon-25',
      title: 'אשכולי פז – קוטג׳ למכירה',
      address: 'אשכולי פז, אשקלון',
      neighborhood: 'אשכולי פז',
      status: 'למכירה',
      type: 'קוטג׳',
      price: '₪ 2,690,000',
      rooms: '5.5',
      size: '127 מ"ר בנוי • מגרש 200 מ"ר',
      floor: '3 קומות',
      orientation: 'שקט • קרוב לים',
      features: ['גינה','מרפסת','מרפסת שמש','מחסן','דוד שמש','מרוהט','מ״א מרכזי','חניה 1 במגרש','שפע חניה ברחוב','מרתף'],
      image: 'afarsmon',
      gallery: ['afarsmon'],
      link: 'https://www.remax-israel.com/he-il/%D7%93%D7%99%D7%A8%D7%95%D7%AA/%D7%A7%D7%95%D7%98%D7%92/%D7%9E%D7%9B%D7%99%D7%A8%D7%94/%D7%90%D7%A9%D7%A7%D7%9C%D7%95%D7%9F/52021020-14',
      notes: ''
    },
    {
      id: 'yafe-nof',
      title: 'יפה נוף – דירה להשכרה',
      address: 'יפה נוף, אשקלון',
      neighborhood: 'טיילת/מרינה',
      status: 'להשכרה',
      type: 'דירה',
      price: '₪ 6,800 לחודש',
      rooms: '4',
      size: '120 מ"ר',
      floor: 'קומה 13 • 3 מעליות',
      orientation: 'נוף ים מכל חדר • מרפסת פנורמית לים',
      features: ['מרפסת','נוף ים פנורמי','3 מעליות'],
      image: 'yafeNof',
      gallery: ['yafeNof'],
      link: 'https://www.remax-israel.com/he-il/%D7%93%D7%99%D7%A8%D7%95%D7%AA/%D7%93%D7%99%D7%A8%D7%94/%D7%94%D7%A9%D7%9B%D7%A8%D7%94/%D7%90%D7%A9%D7%A7%D7%9C%D7%95%D7%9F/52021020-12',
      notes: ''
    },
    {
      id: 'moshe-sharet-42',
      title: 'ברנע – משה שרת 42',
      address: 'משה שרת 42, אשקלון',
      neighborhood: 'ברנע',
      status: 'למכירה',
      type: 'דירה',
      price: '₪ 1,470,000',
      rooms: '4 (3 ש״ש)',
      size: '101 מ"ר (כ-85 מ״ר מצוין בתיאור) + 2 מרפסות',
      floor: '8 מתוך 9 • בניין 1995',
      orientation: 'צפון/מערב • נוף פתוח',
      features: ['מעלית','חניה פרטית','ממ״ד','מרפסת שמש','נגיש'],
      image: 'mosheSharet',
      gallery: ['mosheSharet'],
      link: 'https://www.remax-israel.com/he-il/%D7%93%D7%99%D7%A8%D7%95%D7%AA/%D7%93%D7%99%D7%A8%D7%94/%D7%9E%D7%9B%D7%99%D7%A8%D7%94/%D7%90%D7%A9%D7%A7%D7%9C%D7%95%D7%9F/%D7%9E%D7%A9%D7%94-%D7%A9%D7%A8%D7%AA-42-%D7%90%D7%A9%D7%A7%D7%9C%D7%95%D7%9F/52021020-10',
      notes: ''
    }
  ],

  /* דפי שכונות (לטמפלט למטה) */
  NEIGHBORHOODS: {
    'ברנע': {
      slug: 'barnea',
      hero: 'hero', /* אפשר לשים ID ייעודי אם תרצה */
      desc: 'קו ראשון לים, דירות מרווחות ופנטהאוזים.',
      priceBands: [
        {type:'3 חד׳',  range:'₪1.35–1.65 מ׳'},
        {type:'4 חד׳',  range:'₪1.55–1.95 מ׳'},
        {type:'5 חד׳+', range:'₪1.9–2.6 מ׳'}
      ],
      streets: ['הציונות','דרך הים','התמר','הדקל','החבצלת','דרך היין','שדרות מלכי ישראל']
    },
    'אפרידר': {
      slug: 'afridar',
      hero: 'hero',
      desc: 'שכונה ותיקה ומבוקשת, קרובה לשירותים קהילתיים.',
      priceBands: [
        {type:'3 חד׳',  range:'₪1.05–1.30 מ׳'},
        {type:'4 חד׳',  range:'₪1.25–1.60 מ׳'},
        {type:'5 חד׳+', range:'₪1.55–2.1 מ׳'}
      ],
      streets: ['משה שרת','יורם ורון','השייטת','הטייסים','הנוקדים','הנרי רונסון']
    },
    'אגמים': {
      slug: 'agamim',
      hero: 'hero',
      desc: 'בנייה חדשה, מודרנית ותשואה משכירות.',
      priceBands: [
        {type:'3 חד׳',  range:'₪1.25–1.55 מ׳'},
        {type:'4 חד׳',  range:'₪1.45–1.85 מ׳'},
        {type:'5 חד׳+', range:'₪1.8–2.4 מ׳'}
      ],
      streets: ['אפרסמון','ארבל','תבור','חרמון','מוריה','הרי אפרים']
    }
  }
};
